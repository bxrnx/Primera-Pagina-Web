document.addEventListener('DOMContentLoaded', () => {
    // Animación fade-in para el encabezado
    const header = document.getElementById('logo'); // Usamos el ID del elemento
    if (header) {
        header.parentElement.classList.add('fade-in');
    }

    // Animación slide-in para las cajas de proyectos
    const boxes = document.getElementsByClassName('box');
    if (boxes.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        Array.from(boxes).forEach(box => observer.observe(box));
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad para mostrar cita motivacional
    const quotes = [
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "No es lo que te sucede, sino cómo reaccionas lo que importa.",
        "La disciplina es el puente entre metas y logros.",
        "El único límite a nuestros logros de mañana es nuestra duda de hoy.",
        "Actitud es una pequeña cosa que hace una gran diferencia."
    ];

    const showQuoteButton = document.getElementById('showQuoteButton');
    const quoteContainer = document.getElementById('quoteContainer');

    if (showQuoteButton && quoteContainer) {
        showQuoteButton.addEventListener('click', () => {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            quoteContainer.textContent = randomQuote;
            quoteContainer.style.display = 'block';
            quoteContainer.style.color = 'grey';
        });
    }

    // Resto del código de animaciones...

    // Animación fade-in para el encabezado
    const header = document.getElementById('logo'); // Usamos el ID del elemento
    if (header) {
        header.parentElement.classList.add('fade-in');
    }

    // Animación slide-in para las cajas de proyectos
    const boxes = document.getElementsByClassName('box');
    if (boxes.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in-in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        Array.from(boxes).forEach(box => observer.observe(box));
    }
});