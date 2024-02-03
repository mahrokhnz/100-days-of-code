const ball = document.querySelector('.ball')

let currentDroppable = null;

ball.onmousedown = function(event) {
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ball.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
                leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                enterDroppable(currentDroppable);
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove);

    ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    };

};

function enterDroppable(elem) {
    elem.style.background = 'gold';
}

function leaveDroppable(elem) {
    elem.style.background = '';
}

ball.ondragstart = function() {
    return false;
};