const typed = new Typed('.multi-text', {
  strings: [
    "Java Web Developer",
    "DevSecOps Practitioner",
    "AI/ML Integrator",
    "Blockchain Integrator"
  ],
  loop: true,
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 1000,
});

VanillaTilt.init(document.querySelectorAll(".card-item"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,
});

ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.topline', { delay: 4500 });
ScrollReveal().reveal('.whoami', { delay: 4700 });
ScrollReveal().reveal('.desc', { delay: 6000 });

ScrollReveal().reveal('.service', { delay: 500 , reset: true});
ScrollReveal().reveal('.contact', { delay: 500 , reset: true});