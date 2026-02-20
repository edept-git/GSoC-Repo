// Basic interactivity for the Open Source Handbook

document.addEventListener('DOMContentLoaded', () => {
    console.log("App loaded successfully!");

    const uselessBtn = document.getElementById('useless-btn');
    
    // ISSUE: This button should show an alert or something, but it does nothing
    uselessBtn.addEventListener('click', () => {
        // TODO: Implement something fun here
        console.log("Button clicked, but nothing happens. This is an issue!");
    });

    // Add a simple scroll animation for cards
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
});
