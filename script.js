function nextScreen(number) {

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const next = document.getElementById("screen" + number);

  next.classList.add("active");
}


function openEnvelope() {

  const envelope = document.querySelector(".envelope");

  envelope.style.transform = "translateY(-10px) scale(1.08)";

  setTimeout(() => {

    nextScreen(5);

    createConfetti();

  }, 500);
}


function createConfetti() {

  const symbols = ["❤️", "✨", "🌸", "💗", "✦"];

  for (let i = 0; i < 35; i++) {

    const item = document.createElement("div");

    item.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    item.style.position = "fixed";
    item.style.left = Math.random() * 100 + "vw";
    item.style.bottom = "-30px";
    item.style.fontSize =
      (12 + Math.random() * 22) + "px";

    item.style.zIndex = "100";
    item.style.pointerEvents = "none";

    document.body.appendChild(item);

    const duration = 2.5 + Math.random() * 3;

    item.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1
        },
        {
          transform:
            `translateY(-110vh) rotate(${Math.random() * 500}deg)`,
          opacity: 0
        }
      ],
      {
        duration: duration * 1000,
        easing: "ease-out"
      }
    );

    setTimeout(() => {
      item.remove();
    }, duration * 1000);
  }
}
