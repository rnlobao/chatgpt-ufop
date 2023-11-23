function showLoading() {

    loadingContainer = document.createElement('div');
    loadingContainer.className = 'loading-container';

    const dotPulseContainer = document.createElement('div');
    dotPulseContainer.className = 'dot-pulse-container';

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dotPulseContainer.appendChild(dot);
    }

    loadingContainer.appendChild(dotPulseContainer);
    return loadingContainer
}

function hideLoading() {
    const loadingContainer = document.querySelector('.loading-container');
    if (loadingContainer) {
        loadingContainer.style.display = 'none';
    }
}
