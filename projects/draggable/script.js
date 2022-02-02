const draggable = document.querySelector('.draggable');

let isDragging = false;
let startMousePos = {x: 0, y:0};
let startDraggablePos = {x: 0, y:0};

draggable.querySelector('header').addEventListener('mousedown', (e) =>{
    startMousePos.x = e.clientX || e.pageX;
    startMousePos.y = e.clientY || e.pageY;

    startDraggablePos.x = draggable.offsetLeft
    startDraggablePos.y = draggable.offsetTop

    isDragging = true
})

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const x = e.clientX || e.pageX;
        const y = e.clientY || e.pageY;

        const dx = x - startMousePos.x;
        const dy = y - startMousePos.y;

        draggable.style.left = `${startDraggablePos.x + dx}px`
        draggable.style.top = `${startDraggablePos.y + dy}px`
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
})



