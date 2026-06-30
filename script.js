const btn =
document.getElementById("giftBtn");

btn.onclick = () => {

document.body.style.transition =
"1s";

document.body.style.opacity =
"0";

setTimeout(()=>{

document.body.innerHTML=`

<div class="letter-page">

<div class="letter">

<h2>💌 Untuk Kamu</h2>

<p>
Selamat ulang tahun ya ❤️
<br><br>
Terima kasih sudah hadir,
nemenin, dan jadi bagian
dari banyak cerita.
<br><br>
Ini baru awal dari hadiah kecil ini ✨
</p>

<button onclick="location.reload()">
💖 Kembali
</button>

</div>

</div>

`;

document.body.style.opacity="1";

},900);

};
