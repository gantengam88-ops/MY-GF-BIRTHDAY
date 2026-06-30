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
style="
display:none;
">

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

Semoga tahun ini penuh bahagia,
lebih seru,
dan banyak cerita indah ✨`;

const target=
document.getElementById(
"typing"
);

let i=0;

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

hero.classList.add(
"open"
);

setTimeout(()=>{

hero.innerHTML=`

<div class="card">

<div style="font-size:80px">

🎵

</div>

<h2>

Musik Segera Ditambahkan

</h2>

<p>

Part berikutnya:
musik + galeri 📸

</p>

</div>

`;

hero.classList.remove(
"open"
);

},600);

};

},800);

};
