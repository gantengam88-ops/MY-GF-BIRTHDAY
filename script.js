const btn = document.getElementById("giftBtn");

if (btn) {

btn.addEventListener("click", function () {

const hero =
document.querySelector(".hero");

if (!hero) return;

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

<br><br>

Semoga semua hal baik
datang ke kamu ✨

</p>

<br>

<button id="nextBtn">

Lanjut →

</button>

</div>

`;

const next =
document.getElementById(
"nextBtn"
);

if(next){

next.addEventListener(
"click",
function(){

hero.innerHTML=`

<div class="card">

<div style="
font-size:90px">

🎵

</div>

<h2>

Playlist Untuk Kamu

</h2>

<p>

Part berikutnya:
musik + galeri ❤️

</p>

</div>

`;

}

);

}

});

}
