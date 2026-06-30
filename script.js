const btn = document.getElementById("giftBtn");

if (btn) {

btn.addEventListener("click", function () {

const hero =
document.querySelector(".hero");

hero.innerHTML = `

<div class="card">

<div class="mail">
💌
</div>

<h2>
Untuk Kamu ❤️
</h2>

<p>

Selamat ulang tahun.

<br><br>

Terima kasih sudah hadir.

Semoga hari ini indah ✨

</p>

</div>

`;

});

}
