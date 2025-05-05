// Intersection Observer za animaciju kartica i funkcija "scroll to top"
document.addEventListener('DOMContentLoaded', function() {
    // Animacija kartica sekcije Usluge
    const cards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(card => observer.observe(card));

    // Dugme za vraćanje na vrh
    const toTopBtn = document.getElementById('toTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    });
    toTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
