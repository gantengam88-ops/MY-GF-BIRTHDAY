const btn = document.getElementById("giftBtn");

if(btn){

btn.onclick=function(){

document.querySelector(".hero").innerHTML=`

<div class="card">

<h2>💌 BERHASIL</h2>

<p>
Sekarang tombol sudah bekerja.
</p>

</div>

`;

};

}
