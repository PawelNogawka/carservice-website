
const navBtn = document.querySelector(".nav__btn")
const nav = document.querySelector(".nav")

const header = document.querySelector(".header")

navBtn.addEventListener("click",function(){
  nav.classList.toggle("active")
})


window.addEventListener("scroll", function () {
  let top = window.scrollY;

  if (top > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// typing

const text = "welcome to our website we are car service.";
console.log(text);
let i = 0;
function typing() {
  if (i < text.length) {
    document.querySelector(".home__heading").textContent += text.charAt(i++);

    setTimeout(typing, 100);
  }
}

typing();

// cube

let rotate = 0;

const cubes = document.querySelectorAll(".cube");
const leftArrow = document.querySelector(".cube__left-arrow");
const rightArrow = document.querySelector(".cube__right-arrow");
const playPause = document.querySelector(".cube__play-pause");

let cubeIntrval;
let play = false;

function rotateCube() {
  cubes.forEach((cube) => {
    cube.style.transform = `rotateY(${rotate}deg)`;
  });
}

function changeClassName() {
  const i = document.querySelector(".cube__play-pause i");

  if (i.classList[1] === "fa-play") {
    i.classList.remove("fa-play");
    i.classList.add("fa-pause");
  } else {
    i.classList.remove("fa-pause");
    i.classList.add("fa-play");
  }
}

leftArrow.addEventListener("click", () => {
  rotate += 90;
  if (play) {
    changeClassName();
    play = false;
  }

  rotateCube();
  clearInterval(cubeIntrval);
});

rightArrow.addEventListener("click", () => {
  rotate -= 90;
  if (play) {
    changeClassName();
    play = false;
  }
  rotateCube();
  clearInterval(cubeIntrval);
});

playPause.addEventListener("click", () => {
  changeClassName();
  if (!play) {
    cubeIntrval = setInterval(() => {
      rotate = rotate + 90;
      rotateCube();
    }, 3000);
    play = true;
  } else {
    clearInterval(cubeIntrval);
    play = false;
  }
});

///calednar
const calendar = {};

calendar.date = new Date();

function renderCalendar(){
 
  calendar.date.setDate(1);
  
  calendar.month = calendar.date.getMonth();
  calendar.days = "";
  calendar.lastDay = new Date(
    calendar.date.getFullYear(),
    calendar.date.getMonth() + 1,
    0
  ).getDate();
  calendar.prevLastDay = new Date(
    calendar.date.getFullYear(),
    calendar.date.getMonth(),
    0
  ).getDate();
  calendar.firstDayIndex = calendar.date.getDate();
  calendar.lastDayIndex = new Date(
    calendar.date.getFullYear(),
    calendar.date.getMonth() + 1,
    0
  ).getDay();
  calendar.nextDays = 7 - calendar.lastDayIndex - 1;
  calendar.daysContainer = document.querySelector(".calendar__days-container");
  calendar.months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  calendar.heading = document.querySelector(".calendar__month");
  calendar.dateInfo = document.querySelector(".calendar__date");
  calendar.leftBtn = document.querySelector(".calendar__arrow--left");
  calendar.rightBtn = document.querySelector(".calendar__arrow--right");
  
  calendar.heading.innerHTML = calendar.months[calendar.month];
  calendar.dateInfo.innerHTML = calendar.date.toDateString();
  
  
   
    for (let x = calendar.firstDayIndex; x > 0; x--) {
      calendar.days += `<div class="calendar__day calendar__day--prev">${
        calendar.prevLastDay - x + 1
      }</div>`;
    }
  
    for (let i = 1; i < calendar.lastDay; i++) {
      calendar.days += `<div class="calendar__day calendar__day--actual">${i}</div>`;
    }
  
    for (let j = 1; j <= calendar.nextDays; j++) {
      calendar.days += `<div class="calendar__day calendar__day--next">${j}</div>`;
      calendar.daysContainer.innerHTML = calendar.days;
    }
  
  
}

renderCalendar()

calendar.leftBtn.addEventListener("click", function () {
  calendar.date.setMonth(calendar.date.getMonth() - 1);
  renderCalendar() 
});

calendar.rightBtn.addEventListener("click", function () {

  calendar.date.setMonth(calendar.date.getMonth() + 1);
  renderCalendar() 
});



//// clock


const clock = {
}

clock.hourEl = document.querySelector(".clock__needle--hours")
clock.minuteEl = document.querySelector(".clock__needle--minutes")
clock.secondEl = document.querySelector(".clock__needle--seconds")
clock.timeEl = document.querySelector(".clock__time")
clock.dateEl = document.querySelector(".clock__date")

clock.daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
clock.monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


function setTime(){
  const time = new Date()

  const month = time.getMonth()
  const hour = time.getHours()
  const day = time.getDay()

  const date = time.getDate()



  const ampm = hour >= 12 ? 'PM' : 'AM'




  const hoursForClock = hour % 12



  const minutes = time.getMinutes()
  const seconds = time.getSeconds()


  clock.hourEl.style.transform =`translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
  clock.minuteEl.style.transform =`translate(-50%,-100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
  clock.secondEl.style.transform =`translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

clock.timeEl.innerHTML = `${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

clock.dateEl.innerHTML = `${clock.daysArr[day]}, ${clock.monthsArr[month]},${date}`
}


function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setInterval(setTime,1000)



setTime()