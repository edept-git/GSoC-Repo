// GSoC Pathfinder - Core Logic
// This file contains intentional bugs for practice purposes.

document.addEventListener('DOMContentLoaded', () => {
    console.log("GSoC Pathfinder Initialized!");

    // Initialize UI Components
    initPracticeAction();
    initScrollAnimations();

    // PRACTICE ISSUE #3.1: The filtering logic below is broken
    // Goal: Make sure 'All' shows all cards.
    const filterCards = (category) => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            // BUG: The logic below is too strict or incorrect
            if (category === 'all' && false) {
                card.style.display = 'block';
            } else if (card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Note: To test the filter, you'd need to add data-category to HTML cards first!
});

/**
 * Handle the practice button interaction
 */
function initPracticeAction() {
    const practiceBtn = document.getElementById('useless-btn');
    if (!practiceBtn) return;

    practiceBtn.addEventListener('click', () => {
        // PRACTICE ISSUE #3.1: This should trigger a success message or a modal
        alert("You clicked the practice button! Now, go to app.js and make this button do something more 'productive' (e.g., toggle a dark mode).");
        console.info("Action triggered from UI.");
    });
}

/**
 * Simple Intersection Observer for scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .activity-list li').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// Helper to handle the 'animate-in' class (could also be done via CSS)
document.addEventListener('transitionend', (e) => {
    if (e.target.style.opacity === '0') {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
    }
});
