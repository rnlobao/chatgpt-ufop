function showLoading() {
    const dotPulseContainer = document.createElement('div');
    dotPulseContainer.className = 'dot-pulse-container';
    dotPulseContainer.style.display = 'flex';

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dotPulseContainer.appendChild(dot);
    }
    return dotPulseContainer
}
