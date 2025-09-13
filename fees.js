const qrBtn = document.getElementById('qr');
const lightbox = document.getElementById('qr-image');
const closeBtn = lightbox.querySelector('.close');

qrBtn.addEventListener('click', () => {
    lightbox.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
});


lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('show');
    }
});