// pack.js — простий скрипт для локального лічильника завантажень і повідомлення
document.addEventListener('DOMContentLoaded', () => {
   const dl = document.getElementById('downloadLink');
   const toast = document.getElementById('toast');
   const DL_KEY = 'gs_pack_downloads';
 
   // Ініціалізація лічильника
   if (!localStorage.getItem(DL_KEY)) {
     localStorage.setItem(DL_KEY, '0');
   }
 
   function showToast(msg, timeout = 2500) {
     toast.textContent = msg;
     toast.style.display = 'block';
     setTimeout(() => {
       toast.style.opacity = '1';
     }, 10);
     setTimeout(() => {
       toast.style.opacity = '0';
       setTimeout(() => { toast.style.display = 'none'; }, 400);
     }, timeout);
   }
 
   dl.addEventListener('click', (e) => {
     // Перед переїздом на зовнішній лінк — інкрементуємо лічильник у localStorage
     const current = parseInt(localStorage.getItem(DL_KEY) || '0', 10);
     localStorage.setItem(DL_KEY, String(current + 1));
 
     showToast('Починається завантаження — файл відкриється в новій вкладці...');
     // дозволяємо перехід (посилання відкриється в новій вкладці)
   });
 
   // показуємо, скільки разів локально було скачано
   const current = parseInt(localStorage.getItem(DL_KEY) || '0', 10);
   if (current > 0) {
     const dlNote = document.getElementById('dlNote');
     dlNote.textContent = `Локально скачувань: ${current}.`;
   }
 });
 