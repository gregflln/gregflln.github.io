/*
const width = window.innerWidth;
const height = window.innerHeight;
setInterval(() => {
    if (width < 700) {
        pointer();
    }
})

const pointer = () => {
        const current = document.elementFromPoint(width / 2, height / 2);
        if (current) current.classList.add('hover_js');
        const els = document.querySelectorAll('.hover_js');
        els.forEach(el => {
            if (el !== current) el.classList.remove('hover_js')
        });
}
*/