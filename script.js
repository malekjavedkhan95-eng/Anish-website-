// Page Load
window.addEventListener('load', function() {
    // Hide loading screen
    document.getElementById('loading').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 500);
    
    // Load personal data
    loadPersonalData();
    
    // Smooth scrolling
    setupSmoothScroll();
    
    // Navbar scroll effect
    setupNavbarScroll();
    
    // Mobile menu
    setupMobileMenu();
    
    // Form submission
    setupContactForm();
    
    // Animate on scroll
    setupScrollAnimations();
});

// Load all personal data
function loadPersonalData() {
    // Hero section
    document.getElementById('hero-name').textContent = personalData.heroName;
    document.getElementById('hero-title').textContent = personalData.heroTitle;
    document.getElementById('hero-desc').textContent = personalData.heroDesc;
    document.getElementById('hero-image').src = personalData.profileImage;
    
    // About section
    document.getElementById('about-bio').textContent = personalData.bio;
    document.getElementById('experience').textContent = personalData.experience;
    document.getElementById('education').textContent = personalData.education;
    document.getElementById('location').textContent = personalData.location;
    document.getElementById('email').textContent = personalData.email;
    
    // Contact section
    document.getElementById('contact-email').textContent = personalData.contactEmail;
    document.getElementById('contact-phone').textContent = personalData.phone;
    document.getElementById('linkedin-link').href = personalData.linkedin;
    document.getElementById('linkedin-link').textContent = "LinkedIn";
    document.getElementById('github-link').href = personalData.github;
    document.getElementById('github-link').textContent = "GitHub";
    
    // Skills
    loadSkills();
    
    // Projects
    loadProjects();
}

// Load Skills
function loadSkills() {
    const skillsContainer = document.getElementById('skills-list');
    skillsContainer.innerHTML = '';
    
    personalData.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <div class="skill-progress">
                <div class="progress-bar" style="width: ${skill.level}%"></div>
            </div>
            <span>${skill.level}%</span>
        `;
        skillsContainer.appendChild(skillElement);
    });
}

// Load Projects
function loadProjects() {
    const projectsContainer = document.getElementById('projects-list');
    projectsContainer.innerHTML = '';
    
    personalData.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <div class="project-image">
                <i class="fas fa-laptop-code"></i> ${project.name}
            </div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    ${project.liveLink ? `<a href="${project.liveLink}" target="_blank">Live Demo</a>` : ''}
                    ${project.githubLink ? `<a href="${project.githubLink}" target="_blank">GitHub</a>` : ''}
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Smooth Scrolling
function setupSmoothScroll() {
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
}

// Navbar Scroll Effect
function setupNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255,255,255,0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255,255,255,0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Mobile Menu
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Contact Form
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        alert('आपका मैसेज सफलतापूर्वक भेज दिया गया! 🙌\n(यह demo है - actual में email integration करें)');
        
        // Reset form
        form.reset();
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
    
    // Observe skill items
    document.querySelectorAll('.skill-item, .project-card').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
}
heroName: "आपका पूरा नाम",
heroTitle: "आपका profession",
email: "your@email.com",
phone: "आपका नंबर",
linkedin: "your linkedin link",
// अपनी photo का URL profileImage में