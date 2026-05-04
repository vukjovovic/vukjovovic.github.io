// Dark Mode Toggle
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    updateThemeIcon();
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeBtn.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Secondary Navigation Configuration
const secondaryNavConfig = {
    education: [
        { label: 'PhD', href: '#edu-phd' },
        { label: 'MSc', href: '#edu-msc' },
        { label: 'BSc', href: '#edu-bsc' },
        { label: 'Conferences & Schools', href: '#edu-conferences' }
    ],
    work: [
        { label: 'Experience', href: '#work-experience' },
        { label: 'Projects', href: '#work-projects' },
        { label: 'Skills', href: '#work-skills' }
    ]
    // About, Beyond, CV, Contact have no secondary nav
};

// Secondary Navigation Handler
const secondaryNav = document.getElementById('secondary-nav');
const secondaryLinks = document.getElementById('secondary-links');

function updateSecondaryNav(sectionId) {
    if (secondaryNavConfig[sectionId]) {
        // Show secondary nav with items
        secondaryLinks.innerHTML = secondaryNavConfig[sectionId]
            .map(item => `<li><a href="${item.href}" class="sub-nav-link">${item.label}</a></li>`)
            .join('');
        secondaryNav.classList.add('active');
    } else {
        // Hide secondary nav
        secondaryNav.classList.remove('active');
        secondaryLinks.innerHTML = '';
    }
}

// Track Active Section
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

function updateActiveNavigation() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
            updateSecondaryNav(current);
        }
    });

    // Update active sub-nav link based on scroll position
    updateActiveSubNav();
}

// Track Active Subsection
function updateActiveSubNav() {
    const subNavLinks = document.querySelectorAll('.sub-nav-link');
    let currentSubsection = '';
    let closestDistance = Infinity;

    subNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const elementTop = targetElement.offsetTop;
                const distance = Math.abs(elementTop - (pageYOffset + 200));

                if (pageYOffset >= elementTop - 300 && distance < closestDistance) {
                    closestDistance = distance;
                    currentSubsection = href;
                }
            }
        }
    });

    subNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSubsection) {
            link.classList.add('active');
        }
    });
}

// Handle navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const sectionId = link.getAttribute('data-section');
        updateSecondaryNav(sectionId);
    });
});

// Update on scroll
window.addEventListener('scroll', updateActiveNavigation);

// Update on load
window.addEventListener('load', updateActiveNavigation);

// Scroll offsets per section
const scrollOffsets = {
    'about': 0,
    'education': 100,
    'work': 150,
    'beyond': 100,
    'cv': 100,
    'contact': 100,
    // Subsections
    'edu-phd': 175,
    'edu-msc': 175,
    'edu-bsc': 175,
    'edu-conferences': 175,
    'work-experience': 175,
    'work-projects': 175,
    'work-skills': 175
};

// Smooth scroll for navigation links (event delegation for dynamic links)
document.addEventListener('click', function (e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
        const href = anchor.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const targetId = href.substring(1);
            const offset = scrollOffsets[targetId] || 300;
            const scrollPosition = Math.max(0, target.offsetTop - offset);

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }
});

// Animate elements on scroll
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

document.querySelectorAll('.edu-item, .exp-item, .project-item, .skill-category, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// GoatCounter Integration
window.addEventListener('load', () => {
    if (window.goatcounter) {
        const countEl = document.getElementById('visit-count');
        if (countEl && window.goatcounter.data && window.goatcounter.data.count) {
            countEl.textContent = window.goatcounter.data.count;
        }
    }
});
