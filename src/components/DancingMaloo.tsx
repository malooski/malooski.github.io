import { castArray } from "lodash";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader as Loader } from "three/examples/jsm/loaders/FBXLoader";
import MalooskiModel from "../assets/Dancing Twerk.fbx";
import { useAnimationFrame, useOnce, useOnceAsync } from "../util/react";
import { wrapSizeMe } from "../util/sizeme";
import { isMesh } from "../util/three";

const RootDiv = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    z-index: 100;

    canvas {
        margin: 0;
        padding: 0;
    }
`;

export default wrapSizeMe(
    {
        monitorHeight: true,
        monitorWidth: true,
        refreshRate: 16,
    },
    props => {
        const width = props.size.width ?? 800;
        const height = props.size.height ?? 600;

        const mountRef = useRef<HTMLDivElement | null>(null);

        const stateRef = useOnce(() => {
            const scene = new THREE.Scene();
            const loader = new Loader();
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

            const renderer = new THREE.WebGLRenderer({
                alpha: true,
            });
            renderer.setSize(props.size.width ?? 800, height);

            const controls = new OrbitControls(camera, renderer.domElement);
            const directionalLight = new THREE.AmbientLight(0xffffff, 1);

            controls.update();
            camera.position.z = 2;
            camera.position.y = 2;

            scene.add(directionalLight);

            return {
                scene,
                loader,
                camera,
                renderer,
                controls,
                directionalLight,
            };
        });

        const malooStateRef = useOnceAsync(async () => {
            const state = stateRef.current;
            const obj = await state.loader.loadAsync(MalooskiModel);

            obj.traverse((child: any) => {
                if (isMesh(child)) {
                    castArray(child.material).forEach(m => {
                        m.transparent = false;
                        m.alphaTest = 0.5;
                    });
                }
            });

            const mixer = new THREE.AnimationMixer(obj);
            const action = mixer.clipAction(obj.animations[0]);
            action.play();
            state.scene.add(obj);

            obj.scale.setScalar(0.01);

            return {
                mixer,
                obj,
            };
        });

        useAnimationFrame(deltaMs => {
            const deltaSec = deltaMs / 1000;
            const state = stateRef.current;
            const malooState = malooStateRef.current;

            if (malooState) {
                malooState.obj.rotation.y += 0.01;
                malooState.mixer.update(deltaSec);
            }
            state.controls.update();

            state.renderer.render(state.scene, state.camera);
        });

        useEffect(() => {
            const state = stateRef.current;

            const mountRefCurrent = mountRef.current;
            mountRefCurrent?.appendChild(state.renderer.domElement);
            return () => void mountRefCurrent?.removeChild(state.renderer.domElement);
        }, [stateRef]);

        useEffect(() => {
            const state = stateRef.current;

            state.camera.aspect = width / height;
            state.camera.updateProjectionMatrix();
            state.renderer.setSize(width, height);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [width, height]);

        return <RootDiv ref={mountRef}></RootDiv>;
    }
);
