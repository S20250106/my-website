document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        const imgSrc = img.src;
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<div class="modal-content">
                              <img src="${imgSrc}" alt="放大图">
                              <span class="close-btn">&times;</span>
                          </div>`;
        document.body.appendChild(modal);

        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });
    });
});
