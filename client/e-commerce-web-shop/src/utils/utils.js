import confetti from 'canvas-confetti'

export const runFireWorks = () => {
    let colors = ['#ffffff', '#4a4a4a'];
    let end = Date.now() + (5 * 1000);
    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}