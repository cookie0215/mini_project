let dogTalk = document.getElementById("dogTalk");
let myTalk = document.getElementById("myTalk");
let img = document.querySelector(".dogImg img");
const chatBtn = document.getElementById("chatBtn");

chatBtn.addEventListener('click', e => {
    e.preventDefault();
    activation();
});

function activation(){
    if(myTalk.value === "멍군아 안녕!") {
        dogTalk.innerText = "안녕이다멍!";
        img.setAttribute("src", `img/dog2.png`);
    }else if(myTalk.value === "산책갈까?"){
        let num = Math.floor(Math.random()*2);
        if(num === 1){
            img.setAttribute("src", `img/dog3.png`);
            dogTalk.innerText = "좋다멍! 빨리 나가자멍!";
        }else {
            img.setAttribute("src", `img/dog4.png`);
            dogTalk.innerText = "귀찮다멍...저리가라 주인!";
        }
    }
    
    myTalk.value = "";
}