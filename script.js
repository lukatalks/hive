// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar reference
const navbar = document.querySelector('.navbar');

// Intersection Observer for fade-in animations
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

// Observe all cards and sections
const animateElements = document.querySelectorAll('.value-card, .offer-item, .founder-card, .reason-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Consolidated scroll handler with throttling
let scrollTicking = false;
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;

            // Navbar shadow
            navbar.style.boxShadow = scrolled > 100
                ? '0 5px 20px rgba(90, 192, 214, 0.1)'
                : 'none';

            // Fade out transition line
            const aboutSection = document.querySelector('.about-section');
            if (aboutSection) {
                aboutSection.classList.toggle('scrolled', scrolled > 50);
            }

            // Active nav link highlight
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            let current = '';
            sections.forEach(section => {
                if (scrolled >= section.offsetTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
            });

            scrollTicking = false;
        });
        scrollTicking = true;
    }
});

// Counter animation for member count
const animateCounter = (element, target, duration) => {
    let current = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
};

// Trigger counter animation when visible
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const countElement = entry.target.querySelector('.count');
            if (countElement && !countElement.classList.contains('animated')) {
                countElement.classList.add('animated');
                animateCounter(countElement, 60, 2000);
            }

            // Animate offer count (20+)
            const offerCountElement = entry.target.querySelector('.offer-count');
            if (offerCountElement && !offerCountElement.classList.contains('animated')) {
                offerCountElement.classList.add('animated');
                const target = parseInt(offerCountElement.getAttribute('data-target'));
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        offerCountElement.textContent = target;
                        clearInterval(timer);
                    } else {
                        offerCountElement.textContent = Math.floor(current);
                    }
                }, 20);
            }
        }
    });
}, { threshold: 0.5 });

const memberCount = document.querySelector('.hexagon-badge');
if (memberCount) {
    counterObserver.observe(memberCount);
}

// Observe offer cards for counter animation
const offerCards = document.querySelectorAll('.offer-card');
offerCards.forEach(card => {
    counterObserver.observe(card);
});

// Add hover effect for cards
document.querySelectorAll('.value-card, .offer-card, .reason-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Create backdrop for mobile tooltips
const backdrop = document.createElement('div');
backdrop.className = 'tooltip-backdrop';
document.body.appendChild(backdrop);

// Mobile click support for tooltips
document.querySelectorAll('.value-card, .offer-card, .reason-item').forEach(card => {
    card.addEventListener('click', function(e) {
        // Only on touch devices
        if ('ontouchstart' in window) {
            e.preventDefault();
            e.stopPropagation();

            const isActive = this.classList.contains('active');

            // Remove active from all other cards
            document.querySelectorAll('.value-card.active, .offer-card.active, .reason-item.active').forEach(c => {
                c.classList.remove('active');
            });

            // Toggle active on this card
            if (!isActive) {
                this.classList.add('active');
                backdrop.classList.add('active');
            } else {
                backdrop.classList.remove('active');
            }
        }
    });
});

// Close tooltips when clicking backdrop or outside
backdrop.addEventListener('click', function() {
    document.querySelectorAll('.value-card.active, .offer-card.active, .reason-item.active').forEach(card => {
        card.classList.remove('active');
    });
    backdrop.classList.remove('active');
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.value-card') && !e.target.closest('.offer-card') && !e.target.closest('.reason-item')) {
        document.querySelectorAll('.value-card.active, .offer-card.active, .reason-item.active').forEach(card => {
            card.classList.remove('active');
        });
        backdrop.classList.remove('active');
    }
});

// Cookie Notice
const cookieNotice = document.getElementById('cookie-notice');
const cookieAccept = document.getElementById('cookie-accept');

if (cookieNotice && cookieAccept) {
    if (!localStorage.getItem('cookieAccepted')) {
        setTimeout(() => {
            cookieNotice.classList.add('show');
        }, 1000);
    }

    cookieAccept.addEventListener('click', () => {
        localStorage.setItem('cookieAccepted', 'true');
        cookieNotice.classList.remove('show');
    });
}

// Smooth reveal for images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
        }
    });
}, { threshold: 0.3 });

const images = document.querySelectorAll('.community-image, .founder-image');
images.forEach(img => {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.95)';
    img.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    imageObserver.observe(img);
});


// Stagger animation for grid items
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.1 });

const grids = document.querySelectorAll('.values-container, .offers-grid, .founders-grid, .reasons-grid');
grids.forEach(grid => {
    staggerObserver.observe(grid);
});

// Page load event (loading animation removed to prevent overlay issues)

// Scroll to top button removed per user request

// Cursor trail effect (subtle, debounced with rAF)
let cursorCircles = [];
let cursorRafId = null;

const createCursorEffect = () => {
    for (let i = 0; i < 3; i++) {
        const circle = document.createElement('div');
        circle.style.cssText = `
            position: fixed;
            width: ${20 - i * 5}px;
            height: ${20 - i * 5}px;
            border-radius: 50%;
            background: rgba(90, 192, 214, ${0.3 - i * 0.1});
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.${i + 1}s ease;
        `;
        document.body.appendChild(circle);
        cursorCircles.push(circle);
    }
};

document.addEventListener('mousemove', (e) => {
    if (cursorRafId) return;
    cursorRafId = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;
        cursorCircles.forEach((circle, index) => {
            setTimeout(() => {
                circle.style.left = x + 'px';
                circle.style.top = y + 'px';
                circle.style.transform = 'translate(-50%, -50%)';
            }, index * 50);
        });
        cursorRafId = null;
    });
});

// Only create cursor effect on desktop
if (window.innerWidth > 768) {
    createCursorEffect();
}

// Mobile menu toggle
const navMenu = document.querySelector('.nav-menu');
const navContainer = document.querySelector('.nav-container');

// Create hamburger button in HTML (placed after logo, before language switcher)
const menuToggle = document.createElement('button');
menuToggle.className = 'mobile-menu-toggle';
menuToggle.innerHTML = '☰';
menuToggle.setAttribute('aria-label', 'Toggle navigation menu');

// Insert toggle after the logo
const languageSwitcher = navContainer.querySelector('.language-switcher');
navContainer.insertBefore(menuToggle, languageSwitcher);

menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    menuToggle.innerHTML = isOpen ? '✕' : '☰';
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '☰';
    });
});

