const btn = document.getElementById("giftBtn");

btn.addEventListener("click", () => {

const hero =
document.querySelector(".hero");

hero.style.animation =
"fadeOut .8s forwards";

setTimeout(()=>{

hero.innerHTML=`

<div class="gift">

<div class="envelope">
💌
</div>

<div class="letter">

<h2>Untuk Kamu ❤️</h2>

<p>

Selamat ulang tahun.

<br><br>

Terima kasih sudah hadir.

Semoga semua hal baik
datang ke kamu ✨

</p>

</div>

</div>

`;

const env =
document.querySelector(".envelope");

const letter =
document.querySelector(".letter");

setTimeout(()=>{

env.classList.add("open");

},500);

setTimeout(()=>{

letter.classList.add("show");

},1600);

},800);

});
