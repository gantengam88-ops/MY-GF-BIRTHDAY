const btn = document.getElementById("giftBtn");

btn.addEventListener("click", () => {

document.body.style.overflow="hidden";

const hero =
document.querySelector(".hero");

hero.innerHTML = `

<div class="open">

<div class="sparkle">
✨ 💖 ✨
</div>

<div class="letter">

<div class="seal">
💌
</div>

<h2>Untuk Kamu ❤️</h2>

<p>

Selamat ulang tahun.

<br><br>

Terima kasih sudah hadir,
nemenin, dan jadi bagian
dari cerita yang indah.

<br><br>

Semoga semua hal baik
datang ke kamu ✨

</p>

<button id="nextBtn">
Lanjut →
</button>

</div>

</div>

`;

for(let i=0;i<20;i++){

const h =
document.createElement("div");

h.innerHTML="💖";

h.className="heart";

h.style.left=
Math.random()*100+"vw";

h.style.animationDelay=
Math.random()*2+"s";

document.body.appendChild(h);

}

});
