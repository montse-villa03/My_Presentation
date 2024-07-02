document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    let currentSection = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = i === index ? 'block' : 'none';
        });
    }

    showSection(currentSection);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            currentSection = (currentSection + 1) % sections.length;
        } else if (event.key === 'ArrowLeft') {
            currentSection = (currentSection - 1 + sections.length) % sections.length;
        }
        showSection(currentSection);
    });
});
