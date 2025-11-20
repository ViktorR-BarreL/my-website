// Главная страница - обработка кнопки
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Спасибо за интерес к нашей компании! Свяжитесь с нами для консультации.');
            window.location.href = 'contact.html';
        });
    }
    
    // Обработка кнопок услуг
    const serviceButtons = document.querySelectorAll('.btn-service');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = this.closest('.service-item').querySelector('h3').textContent;
            alert(`Вы выбрали услугу: ${serviceName}. Перенаправляем на страницу контактов.`);
            window.location.href = 'contact.html';
        });
    });
});