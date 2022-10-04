import { addMouseHandler } from './3d/mouseDrag'; './3d/mouseDrag.js';
import './style/style.css';
import _ from 'lodash';
import * as THREE from 'three';

function main(){

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
    addMouseHandler(canvas, cube);

    function resizeRendererToDisplaySize(renderer){
        let canvas = renderer.domElement;
        let width = canvas.clientWidth;
        let height = canvas.clientHeight;
        let needResize = canvas.width !== width || canvas.height !== height;
        if(needResize){
            renderer.setSize(width, height, false);
        }

        return needResize;
    }
    
    function render(){
        if(resizeRendererToDisplaySize(renderer)){
            let canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
    
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

main();

