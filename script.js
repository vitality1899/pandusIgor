const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });

    // Плавное появление шапки при загрузке
    window.addEventListener('load', () => {
        document.querySelector('header').style.opacity = '1';
    });
