const btn = document.getElementById("giftBtn");

btn.addEventListener("click", () => {

const hero =
document.querySelector(".hero");

hero.innerHTML = `

<div class="letter">

<div class="seal">💌</div>

<h2>Untuk Kamu ❤️</h2>

<p>

Selamat ulang tahun.

<br><br>

Terima kasih sudah hadir,
nemenin, dan jadi bagian
dari banyak cerita indah.

<br><br>

Semoga tahun ini penuh
hal baik dan bahagia ✨

</p>

<button onclick="location.reload()">

← Kembali

</button>

</div>

`;

});
