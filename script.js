const btn =
document.getElementById(
"giftBtn"
);

btn.onclick=()=>{

const hero=
document.querySelector(
".hero"
);

hero.classList.add(
"open"
);

setTimeout(()=>{

hero.innerHTML=`

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
lebih bahagia,
lebih seru,
dan penuh
hal baik ✨

</p>

</div>

`;

hero.classList.remove(
"open"
);

},800);

};
