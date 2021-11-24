const dogTalk = document.getElementById("dogTalk");
const myTalk = document.getElementById("myTalk");
const chatBtn = document.getElementById("chatBtn");

chatBtn.addEventListener('click', e => {
    e.preventDefault();

    let talk = myTalk.value = "멍군아 안녕!";
    console.log(talk);
});