// const spanClock = document.getElementById("clock");
// const minute = documnet.getElementById("minutes");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     firstDiv.style.width = "300px";
//     firstDiv.style.height = "300px";
//     setTimeout(() => {
//       firstDiv.style.borderRadius = "50%";
//       setTimeout(() => {
//         firstDiv.style.border = "1px solid red";
//       }, 3000);
//     }, 3000);
//   }, 3000);

const minuteSpan = document.getElementById("minutes");
const secondSpan = document.getElementById("seconds");
const btn = document.getElementById("btn");
const btnReset = document.getElementById("reset");

let x = 0;
let minute = 0;
let timerId;

btn.addEventListener("click", () => {
  if (!timerId) {
    timerId = setInterval(() => {
      if (x < 59) {
        secondSpan.innerHTML = x < 10 ? `0${x++}` : x++;
      } else {
        x = 0;
        minute++;
        minuteSpan.innerHTML = x < 10 ? `0${minute}` : minute;
      }
    }, 100);
  }
});

btnReset.addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    x = 0;
    secondSpan.innerHTML = "00";
    minuteSpan.innerHTML = "00";
  }
});
