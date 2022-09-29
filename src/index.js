import './style/style.css';
import _ from 'lodash';
import * as THREE from 'three';

const scene = new THREE.Scene();
const canvas = document.querySelector('#main-canvas');

let boxWidth = 1;
let boxHeight = 1;
let boxDepth = 1;
let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

let material = new THREE.MeshBasicMaterial({color: 0x44aa88});
let cube = new THREE.Mesh(geometry, material);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

const fov = 75;
const aspect = 2;
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

scene.add(cube);

function render(time){
    time *= 0.001;
    let canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    cube.rotation.x = time;
    cube.rotation.y = time;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
requestAnimationFrame(render);
