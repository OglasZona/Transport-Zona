// Dugme za povratak na vrh
let scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Funkcija koja pokazuje dugme kada korisnik skroluje dole
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Prikazivanje dugmeta
    } else {
        scrollToTopBtn.style.display = "none"; // Sakrivanje dugmeta
    }
};

// Funkcija za vraćanje na vrh stranice
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Glađi prelaz pri skrolovanju na vrh
});
