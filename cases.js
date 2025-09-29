/* script.js
 - Рендер скинів у сітці
 - Натискання на кнопку "Скачати" відкриває посилання (target blank)
 - При кліці спавнить конфетті (зелені квадратики)
 - Додає ripple-ефект на кнопки
*/

document.addEventListener('DOMContentLoaded', () => {
   const skinsGrid = document.getElementById('skinsGrid');
   const confettiCanvas = document.getElementById('confettiCanvas');
   const ctx = confettiCanvas.getContext?.('2d');
 
   // --- МАСИВ СКІНІВ (підстав свої шляхи та посилання)
   const skins = [
     { name:"M4A4 | CYBER", img:"assets/skins/m4a4_cyber.png", meta:"477 • 29.08.25", link:"https://drive.google.com/uc?export=download&id=FILEID1", ribbon:"NEW" },
     { name:"AK-47 | WILD LOTUS", img:"assets/skins/ak_wildlotus.png", meta:"355 • 29.08.25", link:"https://drive.google.com/uc?export=download&id=FILEID2", ribbon:"HOT" },
     { name:"AWP | FADE", img:"assets/skins/awp_fade.png", meta:"1 245 • 10.07.25", link:"https://drive.google.com/uc?export=download&id=FILEID3", ribbon:"RARE" },
     { name:"AK-47 | CASE HARDERED", img:"assets/skins/ak_casehard.png", meta:"621 • 02.09.25", link:"https://drive.google.com/uc?export=download&id=FILEID4" },
     { name:"M4A4 | RAY", img:"assets/skins/m4_ray.png", meta:"477 • 29.08.25", link:"https://drive.google.com/uc?export=download&id=FILEID5", ribbon:"EPIC" },
     { name:"AWP | PRINCE", img:"assets/skins/awp_prince.png", meta:"355 • 29.08.25", link:"https://drive.google.com/uc?export=download&id=FILEID6" },
     { name:"AK-47 | HYDROPONIC", img:"assets/skins/ak_hydroponic.png", meta:"355 • 29.08.25", link:"https://drive.google.com/uc?export=download&id=FILEID7" },
     { name:"M4A4 | NEONOIR", img:"assets/skins/m4_neonuar.png", meta:"1 245 • 10.07.25", link:"https://drive.google.com/uc?export=download&id=FILEID8" }
   ];
 
   // Render cards
   function renderSkins(){
     skinsGrid.innerHTML = '';
     skins.forEach(s => {
       const article = document.createElement('article');
       article.className = 'skin-card card';
 
       const ribbon = s.ribbon ? `<div class="ribbon">${s.ribbon}</div>` : '';
       const spark = `<div class="spark" aria-hidden="true"></div>`;
 
       article.innerHTML = `
         ${ribbon}
         ${spark}
         <img src="${s.img}" alt="${s.name}" loading="lazy">
         <h3>${s.name}</h3>
         <div class="card-meta">${s.meta}</div>
         <a class="download-btn" href="${s.link}" target="_blank" rel="noopener noreferrer">Скачати</a>
       `;
 
       skinsGrid.appendChild(article);
     });
   }
   renderSkins();
 
   /* ---------------- Confetti ---------------- */
   let particles = [], confettiAnimating = false;
 
   function resizeCanvas(){
     const dpr = window.devicePixelRatio || 1;
     confettiCanvas.width = Math.floor(window.innerWidth * dpr);
     confettiCanvas.height = Math.floor(window.innerHeight * dpr);
     confettiCanvas.style.width = window.innerWidth + 'px';
     confettiCanvas.style.height = window.innerHeight + 'px';
     if(ctx) ctx.setTransform(dpr,0,0,dpr,0,0);
   }
   window.addEventListener('resize', resizeCanvas);
   resizeCanvas();
 
   function rand(min,max){ return Math.random()*(max-min)+min; }
   function spawnConfetti(x,y,count=60){
     const greenPalette = ['rgba(5,255,122,1)','rgba(95,255,173,1)','rgba(36,255,108,1)','rgba(150,255,200,1)'];
     for(let i=0;i<count;i++){
       const size = rand(6,14);
       const angle = rand(-Math.PI, Math.PI);
       const speed = rand(2,8);
       particles.push({
         x:x + rand(-24,24),
         y:y + rand(-24,24),
         vx: Math.cos(angle)*speed,
         vy: Math.sin(angle)*speed - rand(1,4),
         size,
         rot: rand(0,Math.PI*2),
         rotSpeed: rand(-0.25,0.25),
         life: Math.floor(rand(60,120)),
         ttl: 0,
         color: greenPalette[Math.floor(rand(0,greenPalette.length))]
       });
     }
     if(!confettiAnimating){ confettiAnimating = true; requestAnimationFrame(confettiLoop); }
   }
 
   function confettiLoop(){
     if(!ctx) return;
     ctx.clearRect(0,0,confettiCanvas.width, confettiCanvas.height);
     ctx.globalCompositeOperation = 'lighter';
     for(let i=particles.length-1;i>=0;i--){
       const p = particles[i];
       p.vy += 0.15; p.vx *= 0.995; p.vy *= 0.999; p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed; p.ttl++;
       const alpha = Math.max(0,1 - (p.ttl / p.life));
       ctx.save();
       ctx.translate(p.x, p.y);
       ctx.rotate(p.rot);
       ctx.globalAlpha = alpha;
       ctx.fillStyle = p.color;
       ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
       ctx.restore();
       if(p.ttl > p.life || p.y > window.innerHeight + 50 || p.x < -50 || p.x > window.innerWidth + 50) particles.splice(i,1);
     }
     ctx.globalCompositeOperation = 'source-over';
     if(particles.length > 0) requestAnimationFrame(confettiLoop);
     else { confettiAnimating = false; ctx.clearRect(0,0,confettiCanvas.width, confettiCanvas.height); }
   }
 
   /* --------------- Ripple & click handling ---------------- */
   document.body.addEventListener('click', (e) => {
     const btn = e.target.closest('.download-btn');
     if(!btn) return;
 
     // ripple effect
     const rect = btn.getBoundingClientRect();
     const rx = (e.clientX || rect.left + rect.width/2) - rect.left;
     const ry = (e.clientY || rect.top + rect.height/2) - rect.top;
     const ripple = document.createElement('span');
     ripple.style.position = 'absolute';
     ripple.style.left = rx + 'px';
     ripple.style.top = ry + 'px';
     ripple.style.width = ripple.style.height = '8px';
     ripple.style.background = 'rgba(255,255,255,0.18)';
     ripple.style.borderRadius = '50%';
     ripple.style.transform = 'translate(-50%,-50%) scale(1)';
     ripple.style.opacity = '1';
     ripple.style.pointerEvents = 'none';
     ripple.style.transition = 'transform 520ms cubic-bezier(.2,.9,.2,1), opacity 520ms';
     btn.style.position = btn.style.position || 'relative';
     btn.appendChild(ripple);
     requestAnimationFrame(()=> { ripple.style.transform = 'translate(-50%,-50%) scale(40)'; ripple.style.opacity = '0'; });
     setTimeout(()=> ripple.remove(), 620);
 
     // spawn confetti near button
     const centerX = rect.left + rect.width / 2;
     const centerY = rect.top + rect.height / 2;
     spawnConfetti(centerX, centerY, 60);
 
     // let the anchor open in new tab (no preventDefault)
   });
 
   // Accessibility: keyboard activation for anchors with space/enter
   document.body.addEventListener('keydown', (e) => {
     if(e.key === 'Enter' || e.key === ' ') {
       const el = document.activeElement;
       if(el && el.classList && el.classList.contains('download-btn')) {
         el.click();
       }
     }
   });
 
 });
 