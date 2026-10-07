const experiences = [
  { role: "Student AI & IoT Engineer", place: "Samsung Innovation Campus 2026", period: "Aug – Dec 2026" },
  { role: "Cohort", place: "Samsung Solve Tomorrow 2026", period: "Jun – Oct 2026" },
  { role: "President – Engineering Researcher", place: "Boedi Oetomo (KIR EROBO)", period: "Jun 2025 – Jun 2026" },
  { role: "AWS Back-End Academy", place: "DBS Foundation", period: "Jul – Aug 2025" },
  { role: "Fullstack Web Developer Cohort", place: "Bank DBS | DBS Foundation", period: "Jan – May 2025" },
  { role: "Student AI & IoT Engineer", place: "Samsung Innovation Campus 2025", period: "Jan – Jun 2025" },
];

const awards = [
  { rank: "other", label: "Finalist", title: "DATATHON 2026", org: "RISTEK FASILKOM UI · 2026" },
  { rank: "gold", label: "1st", title: "Robotics – Gebyar Merdeka Gliter JAK 2026", org: "Dinas Pendidikan DKI Jakarta · 2026" },
  { rank: "bronze", label: "3rd", title: "UI/UX Website Design", org: "Universitas Bakrie · Feb 2026" },
  { rank: "silver", label: "2nd", title: "Scientific Paper – NITRO KIR", org: "SMAN 2 Jakarta · Jan 2026" },
  { rank: "gold", label: "1st", title: "IoT – ITechno Cup 2025", org: "Politeknik Negeri Jakarta · Oct 2025" },
  { rank: "gold", label: "1st", title: "Essay – Informatics Festival 2025", org: "Universitas Padjadjaran · Oct 2025" },
  { rank: "bronze", label: "3rd", title: "Youth Scientific Writing", org: "DISPORA Jakarta Pusat · Jul 2025" },
  { rank: "gold", label: "1st", title: "UI/UX Design Competition", org: "Universitas Bakrie · Feb 2025" },
  { rank: "gold", label: "1st", title: "Cerdas Cermat LITECROWLED", org: "SMAN 2 Jakarta · Jan 2025" },
  { rank: "other", label: "Grand Finalist", title: "Website Dev Competition", org: "Sagasitas · 2024" },
  { rank: "other", label: "Hon. Mention", title: "English Competition", org: "National Science & Social · 2022" },
  { rank: "other", label: "Hon. Mention", title: "Social Competition", org: "National Science & Social · 2021" }
];

const expList = document.getElementById("exp-list");
experiences.forEach(e => {
  const el = document.createElement("div");
  el.className = "exp-item";
  el.innerHTML = `
    <div class="exp-period">${e.period}</div>
    <div class="exp-content">
      <div class="exp-role">${e.role}</div>
      <div class="exp-place">${e.place}</div>
    </div>
  `;
  expList.appendChild(el);
});

const awList = document.getElementById("awards-list");
awards.forEach(a => {
  const el = document.createElement("div");
  el.className = "award-item";
  el.innerHTML = `
    <div class="award-badge ${a.rank}">${a.label}</div>
    <div>
      <div class="award-title">${a.title}</div>
      <div class="award-meta">${a.org}</div>
    </div>
  `;
  awList.appendChild(el);
});