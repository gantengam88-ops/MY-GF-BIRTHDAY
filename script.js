/* ===========================================
   HAPPY BIRTHDAY WEBSITE
   SCRIPT.JS
   PART 1
=========================================== */

// ==============================
// ELEMENT
// ==============================

const loading = document.getElementById("loading");

const pages = document.querySelectorAll(".page");

const hero = document.getElementById("hero");

const letterPage = document.getElementById("letterPage");

const galleryPage = document.getElementById("galleryPage");

const playlistPage = document.getElementById("playlistPage");

const finalPage = document.getElementById("finalPage");

const giftBtn = document.getElementById("giftBtn");

const nextGallery = document.getElementById("nextGallery");

const nextPlaylist = document.getElementById("nextPlaylist");

const nextFinal = document.getElementById("nextFinal");

const restart = document.getElementById("restart");

const typingText = document.getElementById("typingText");

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeLightbox = document.getElementById("closeLightbox");

// ==============================
// LOADING
// ==============================

window.addEventListener("load", () => {

setTimeout(() => {

loading.classList.add("hide");

}, 2200);

});

// ==============================
// PAGE
// ==============================

function showPage(page){

pages.forEach(p=>{

p.classList.remove("active");

});

page.classList.add("active");

}

// ==============================
// TYPING EFFECT
// ==============================

const message = `

Selamat ulang tahun ❤️

Hari ini adalah hari yang spesial.

Aku ingin mengucapkan terima kasih karena kamu sudah hadir dalam hidupku.

Terima kasih untuk setiap senyum yang pernah kamu berikan.

Semoga semua impianmu tercapai.

Semoga kesehatan, kebahagiaan, dan keberuntungan selalu menyertaimu.

Tetaplah menjadi dirimu yang luar biasa.

Aku akan selalu mendoakan yang terbaik untukmu.

❤️

`;

let index = 0;

function typeWriter(){

typingText.innerHTML = "";

index = 0;

const timer = setInterval(()=>{

typingText.innerHTML += message.charAt(index);

index++;

if(index >= message.length){

clearInterval(timer);

}

},35);

}

// ==============================
// OPEN GIFT
// ==============================

giftBtn.addEventListener("click",()=>{

showPage(letterPage);

typeWriter();

});

// ==============================
// NEXT
// ==============================

nextGallery.addEventListener("click",()=>{

showPage(galleryPage);

});

nextPlaylist.addEventListener("click",()=>{

showPage(playlistPage);

});

nextFinal.addEventListener("click",()=>{

showPage(finalPage);

});

restart.addEventListener("click",()=>{

location.reload();

});

// ==============================
// MUSIC
// ==============================

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="⏸";

}else{

music.pause();

musicBtn.innerHTML="🎵";

}

});

// ==============================
// HEART RAIN
// ==============================

function createHeart(){

const heart = document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*window.innerWidth+"px";

heart.style.animationDuration=

(4+Math.random()*4)+"s";

heart.style.fontSize=

(18+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,400);

// ==============================
// PETAL
// ==============================

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*window.innerWidth+"px";

petal.style.animationDuration=

(6+Math.random()*5)+"s";

petal.style.fontSize=

(18+Math.random()*18)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,700);
/* ===========================================
   SCRIPT.JS
   PART 2
=========================================== */

// ==============================
// GALLERY LIGHTBOX
// ==============================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImg.src = img.src;

});

});

closeLightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

});

// ==============================
// ESC CLOSE
// ==============================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lightbox.classList.remove("show");

}

});

// ==============================
// SPARK EFFECT
// ==============================

function createSpark(x,y){

const spark=document.createElement("div");

spark.className="spark";

spark.style.left=x+"px";

spark.style.top=y+"px";

document.body.appendChild(spark);

setTimeout(()=>{

spark.remove();

},1800);

}

// ==============================
// MOUSE EFFECT
// ==============================

let mouseTimer;

document.addEventListener("mousemove",(e)=>{

clearTimeout(mouseTimer);

createSpark(e.clientX,e.clientY);

mouseTimer=setTimeout(()=>{},10);

});

// ==============================
// RANDOM STARS
// ==============================

function randomSpark(){

createSpark(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight

);

}

setInterval(randomSpark,800);

// ==============================
// BUTTON ANIMATION
// ==============================

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});

// ==============================
// FLOAT EFFECT
// ==============================

setInterval(()=>{

const bear=document.querySelector(".bear");

if(bear){

bear.style.transform="translateY(-10px)";

setTimeout(()=>{

bear.style.transform="";

},800);

}

},3000);

// ==============================
// TITLE EFFECT
// ==============================

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

setInterval(()=>{

heroTitle.style.opacity=".8";

setTimeout(()=>{

heroTitle.style.opacity="1";

},500);

},2500);

}

// ==============================
// AUTO MUSIC (User Interaction)
// ==============================

document.addEventListener("click",()=>{

if(music.paused){

music.play().catch(()=>{});

}

},{once:true});

// ==============================
// PRELOAD IMAGES
// ==============================

galleryImages.forEach(img=>{

const preload=new Image();

preload.src=img.src;

});

// ==============================
// WINDOW RESIZE
// ==============================

window.addEventListener("resize",()=>{

lightbox.classList.remove("show");

});

// ==============================
// END PART 2
// ==============================
/* ===========================================
   SCRIPT.JS
   PART 3 (FINAL)
=========================================== */

// ==============================
// CONFETTI
// ==============================

function createConfetti(){

const colors=[
"#ff5b96",
"#ff8fb8",
"#ffd166",
"#7bdff2",
"#b2f7ef",
"#ffffff"
];

const confetti=document.createElement("div");

confetti.style.position="fixed";
confetti.style.left=Math.random()*window.innerWidth+"px";
confetti.style.top="-20px";
confetti.style.width="10px";
confetti.style.height="10px";
confetti.style.borderRadius="2px";
confetti.style.pointerEvents="none";
confetti.style.zIndex="9999";
confetti.style.background=
colors[Math.floor(Math.random()*colors.length)];

confetti.animate([

{
transform:"translateY(0) rotate(0deg)",
opacity:1
},

{
transform:
`translateY(${window.innerHeight+100}px) rotate(720deg)`,
opacity:0
}

],{

duration:3500+Math.random()*2500,

easing:"linear"

});

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},6000);

}

// ==============================
// FINAL PAGE EFFECT
// ==============================

let finalEffect=false;

setInterval(()=>{

if(finalPage.classList.contains("active")){

if(!finalEffect){

finalEffect=true;

setInterval(createConfetti,120);

}

}

},500);

// ==============================
// SHORTCUT
// ==============================

document.addEventListener("keydown",(e)=>{

switch(e.key.toLowerCase()){

case"m":

musicBtn.click();

break;

case"g":

giftBtn.click();

break;

case"r":

location.reload();

break;

}

});

// ==============================
// DOUBLE CLICK HEART
// ==============================

document.addEventListener("dblclick",(e)=>{

for(let i=0;i<10;i++){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=
(e.clientX-20+Math.random()*40)+"px";

h.style.top=
(e.clientY-20+Math.random()*40)+"px";

h.style.position="fixed";

h.style.animationDuration="2s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},2500);

}

});

// ==============================
// MUSIC STATUS
// ==============================

music.addEventListener("play",()=>{

musicBtn.innerHTML="⏸";

});

music.addEventListener("pause",()=>{

musicBtn.innerHTML="🎵";

});

// ==============================
// RANDOM QUOTES
// ==============================

const quotes=[

"Kamu adalah alasan senyumku ❤️",

"Semoga harimu seindah dirimu ✨",

"Aku bersyukur mengenalmu 💖",

"Selamat ulang tahun sayang 🎂",

"I Love You Forever ❤️"

];

setInterval(()=>{

if(hero.classList.contains("active")){

const p=hero.querySelector("p");

if(p){

p.innerHTML=

quotes[Math.floor(Math.random()*quotes.length)];

}

}

},5000);

// ==============================
// SMOOTH PAGE TRANSITION
// ==============================

pages.forEach(page=>{

page.addEventListener("transitionend",()=>{

page.classList.remove("fadeIn");

});

});

// ==============================
// READY
// ==============================

console.log("❤️ Birthday Website Ready ❤️");
