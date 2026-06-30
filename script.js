const btn = document.getElementById("giftBtn");

btn.addEventListener("click", function(){

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
Semoga semua hal baik datang ke kamu ✨
</p>

</div>
`;

});
