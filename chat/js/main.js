let dogTalk = document.querySelector(".dogTalk");
let myTalk = document.querySelector(".myTalk");
let img = document.querySelector(".dogImg img");
const chatBtn = document.getElementById("chatBtn");
let app = document.getElementById('app');



chatBtn.addEventListener('click', e => {
    e.preventDefault();
    
    activation();
});


function activation(){
    if(myTalk.value === "멍군아 안녕!") {
        img.setAttribute("src", `img/dog2.png`);
        var typewriter = new Typewriter(app, {
            loop: false,
        });
        typewriter
            .deleteAll()
            .typeString("안녕이다멍!")
            .pauseFor(1300)
            .deleteAll()
            .start();
    }else if(myTalk.value === "산책갈까?"){
        let num = Math.floor(Math.random()*2);
        if(num === 1){
            img.setAttribute("src", `img/dog3.png`);
            var typewriter = new Typewriter(app, {
                loop: false,
            });
            typewriter
                .deleteAll()
                .typeString("좋다멍! 빨리 나가자멍!")
                .pauseFor(1300)
                .deleteAll()
                .start();
        }else {
            img.setAttribute("src", `img/dog4.png`);
            var typewriter = new Typewriter(app, {
                loop: false,
            });
            typewriter
                .deleteAll()
                .typeString("귀찮다멍...저리가라 주인!")
                .pauseFor(1300)
                .deleteAll()
                .start();
        }
    }
    
    if(myTalk.value === "멍군아 사랑해"){
        img.setAttribute("src", `img/dog3.png`);
        var typewriter = new Typewriter(app, {
            loop: false,
        });
        typewriter
            .deleteAll()
            .typeString("나도 사랑한다멍!")
            .pauseFor(1300)
            .deleteAll()
            .start();
    }

    if(myTalk.value === "멍군아 뭐해?"){
        let num = Math.floor(Math.random()*2);
        if(num === 1){
            img.setAttribute("src", `img/dog5.png`);
            var typewriter = new Typewriter(app, {
                loop: false,
            });
            typewriter
                .deleteAll()
                .typeString("컹컹! 누가 왔다멍!!")
                .pauseFor(1300)
                .deleteAll()
                .start();
            
        }else {
            img.setAttribute("src", `img/dog4.png`);
            var typewriter = new Typewriter(app, {
                loop: false,
            });
            typewriter
                .deleteAll()
                .typeString("졸립다멍...zZ")
                .pauseFor(1300)
                .deleteAll()
                .start();
        }
    }
    
    myTalk.value = "";
}

