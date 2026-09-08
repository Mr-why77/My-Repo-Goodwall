const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {

  message.textContent =
    "🚀 The first step begins. Let's shape the future together!";

  startBtn.textContent = "I'm Ready! ✓";

  startBtn.disabled = true;

  startBtn.style.opacity = "0.85";

});
