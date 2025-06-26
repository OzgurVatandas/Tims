import React, { useEffect } from 'react';

const BackgroundEffect = () => {
    useEffect(() => {
        const spacing = 80;
        const cols = Math.floor(window.innerWidth / spacing);
        const rows = Math.floor(window.innerHeight / spacing);

        const container = document.createElement('div');
        container.className = 'background-dots';

        for (let y = 0; y <= rows; y++) {
            for (let x = 0; x <= cols; x++) {
                const dot = document.createElement('span');
                dot.className = 'dot';
                dot.style.top = `${y * spacing}px`;
                dot.style.left = `${x * spacing}px`;
                dot.style.animationDelay = `${Math.random() * 1.5}s`;
                container.appendChild(dot);
            }
        }

        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        };
    }, []);

    return null;
};

export default BackgroundEffect;
