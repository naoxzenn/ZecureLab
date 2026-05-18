/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "informasi", label: "Informasi" },
  { id: "visualisasi", label: "Visualisasi" },
  { id: "penanganan", label: "Penanganan" },
  { id: "pencegahan", label: "Pencegahan" },
  { id: "Literasi", label: "Literasi" },
  { id: "tools", label: "Tools" },
];

const THREATS = [
  {
    icon: "mail",
    name: "Phishing",
    color: "var(--neon-green)",
    desc: "Email palsu yang meniru institusi resmi untuk mencuri password dan data sensitif.",
  },
  {
    icon: "bug",
    name: "Malware",
    color: "var(--alert-red)",
    desc: "Program berbahaya yang merusak sistem dan mencuri data.",
  },
  {
    icon: "network",
    name: "DDoS",
    color: "var(--neon-cyan)",
    desc: "Serangan trafik masif untuk membuat server Kelebihan Kapasitas.",
  },
  {
    icon: "database",
    name: "SQL Injection",
    color: "var(--neon-purple)",
    desc: "Manipulasi query database melalui input berbahaya.",
  },
  {
    icon: "key-round",
    name: "Brute Force",
    color: "var(--neon-green)",
    desc: "Percobaan password secara terus-menerus hingga berhasil.",
  },
  {
    icon: "radio",
    name: "Man-in-the-Middle",
    color: "var(--neon-cyan)",
    desc: "Penyadapan komunikasi antara user dan server.",
  },
];

const ATTACKS = [
  {
    key: "phishing",
    name: "Phishing",
    icon: "mail",
    color: "var(--neon-green)",
    flow: [
      "Penyerang mengirim email atau pesan palsu yang tampak meyakinkan.",
      "Korban mengklik tautan dan memasukkan informasi sensitif.",
      "Data seperti username, password, atau OTP terkirim ke penyerang.",
      "Penyerang menggunakan informasi tersebut untuk mengambil alih akun.",
    ],
  },
  {
    key: "malware",
    name: "Malware",
    icon: "bug",
    color: "var(--alert-red)",
    flow: [
      "Pengguna mengunduh file atau aplikasi dari sumber yang tidak tepercaya.",
      "Program berbahaya terinstal tanpa disadari.",
      "Malware mulai berjalan dan menginfeksi sistem.",
      "Sistem terganggu, data dicuri, atau perangkat menjadi rusak.",
    ],
  },
  {
    key: "ddos",
    name: "DDoS",
    icon: "network",
    color: "var(--neon-cyan)",
    flow: [
      "Penyerang mengendalikan banyak perangkat yang terinfeksi (botnet).",
      "Botnet mengirimkan permintaan dalam jumlah sangat besar ke server.",
      "Server kewalahan memproses lalu lintas yang masuk.",
      "Layanan menjadi lambat atau tidak dapat diakses oleh pengguna sah.",
    ],
  },
  {
    key: "sqli",
    name: "SQL Injection",
    icon: "database",
    color: "var(--neon-purple)",
    flow: [
      "Penyerang memasukkan perintah SQL melalui form input aplikasi.",
      "Aplikasi memproses input tanpa validasi yang memadai.",
      "Database menjalankan perintah berbahaya tersebut.",
      "Penyerang memperoleh akses ke data sensitif atau hak administratif.",
    ],
  },
  {
    key: "brute",
    name: "Brute Force",
    icon: "key-round",
    color: "var(--neon-green)",
    flow: [
      "Penyerang mencoba ribuan kombinasi username dan password.",
      "Sistem terus menerima percobaan login secara otomatis.",
      "Kombinasi yang benar akhirnya ditemukan.",
      "Penyerang berhasil memperoleh akses ke akun korban.",
    ],
  },
  {
    key: "mitm",
    name: "Man-in-the-Middle",
    icon: "radio",
    color: "var(--neon-cyan)",
    flow: [
      "Pengguna mengirim data ke server melalui jaringan.",
      "Penyerang menyadap komunikasi di antara kedua pihak.",
      "Data dibaca atau dimodifikasi tanpa sepengetahuan pengguna.",
      "Informasi diteruskan ke server sehingga serangan tidak terdeteksi.",
    ],
  },
];

const TIMELINE_STEPS = [
  {
    icon: "wifi-off",
    title: "Putus Koneksi Internet",
    desc: "Cabut jaringan untuk menghentikan eksfiltrasi data secara langsung.",
  },
  {
    icon: "key-round",
    title: "Ganti Kata Sandi",
    desc: "Ganti seluruh kredensial penting dari perangkat yang bersih.",
  },
  {
    icon: "shield-check",
    title: "Aktifkan 2FA",
    desc: "Aktifkan multi-factor authentication di seluruh akun kritis.",
  },
  {
    icon: "scan-line",
    title: "Pindai Antivirus",
    desc: "Lakukan full system scan dengan engine yang up-to-date.",
  },
  {
    icon: "hard-drive",
    title: "Cadangkan File Penting",
    desc: "Salin file penting ke media offline yang terisolasi.",
  },
  {
    icon: "rotate-ccw",
    title: "Pulihkan Sistem",
    desc: "Kembalikan sistem ke titik aman atau lakukan re-install bersih.",
  },
  {
    icon: "megaphone",
    title: "Laporkan Insiden",
    desc: "Laporkan insiden ke tim IT, CSIRT, atau otoritas terkait.",
  },
];

const PREVENTION_TIPS = [
  "Gunakan kata sandi yang kuat dengan minimal 12 karakter, kombinasi huruf besar, huruf kecil, angka, dan simbol.",
  "Aktifkan autentikasi multi-faktor (Multi-Factor Authentication/MFA) untuk menambahkan lapisan keamanan ekstra.",
  "Perbarui sistem operasi dan aplikasi secara rutin untuk menutup celah keamanan.",
  "Hindari mengklik tautan atau membuka lampiran dari sumber yang tidak dikenal atau mencurigakan.",
  "Gunakan VPN saat terhubung ke jaringan Wi-Fi publik untuk melindungi data Anda.",
  "Lakukan pencadangan (backup) data penting secara berkala ke media penyimpanan offline.",
  "Instal dan gunakan antivirus terpercaya yang selalu diperbarui.",
];

const AWARENESS_ITEMS = [
  {
    icon: "brain",
    title: "Berpikir Sebelum Posting",
    color: "var(--neon-green)",
    tag: "THINK FIRST",
    desc: "Konten yang kamu unggah bisa bertahan selamanya di internet. Tanyakan pada diri sendiri: apakah ini bisa merugikanmu 5 tahun ke depan?",
    tips: [
      "Hindari oversharing lokasi real-time",
      "Periksa ulang sebelum klik share",
      "Jejak digital bersifat permanen",
    ],
  },
  {
    icon: "shield-alert",
    title: "Jaga Privasi Digitalmu",
    color: "var(--neon-cyan)",
    tag: "PRIVACY",
    desc: "Data pribadimu adalah aset berharga. Pelaku kejahatan digital mencari celah dari informasi yang kamu bagikan secara tidak sadar.",
    tips: [
      "Batasi izin aplikasi (lokasi, kamera, mikrofon)",
      "Gunakan email berbeda untuk akun penting",
      "Baca kebijakan privasi sebelum daftar",
    ],
  },
  {
    icon: "share-2",
    title: "Tanggung Jawab Berbagi Info",
    color: "var(--neon-purple)",
    tag: "RESPONSIBILITY",
    desc: "Hoaks dan misinformasi menyebar 6x lebih cepat dari fakta. Kamu punya tanggung jawab untuk tidak menjadi bagian dari rantai penyebaran.",
    tips: [
      "Verifikasi dari minimal 2 sumber terpercaya",
      "Jangan Meneruskan sebelum cek fakta",
      "Laporkan konten hoaks yang kamu temukan",
    ],
  },
  {
    icon: "eye-off",
    title: "Kenali Manipulasi Digital",
    color: "var(--alert-red)",
    tag: "AWARENESS",
    desc: "Dark pattern, clickbait, dan rekayasa sosial dirancang untuk mengeksploitasi psikologimu. Kenali taktiknya agar tidak mudah dimanipulasi.",
    tips: [
      "Waspadai urgensi palsu ('Limited time!')",
      "Kenali tombol misleading di aplikasi",
      "Iklan yang terlalu personal = data kamu dijual",
    ],
  },
  {
    icon: "wifi",
    title: "Aman di Ruang Publik",
    color: "var(--neon-green)",
    tag: "PUBLIC SAFETY",
    desc: "Wi-Fi publik adalah surga bagi hacker. Satu koneksi ceroboh bisa membuka akses ke seluruh akun dan data sensitifmu.",
    tips: [
      "Hindari transaksi finansial di Wi-Fi publik",
      "Gunakan VPN saat di luar rumah",
      "Matikan auto-connect Wi-Fi di HP",
    ],
  },
  {
    icon: "heart-handshake",
    title: "Etika Digital Generasi Z",
    color: "var(--neon-cyan)",
    tag: "DIGITAL ETHICS",
    desc: "Dunia digital adalah ruang publik. Perlakukan orang lain secara online seperti kamu ingin diperlakukan di dunia nyata.",
    tips: [
      "Stop cyberbullying — report & block",
      "Hormati hak cipta konten kreator",
      "Gunakan teknologi untuk dampak positif",
    ],
  },
];

const TERMINAL_LINES = [
  "$ initializing security protocols...",
  "$ loading threat intelligence...",
  "$ scanning suspicious activities...",
  "$ detecting unauthorized access...",
  "$ ALERT: intrusion detected",
  "$ launching CyberShield...",
];

/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */
function scrolltosection(id) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
function icon(name, color, size = 20) {
  return `<i data-lucide="${name}" style="width:${size}px;height:${size}px;${color ? "color:" + color + ";" : ""}"></i>`;
}
function reloadIcons() {
  lucide.createIcons();
}

/* ═══════════════════════════════════════════════
   PARTICLES
═══════════════════════════════════════════════ */
(function buildParticles() {
  const container = document.getElementById("particles");
  const colors = [
    "var(--neon-green)",
    "var(--neon-cyan)",
    "var(--neon-purple)",
  ];
  for (let i = 0; i < 28; i++) {
    const el = document.createElement("span");
    el.className = "particle";
    const left = (i * 37) % 100;
    const dur = 12 + ((i * 7) % 18);
    const size = 2 + (i % 4);
    const delay = (i * 1.3) % 10;
    const color = colors[i % 3];
    el.style.cssText = `position:absolute;border-radius:50%;left:${left}%;width:${size}px;height:${size}px;background:${color};box-shadow:0 0 ${size * 4}px ${color};animation-duration:${dur}s;animation-delay:${delay}s;`;
    container.appendChild(el);
  }
})();

/* ═══════════════════════════════════════════════
   TERMINAL INTRO
═══════════════════════════════════════════════ */
(function terminalIntro() {
  const container = document.getElementById("terminal-lines");
  const intro = document.getElementById("terminal-intro");
  let lineIdx = 0,
    charIdx = 0;

  function render() {
    let html = "";
    for (let i = 0; i < lineIdx; i++) {
      const cls = TERMINAL_LINES[i].includes("ALERT")
        ? "neon-text-red"
        : "neon-text-green";
      html += `<div class="t-line ${cls}">${TERMINAL_LINES[i]}</div>`;
    }
    if (lineIdx < TERMINAL_LINES.length) {
      const cls = TERMINAL_LINES[lineIdx].includes("ALERT")
        ? "neon-text-red"
        : "neon-text-green";
      html += `<div class="t-line ${cls}">${TERMINAL_LINES[lineIdx].slice(0, charIdx)}<span class="cursor-blink">▊</span></div>`;
    } else {
      html += `<div class="t-line neon-text-cyan">&gt; system ready<span class="cursor-blink">▊</span></div>`;
    }
    container.innerHTML = html;
  }

  function tick() {
    if (lineIdx >= TERMINAL_LINES.length) {
      render();
      setTimeout(() => {
        intro.classList.add("fade-out");
        setTimeout(() => {
          intro.style.display = "none";
        }, 700);
      }, 900);
      return;
    }
    const current = TERMINAL_LINES[lineIdx];
    if (charIdx < current.length) {
      charIdx++;
      render();
      setTimeout(tick, 22);
    } else {
      render();
      setTimeout(() => {
        lineIdx++;
        charIdx = 0;
        tick();
      }, 220);
    }
  }
  tick();
})();

/* ═══════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════ */
(function buildNav() {
  const desktop = document.getElementById("nav-desktop");
  const mobile = document.getElementById("nav-mobile");
  const toggle = document.getElementById("nav-toggle");
  const navIcon = document.getElementById("nav-icon");
  let menuOpen = false;

  NAV_ITEMS.forEach((it) => {
    desktop.innerHTML += `<li><button class="nav-btn" data-id="${it.id}" onclick="scrolltosection('${it.id}')">${it.label}</button></li>`;
    mobile.innerHTML += `<li><button class="nav-mobile-btn" data-id="${it.id}" onclick="scrolltosection('${it.id}');document.getElementById('nav-mobile').classList.add('hidden');menuOpen=false;">${it.label}</button></li>`;
  });

  toggle.addEventListener("click", () => {
    menuOpen = !menuOpen;
    mobile.classList.toggle("hidden", !menuOpen);
    navIcon.setAttribute("data-lucide", menuOpen ? "x" : "menu");
    reloadIcons();
  });

  // Scroll spy
  window.addEventListener(
    "scroll",
    () => {
      let curr = "home";
      NAV_ITEMS.forEach((it) => {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top <= 120) curr = it.id;
      });
      document.querySelectorAll("[data-id]").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.id === curr);
      });
    },
    { passive: true },
  );
})();

/* ═══════════════════════════════════════════════
   THREATS GRID
═══════════════════════════════════════════════ */
(function buildThreats() {
  const grid = document.getElementById("threats-grid");

  THREATS.forEach((t, i) => {
    const card = document.createElement("article");
    card.className = "glass threat-card animate-on-scroll";
    card.style.transitionDelay = `${i * 0.07}s`;

    card.innerHTML = `
      <div class="threat-icon"
           style="color:${t.color};
                  border-color:${t.color};
                  box-shadow:0 0 20px ${t.color}55;">
        ${icon(t.icon, t.color, 24)}
      </div>

      <h3 class="threat-name" style="color:${t.color}">
        ${t.name}
      </h3>

      <p class="threat-desc">
        ${t.desc}
      </p>
    `;

    grid.appendChild(card);
  });

  reloadIcons();
})();

/* ═══════════════════════════════════════════════
   ATTACK VISUALIZER
═══════════════════════════════════════════════ */
(function buildAttackVisualizer() {
  const btnContainer = document.getElementById("attack-buttons");
  let activeKey = "phishing";

  function flowPipe(color, delay = 0) {
    return `<div class="flow-pipe" style="background:${color}22;">
      <div class="flow-pipe-inner" style="background:linear-gradient(90deg,transparent,${color},transparent);animation-delay:${delay}s;"></div>
    </div>`;
  }
  function node(iconName, label, color) {
    return `<div class="node">
      <div class="node-icon" style="border-color:${color};box-shadow:0 0 25px ${color}55;">
        ${icon(iconName, color, 28)}
      </div>
      <span class="node-label">${label}</span>
    </div>`;
  }

  function stageHTML(key, color) {
    if (key === "phishing")
      return `<div class="stage-row">
      ${node("mail", "Email Palsu", color)}${flowPipe(color)}
      ${node("user", "Korban", "var(--neon-cyan)")}${flowPipe("var(--alert-red)", 0.3)}
      ${node("user-x", "Peretas", "var(--alert-red)")}
    </div>`;

    if (key === "malware")
      return `<div class="stage-row">
      ${node("download", "Mengunduh dan Instal", "var(--neon-cyan)")}${flowPipe(color)}
      ${node("bug", "Virus", color)}${flowPipe(color, 0.4)}
      ${node("alert-triangle", "Sistem Rusak", "var(--alert-red)")}
    </div>`;

    if (key === "ddos") {
      const bots = Array.from({ length: 9 })
        .map(
          (_, i) => `
        <div class="bot-cell" style="border-color:${color};box-shadow:0 0 10px ${color}88;animation:pulseOpacity 1.4s ${(i * 0.1) % 1.4}s infinite;">
          <span style="color:${color}">BOT</span>
        </div>`,
        )
        .join("");
      const dots = Array.from({ length: 6 })
        .map(
          (_, i) => `
        <div class="ddos-dot" style="background:${color};box-shadow:0 0 10px ${color};animation-delay:${i * 0.2}s;"></div>`,
        )
        .join("");
      return `<div class="ddos-stage">
        <div class="bot-grid">${bots}</div>
        <div class="ddos-pipe">${dots}</div>
        <div class="ddos-server">
          ${icon("server", "var(--alert-red)", 48)}
          <div class="neon-text-red" style="font-family:var(--font-mono);font-size:0.75rem;margin-top:8px;">Server</div>
        </div>
      </div>`;
    }

    if (key === "sqli")
      return `<div class="sqli-stage">
      <div class="sqli-box">
        <div class="sqli-comment">// login.php</div>
        <div class="sqli-label">username:</div>
        <div class="sqli-inject" style="border-color:${color};color:${color};">' OR '1'='1</div>
        <div class="sqli-label" style="margin-top:12px;">password:</div>
        <div class="sqli-password">••••••••</div>
      </div>
      <div class="sqli-box">
        <div class="sqli-comment">// db_query</div>
        <div class="sqli-label">SELECT * FROM users</div>
        <div class="sqli-label">WHERE name=<span style="color:${color}">'' OR '1'='1'</span></div>
        <div class="sqli-result neon-text-red">&gt;&gt; ACCESS GRANTED</div>
      </div>
    </div>`;

    if (key === "brute") {
      const samples =
        "password → qwerty → admin123 → letmein → P@ssw0rd! → hunter2";
      return `<div class="brute-stage">
        <div class="brute-box">
          ${icon("key-round", color, 20)}
          <span class="brute-label">trying:</span>
          <span class="brute-values" style="color:${color};">${samples}</span>
        </div>
        <div class="brute-bar-wrap">
          <div class="brute-bar" style="background:linear-gradient(90deg,${color},var(--alert-red));"></div>
        </div>
        <div class="brute-result neon-text-red">&gt; ACCESS GRANTED — password cracked in 00:42:11</div>
      </div>`;
    }

    // mitm
    return `<div class="stage-row">
      ${node("user", "Pengguna", "var(--neon-cyan)")}${flowPipe(color)}
      <div class="mitm-interceptor">
        ${node("user-x", "Peretas", "var(--alert-red)")}
        ${icon("lock", "var(--alert-red)", 16)}
      </div>
      ${flowPipe(color, 0.3)}
      ${node("server", "Server", color)}
    </div>`;
  }

  function renderAttack(key) {
    activeKey = key;
    const att = ATTACKS.find((a) => a.key === key);

    // Update buttons
    document.querySelectorAll(".attack-btn").forEach((b) => {
      const isActive = b.dataset.key === key;
      b.classList.toggle("active", isActive);
      b.style.boxShadow = isActive ? `0 0 30px ${att.color}66` : "";
      b.style.borderColor = isActive ? att.color : "";
      b.querySelector(".attack-btn-name").style.color = isActive
        ? att.color
        : "#fff";
    });

    document.getElementById("stage-title").textContent =
      `${att.name} — live trace`;
    document.getElementById("stage-title").style.color = att.color;
    document.getElementById("stage-visual").innerHTML = stageHTML(
      att.key,
      att.color,
    );
    document.getElementById("stage-flow").innerHTML = att.flow
      .map(
        (step, i) => `
      <li class="flow-step" style="animation:fadeInUp 0.4s ${0.1 + i * 0.15}s both;">
        <span class="flow-num" style="color:${att.color};border-color:${att.color};">${String(i + 1).padStart(2, "0")}</span>
        <span class="flow-text">${step}</span>
      </li>`,
      )
      .join("");

    reloadIcons();
  }

  // Build buttons
  ATTACKS.forEach((a) => {
    const btn = document.createElement("button");
    btn.className = "attack-btn";
    btn.dataset.key = a.key;
    btn.innerHTML = `
      <div class="attack-btn-inner">
        ${icon(a.icon, a.color, 20)}
        <div>
          <div class="attack-btn-name">${a.name}</div>
          <div class="attack-btn-sub"></div>
        </div>
      </div>`;
    btn.addEventListener("click", () => renderAttack(a.key));
    btnContainer.appendChild(btn);
  });

  renderAttack("phishing");
})();

/* ═══════════════════════════════════════════════
   TIMELINE
═══════════════════════════════════════════════ */
(function buildTimeline() {
  const container = document.getElementById("timeline-items");
  TIMELINE_STEPS.forEach((s, i) => {
    const item = document.createElement("div");
    item.className = "timeline-item animate-left";
    item.style.transitionDelay = `${i * 0.05}s`;
    item.innerHTML = `
      <div class="timeline-icon">${icon(s.icon, "var(--neon-green)", 20)}</div>
      <div class="glass timeline-card">
        <div>
          <span class="timeline-step neon-text-cyan">LANGKAH_${String(i + 1).padStart(2, "0")}</span>
          <span class="timeline-title">${s.title}</span>
        </div>
        <p class="timeline-desc">${s.desc}</p>
      </div>`;
    container.appendChild(item);
  });
  reloadIcons();
})();

/* ═══════════════════════════════════════════════
   PREVENTION GRID
═══════════════════════════════════════════════ */
(function buildPrevention() {
  const grid = document.getElementById("prevention-grid");
  PREVENTION_TIPS.forEach((t, i) => {
    const card = document.createElement("div");
    card.className = "glass prevention-card animate-on-scroll";
    card.style.transitionDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <span class="prevention-check">${icon("check", "#000", 16)}</span>
      <span class="prevention-text">${t}</span>`;
    grid.appendChild(card);
  });
  reloadIcons();
})();

/* ═══════════════════════════════════════════════
   DIGITAL AWARENESS GRID
═══════════════════════════════════════════════ */
(function buildAwareness() {
  const grid = document.getElementById("awareness-grid");
  if (!grid) return;

  AWARENESS_ITEMS.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "glass awareness-card animate-on-scroll";
    card.style.transitionDelay = `${i * 0.08}s`;

    const tipsHTML = item.tips
      .map(
        (tip) => `
        <li class="awareness-tip">
          <span class="awareness-tip-dot" style="background:${item.color};box-shadow:0 0 8px ${item.color};"></span>
          <span>${tip}</span>
        </li>`,
      )
      .join("");

    card.innerHTML = `
      <div class="awareness-top">
        <div class="awareness-icon" style="border-color:${item.color};box-shadow:0 0 20px ${item.color}44;color:${item.color};">
          ${icon(item.icon, item.color, 24)}
        </div>
        <span class="awareness-tag" style="color:${item.color};border-color:${item.color}44;background:${item.color}11;">
          ${item.tag}
        </span>
      </div>
      <h3 class="awareness-title" style="color:${item.color};">${item.title}</h3>
      <p class="awareness-desc">${item.desc}</p>
      <ul class="awareness-tips">${tipsHTML}</ul>
    `;

    grid.appendChild(card);
  });

  reloadIcons();
})();

/* ═══════════════════════════════════════════════
   PASSWORD TOOLS
═══════════════════════════════════════════════ */
(function buildTools() {
  // Strength Checker
  const input = document.getElementById("pw-input");
  const toggle = document.getElementById("pw-toggle");
  const strengthLabel = document.getElementById("strength-label");
  const strengthBar = document.getElementById("strength-bar");
  const checksList = document.getElementById("checks-list");
  let showPw = false;

  const CHECKS = [
    { key: "length", label: "Minimal 12 Karakter" },
    { key: "upper", label: "Huruf Kapital(A-Z)" },
    { key: "lower", label: "Huruf Kecil(a-z)" },
    { key: "number", label: "Nomor" },
    { key: "symbol", label: "Simbol" },
  ];

  function buildChecksList() {
    checksList.innerHTML = CHECKS.map(
      (c) => `
      <li class="check-item">
        <span class="check-dot" id="dot-${c.key}"></span>
        <span class="check-text" id="txt-${c.key}">${c.label}</span>
      </li>`,
    ).join("");
  }
  buildChecksList();

  function scorePassword(pw) {
    const checks = {
      length: pw.length >= 12,
      upper: /[A-Z]/.test(pw),
      lower: /[a-z]/.test(pw),
      number: /\d/.test(pw),
      symbol: /[^A-Za-z0-9]/.test(pw),
    };
    let score = Object.values(checks).filter(Boolean).length;
    if (pw.length >= 16) score += 0.5;
    return { score, checks };
  }

  input.addEventListener("input", () => {
    const pw = input.value;
    const { score, checks } = scorePassword(pw);
    const label =
      score >= 4.5 ? "STRONG" : score >= 3 ? "MEDIUM" : pw ? "WEAK" : "—";
    const color =
      score >= 4.5
        ? "var(--neon-green)"
        : score >= 3
          ? "var(--neon-cyan)"
          : "var(--alert-red)";
    strengthLabel.textContent = label;
    strengthLabel.style.color = color;
    strengthLabel.style.textShadow = `0 0 10px ${color}`;
    strengthBar.style.width = `${Math.min(100, (score / 5.5) * 100)}%`;
    CHECKS.forEach((c) => {
      const ok = checks[c.key];
      document.getElementById("dot-" + c.key).classList.toggle("ok", ok);
      document.getElementById("txt-" + c.key).classList.toggle("ok", ok);
      document.getElementById("dot-" + c.key).innerHTML = ok
        ? icon("check", "#000", 12)
        : "";
    });
    reloadIcons();
  });

  toggle.addEventListener("click", () => {
    showPw = !showPw;
    input.type = showPw ? "text" : "password";
    toggle.innerHTML = showPw
      ? `<i data-lucide="eye-off" style="width:20px;height:20px;"></i>`
      : `<i data-lucide="eye" style="width:20px;height:20px;"></i>`;
    reloadIcons();
  });

  // Generator
  let genLen = 16,
    useUpper = true,
    useNum = true,
    useSym = true;

  function generate(len, upper, num, sym) {
    const lower = "abcdefghijkmnpqrstuvwxyz";
    const U = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    const N = "23456789";
    const S = "!@#$%^&*()-_=+[]{};:,.<>?";
    let pool = lower;
    if (upper) pool += U;
    if (num) pool += N;
    if (sym) pool += S;
    const arr = new Uint32Array(len);
    crypto.getRandomValues(arr);
    return Array.from(arr, (x) => pool[x % pool.length]).join("");
  }

  function regen() {
    document.getElementById("gen-value").textContent = generate(
      genLen,
      useUpper,
      useNum,
      useSym,
    );
  }

  regen();

  document.getElementById("gen-len").addEventListener("input", (e) => {
    genLen = +e.target.value;
    document.getElementById("len-display").textContent = genLen;
    regen();
  });

  function setupToggle(id, getter, setter) {
    const btn = document.getElementById(id);
    btn.addEventListener("click", () => {
      setter(!getter());
      btn.classList.toggle("active", getter());
      regen();
    });
  }
  setupToggle(
    "tog-upper",
    () => useUpper,
    (v) => {
      useUpper = v;
    },
  );
  setupToggle(
    "tog-num",
    () => useNum,
    (v) => {
      useNum = v;
    },
  );
  setupToggle(
    "tog-sym",
    () => useSym,
    (v) => {
      useSym = v;
    },
  );

  document.getElementById("gen-regen").addEventListener("click", regen);
  document.getElementById("gen-btn").addEventListener("click", regen);

  document.getElementById("gen-copy").addEventListener("click", async () => {
    await navigator.clipboard.writeText(
      document.getElementById("gen-value").textContent,
    );
    const btn = document.getElementById("gen-copy");
    btn.innerHTML = `<i data-lucide="check" class="neon-text-green" style="width:20px;height:20px;"></i>`;
    reloadIcons();
    setTimeout(() => {
      btn.innerHTML = `<i data-lucide="copy" style="width:20px;height:20px;"></i>`;
      reloadIcons();
    }, 1500);
  });

  document
    .getElementById("explore-threats-btn")
    ?.addEventListener("click", () => {
      scrolltosection("informasi");
    });

  document
    .getElementById("check-password-btn")
    .addEventListener("click", () => {
      scrolltosection("tools");
    });
})();

/* ═══════════════════════════════════════════════
   FOOTER YEAR
═══════════════════════════════════════════════ */
document.getElementById("year").textContent = new Date().getFullYear();

/* ═══════════════════════════════════════════════
   SCROLL ANIMATIONS (IntersectionObserver)
═══════════════════════════════════════════════ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".animate-on-scroll,.animate-left")
  .forEach((el) => observer.observe(el));

/* ═══════════════════════════════════════════════
   INIT ICONS
═══════════════════════════════════════════════ */
lucide.createIcons();

window.addEventListener("load", () => {
  lucide.createIcons();
});
