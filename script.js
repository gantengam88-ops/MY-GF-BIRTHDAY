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

<p id="typing"></p>

<button
id="next"
style="display:none">

Lanjut →

</button>

</div>

`;

hero.classList.remove(
"open"
);

const text=

`Selamat ulang tahun ❤️

Terima kasih sudah hadir.

Semoga tahun ini penuh bahagia ✨`;

let i=0;

const target=
document.getElementById(
"typing"
);

function type(){

if(
i<text.length
){

target.innerHTML+=
text[i]
==="\\n"
?
"<br>"
:
text[i];

i++;

setTimeout(
type,
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

type();

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

Nanti tinggal
ganti file musik ❤️

</p>

<audio
id="music"
controls>

<source
src=""
type="audio/mp3">

</audio>

<br>

<button
id="next2">

Buka Galeri 📸

</button>

</div>

`;

document
.getElementById(
"next2"
)
.onclick=()=>{

hero.innerHTML=`

<div class="card">

<div style="
font-size:90px">

📸

</div>

<h2>

Galeri Akan Dibuat

</h2>

<p>

Selanjutnya:
foto + confetti

</p>

</div>

`;

};

};

},800);

};
