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

Hari ini adalah hari yang spesial.

Semoga semua impianmu tercapai.

Semoga kamu selalu sehat.

Semoga kamu selalu bahagia.

Terima kasih sudah hadir di hidupku.

Aku bersyukur bisa mengenalmu.

Semoga kita bisa terus bersama.

I Love You Forever ❤️`;

function show(page){

document.querySelectorAll(".page").forEach(item=>{

item.classList.remove("active");

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

show(page2);

setTimeout(typeWriter,500);

};

nextBtn.onclick=function(){

show(page3);

};

lastBtn.onclick=function(){

show(page4);

};
restartBtn.onclick=function(){

show(page1);

};

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML=["💖","💕","💗","💓","💞","🤍","❤️"][Math.floor(Math.random()*7)];

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="110vh";
heart.style.fontSize=(20+Math.random()*30)+"px";
heart.style.pointerEvents="none";
heart.style.zIndex="999";
heart.style.transition="transform 8s linear, opacity 8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=`translateY(-130vh) rotate(${Math.random()*720}deg)`;
heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,400);

function createConfetti(){

for(let i=0;i<80;i++){

const c=document.createElement("div");

c.style.position="fixed";
c.style.left=Math.random()*100+"vw";
c.style.top="-20px";
c.style.width="8px";
c.style.height="14px";
c.style.borderRadius="3px";

const colors=[
"#ff4f93",
"#ff8db8",
"#ffd166",
"#7bdff2",
"#b8f2e6",
"#cdb4db"
];

c.style.background=colors[Math.floor(Math.random()*colors.length)];

c.style.pointerEvents="none";
c.style.zIndex="999";

document.body.appendChild(c);

const duration=2500+Math.random()*2500;

c.animate([
{
transform:"translateY(0) rotate(0deg)"
},
{
transform:`translateY(${window.innerHeight+50}px) rotate(${720+Math.random()*720}deg)`
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

lastBtn.onclick=function(){

show(page4);

createConfetti();

};
