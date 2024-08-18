document.addEventListener('DOMContentLoaded', () => {
    const revealOnScroll = () => {
        const skillsContainer = document.querySelector('.skills-container');
        const servicesContainer = document.querySelector('.services-container');
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > skillsContainer.offsetTop + skillsContainer.offsetHeight / 2) {
            skillsContainer.classList.add('show');
        }

        if (scrollPosition > servicesContainer.offsetTop + servicesContainer.offsetHeight / 2) {
            servicesContainer.classList.add('show');
        }
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // Adding animations to skill and service icons
    const skillIcons = document.querySelectorAll('.skill-icon');
    const serviceIcons = document.querySelectorAll('.service-icon');

    skillIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'rotate(360deg)';
            icon.style.transition = 'transform 0.6s ease';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'rotate(0deg)';
        });
    });

    serviceIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.6s ease';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });
    });
});
