const btn = document.getElementById("giftBtn");

btn.onclick = function () {

const hero =
document.querySelector(".hero");

hero.classList.add("open");

setTimeout(()=>{

hero.innerHTML=`

<div class="card">

<div class="mail">
💌
</div>

<h2>
Untuk Kamu ❤️
</h2>

<p id="typing"></p>

<button id="next">
Lanjut →
</button>

</div>

`;

let text = `
Selamat ulang tahun ❤️

Terima kasih sudah hadir.

Semoga tahun ini
lebih bahagia ✨
`;

let i = 0;

let target =
document.getElementById(
"typing"
);

document
.getElementById(
"next"
)
.style.display=
"none";

function ketik(){

if(
i<
text.length
){

target.innerHTML+=
text[i]
=="\n"
?
"<br>"
:
text[i];

i++;

setTimeout(
ketik,
35
);

}

else{

document
.getElementById(
"next"
)
.style.display=
"inline-block";

}

}

ketik();

document
.getElementById(
"next"
)
.onclick=()=>{

hero.innerHTML=`

<div class="card">

<div style="font-size:90px">

🎵

</div>

<h2>

Playlist Untuk Kamu

</h2>

<p>

Tekan play ❤️

</p>

<audio controls>

<source
src=""
type="audio/mp3">

</audio>

<br><br>

<button id="gallery">

Buka Galeri 📸

</button>

</div>

`;

document
.getElementById(
"gallery"
)
.onclick=()=>{

hero.innerHTML=`

<div class="card">

<div style="font-size:90px">

📸

</div>

<h2>

Galeri Foto

</h2>

<p>

Nanti isi foto
di sini ❤️

</p>

</div>

`;

};

};

},800);

};
