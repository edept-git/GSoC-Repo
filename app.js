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

/**
 * PRACTICE ISSUE #3.4: Contact Form Validation
 * TODO: Implement validation for the contact form.
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Form submission attempted. Validation needed!");
        // Add validation logic here
    });
}

/**
 * PRACTICE ISSUE #2.3: Scroll to Top Button
 * TODO: Implement the show/hide logic and smooth scroll.
 */
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
        // Add logic to show button after 500px scroll
    });

    scrollTopBtn.addEventListener('click', () => {
        // Add smooth scroll to top logic
    });
}

/**
 * PRACTICE ISSUE #3.3: Dynamic Footer Year
 * TODO: Use JavaScript to set the year in the footer dynamically.
 */
function updateFooterYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        // Use new Date().getFullYear()
    }
}

// Initialize new features (uncomment these as you solve the issues!)
// initContactForm();
// initScrollTop();
// updateFooterYear();
