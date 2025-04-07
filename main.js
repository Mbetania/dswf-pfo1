document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const exitAnimationDuration = 500;
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href !== window.location.href) {
                e.preventDefault();
                const targetUrl = this.href;
                
                document.querySelector('main').classList.add('exit');
                document.querySelector('nav').classList.add('exit-up');
                document.querySelector('footer').classList.add('exit-down');
                
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, exitAnimationDuration);
            }
        });
    });
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('a')) return;
            
            this.classList.add('clicked');
            
            if (this.dataset.link) {
                setTimeout(() => {
                    window.location.href = this.dataset.link;
                }, exitAnimationDuration);
            }
        });
    });
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            this.classList.add('exit-up');
            
            setTimeout(() => {
                alert('Formulario enviado con éxito');
                this.reset();
                this.classList.remove('exit-up');
            }, exitAnimationDuration);
        });
    }
});