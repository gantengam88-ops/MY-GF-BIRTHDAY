const btn =
document.getElementById(
"giftBtn"
);

btn.onclick = () => {

const hero =
document.querySelector(
".hero"
);

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

Semoga tahun ini
lebih bahagia ✨

</p>

<button id="next">

Lanjut →

</button>

</div>

`;

document
.getElementById(
"next"
)
.onclick=()=>{

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

Sekarang website
sudah jalan lagi 🎉

</p>

<button id="back">

← Kembali

</button>

</div>

`;

document
.getElementById(
"back"
)
onclick=
()=>location.reload();

};

};
