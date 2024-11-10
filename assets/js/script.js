const menuBtn = document.querySelector('.menu-btn');
        const navLinks = document.querySelectorAll('.nav-links');

        menuBtn.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.toggle('active'));
        });

        // Efecto de aparición del título
        document.addEventListener('DOMContentLoaded', () => {
            const title = document.querySelector('.title');
            const subtitle = document.querySelector('.subtitle');
            
            title.style.opacity = '0';
            subtitle.style.opacity = '0';
            
            setTimeout(() => {
                title.style.transition = 'opacity 1s';
                title.style.opacity = '1';
            }, 500);
            
            setTimeout(() => {
                subtitle.style.transition = 'opacity 1s';
                subtitle.style.opacity = '1';
            }, 1000);
        });