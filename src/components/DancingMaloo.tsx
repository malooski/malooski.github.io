import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { castArray } from "lodash";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader as Loader } from "three/examples/jsm/loaders/FBXLoader";
import { useAnimationFrame } from "../util/hooks/use_animation_frame";
import { useAsyncMemo } from "../util/hooks/use_async_memo";
import useResize from "../util/hooks/use_resize";
import { isMesh } from "../util/three";
import FixedCenterDiv from "./core/FixedCenter";

const RootDiv = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    backdrop-filter: blur(4px);
    background-color: rgba(0, 0, 0, 0.25);

    z-index: 100;

    canvas {
        margin: 0;
        padding: 0;
    }
`;

export default function DancingMaloo() {
    const mountRef = useRef<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState(false);

    const [size, setRef] = useResize();

    const width = size.width ?? 800;
    const height = size.height ?? 600;

    const state = useAsyncMemo(async () => {
        setLoading(true);
        const r = await loadScene(width, height);
        setLoading(false);
        return r;
    }, []);

    useAnimationFrame(
        deltaMs => {
            if (!state) return false;

            const deltaSec = deltaMs / 1000;

            state.malooModel.rotation.y += 0.01;
            state.mixer.update(deltaSec);
            state.controls.update();
            state.renderer.render(state.scene, state.camera);

            return true;
        },
        [state]
    );

    useEffect(() => {
        if (!state) return;

        const mountRefCurrent = mountRef.current;
        mountRefCurrent?.appendChild(state.renderer.domElement);
        return () => void mountRefCurrent?.removeChild(state.renderer.domElement);
    }, [mountRef, state]);

    useEffect(() => {
        if (!state) return;

        state.camera.aspect = width / height;
        state.camera.updateProjectionMatrix();
        state.renderer.setSize(width, height);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, width, height]);

    return (
        <RootDiv
            ref={r => {
                mountRef.current = r;
                setRef(r);
            }}
        >
            {loading && (
                <FixedCenterDiv>
                    <FontAwesomeIcon spin size="6x" icon={faSpinner} />
                </FixedCenterDiv>
            )}
        </RootDiv>
    );
}

async function loadScene(width: number, height: number) {
    console.log("Loading...");
    const scene = new THREE.Scene();
    const loader = new Loader();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        alpha: true,
    });
    renderer.setSize(width, height);

    const directionalLight = new THREE.AmbientLight(0xffffff, 1);

    camera.position.z = 2;
    camera.position.y = 1;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    scene.add(directionalLight);

    const modelPath = await import("../assets/Dancing Twerk.fbx");
    const malooModel = await loader.loadAsync(modelPath.default);

    malooModel.traverse((child: any) => {
        if (isMesh(child)) {
            castArray(child.material).forEach(m => {
                m.transparent = false;
                m.alphaTest = 0.5;
            });
        }
    });

    const mixer = new THREE.AnimationMixer(malooModel);
    const action = mixer.clipAction(malooModel.animations[0]);
    action.play();

    scene.add(malooModel);

    malooModel.position.y = -1;
    malooModel.scale.setScalar(0.01);

    console.log("Loaded!");

    return {
        scene,
        loader,
        camera,
        renderer,
        controls,
        directionalLight,
        mixer,
        malooModel,
    };
}
