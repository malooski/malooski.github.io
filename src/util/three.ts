/**
 * Utilities for Three.js
 */

import * as THREE from "three";

export function isMaterial(object: any): object is THREE.Material {
    return object.isMaterial || object instanceof THREE.Material;
}

export function isMesh(object: any): object is THREE.Mesh {
    return object.isMesh || object instanceof THREE.Mesh;
}
