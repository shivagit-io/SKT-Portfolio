// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Copy email functionality
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const email = this.href.replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
            // Show a temporary tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Email copied to clipboard!';
            tooltip.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #10b981;
                color: white;
                padding: 10px 20px;
                border-radius: 5px;
                z-index: 10000;
                font-size: 14px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            `;
            document.body.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.remove();
            }, 2000);
        });
    });
});

// Enhanced Intersection Observer for scroll-triggered animations
const scrollAnimatedElementsSelector = '.hero-content, .techstack-category, .project-card, .education-card, .certification-card, .language-card, .contact-item';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(scrollAnimatedElementsSelector).forEach(el => {
        el.classList.add('scroll-animate');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         const rate = scrolled * -0.5;
//         hero.style.transform = `translateY(${rate}px)`;
//     }
// });

// Add hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Uncomment the line below if you want the typing effect
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Add scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2563eb;
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
`;

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
});

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}); 

// Avatar modal popup logic
const avatarNavbar = document.querySelector('.avatar-photo-navbar');
const avatarModal = document.getElementById('avatar-modal');
const avatarModalClose = document.getElementById('avatar-modal-close');
const avatarModalOverlay = document.querySelector('.avatar-modal-overlay');

if (avatarNavbar && avatarModal && avatarModalClose && avatarModalOverlay) {
    avatarNavbar.addEventListener('click', () => {
        avatarModal.classList.add('active');
    });
    avatarModalClose.addEventListener('click', () => {
        avatarModal.classList.remove('active');
    });
    avatarModalOverlay.addEventListener('click', () => {
        avatarModal.classList.remove('active');
    });
} 

// Section reveal animation for smooth transitions between sections
const sectionSelector = 'section, .hero-divider';
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(sectionSelector).forEach(section => {
        section.classList.add('section-animate');
    });

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.section-animate').forEach(section => {
        sectionObserver.observe(section);
    });
}); 

// Animate section headings with a beautiful transition
const sectionTitleSelector = '.section-title';
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(sectionTitleSelector).forEach(title => {
        title.classList.add('section-title-animate');
    });

    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.section-title-animate').forEach(title => {
        titleObserver.observe(title);
    });
}); 

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Progress Bar
    let progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress-bar';
        document.body.appendChild(progressBar);
    }
    function updateProgressBar() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
    }
    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);
    updateProgressBar();
}); 

// Subtle parallax effect for hero section
const hero = document.querySelector('.hero');
const heroAvatar = document.querySelector('.hero-inline-avatar');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const { width, height, left, top } = hero.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const moveX = (x / width - 0.5) * 18; // max 18px
        const moveY = (y / height - 0.5) * 12; // max 12px
        hero.style.setProperty('--hero-bg-x', `${moveX}px`);
        hero.style.setProperty('--hero-bg-y', `${moveY}px`);
        if (heroAvatar) {
            heroAvatar.style.transform = `translate(${moveX * 0.7}px, ${moveY * 1.2}px)`;
        }
    });
    hero.addEventListener('mouseleave', () => {
        hero.style.setProperty('--hero-bg-x', `0px`);
        hero.style.setProperty('--hero-bg-y', `0px`);
        if (heroAvatar) {
            heroAvatar.style.transform = '';
        }
    });
} 

// Animated particles for hero and tech stack backgrounds
function createParticles(containerId, color = '#fff', count = 24) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const particles = [];
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        dot.className = 'particle-dot';
        const size = Math.random() * 6 + 4;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.borderRadius = '50%';
        dot.style.background = color;
        dot.style.opacity = Math.random() * 0.18 + 0.12;
        dot.style.position = 'absolute';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        container.appendChild(dot);
        particles.push({
            el: dot,
            x: parseFloat(dot.style.left),
            y: parseFloat(dot.style.top),
            dx: (Math.random() - 0.5) * 0.08,
            dy: (Math.random() - 0.5) * 0.08,
            size
        });
    }
    function animate() {
        for (const p of particles) {
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0 || p.x > 100) p.dx *= -1;
            if (p.y < 0 || p.y > 100) p.dy *= -1;
            p.el.style.left = `${p.x}%`;
            p.el.style.top = `${p.y}%`;
        }
        requestAnimationFrame(animate);
    }
    animate();
}
// Theme Toggle Functionality
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    function setTheme(theme) {
        if (theme === 'light') {
            body.setAttribute('data-theme', 'light');
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            body.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    }
    
    function toggleTheme() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        
        // Add a smooth transition effect
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    }
    
    themeToggle.addEventListener('click', toggleTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    createParticles('hero-particles', '#fff', 24);
    createParticles('techstack-particles', '#00d4ff', 18);
    initTheme();
}); 