var countDownDate = new Date("Nov 13, 2022 15:30").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `
  <div class="d-flex justify-content-center">
    <div class="cuenta " ><div>
    <div class=" txt-pink">${days}</div><div class="cuenta-regresiva"> días</div>
    </div>
    <div>
    <div class=" txt-pink">${hours}</div><div class="cuenta-regresiva"> horas</div>
    </div>
    <div>
    <div class=" txt-pink">${minutes}</div><div class="cuenta-regresiva"> min</div>
    </div>
    </div>
    </div>
    `;
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// -------------------------------AUDIO
const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});

function abrir() {
  document.getElementById("sobre-arriba").classList.add("animate__fadeOutUp");
  document.getElementById("sobre-abajo").classList.add("animate__slideOutDown");
  document.getElementById("logo").classList.remove("animate__infinite");
  document.getElementById("pulsa").classList.add("hide");
  document.getElementById("parent-div").classList.remove("test-class");
  document.getElementsByTagName("body")[0].classList.remove("avoiding-scroll");

  window.scrollTo(0, 0);
  setTimeout(function () {
    document.getElementById("logo").classList.add("hide");
    document.getElementById("hoja-principal").classList.add("hide");
    document.getElementById("invitacion").classList.remove("hide");
    document.getElementById("nombre").classList.add("animate__zoomIn");
    document.getElementById("img-1").classList.add("animate__slideInUp");
    audio.play();
  }, 2500);
}
