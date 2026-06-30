const btn = document.getElementById("giftBtn");

if (btn) {

btn.addEventListener("click", function () {

const hero = document.querySelector(".hero");

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
Semoga hari ini indah ✨
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

next.onclick=function(){

hero.innerHTML=`

<div class="card">

<div style="font-size:90px">
🎵
</div>

<h2>

Playlist Untuk Kamu

</h2>

<p>

Nanti kita isi musik
dan galeri ❤️

</p>

</div>

`;

};

});

}
