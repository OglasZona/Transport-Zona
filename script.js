// 1. Sticky Header sa promenom boje prilikom skrolovanja
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
};

// 2. Animacija za otvaranje/zaključavanje navigacije na mobilnim uređajima
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// 3. Lazy Loading Slika
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
});

// 4. Interaktivna Mapa sa markerima
function initMap() {
    const mapOptions = {
        center: { lat: 44.8176, lng: 20.4633 },  // Koordinate Beograda
        zoom: 12,
        disableDefaultUI: true,
        zoomControl: true,
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    const marker = new google.maps.Marker({
        position: { lat: 44.8176, lng: 20.4633 },
        map: map,
        title: 'Beograd',
    });

    const infoWindow = new google.maps.InfoWindow({
        content: `<h3>Beograd</h3><p>Glavni grad Srbije</p>`
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}

// 5. Validacija Kontakt Forme
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Sva polja su obavezna!');
        return;
    }

    if (!validateEmail(email.value)) {
        alert('Molimo Vas unesite validan email!');
        return;
    }

    alert('Forma je uspešno poslata!');
    form.reset();
});

// Funkcija za validaciju email-a
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// 6. Animacija za Prikazivanje Sekcija prilikom skrolovanja
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
