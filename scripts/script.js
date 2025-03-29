// Обработка формы
document.getElementById('application-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

// Анимация карточек при прокрутке
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });

    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});