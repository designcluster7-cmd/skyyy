const topbar = document.querySelector(".topbar");
const menu = document.querySelector(".menu");

menu?.addEventListener("click", () => {
  const open = topbar.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => topbar.classList.remove("open"));
});

let currentAudio = null;

document.querySelectorAll(".sample-btn").forEach(button => {
  button.addEventListener("click", () => {
    const file = button.dataset.audio;

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(file);
    currentAudio.play().catch(() => {
      alert("Add your MP3 file to assets/audio/ using the filename shown in the code.");
    });

    currentAudio.addEventListener("ended", () => {
      button.textContent = "▶ Play Sample";
    });

    document.querySelectorAll(".sample-btn").forEach(b => b.textContent = "▶ Play Sample");
    button.textContent = "⏸ Playing...";
  });
});
