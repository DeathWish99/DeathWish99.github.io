import './style/style.css';
import _ from 'lodash';
import * as THREE from 'three';

const SCENE = new THREE.Scene();
const CANVAS = document.querySelector('.webgl');

console.log(CANVAS);
console.log("test")

let boxWidth = 1;
let boxHeight = 1;
let boxDepth = 1;
let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

let material = new THREE.MeshBasicMaterial({color: 0x44aa88});
let cube = new THREE.Mesh(geometry, material);

console.log(cube);
const sizes = {
    width: 800,
    height: 600
}

const renderer = new THREE.WebGLRenderer({
    canvas: CANVAS
})
renderer.setSize(sizes.width, sizes.height)

const fov = 75;
const aspect = 2;
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
// SCENE.add(camera);

SCENE.add(cube);
renderer.render(SCENE, camera);
console.log(renderer);

