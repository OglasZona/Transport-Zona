// Provera kada korisnik skroluje do sekcija
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const sectionHeight = section.offsetHeight;

        if (sectionTop <= window.innerHeight * 0.8 && sectionBottom >= 0) {
            section.classList.add('fade-in');
        } else {
            section.classList.remove('fade-in');
        }
    });
});
