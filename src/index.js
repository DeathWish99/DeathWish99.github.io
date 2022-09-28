import * as THREE from 'three';

const SCENE = new THREE.Scene();
const CANVAS = document.querySelector('#canvas');
const RENDERER = new THREE.WebGLRenderer({CANVAS});

const FOV = 75;
const ASPECT = 2;
const NEAR = 0.1;
const FAR = 5;
const CAMERA = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);

CAMERA.position.z = 2;

let boxWidth = 1;
let boxHeight = 1;
let boxDepth = 1;
let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

let material = new THREE.MeshBasicMaterial({color: 0x44aa88});
let cube = new THREE.Mesh(geometry, material);

SCENE.add(cube);
RENDERER.render(SCENE, CAMERA);

