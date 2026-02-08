const teddy = document.getElementById("teddy");
const speech = document.getElementById("speech");
const gift = document.getElementById("gift");
const content = document.getElementById("content");
const music = document.getElementById("music");

// When teddy reaches the spot
setTimeout(() => {
  // Stop walking animation (swap GIF)
  teddy.src = "./assets/teddy-idle.png";

  // Add wave
  teddy.classList.add("wave");

  // Show speech and gift
  speech.classList.add("show");
  gift.classList.add("show");
}, 5000);

// Gift click → reveal video
gift.addEventListener("click", () => {
  content.classList.add("show");
  speech.innerHTML = "Surpriseee ❤️";
  music.play();
});
