const buttonToStart = document.querySelector(".to-start");
const buttonToEnd = document.querySelector(".to-end");

const photos = ["foto8.jpg", "foto1.jpg", "foto2.jpg", "foto3.jpg", "foto6.jpg"];
let i = 0;

buttonToEnd.addEventListener("click", () => {
    i++;
    if (i > photos.length - 1) {
        i = 0;
    }
    document.querySelector(".pictures").src=photos[i];
})

buttonToStart.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    document.querySelector(".pictures").src=photos[i];
    
})

function coursesTime() {
const courses = new Date("January 25, 2025 12:00");
const now = new Date();
const diff = courses - now;

const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInHour = 60 * 60 * 1000;
const msInDay = 24 * 60 * 60 * 1000;

const displayDay = Math.floor(diff/msInDay);
document.querySelector(".inDay").textContent = displayDay;
const displayHour = Math.floor((diff%msInDay)/msInHour);
document.querySelector(".inHour").textContent = displayHour;
const displayMinute = Math.floor((diff%msInHour)/msInMinute);
document.querySelector(".inMinute").textContent = displayMinute;
const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
document.querySelector(".inSecond").textContent = displaySecond;

if (diff < 0) {
    document.querySelector(".inDay").textContent = 0;
    document.querySelector(".inHour").textContent = 0;
    document.querySelector(".inMinute").textContent = 0;
    document.querySelector(".inSecond").textContent = 0;
    clearInterval(newCoursesTime);
    changeMiddleHeading();
}
}

let newCoursesTime = setInterval(coursesTime, 1000);

function changeMiddleHeading() {
    const middleHeader = document.querySelector(".middle-heading");
    middleHeader.textContent = "ЗАПИСЬ ОТКРЫТА!"
    middleHeader.classList.add("change");
}

const btn = document.querySelector("#myButton");
const audio = document.querySelector("#myAudio");

btn.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        btn.classList.toggle("pause");
    }
    else {
        audio.pause();
        btn.classList.toggle("pause");
    }
})



