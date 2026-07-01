const scenes = document.querySelectorAll(".scene");
const buttons = document.querySelectorAll("button[data-next]");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const intro = document.getElementById("intro");
const typingEl = document.getElementById("typingText");

let currentScene = 0;

/* =========================
   INTRO SYSTEM (SAFE LOAD)
========================= */
window.addEventListener("load", () => {
  setTimeout(() => {
    if (intro) intro.style.display = "none";

    // music auto play safe (mobile fallback handled)
    music.volume = 0.4;
    music.play().catch(() => {
      console.log("Autoplay blocked - user must click music button");
    });

    showScene(0);
  }, 2200);
});

/* =========================
   SCENE CONTROLLER
========================= */
function showScene(index) {
  scenes.forEach(s => {
    s.classList.remove("active");
  });

  currentScene = index;

  const target = scenes[index];
  if (target) {
    target.classList.add("active");
  }

  // reset typing tiap scene
  if (typingEl) typingEl.innerHTML = "";
}

/* =========================
   NEXT BUTTON SYSTEM
========================= */
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const nextId = btn.getAttribute("data-next");

    const nextIndex = [...scenes].findIndex(
      s => s.id === nextId
    );

    if (nextIndex !== -1) {
      showScene(nextIndex);

      // trigger typing kalau scene 2
      if (nextId === "scene-2") {
        startTyping();
      }
    }
  });
});

/* =========================
   TYPING EFFECT (SMOOTH CINEMATIC)
========================= */
const message =
  "Aku tidak tahu bagaimana semesta bekerja, tapi aku tahu satu hal... kamu adalah bagian terbaik di dalamnya ❤️";

let typingIndex = 0;
let typingRunning = false;

function startTyping() {
  typingIndex = 0;
  typingEl.innerHTML = "";
  typingRunning = true;

  typeLoop();
}

function typeLoop() {
  if (!typingRunning) return;

  if (typingIndex < message.length) {
    typingEl.innerHTML += message.charAt(typingIndex);
    typingIndex++;

    setTimeout(typeLoop, 35); // cinematic speed
  } else {
    typingRunning = false;
  }
}

/* =========================
   MUSIC CONTROL (SAFE MOBILE)
========================= */
musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "⏸";
  } else {
    music.pause();
    musicBtn.innerText = "🎵";
  }
});

/* =========================
   KEYBOARD / TOUCH SAFE (ANTI BUG HP)
========================= */
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    music.pause();
  }
});

/* =========================
   REPLAY SYSTEM
========================= */
document.getElementById("restart")?.addEventListener("click", () => {
  showScene(0);

  setTimeout(() => {
    startTyping();
  }, 800);
});

/* =========================
   EXTRA CINEMATIC FEEL (SMALL SHAKE ON SCENE CHANGE)
========================= */
function cinematicShake() {
  document.body.style.transform = "scale(1.01)";
  setTimeout(() => {
    document.body.style.transform = "scale(1)";
  }, 200);
}

/* hook shake to scene changes */
function showScene(index) {
  scenes.forEach(s => s.classList.remove("active"));
  currentScene = index;

  const target = scenes[index];
  if (target) {
    target.classList.add("active");
  }

  cinematicShake();

  if (typingEl) typingEl.innerHTML = "";
}
