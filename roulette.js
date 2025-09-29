document.addEventListener('DOMContentLoaded', function () {
  const openCaseBtn = document.getElementById('openCaseBtn');
  const caseImage = document.getElementById('caseImage');
  const result = document.getElementById('result');
  const skinsGrid = document.getElementById('skinsGrid');
  const confettiCanvas = document.getElementById('confettiCanvas');
  const ctx = confettiCanvas.getContext('2d');

  // Масив скинiв — підстав свої шляхи/лінки
  const skins = [
    { name: "AK-47 | Wild Lotus", img: "skins/wild lotus.png", link: "downloads/ak-wildlotus.zip", meta:"355 • 29.08.25" },
    { name: "AWP | LIGHTING", img: "skins/lighting.png", link: "downloads/m4a4-grime.zip", meta:"477 • 29.08.25" },
    { name: "M4A4| NEONOIR", img: "skins/neonuar.png", link: "downloads/awp-dragonlore.zip", meta:"1 245 • 10.07.25" },
    { name: "AK-47| CASE HARDERED", img: "skins/zakalka.png", link: "downloads/glock-fade.zip", meta:"621 • 02.09.25" },
    { name: "AWP| PRINCE", img: "skins/принц.png", link: "downloads/usp-orion.zip", meta:"300 • 15.08.25" },
    { name: "M4A4| PALADIN", img: "skins/paladin.png", link: "downloads/awp-dragonlore.zip", meta:"1 245 • 10.07.25" },
    { name: "M4A4| RAY", img: "skins/ray.png", link: "downloads/glock-fade.zip", meta:"621 • 02.09.25" },
    { name: "AK-47| FIRSTCLASS", img: "skins/firstclass.png", link: "downloads/usp-orion.zip", meta:"300 • 15.08.25" }
  ];

  // Рендер сітки карток
  function renderSkinsList(){
    skinsGrid.innerHTML = '';
    skins.forEach(s=>{
      const card = document.createElement('article');
      card.className = 'skin-card';
      card.innerHTML = `
        <img src="${s.img}" alt="${s.name}">
        <h3>${s.name}</h3>
        <div class="card-meta">${s.meta}</div>
        <a href="${s.link}" class="download-btn" download>Скачати</a>
      `;
      skinsGrid.appendChild(card);
    });
  }
  renderSkinsList();

  // Confetti
  let particles = [], confettiAnimating = false;
  function resizeCanvas(){
    const dpr = window.devicePixelRatio || 1;
    confettiCanvas.width = Math.floor(window.innerWidth * dpr);
    confettiCanvas.height = Math.floor(window.innerHeight * dpr);
    confettiCanvas.style.width = window.innerWidth + 'px';
    confettiCanvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function rand(min, max){ return Math.random() * (max - min) + min; }

  function spawnConfetti(x, y, count = 60){
    const greenPalette = ['#05ff7a','#5fffad','#24ff6c','#96ffc8'];
    for(let i=0;i<count;i++){
      const size = rand(6,14);
      const angle = rand(-Math.PI,Math.PI);
      const speed = rand(2,8);
      particles.push({
        x:x+rand(-24,24), y:y+rand(-24,24),
        vx:Math.cos(angle)*speed, vy:Math.sin(angle)*speed-rand(1,4),
        size, rot:rand(0,Math.PI*2), rotSpeed:rand(-0.25,0.25),
        life:Math.floor(rand(60,120)), ttl:0,
        color:greenPalette[Math.floor(rand(0,greenPalette.length))]
      });
    }
    if(!confettiAnimating){confettiAnimating=true; requestAnimationFrame(confettiLoop);}
  }

  function confettiLoop(){
    ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
    for(let i=particles.length-1;i>=0;i--){
      const p=particles[i];
      p.vy+=0.15; p.vx*=0.995; p.vy*=0.999;
      p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; p.ttl++;
      const alpha=Math.max(0,1-(p.ttl/p.life));
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
      ctx.globalAlpha=alpha; ctx.fillStyle=p.color;
      ctx.fillRect(-p.size/2,-p.size/2,p.size,p.size); ctx.restore();
      if(p.ttl>p.life||p.y>window.innerHeight+50) particles.splice(i,1);
    }
    if(particles.length>0){ requestAnimationFrame(confettiLoop); }
    else{ confettiAnimating=false; ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height); }
  }

  // Логіка відкриття кейса
  let isAnimating=false;
  openCaseBtn.addEventListener('click',()=>{
    if(isAnimating) return;
    isAnimating=true;
    result.innerHTML = '';
    caseImage.style.transition = 'transform 700ms cubic-bezier(.2,.9,.2,1), opacity 600ms';
    caseImage.classList.add('hide-up');

    setTimeout(()=>{
      const skin = skins[Math.floor(Math.random()*skins.length)];

      // показ результату як картка
      result.innerHTML = `
        <article class="skin-card skin-result" style="opacity:0; transform: translateY(12px)">
          <img src="${skin.img}" alt="${skin.name}" />
          <h3>${skin.name}</h3>
          <div class="card-meta">${skin.meta}</div>
          <a class="download-btn" href="${skin.link}" download>Скачати</a>
        </article>
      `;

      const sr = result.querySelector('.skin-result');
      requestAnimationFrame(()=>{ sr.style.transition='opacity .38s, transform .38s'; sr.style.opacity='1'; sr.style.transform='translateY(0)'; });

      const rect = caseImage.getBoundingClientRect();
      spawnConfetti(rect.left + rect.width/2, rect.top + rect.height/2, 70);

      setTimeout(()=>{
        caseImage.classList.remove('hide-up');
        setTimeout(()=>{ caseImage.style.transition=''; },300);
        isAnimating=false;
      }, 350);

    }, 1500);
  });

  // Делегування кліків: якщо кнопка з data-href використовується, відкриваємо посилання в новій вкладці
  document.body.addEventListener('click', (e)=>{
    const el = e.target.closest('.download-btn');
    if(!el) return;
    if(el.tagName.toLowerCase() !== 'a' && el.dataset && el.dataset.href){
      e.preventDefault();
      window.open(el.dataset.href, '_blank', 'noopener');
    }
  });

});
