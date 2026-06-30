const btn =
document.getElementById("giftBtn");

btn.onclick=()=>{

document.body.style.transition=
"1s";

document.body.style.opacity=
".2";

setTimeout(()=>{

alert(
"Part 2 akan membuka hadiah 💌"
);

document.body.style.opacity=
"1";

},900);

};
