const home = document.getElementById("home");
const letterPage = document.getElementById("letterPage");
const galleryPage = document.getElementById("galleryPage");
const endPage = document.getElementById("endPage");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");
const lastBtn = document.getElementById("lastBtn");

const typing = document.getElementById("typing");
const music = document.getElementById("music");

const message = `Happy Birthday Sayang ❤️

Hari ini adalah hari spesialmu.

Terima kasih sudah hadir dalam hidupku.

Semoga semua impianmu tercapai, selalu sehat, selalu bahagia, dan selalu tersenyum.

Aku bersyukur bisa mengenalmu.

Aku berharap kita bisa terus membuat banyak kenangan indah bersama.

I Love You Forever ❤️`;

function showPage(page){
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });
    page.classList.add("active");
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function typeText(text){
    typing.innerHTML="";
    let i=0;

    function typingEffect(){
        if(i<text.length){
            typing.innerHTML+=text.charAt(i);
            i++;
            setTimeout(typingEffect,35);
        }
    }

    typingEffect();
}

openBtn.onclick=()=>{

    showPage(letterPage);

    music.play().catch(()=>{});

    typeText(message);

};

nextBtn.onclick=()=>{

    showPage(galleryPage);

};

lastBtn.onclick=()=>{

    showPage(endPage);

    confetti();

};

function confetti(){

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.innerHTML=["💖","💕","💗","💝","🎉","✨"][Math.floor(Math.random()*6)];

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="-30px";
        heart.style.fontSize=(18+Math.random()*20)+"px";
        heart.style.transition="4s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.style.top="110vh";
            heart.style.transform=`rotate(${Math.random()*720}deg)`;
        },50);

        setTimeout(()=>{
            heart.remove();
        },4500);

    }

}
