const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".next");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const loading = document.getElementById("loading");

// LOADING SCREEN
window.onload = () => {
  setTimeout(() => {
    loading.style.display = "none";
  }, 2000);
};

// PAGE SWITCH
function showPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// BUTTON NEXT
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    showPage(btn.dataset.next);
  });
});

// MUSIC TOGGLE
musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸";
  } else {
    music.pause();
    musicBtn.textContent = "🎵";
  }
});

// RESTART
document.getElementById("restart").addEventListener("click", () => {
  showPage("home");
});
