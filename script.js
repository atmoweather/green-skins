document.addEventListener('DOMContentLoaded', () => {
   // кнопки скачати — тимчасова демонстрація
   document.querySelectorAll('.download-btn').forEach(btn => {
     btn.addEventListener('click', (e) => {
       e.preventDefault();
       const card = e.target.closest('.skin-card');
       const title = card?.querySelector('h3')?.innerText || 'Скин';
       alert('Починаємо завантаження: ' + title + '\n(замініть на реальний процес завантаження)');
     });
   });
 
   // пошук
   document.querySelectorAll('.btn-yellow').forEach(btn => {
     btn.addEventListener('click', () => {
       const wrapper = btn.closest('.search-box') || btn.closest('.search-small');
       if(!wrapper) return;
       const input = wrapper.querySelector('input');
       if(!input) return;
       alert('Пошук: ' + input.value);
     });
   });
 });

 document.querySelectorAll('.download-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // масив посилань на файли для завантаження
    const files = [
      'downloads/m4a4-grime.zip',
      'downloads/AK-47 Nightwish for CSS.zip',
      'downloads/m4a1-solitude.zip'
    ];

    const link = document.createElement('a');
    link.href = files[index]; // вибираємо файл за індексом
    link.download = files[index].split('/').pop();
    link.click();
  });
});

<script>
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const el = e.target.closest('.download-btn');
    if (!el) return;

    // Якщо це <a> з href — дозволяємо стандартну поведінку (але відкриємо в новій вкладці для зовнішніх)
    if (el.tagName.toLowerCase() === 'a' && el.href) {
      // якщо посилання зовнішнє або веде на Google Drive — відкривати у новій вкладці
      // (якщо не хочеш цього — прибері атрибути)
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
      return;
    }

    e.preventDefault();

    // Отримуємо URL з data-href або із <a.download-link> в тій же картці
    const href = el.dataset.href
      || el.closest('.skin-card')?.querySelector('a.download-link')?.href
      || el.closest('.skin-card')?.querySelector('a.download-btn')?.href;

    if (!href) {
      alert('Посилання на завантаження не вказане.');
      return;
    }

    // Відкриваємо в новій вкладці
    window.open(href, '_blank', 'noopener');
  });
});
</script>
