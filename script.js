const btn = document.getElementById("giftBtn");

btn.addEventListener("click", () => {

const hero =
document.querySelector(".hero");

hero.innerHTML = `

<div class="gift-scene">

<div class="envelope">
💌
</div>

<div class="letter hidden">

<h2>Untuk Kamu ❤️</h2>

<p>

Selamat ulang tahun.

<br><br>

Terima kasih sudah hadir,
nemenin, dan jadi bagian
dari banyak cerita indah.

<br><br>

Semoga tahun ini penuh
hal baik ✨

</p>

</div>

</div>

`;

setTimeout(()=>{

document
.querySelector(".envelope")
.classList.add("open");

},1000);

setTimeout(()=>{

document
.querySelector(".letter")
.classList.remove("hidden");

},2200);

});
