/* =====================================
   HAPPY BIRTHDAY WEBSITE
   SCRIPT.JS (CLEAN + SYNC HTML)
===================================== */

/* =====================
PAGE SYSTEM
===================== */

const pages = document.querySelectorAll(".page");

function showPage(id) {
  pages.forEach(page => page.classList.remove("active"));

  const target = document.getElementById(id);
  if (target) target.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =====================
LOADING
===================== */

window.addEventListener("load", () => {
  setTimeout(() => {
    const loading = document.getElementById("loading");
    if (loading) loading.classList.add("hide");
  }, 1800);
});

/* =====================
MUSIC CONTROL
===================== */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

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

/* autoplay safe (browser policy) */
document.body.addEventListener("click", () => {
  if (!playing && music) {
    music.play().catch(() => {});
    playing = true;
    musicBtn.innerHTML = "⏸";
  }
}, { once: true });

/* =====================
TYPEWRITER LETTER
===================== */

const message = `Selamat ulang tahun, sayang ❤️

Semoga semua doa yang kamu panjatkan perlahan menjadi kenyataan.

Semoga kesehatan selalu menemanimu.

Semoga kebahagiaan selalu menghampirimu.

Terima kasih sudah hadir.

Terima kasih sudah menjadi bagian dari hidupku.

Mungkin hadiah ini sederhana.

Tapi aku membuatnya dengan penuh perasaan.

Semoga kamu menyukainya.

Happy Birthday ❤️`;

const typing = document.getElementById("typingText");

let i = 0;
let typingStarted = false;

function typeWriter() {
  if (!typing) return;

  if (i < message.length) {
    typing.innerHTML += message.charAt(i);
    i++;

    typing.scrollTop = typing.scrollHeight;

    setTimeout(typeWriter, 35);
  } else {
    const nextBtn = document.getElementById("nextMusic");
    if (nextBtn) nextBtn.style.display = "inline-block";
  }
}

/* =====================
OPEN GIFT → LETTER
===================== */

document.getElementById("openGift").onclick = () => {
  showPage("letter");

  if (typing) typing.innerHTML = "";
  i = 0;

  const nextBtn = document.getElementById("nextMusic");
  if (nextBtn) nextBtn.style.display = "none";

  if (!typingStarted) {
    typingStarted = true;
    setTimeout(typeWriter, 1200);
  } else {
    setTimeout(typeWriter, 500);
  }
};

/* =====================
NAVIGATION FLOW
===================== */

document.getElementById("nextMusic").onclick = () => {
  showPage("playlist");
};

document.getElementById("nextFinal").onclick = () => {
  showPage("final");
  startConfetti();
};

document.getElementById("restart").onclick = () => {
  location.reload();
};

/* =====================
HEART EFFECT
===================== */

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (20 + Math.random() * 25) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

/* =====================
PETAL EFFECT
===================== */

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.innerHTML = "🌸";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (18 + Math.random() * 18) + "px";
  petal.style.animationDuration = (6 + Math.random() * 5) + "s";

  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 12000);
}

/* =====================
CONFETTI
===================== */

function startConfetti() {
  const colors = [
    "#ff5c95",
    "#ff9ec4",
    "#ffd166",
    "#7bdff2",
    "#b8f2e6",
    "#ffffff"
  ];

  for (let i = 0; i < 180; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-30px";

    confetti.style.width = (6 + Math.random() * 8) + "px";
    confetti.style.height = (10 + Math.random() * 12) + "px";

    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.animationDuration = (3 + Math.random() * 3) + "s";
    confetti.style.animationDelay = Math.random() * 2 + "s";

    confetti.style.transform =
      "rotate(" + Math.random() * 360 + "deg)";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 7000);
  }
}

/* =====================
AUTO EFFECT LOOP
===================== */

setInterval(createHeart, 700);
setInterval(createPetal, 1300);

/* =====================
BUTTON HOVER SAFETY
===================== */

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-4px) scale(1.03)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
});

/* =====================
DEBUG
===================== */

console.log("❤️ Birthday Website Loaded Successfully ❤️");
