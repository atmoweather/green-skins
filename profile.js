// script.js for profile page

// Simple inventory data (replace with your own)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('cf_status');
  const resetBtn = document.getElementById('cf_reset');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = '';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim() || 'Повідомлення з сайту';
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.style.color = '#ffd400';
      status.textContent = 'Будь ласка, заповніть всі обов\'язкові поля.';
      return;
    }
    if (!validateEmail(email)) {
      status.style.color = '#ffd400';
      status.textContent = 'Невірний формат email.';
      return;
    }

    // Формуємо mailto як запасний спосіб відправки
    const mailto = `mailto:example@greenskins.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Ім'я: ${name}\nEmail: ${email}\n\n${message}`)}`;

    // Спробуємо відкрити поштовий клієнт
    window.location.href = mailto;

    // Показуємо коротке повідомлення з інструкцією
    status.style.color = '#5fffad';
    status.textContent = 'Відкрито поштовий клієнт. Якщо лист не відправлено — напишіть нам на example@greenskins.com';
    form.reset();
  });

  resetBtn.addEventListener('click', () => {
    form.reset();
    status.textContent = '';
  });
});
