document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const content = document.getElementById('content');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('href');

            fetch(page)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    content.innerHTML = data;
                    window.history.pushState({ page: page }, '', page);
                    fadeInContent();
                })
                .catch(error => console.error('There has been a problem with your fetch operation:', error));
        });
    });

    window.onpopstate = function(event) {
        if (event.state) {
            fetch(event.state.page)
                .then(response => response.text())
                .then(data => {
                    content.innerHTML = data;
                    fadeInContent();
                });
        }
    };

    function fadeInContent() {
        content.style.opacity = 0;
        setTimeout(() => {
            content.style.opacity = 1;
        }, 50);
    }

    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Language toggle functionality
    const translations = {
        en: {
            experience: "Experience",
            certifications: "Certifications",
            education: "Education",
            welcome: "Welcome to my interactive portfolio!",
            explore: "Explore my experiences, certifications, and education."
        },
        pt: {
            experience: "Experiências",
            certifications: "Certificações",
            education: "Educação",
            welcome: "Bem-vindo ao meu portfólio interativo!",
            explore: "Explore minhas experiências, certificações e educação."
        }
    };

    window.toggleLanguage = (lang) => {
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            el.textContent = translations[lang][key];
        });
    };

    // Set initial language
    toggleLanguage('pt');
});

function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

let currentSlide = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.timeline-item');
    const totalItems = items.length;
    currentSlide = (currentSlide + direction + totalItems) % totalItems;
    const container = document.querySelector('.timeline-container');
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
}