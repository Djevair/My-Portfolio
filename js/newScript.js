const collapsibles = document.querySelectorAll(".collapsible button");

collapsibles.forEach(btn => {
    btn.addEventListener("click", function () {
        const content = this.nextElementSibling;

        // Toggle max-height
        if (content.style.maxHeight) {
            // Collapse
            content.style.maxHeight = null;
            content.style.paddingTop = "0";
            content.style.paddingBottom = "0";
        } else {
            // Expand
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.paddingTop = "15px";
            content.style.paddingBottom = "15px";
        }

        // Optional: toggle active button style
        this.classList.toggle("active");
    });
});


//SLIDESHOW
const structureSlides = document.querySelectorAll('.structureAndFeatures .projectSection');
const prevBtnStructure = document.querySelector('.structureAndFeatures .prev');
const nextBtnStructure = document.querySelector('.structureAndFeatures .next');
let currentSlide = 0;

function showSlide(index) {
    structureSlides.forEach((slide, i) => slide.classList.remove('active'));
    structureSlides[index].classList.add('active');
}
showSlide(currentSlide);

nextBtnStructure.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % structureSlides.length;
    showSlide(currentSlide);
    resetAutoSlide();
});
prevBtnStructure.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + structureSlides.length) % structureSlides.length;
    showSlide(currentSlide);
    resetAutoSlide();
});

let autoSlide = setInterval(() => {
    currentSlide = (currentSlide + 1) % structureSlides.length;
    showSlide(currentSlide);
}, 8000);

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        currentSlide = (currentSlide + 1) % structureSlides.length;
        showSlide(currentSlide);
    }, 8000);
}


