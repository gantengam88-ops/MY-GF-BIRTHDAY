document.getElementById("giftBtn").addEventListener("click", function () {

document.body.innerHTML = `

<style>

body{
margin:0;
background:linear-gradient(180deg,#ffe4ef,#fff7fb);
font-family:Arial;
}

.letter-page{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
padding:25px;
}

.letter{

background:white;

width:550px;

max-width:90%;

padding:50px;

border-radius:35px;

text-align:center;

box-shadow:
0 25px 80px
rgba(255,120,170,.25);

animation:show .7s;
}

.seal{

font-size:60px;

margin-bottom:20px;

}

h2{

color:#ff5b95;

font-size:38px;

}

p{

color:#666;

line-height:2;

}

button{

margin-top:30px;

padding:16px 40px;

border:none;

border-radius:999px;

background:#ff77aa;

color:white;

font-size:18px;

}

@keyframes show{

from{
opacity:0;
transform:translateY(40px);
}

to{
opacity:1;
transform:translateY(0);
}

}

</style>

<div class="letter-page">

<div class="letter">

<div class="seal">
💖
</div>

<h2>
Untuk Kamu
</h2>

<p>

Selamat ulang tahun ❤️

<br><br>

Terima kasih sudah hadir.

Semoga tahun ini penuh hal baik,
bahagia, dan banyak cerita indah ✨

</p>

<button onclick="location.reload()">

Kembali

</button>

</div>

</div>

`;

});
