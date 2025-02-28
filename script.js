// Toggle Hamburger Menu
function toggleMenu() {
    document.querySelector("nav").classList.toggle("show");
  }
  
  // Set Dynamic Year in Footer
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    const options = {
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, options);
  
    sections.forEach((section) => {
      section.style.opacity = 0;
      section.style.transform = "translateY(20px)";
      observer.observe(section);
    });
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const aboutImage = document.querySelector(".about img");
  
    const options = {
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          
          // Fire effect only for About Image
          if (entry.target.classList.contains("about")) {
            aboutImage.style.opacity = 1;
            aboutImage.style.transform = "scale(1)";
            aboutImage.style.animation = "fireGlow 1.5s infinite alternate";
          }
        }
      });
    }, options);
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  