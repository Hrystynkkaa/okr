document.addEventListener('DOMContentLoaded', () => {
    const musicItems = document.querySelectorAll('.music-item');
    let draggedItem = null;

    musicItems.forEach(item => {
        item.addEventListener('mouseover', (event) => {
            event.target.classList.add('highlight');
        });

        item.addEventListener('mouseout', (event) => {
            event.target.classList.remove('highlight');
        });

        item.addEventListener('mousedown', (event) => {
            draggedItem = event.target;
            event.target.style.opacity = 0.5;
        });

        document.addEventListener('mousemove', (event) => {
            if (draggedItem) {
                draggedItem.style.position = 'absolute';
                draggedItem.style.left = event.pageX - 60 + 'px';
                draggedItem.style.top = event.pageY - 60 + 'px';
            }
        });

        document.addEventListener('mouseup', (event) => {
            if (draggedItem) {
                draggedItem.style.opacity = 1;
                draggedItem.style.position = 'static';
                draggedItem = null;
            }
        });
    });

    const dropZone = document.getElementById('drop-zone');

    dropZone.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropZone.classList.add('highlight');
        event.dataTransfer.dropEffect = 'move';
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('highlight');
    });

    dropZone.addEventListener('drop', (event) => {
        event.preventDefault();
        dropZone.classList.remove('highlight');
        if (draggedItem) {
            dropZone.appendChild(draggedItem);
            draggedItem.style.opacity = 1;
            draggedItem.style.position = 'static';
            draggedItem = null;
        }
    });
});
