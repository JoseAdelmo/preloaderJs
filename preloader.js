const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const gifImage = document.createElement('img');
gifImage.id = 'gifImage';
gifImage.src = 'https://joseadelmo.github.io/preloaderJs/iSOW_web_preload.gif';
gifImage.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

overlay.appendChild(gifImage);
document.body.appendChild(overlay);

function hideOverlay() {
    overlay.style.display = 'none';
    gifImage.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(hideOverlay, 100);

window.addEventListener('load', hideOverlay);
