document.addEventListener('DOMContentLoaded', () => {
    // приклад масиву скинів — підстав свої шляхи
    const skins = [
      { id:1, weapon: 'AK-47', type: 'ak47', name: 'AK-47 | NIGHTWISH', img: 'ak/wish.png', file: 'downloads/AK-47 Nightwish for CSS.zip' },
      { id:2, weapon: 'M4A4', type: 'm4a4', name: 'M4A4 | GRIFFIN', img: 'm4/grifin.png', file: 'downloads/m4a4-grime.zip' },
      { id:2, weapon: 'M4A4', type: 'm4a4', name: 'M4A4 | NEONOIR', img: 'm4/neonuar.png', file: 'downloads/m4a4-grime.zip' },
      { id:2, weapon: 'M4A4', type: 'm4a4', name: 'M4A4 | PALADIN', img: 'm4/paladin.png', file: 'downloads/m4a4-grime.zip' },
      { id:2, weapon: 'M4A4', type: 'm4a4', name: 'M4A4 | RAY', img: 'm4/ray.png', file: 'downloads/m4a4-grime.zip' },
      { id:2, weapon: 'M4A4', type: 'm4a4', name: 'M4A4 | STAR', img: 'm4/star.png', file: 'downloads/m4a4-grime.zip' },
      { id:2, weapon: 'M4A4', type: 'm4a4', name: 'M4A4 | POSEIDON', img: 'm4/poseidon.png', file: 'downloads/m4a4-grime.zip' },
      { id:2, weapon: 'M4A4', type: 'm4a4', name: 'M4A4 | POLY MAG', img: 'm4/poly mag.png', file: 'downloads/m4a4-grime.zip' },
      { id:2, weapon: 'M4A4', type: 'm4a4', name: 'M4A4 | ASIMOV', img: 'm4/asimov.png', file: 'downloads/m4a4-grime.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | NORTH FOREST', img: 'm4a1/north forest.png', file: 'downloads/StatTrak M4A1-S Северный Лес.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | HOT-ROAD', img: 'm4a1/hot-road.png', file: 'downloads/StatTrak M4A1-S Хот Род.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | HYPER BEAST', img: 'm4a1/hyper beast.png', file: 'downloads/StatTrak M4A1-S Скоростной Зверь.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | SECURITY', img: 'm4a1/security.png', file: 'downloads/StatTrak M4A1-S Страж.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | NITRO', img: 'm4a1/nitro.png', file: 'downloads/StatTrak M4A1-S Нитро.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | GOLD SPIRAL', img: 'm4a1/gold spiral.png', file: 'downloads/StatTrak M4A1-S Золотая Спираль.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | CANON', img: 'm4a1/canon.png', file: 'downloads/StatTrak M4A1-S Механо-Пушка.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | KNIGHT', img: 'm4a1/knight.png', file: 'downloads/StatTrak M4A1-S Рыцарь.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | MULTICAM', img: 'm4a1/multicam.png', file: 'downloads/StatTrak M4A1-S Смешанный Камуфляж.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | MASTERPIECE', img: 'm4a1/shedevr.png', file: 'downloads/StatTrak M4A1-S Шедевр.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | RAVAGER', img: 'm4a1/hz.png', file: 'downloads/StatTrak M4A1-S Опустошитель.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | GOLD', img: 'm4a1/gold.png', file: 'downloads/StatTrak M4A1-S Огонь Чантико.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | DARK WATER', img: 'm4a1/temnaya voda.png', file: 'downloads/StatTrak M4A1-S Темная Вода.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | BLUE WATER', img: 'm4a1/woter.png', file: 'downloads/StatTrak M4A1-S Чистая Вода.zip' },
      { id:3, weapon: 'M4A1-S', type: 'm4a1', name: 'M4A1-S | FALL OF ICARUS', img: 'm4a1/fall ikara.png', file: 'downloads/StatTrak M4A1-S Падение Икара.zip' },
      { id:4, weapon: 'AWP', type: 'awp', name: 'AWP | DRAGON LORE', img: 'awp/lore.png', file: 'downloads/awp-dragonlore.zip' },
      { id:4, weapon: 'AWP', type: 'awp', name: 'AWP | PIT VIPER', img: 'awp/гадьониш.png', file: 'downloads/awp-dragonlore.zip' },
      { id:4, weapon: 'AWP', type: 'awp', name: 'AWP | HYPER BEAST', img: 'awp/beast.png', file: 'downloads/awp-dragonlore.zip' },
      { id:4, weapon: 'AWP', type: 'awp', name: 'AWP | CHROMATIC ALIBERATION', img: 'awp/chromatic.png', file: 'downloads/StatTrak™ AWP Chromatic Aberration.zip' },
      { id:4, weapon: 'AWP', type: 'awp', name: 'AWP | GRAPHITE', img: 'awp/graphite.png', file: 'downloads/awp-dragonlore.zip' },
      { id:4, weapon: 'AWP', type: 'awp', name: 'AWP | PIXEL CAMO(PINK)', img: 'awp/пиксельний камуфляж розовий.png', file: 'downloads/awp-dragonlore.zip' },
      { id:4, weapon: 'AWP', type: 'awp', name: 'AWP | LIGHTING', img: 'awp/lighting.png', file: 'downloads/awp-dragonlore.zip' },
      { id:4, weapon: 'AWP', type: 'awp', name: 'AWP | FADE', img: 'awp/gradient.png', file: 'downloads/awp-dragonlore.zip' },
      { id:4, weapon: 'AWP', type: 'awp', name: 'AWP | PRINCE', img: 'awp/принц.png', file: 'downloads/awp-dragonlore.zip' },
      { id:4, weapon: 'AWP', type: 'awp', name: 'AWP | GUGNIR', img: 'awp/гунгнир.png', file: 'downloads/gugnir.zip' },
      { id:4, weapon: 'AWP', type: 'awp', name: 'AWP | DESERT HYDRA', img: 'awp/пустинна гідра.png', file: 'downloads/Awp_Hydra.zip' },
      { id:4, weapon: 'AWP', type: 'awp', name: 'AWP | SILK TIGER', img: 'awp/шелковий тигр.png', file: 'downloads/awp-dragonlore.zip' },
      { id:5, weapon: 'USP-S', type: 'usp', name: 'USP-S | ORION', img: 'usp/orion.png', file: 'downloads/usp-orion.zip' },
      { id:5, weapon: 'USP-S', type: 'usp', name: 'USP-S | FLASHBACK', img: 'usp/flashback.png', file: 'downloads/usp-orion.zip' },
      { id:5, weapon: 'USP-S', type: 'usp', name: 'USP-S | MONSTER MASHUP', img: 'usp/mashuppng.png', file: 'downloads/usp-orion.zip' },
      { id:5, weapon: 'USP-S', type: 'usp', name: 'USP-S | TORQUE', img: 'usp/torque.png', file: 'downloads/usp-orion.zip' },
      { id:5, weapon: 'USP-S', type: 'usp', name: 'USP-S | CAMO', img: 'usp/camo.png', file: 'downloads/usp-orion.zip' },
      { id:5, weapon: 'USP-S', type: 'usp', name: 'USP-S | NEONOIR', img: 'usp/neonoir.png', file: 'downloads/usp-orion.zip' },
      { id:5, weapon: 'USP-S', type: 'usp', name: 'USP-S | SYREX', img: 'usp/syrex.png', file: 'downloads/usp-orion.zip' },
      { id:5, weapon: 'USP-S', type: 'usp', name: 'USP-S | TRACING PAPER', img: 'usp/tracing paper.png', file: 'downloads/usp-orion.zip' },
      { id:6, weapon: 'AK-47', type: 'ak47', name: 'AK-47 | ICE COALED', img: 'ak/ICECOALED.png', file: 'downloads/StatTrak™ AK-47 Ice Coaled.zip' },
      { id:6, weapon: 'AK-47', type: 'ak47', name: 'AK-47 | JAGUAR', img: 'ak/jaguar.png', file: 'downloads/StatTrak AK-47 Ягуар.zip' },
      { id:6, weapon: 'AK-47', type: 'ak47', name: 'AK-47 |NEON REVOLUTION', img: 'ak/neon revolution.png', file: 'downloads/StatTrak AK-47 Neon Revolution.zip' },
      { id:6, weapon: 'AK-47', type: 'ak47', name: 'AK-47 | COLORS', img: 'ak/colors.png', file: 'downloads/StatTrak AK-47 Буйство Красок.zip' },
      { id:6, weapon: 'AK-47', type: 'ak47', name: 'AK-47 | HYDROPONIC', img: 'ak/hydroponic.png', file: 'downloads/ak47-hydroponics.zip' },
      { id:6, weapon: 'AK-47', type: 'ak47', name: 'AK-47 | FIRST CLASS', img: 'ak/firstclass.png', file: 'downloads/ak47-firstclass.zip' },

      { id:6, weapon: 'AK-47', type: 'ak47', name: 'AK-47 | VULCAN', img: 'ak/vulcan.png', file: 'downloads/StatTrak AK-47 Вулкан.zip' },
      { id:6, weapon: 'AK-47', type: 'ak47', name: 'AK-47 | SNOW', img: 'ak/wihr.png', file: 'downloads/snow.zip' },
      { id:6, weapon: 'AK-47', type: 'ak47', name: 'AK-47 | WILD LOTUS', img: 'ak/wild lotus.png', file: 'https://drive.google.com/file/d/1eZ-UlMVH5BhPPhjt7HibFh_UU8vy0o73/view?usp=drive_link' },
      { id:6, weapon: 'AK-47', type: 'ak47', name: 'AK-47 | GRID', img: 'ak/ас.png', file: 'downloads/StatTrak AK-47 Пустынный Повстанец.zip' },
      { id:6, weapon: 'AK-47', type: 'ak47', name: 'AK-47 | CASE HARDERED', img: 'ak/zakalka.png', file: 'downloads/StatTrak AK-47 Поверхностная Закалка.zip' }
      
    ];
  
    // резолюємо список зброї автоматично
    const weapons = Array.from(new Set(skins.map(s => s.weapon)));
    const weaponTypes = Array.from(new Set(skins.map(s => s.type)));
  
    // DOM
    const weaponsList = document.getElementById('weaponsList');
    const weaponFilters = document.getElementById('weaponFilters');
    const catalogGrid = document.getElementById('catalogGrid');
    const currentWeapon = document.getElementById('currentWeapon');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const topSearch = document.getElementById('topSearch');
    const topSearchBtn = document.getElementById('topSearchBtn');
  
    // Modal
    const imgModal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    const modalClose = document.getElementById('modalClose');
  
    function openModal(src){
      modalImg.src = src;
      imgModal.classList.add('open');
      imgModal.setAttribute('aria-hidden','false');
    }
    modalClose.addEventListener('click', ()=> { imgModal.classList.remove('open'); modalImg.src=''; });
    imgModal.addEventListener('click', (e)=> { if(e.target === imgModal) modalClose.click(); });
  
    // render weapons sidebar
    function renderWeaponsList(){
      weaponsList.innerHTML = '';
      const all = document.createElement('button'); all.textContent = 'Усі'; all.dataset.type = 'all'; all.className = 'active'; weaponsList.appendChild(all);
      weaponTypes.forEach(t=>{
        const btn = document.createElement('button'); btn.textContent = t.toUpperCase(); btn.dataset.type = t;
        weaponsList.appendChild(btn);
      });
  
      // handlers
      weaponsList.querySelectorAll('button').forEach(b=>{
        b.addEventListener('click', (e)=>{
          weaponsList.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
          b.classList.add('active');
          filterByType(b.dataset.type);
        });
      });
    }
  
    // render top filter buttons
    function renderTopFilters(){
      weaponFilters.innerHTML = '';
      const allBtn = document.createElement('button'); allBtn.className = 'btn green'; allBtn.textContent = 'Усі';
      allBtn.addEventListener('click', ()=> { setActiveFilter('all'); renderGrid('all'); });
      weaponFilters.appendChild(allBtn);
  
      weaponTypes.forEach(t=>{
        const b = document.createElement('button'); b.className = 'btn small'; b.textContent = t.toUpperCase();
        b.addEventListener('click', ()=> { setActiveFilter(t); renderGrid(t); });
        weaponFilters.appendChild(b);
      });
    }
  
    function setActiveFilter(type){
      // sync sidebar
      weaponsList.querySelectorAll('button').forEach(btn=>{
        if(btn.dataset.type === type) btn.classList.add('active'); else btn.classList.remove('active');
      });
      currentWeapon.textContent = (type === 'all' || !type) ? 'Усі' : type.toUpperCase();
    }
  
    function filterByType(type){
      setActiveFilter(type);
      renderGrid(type, searchInput.value || topSearch.value);
    }
  
    // render grid
    function renderGrid(type='all', q=''){
      catalogGrid.innerHTML = '';
      const query = (q || '').trim().toLowerCase();
      const filtered = skins.filter(s=>{
        const okType = (type === 'all' || !type) ? true : s.type === type;
        const okQuery = !query ? true : s.name.toLowerCase().includes(query);
        return okType && okQuery;
      });
  
      if(filtered.length === 0){
        catalogGrid.innerHTML = '<p class="muted">Нічого не знайдено.</p>';
        return;
      }
  
      filtered.forEach(s=>{
        const el = document.createElement('article');
        el.className = 'skin-card';
        el.innerHTML = `
          <img src="${s.img}" alt="${s.name}" class="skin-img">
          <h3>${s.name}</h3>
          <div class="card-meta">${s.weapon} • ID ${s.id}</div>
          <div style="margin-top:10px;display:flex;gap:8px;align-items:center">
            <a class="download-btn" href="${s.file}" download>Скачати</a>
            <button class="btn small view-btn" data-img="${s.img}">Переглянути</button>
          </div>
        `;
        catalogGrid.appendChild(el);
      });
  
      // attach view handlers
      document.querySelectorAll('.view-btn').forEach(b=>{
        b.addEventListener('click', (e)=>{
          openModal(e.currentTarget.dataset.img);
        });
      });
  
      // fallback for download if file missing
      document.querySelectorAll('.download-btn').forEach(btn=>{
        btn.addEventListener('click', (e)=>{
          if(!btn.getAttribute('href') || btn.getAttribute('href') === ''){ e.preventDefault(); alert('Файл відсутній.'); }
        });
      });
    }
  
    // search handlers
    searchBtn.addEventListener('click', ()=> { renderGrid(getActiveType(), searchInput.value); });
    topSearchBtn.addEventListener('click', ()=> { renderGrid(getActiveType(), topSearch.value); });
  
    function getActiveType(){
      const active = weaponsList.querySelector('button.active');
      return active ? active.dataset.type : 'all';
    }
  
    // init
    renderWeaponsList();
    renderTopFilters();
    setActiveFilter('all');
    renderGrid('all');
  
  });
  