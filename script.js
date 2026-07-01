const loading=document.getElementById("loading");
const progress=document.getElementById("progress");

let load=0;

const loadingInterval=setInterval(()=>{

load++;

progress.style.width=load+"%";

if(load>=100){

clearInterval(loadingInterval);

setTimeout(()=>{

loading.style.opacity="0";

setTimeout(()=>{

loading.style.display="none";

},800);

},300);

}

},25);

const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");
const page4=document.getElementById("page4");

const openBtn=document.getElementById("openBtn");
const nextBtn=document.getElementById("nextBtn");
const lastBtn=document.getElementById("lastBtn");
const restartBtn=document.getElementById("restartBtn");

const typing=document.getElementById("typing");

const message=`Happy Birthday Sayang ❤️

Hari ini adalah hari yang sangat spesial.

Semoga semua impianmu tercapai.

Semoga kamu selalu sehat.

Selalu bahagia.

Selalu tersenyum.

Terima kasih sudah hadir di hidupku.

Aku bersyukur bisa mengenalmu.

Aku sayang kamu lebih dari yang bisa kuucapkan.

I Love You Forever ❤️`;

function show(page){

document.querySelectorAll(".page").forEach(p=>{

p.classList.remove("active");

});

page.classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

function typeWriter(){

typing.innerHTML="";

let i=0;

function write(){

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(write,35);

}

}

write();

}

openBtn.onclick=function(){

document.querySelector(".envelope").classList.add("open");

show(page2);

setTimeout(typeWriter,700);

};
nextBtn.onclick=function(){

show(page3);

};

lastBtn.onclick=function(){

show(page4);

createConfetti();

};

restartBtn.onclick=function(){

show(page1);

loveCount=0;

loveText.innerHTML="❤️ 0";

document.querySelector(".envelope").classList.remove("open");

};


// =====================
// SLIDER FOTO
// =====================

const slides=document.querySelectorAll(".slide");

const prevBtn=document.getElementById("prevBtn");

const nextPhotoBtn=document.getElementById("nextPhotoBtn");

let current=0;

function showSlide(index){

slides.forEach(slide=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

nextPhotoBtn.onclick=function(){

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

};

prevBtn.onclick=function(){

current--;

if(current<0){

current=slides.length-1;

}

showSlide(current);

};


// =====================
// LOVE COUNTER
// =====================

const loveBtn=document.getElementById("loveBtn");

const loveText=document.getElementById("countLove");

let loveCount=0;

loveBtn.onclick=function(){

loveCount++;

loveText.innerHTML="❤️ "+loveCount;

loveBtn.style.transform="scale(1.15)";

setTimeout(()=>{

loveBtn.style.transform="scale(1)";

},150);

};


// =====================
// CONFETTI
// =====================

function createConfetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.width="10px";

c.style.height="16px";

c.style.borderRadius="3px";

const colors=[

"#ff4f93",

"#ffd166",

"#7bdff2",

"#b8f2e6",

"#cdb4db",

"#ffffff"

];

c.style.background=colors[Math.floor(Math.random()*colors.length)];

c.style.pointerEvents="none";

c.style.zIndex="9999";

document.body.appendChild(c);

const duration=2500+Math.random()*2500;

c.animate([

{

transform:"translateY(0) rotate(0deg)"

},

{

transform:`translateY(${window.innerHeight+80}px) rotate(${720+Math.random()*720}deg)`

}

],{

duration:duration,

easing:"linear"

});

setTimeout(()=>{

c.remove();

},duration);

}

}


// =====================
// HATI BERTERBANGAN
// =====================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML=["💖","💕","💗","💓","💞","❤️","🤍"][Math.floor(Math.random()*7)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="105vh";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.transition="8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=`translateY(-120vh) rotate(${Math.random()*720}deg)`;

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,450);
