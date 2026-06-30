const btn =
document.getElementById("giftBtn");

btn.onclick=()=>{

const hero=
document.querySelector(".hero");

hero.innerHTML=`

<div class="scene">

<div class="envelope">
💌
</div>

<div class="letter hidden">

<h2>Untuk Kamu ❤️</h2>

<p>

Selamat ulang tahun.

<br><br>

Makasih sudah hadir,
nemenin, dan jadi bagian
dari banyak cerita indah.

<br><br>

Semoga semua hal baik
datang ke kamu ✨

</p>

</div>

</div>

`;

setTimeout(()=>{

document
.querySelector(".envelope")
.style.transform=
"translateY(-120px) scale(1.2)";

},800);

setTimeout(()=>{

document
.querySelector(".letter")
.classList.remove("hidden");

startHearts();

},1800);

};

function startHearts(){

setInterval(()=>{

const h=
document.createElement("div");

h.className=
"heart";

h.innerHTML=
"💖";

h.style.left=
Math.random()*100+"vw";

document.body.appendChild(h);

setTimeout(
()=>h.remove(),
6000
);

},350);

}
