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
    
    let material = new THREE.MeshBasicMaterial({
        vertexColors : true
    });
    const positionAttribute = geometry.getAttribute('position');
    const colors = [];
    const colorHexCodes = ['#009b48', '#ffffff', '#b71234', '#ffd500', '#0046ad', '#ff5800']
    const color = new THREE.Color();
    let colorCount = 0;
    for (let i = 0; i < positionAttribute.count; i += 4) {
        color.setStyle(colorHexCodes[colorCount]);
    
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
    
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        colors.push(color.r, color.g, color.b);
        colorCount += 1;
    } // for
  
    // define the new attribute
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

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

