const myTalk = document.getElementById("myTalk");
const chatBtn = document.getElementById("chatBtn");

chatBtn.addEventListener('click', e => {
    e.preventDefault();

    console.log("말하기");
});