const experiences = [
  { title: "Student AI & IoT Engineer", place: "Samsung Innovation Campus 2026", date: "Aug – Dec 2026" },
  { title: "Cohort", place: "Samsung Solve Tomorrow 2026", date: "Jun – Oct 2026" },
  { title: "President – Engineering Researcher", place: "Boedi Oetomo (KIR EROBO)", date: "Jun 2025 – Jun 2026" },
  { title: "AWS Back-End Academy", place: "DBS Foundation", date: "Jul – Aug 2025" },
  { title: "Fullstack Web Developer Cohort", place: "Bank DBS | DBS Foundation", date: "Jan – May 2025" },
  { title: "Student AI & IoT Engineer", place: "Samsung Innovation Campus 2025", date: "Jan – Jun 2025" },
  { title: "President – Student Council (OSIS)", place: "OSIS", date: "2022 – 2023" }
];

const awards = [
  { rank: "other", label: "Finalist", title: "DATATHON 2026", org: "RISTEK FASILKOM UI · 2026" },
  { rank: "gold",  label: "1st", title: "Robotics – Gebyar Merdeka Gliter JAK 2026", org: "Dinas Pendidikan DKI Jakarta · 2026" },
  { rank: "bronze",label: "3rd", title: "UI/UX Website Design", org: "Universitas Bakrie · Feb 2026" },
  { rank: "silver",label: "2nd", title: "Scientific Paper – NITRO KIR", org: "SMAN 2 Jakarta · Jan 2026" },
  { rank: "gold",  label: "1st", title: "IoT – ITechno Cup 2025", org: "Politeknik Negeri Jakarta · Oct 2025" },
  { rank: "gold",  label: "1st", title: "Essay – Informatics Festival 2025", org: "Universitas Padjadjaran · Oct 2025" },
  { rank: "bronze",label: "3rd", title: "Youth Scientific Writing – Tech Innovation", org: "DISPORA Jakarta Pusat · Jul 2025" },
  { rank: "gold",  label: "1st", title: "UI/UX Design Competition", org: "Universitas Bakrie · Feb 2025" },
  { rank: "gold",  label: "1st", title: "Cerdas Cermat LITECROWLED", org: "SMAN 2 Jakarta · Jan 2025" },
  { rank: "other", label: "Grand Finalist", title: "Website Dev Competition", org: "Sagasitas · 2024" },
  { rank: "other", label: "Hon. Mention", title: "English Competition", org: "National Science & Social · 2022" },
  { rank: "other", label: "Hon. Mention", title: "Social Competition", org: "National Science & Social · 2021" }
];

const projects = [
  { id:"game-1", title:"RIZZ+++ PUZZLE", desc:"Sliding puzzle with live selfies and multiplayer. Built with real-time camera integration.", cat:"Game", stack:["Javascript","MediaPipe"], github:"https://github.com/Vkzapple/rizzle", demo:"https://rizzzle.vercel.app/", featured:null, img:"assets/projects/game-1.png" },
  { id:"fabrix-ai", title:"Fabrix AI", desc:"Fabric defect detection platform for textile SMEs using YOLO and XGBoost. Generates exportable PDF reports.", cat:"AI", stack:["TypeScript","Python","YOLO v5"], github:"https://github.com/Vkzapple/FABRIX-AI", demo:"https://fabrixai.vercel.app/", featured:null, img:"assets/projects/fabrix-ai.png" },
  { id:"jala", title:"JALA – JakLingko Auto-Locate Assistant", desc:"AI + IoT system for MikroTrans that detects waiting passengers at bus stops without needing smartphones.", cat:"IoT", stack:["C++","Python","TypeScript"], github:"https://github.com/Vkzapple/JALA", demo:null, featured:"LKS Nasional Kecerdasan Artifisial 2026", img:"assets/projects/jala-jaklingko-auto-locate-assistant.png" },
  { id:"sigema", title:"SIGEMA", desc:"Silica Gel Effectiveness Monitoring & Assistant — ESP32 + MQTT to monitor silica gel in archive storage.", cat:"IoT", stack:["C++","HTML","Node.js","MQTT"], github:"https://github.com/Vkzapple/SIGEMA", demo:"https://si-gema.vercel.app/", featured:"3rd Place – Youth Scientific Writing, DISPORA Jakarta Pusat", img:"assets/projects/sigema.png" },
  { id:"signatext", title:"SignaText", desc:"Sign language to text using ML and computer vision. Helps people with disabilities communicate more easily.", cat:"AI", stack:["Python","YOLO","Laravel"], github:"https://github.com/Vkzapple/Signatext", demo:"https://signatext.vercel.app/", featured:"Capstone – Fullstack Cohort @ DBS Foundation", img:"assets/projects/project.png" },
  { id:"insighta", title:"Insighta UMKM", desc:"ML dashboard for Indonesian marketplace review analysis — sentiment analysis and topic modeling for SMEs.", cat:"AI", stack:["React","Python","Scikit-learn","LDA"], github:"https://github.com/Vkzapple/umkm-reviews", demo:null, featured:null, img:"assets/projects/insighta-umkm.png" },
  { id:"petvest", title:"PETVEST", desc:"Student-friendly finance platform with expense tracking, saving habits, and basic investment concepts.", cat:"Web", stack:["Next.js","React","Node.js","Express.js"], github:"https://github.com/Vkzapple/PetVest", demo:"https://pet-vest.vercel.app/", featured:null, img:"assets/projects/petvest.png" },
  { id:"website-kkn", title:"Website KKN – Desa Bandar Klippa", desc:"Digital village administration platform for public letter services. Currently in active community use.", cat:"Web", stack:["Next.js","React"], github:null, demo:"https://desa-klippa.vercel.app/publik", featured:"Source code private — active community use", img:"assets/projects/website-kkn.png" },
  { id:"erobo-ai", title:"EROBO AI – STEM", desc:"AI research assistant for automated journal monitoring, summarization in Indonesian, and research gap discovery.", cat:"AI", stack:["Next.js","TypeScript","LLM"], github:"https://github.com/Vkzapple/eroboAI", demo:null, featured:"Demo available upon request", img:"assets/projects/erobo-ai.png" },
  { id:"nutrycycle", title:"NutryCycle", desc:"Web app for UMKM business location selection using ANP and MOORA decision algorithms.", cat:"AI", stack:["PHP Laravel","Python","Decision Tree"], github:"https://github.com/Vkzapple/NutriCycle", demo:null, featured:null, img:"assets/projects/nutry-cycle.png" },
  { id:"nyawit", title:"NYAWIT – Panen Monitoring", desc:"Mobile app for palm oil harvest data recording and production trend visualization.", cat:"Mobile", stack:["Kodular","Block Coding"], github:null, demo:null, featured:"Client-based project", img:"assets/projects/project-3.png" },
  { id:"sembago", title:"sembaGO Mart", desc:"Grocery marketplace with fast delivery and cash-on-delivery. Built for a local business.", cat:"Web", stack:["HTML","Tailwind CSS","JavaScript"], github:"https://github.com/Vkzapple/kekepet-mart/tree/main", demo:"https://sembagomart.vercel.app/", featured:"Client-based project", img:"assets/projects/sembago.png" },
  { id:"curion", title:"CURION", desc:"Mobile app design addressing social and environmental issues.", cat:"UI/UX", stack:["Figma"], github:null, demo:null, featured:"Prototype available upon request", img:"assets/projects/project-2.jpg" },
  { id:"sigab", title:"SIGAB", desc:"Earthquake mitigation and real-time monitoring web app using BMKG API and Leaflet.js.", cat:"Web", stack:["HTML","CSS","JavaScript","Leaflet.js"], github:"https://github.com/Vkzapple/Mitigasi-Gempa", demo:"https://sigab.vercel.app/", featured:null, img:"assets/projects/project-1.png" },
  { id:"pelayaran", title:"Pelayaran – SMM", desc:"Company profile website design for a logistics and transportation company.", cat:"UI/UX", stack:["Figma"], github:null, demo:null, featured:"Prototype available upon request", img:"assets/projects/project-4.png" }
];

const expEl = document.getElementById('exp-list');
experiences.forEach(e => {
  const d = document.createElement('div');
  d.className = 'exp-item';
  d.innerHTML = `<div class="exp-period">${e.date}</div><div class="exp-content"><div class="exp-role">${e.title}</div><div class="exp-place">${e.place}</div></div>`;
  expEl.appendChild(d);
});

const awEl = document.getElementById('awards-list');
awards.forEach(a => {
  const d = document.createElement('div');
  d.className = 'award-item';
  d.innerHTML = `<div class="award-badge ${a.rank}">${a.label}</div><div><div class="award-title">${a.title}</div><div class="award-meta">${a.org}</div></div>`;
  awEl.appendChild(d);
});

const pgEl = document.getElementById('projects-grid');
projects.forEach(p => {
  const d = document.createElement('div');
  d.className = 'proj-card';
  d.dataset.cat = p.cat;
  const stackHtml = p.stack.map(s => `<span>${s}</span>`).join('');
  const featHtml = p.featured ? `<div class="proj-featured">${p.featured}</div>` : '';
  const linksHtml = [
    p.github ? `<a href="${p.github}" target="_blank" class="proj-link">GitHub</a>` : '',
    p.demo   ? `<a href="${p.demo}"   target="_blank" class="proj-link">Demo</a>` : ''
  ].join('');
  d.innerHTML = `
    <img class="proj-img" src="${p.img}" alt="${p.title}" onerror="this.style.display='none'">
    <div class="proj-body">
      <div class="proj-cat">${p.cat}</div>
      <div class="proj-title">${p.title}</div>
      <div class="proj-desc">${p.desc}</div>
      ${featHtml}
      <div class="proj-stack">${stackHtml}</div>
      <div class="proj-links">${linksHtml}</div>
    </div>`;
  pgEl.appendChild(d);
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    const cards = document.querySelectorAll('.proj-card');
    let visible = 0;
    cards.forEach(c => {
      const show = f === 'all' || c.dataset.cat === f;
      c.classList.toggle('hidden', !show);
      if (show) visible++;
    });
    document.getElementById('proj-count').textContent = visible + ' projects';
  });
});
