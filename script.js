// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(`
        .problem-card,
        .peak-card,
        .benefit-card,
        .testimonial-card,
        .question-card,
        .transformation-card,
        .package-item,
        .bonus-card,
        .change-card,
        .faq-item
    `);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// FLOATING ANIMATION FOR ICONS
// ============================================
function addFloatingAnimation() {
    const icons = document.querySelectorAll('.peak-icon, .bonus-icon, .package-icon');

    icons.forEach((icon, index) => {
        icon.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
    });
}

// Add floating keyframe animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', addFloatingAnimation);

// ============================================
// CLICK TRACKING FOR CTA BUTTONS
// ============================================
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function () {
        console.log('CTA clicked:', this.textContent);

        // Optional: Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// ============================================
// CONSOLE EASTER EGG (Spanish)
// ============================================
console.log('%c🔥 ¡Bienvenido al Arsenal del Instinto de Persecución! 🔥',
    'font-size: 20px; font-weight: bold; color: #FF3366;');
console.log('%cSi estás viendo esto, eres uno de los curiosos... ¡Eso es bueno! 😎',
    'font-size: 14px; color: #6C5CE7;');

// ============================================
// RECENT PURCHASES ANIMATION (Spanish Latin America)
// ============================================
function initRecentPurchases() {
    const lists = document.querySelectorAll('.purchase-list');
    if (lists.length === 0) return;

    const names = ['Carlos M.', 'Miguel R.', 'Juan P.', 'Alejandro S.', 'Diego F.', 'Javier L.', 'Ricardo A.', 'Fernando T.', 'Andrés G.', 'Mateo S.', 'Sebastián V.', 'Gabriel H.'];
    const cities = ['Bogotá, CO', 'Ciudad de México, MX', 'Santiago, CL', 'Lima, PE', 'Buenos Aires, AR', 'Medellín, CO', 'Monterrey, MX', 'Quito, EC', 'Guayaquil, EC', 'Guatemala, GT', 'Caracas, VE', 'Montevideo, UY', 'San José, CR'];

    function updatePurchases() {
        lists.forEach(list => {
            list.style.transition = 'opacity 0.5s ease';
            list.style.opacity = '0';

            setTimeout(() => {
                let html = '';
                const shuffledNames = [...names].sort(() => 0.5 - Math.random());

                for (let i = 0; i < 3; i++) {
                    const name = shuffledNames[i];
                    const city = cities[Math.floor(Math.random() * cities.length)];
                    const min = Math.floor(Math.random() * 15) + 1; // 1 to 15 min
                    html += `<p style="margin: 0.3rem 0;">• ${name} compró hace ${min} min - ${city}</p>`;
                }
                list.innerHTML = html;
                list.style.opacity = '1';
            }, 500);
        });
    }

    // Update every 30 seconds
    setInterval(updatePurchases, 30000);
}

document.addEventListener('DOMContentLoaded', () => {
    initRecentPurchases();
});
