// Navigacija za mobilne uređaje
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Scroll to top dugme
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.classList.add('scroll-to-top');
scrollToTopBtn.innerHTML = '↑';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Sekcija animacija (parallax efekat na sekcije kad se skroluje)
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;

  sections.forEach(section => {
    if (section.offsetTop < scrollPosition - 200) {
      section.classList.add('visible');
    }
  });
});

// Aktivacija animacija kada sekcija dođe u ekran
document.addEventListener('DOMContentLoaded', () => {
  sections.forEach(section => {
    section.classList.add('hidden');
  });
});

// Mapa - Dodaj mapu sa SVG slikom
const mapSection = document.getElementById('map-section');

if (mapSection) {
  const mapImage = document.createElement('img');
  mapImage.src = 'mapa.svg';
  mapImage.alt = 'Mapa Transport Zona';
  mapSection.appendChild(mapImage);
}

// Pomoćna funkcija za skrolovanje do sekcije
function scrollToSection(id) {
  const targetSection = document.getElementById(id);
  window.scrollTo({
    top: targetSection.offsetTop - 50,
    behavior: 'smooth'
  });
}
