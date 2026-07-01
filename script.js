const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const typing = document.getElementById("typing");

const text = `Happy Birthday Sayang ❤️

Hari ini adalah hari yang spesial.

Semoga semua impianmu tercapai.

Semoga kamu selalu sehat, selalu tersenyum, dan selalu bahagia.

Terima kasih sudah hadir dalam hidupku.

Aku sangat bersyukur bisa mengenalmu.

I Love You Forever ❤️`;

function show(page){
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });
    page.classList.add("active");
}

function typeWriter(){

    typing.innerHTML="";
    let i=0;

    function write(){

        if(i<text.length){

            typing.innerHTML += text.charAt(i);
            i++;

            setTimeout(write,40);

        }

    }

    write();

}

startBtn.onclick=()=>{

    show(page2);

    typeWriter();

}

nextBtn.onclick=()=>{

    show(page3);

}

restartBtn.onclick=()=>{

    location.reload();

}
