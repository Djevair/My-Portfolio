const projects = document.querySelectorAll('.projectSection');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;

function showProject(index) {
    projects.forEach((proj, i) => {
        proj.classList.remove('active');
        if (i === index) proj.classList.add('active');
    });
}
showProject(current);

function nextProject() {
    current = (current + 1) % projects.length;
    showProject(current);
}
function prevProject() {
    current = (current - 1 + projects.length) % projects.length;
    showProject(current);
}
nextBtn.addEventListener('click', () => {
    nextProject();
    resetAutoSlide(); 
});

prevBtn.addEventListener('click', () => {
    prevProject();
    resetAutoSlide(); 
});

let autoSlide = setInterval(nextProject, 8000);
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextProject, 8000);
}

//FADE IN ANIMATIONS
const sections = document.querySelectorAll('.fadeIn');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100; 
    if (sectionTop < triggerPoint) {
      section.classList.add('visible');
    }
  });
});

//FILL
const skillFills = document.querySelectorAll('.skill-fill');

window.addEventListener('scroll', () => {
  skillFills.forEach(fill => {
    const top = fill.getBoundingClientRect().top;
    if(top < window.innerHeight - 50) {
      fill.style.width = fill.dataset.width; // still sets the width
    }
  });
});

