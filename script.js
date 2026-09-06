function nextScreen(number) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById("screen" + number).classList.add("active");
}

function openEnvelope() {
  nextScreen(5);

  createHearts();
}

function createHearts() {
  for (let i = 0; i < 25; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = ["❤️", "💗", "✨", "🌸"][Math.floor(Math.random() * 4)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.zIndex = "10";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    const duration = 3 + Math.random() * 3;

    heart.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1
        },
        {
          transform: `translateY(-110vh) rotate(${Math.random() * 360}deg)`,
          opacity: 0
        }
      ],
      {
        duration: duration * 1000,
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }
}
