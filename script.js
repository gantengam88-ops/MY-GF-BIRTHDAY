/* =====================================
   BIRTHDAY WEBSITE PRO VERSION
   FIX: NO STUCK, FULL FLOW SAFE
===================================== */

/* ================= PAGE SYSTEM ================= */

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) target.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ================= SAFE DOM READY ================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= LOADING ================= */

  setTimeout(() => {
    const loading = document.getElementById("loading");
    if (loading) loading.classList.add("hide");
  }, 1800);

  /* ================= ELEMENTS ================= */

  const music = document.getElementById("music");
  const musicBtn = document.getElementById("musicBtn");

  const openGift = document.getElementById("openGift");
  const nextMusic = document.getElementById("nextMusic");
  const nextFinal = document.getElementById("nextFinal");
  const restart = document.getElementById("restart");
  const typing = document.getElementById("typingText");

  let playing = false;
  let i = 0;
  let typingStarted = false;

  /* ================= MUSIC ================= */

  if (musicBtn) {
    musicBtn.onclick = () => {
      if (!music) return;

      if (playing) {
        music.pause();
        musicBtn.innerHTML = "🎵";
      } else {
        music.play().catch(() => {});
        musicBtn.innerHTML = "⏸";
      }

      playing = !playing;
    };
  }

  /* autoplay safe */
  document.body.addEventListener("click", () => {
    if (!playing && music) {
      music.play().catch(() => {});
      playing = true;
      if (musicBtn) musicBtn.innerHTML = "⏸";
    }
  }, { once: true });

  /* ================= TYPEWRITER ================= */

  const message = `Selamat ulang tahun, sayang ❤️

Semoga semua doa kamu terkabul.

Semoga sehat selalu.

Semoga bahagia selalu.

Terima kasih sudah hadir di hidup ini.

Aku membuat ini dengan tulus.

Happy Birthday ❤️`;

  function typeWriter() {
    if (!typing) return;

    if (i < message.length) {
      typing.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    } else {
      if (nextMusic) nextMusic.style.display = "inline-block";
    }
  }

  /* ================= OPEN GIFT ================= */

  if (openGift) {
    openGift.onclick = () => {
      showPage("letter");

      if (typing) typing.innerHTML = "";
      i = 0;

      if (nextMusic) nextMusic.style.display = "none";

      if (!typingStarted) {
        typingStarted = true;
        setTimeout(typeWriter, 800);
      } else {
        setTimeout(typeWriter, 300);
      }
    };
  }

  /* ================= NEXT FLOW (LETTER → PLAYLIST) ================= */

  if (nextMusic) {
    nextMusic.onclick = () => {
      showPage("playlist");
    };
  }

  /* ================= NEXT FLOW (PLAYLIST → FINAL) ================= */

  if (nextFinal) {
    nextFinal.onclick = () => {
      showPage("final");
      startConfetti();
    };
  }

  /* ================= RESTART ================= */

  if (restart) {
    restart.onclick = () => {
      location.reload();
    };
  }

});

/* ================= EFFECTS (GLOBAL SAFE) ================= */

function createHeart() {
  const el = document.createElement("div");
  el.className = "heart";
  el.innerHTML = "❤️";

  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (18 + Math.random() * 25) + "px";
  el.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.body.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}

function createPetal() {
  const el = document.createElement("div");
  el.className = "petal";
  el.innerHTML = "🌸";

  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (16 + Math.random() * 18) + "px";
  el.style.animationDuration = (6 + Math.random() * 5) + "s";

  document.body.appendChild(el);
  setTimeout(() => el.remove(), 12000);
}

function startConfetti() {
  const colors = ["#ff5c95", "#ff9ec4", "#ffd166", "#7bdff2", "#b8f2e6", "#fff"];

  for (let i = 0; i < 150; i++) {
    const c = document.createElement("div");
    c.className = "confetti";

    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-20px";

    c.style.width = (5 + Math.random() * 7) + "px";
    c.style.height = (8 + Math.random() * 10) + "px";

    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(c);

    setTimeout(() => c.remove(), 7000);
  }
}

/* ================= AUTO EFFECT ================= */

setInterval(createHeart, 700);
setInterval(createPetal, 1200);

/* ================= DEBUG ================= */

console.log("💖 PRO Birthday Script Loaded");
