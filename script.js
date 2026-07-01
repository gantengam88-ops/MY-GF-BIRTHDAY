const loading=document.getElementById("loading");
const bar=document.getElementById("bar");

let progress=0;

const load=setInterval(()=>{

progress++;

bar.style.width=progress+"%";

if(progress>=100){

clearInterval(load);

setTimeout(()=>{

loading.style.display="none";

},500);

}

},25);

const pages=document.querySelectorAll(".page");

function showPage(page){

pages.forEach(p=>p.classList.remove("active"));

page.classList.add("active");

window.scrollTo({
top:0,
behavior:"smooth"
});

}

const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");
const page4=document.getElementById("page4");

document.getElementById("openBtn").onclick=()=>{

showPage(page2);

typeText();

};

document.getElementById("nextBtn").onclick=()=>{

showPage(page3);

};

document.getElementById("lastBtn").onclick=()=>{

showPage(page4);

};

document.getElementById("restartBtn").onclick=()=>{

location.reload();

};

const text=`Happy Birthday Sayang ❤️

Semoga semua impianmu tercapai.

Semoga kamu selalu sehat.

Semoga kamu selalu bahagia.

I hope U all the best.

❤️❤️❤️❤️`;

function typeText(){

const target=document.getElementById("typing");

target.innerHTML="";

let i=0;

const typing=setInterval(()=>{

target.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},35);

}
const photos=[
"1.jpeg",
"2.jpeg",
"3.jpeg"
];

const titles=[
"❤️ My Love ❤️",
"🌸 Beautiful Girl 🌸",
"🤍 Forever 🤍"
];

const captions=[
"Ini yang ultah ya ges yaa.",
"Cantik kan?.",
"Cantik-cantik gini tetap plenger."
];

let current=0;

const photo=document.getElementById("photo");
const title=document.getElementById("title");
const caption=document.getElementById("caption");
const dots=document.querySelectorAll(".dot");

function updateSlide(){

photo.src=photos[current];

title.innerHTML=titles[current];

caption.innerHTML=captions[current];

dots.forEach(dot=>dot.classList.remove("active"));

dots[current].classList.add("active");

}

document.getElementById("nextPhotoBtn").onclick=()=>{

current++;

if(current>=photos.length){

current=0;

}

updateSlide();

};

document.getElementById("prevBtn").onclick=()=>{

current--;

if(current<0){

current=photos.length-1;

}

updateSlide();

};

let love=0;

document.getElementById("loveBtn").onclick=()=>{

love++;

document.getElementById("loveCounter").innerHTML="❤️ "+love;

};

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.pointerEvents="none";
heart.style.transition="6s linear";
heart.style.zIndex="999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh)";
heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},6000);

},500);

updateSlide();
