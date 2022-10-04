let mouseDown = false, mouseX = 0, mouseY = 0;
let _cube;

export function addMouseHandler(canvas, cube){
    canvas.addEventListener('mousemove', function (e) {
        onMouseMove(e);
    }, false);
    canvas.addEventListener('mousedown', function (e) {
        onMouseDown(e);
    }, false);
    canvas.addEventListener('mouseup', function (e) {
        onMouseUp(e);
    }, false);
    _cube = cube;
}

function onMouseMove(evt) {
    if (!mouseDown){
        return;
    }

    evt.preventDefault();

    var deltaX = evt.clientX - mouseX,
        deltaY = evt.clientY - mouseY;
    mouseX = evt.clientX;
    mouseY = evt.clientY;
    rotateScene(deltaX, deltaY);
}


function onMouseDown(evt) {
    evt.preventDefault();

    mouseDown = true;
    mouseX = evt.clientX;
    mouseY = evt.clientY;
}

function onMouseUp(evt) {
    evt.preventDefault();

    mouseDown = false;
}


function rotateScene(deltaX, deltaY){
    _cube.rotation.y += deltaX / 100;
    _cube.rotation.x += deltaY / 100;
}

