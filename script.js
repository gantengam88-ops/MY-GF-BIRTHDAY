const scenes = document.querySelectorAll(".scene");
const buttons = document.querySelectorAll("button[data-next]");
const intro = document.getElementById("intro");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let text = "Aku tidak tahu bagaimana semesta bekerja... tapi aku bersyukur kamu ada di dalamnya ❤️";
let i = 0;

// INTRO
window.onload = () => {
  setTimeout(() => {
    intro.style.display = "none";
    music.volume = 0.3;
    music.play();
  }, 2500);
};

// SCENE SWITCH
function show(id) {
  scenes.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// NEXT BUTTONS
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    show(btn.dataset.next);
    if (btn.dataset.next === "s2") typeText();
  });
});

// TYPING EFFECT
function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 40);
  }
}

// MUSIC
musicBtn.onclick = () => {
  if (music.paused) music.play();
  else music.pause();
};

// REPLAY
document.getElementById("replay").onclick = () => {
  show("s1");
};
