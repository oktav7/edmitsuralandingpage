document.addEventListener('DOMContentLoaded', function() {
    // Add page transition animation
    document.body.classList.add('page-transition');
    
    // Handle navigation clicks with animation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.animation = 'clickPulse 0.3s ease-out';
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 300);
        });
    });
});

// Add smooth fade transition between pages
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(-20px)';
});