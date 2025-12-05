const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const p = card.querySelector('p');          
    const defaultHTML = p.innerHTML;            
    const hoverText = card.dataset.hover;       

    card.addEventListener('mouseenter', () => {
        p.style.opacity = 0;
        setTimeout(() => {
            const formatted = hoverText.split(",").join("<br>");
            p.innerHTML = formatted;
            p.style.opacity = 1;
        }, 150);
    });

    card.addEventListener('mouseleave', () => {
        p.style.opacity = 0;
        setTimeout(() => {
            p.innerHTML = defaultHTML;
            p.style.opacity = 1;
        }, 150);
    });
});
