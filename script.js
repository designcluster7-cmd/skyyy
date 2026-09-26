// ===============================
// SKYWOLF NAVIGATION
// ===============================

const topbar = document.querySelector(".topbar");
const menu = document.querySelector(".menu");

if (menu && topbar) {
  menu.addEventListener("click", () => {
    const open = topbar.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      topbar.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    });
  });
}


// ===============================
// VOICE SAMPLE AUDIO
// ===============================

let currentAudio = null;

document.querySelectorAll(".sample-btn").forEach(button => {

  button.addEventListener("click", () => {

    const file = button.dataset.audio;

    if (!file) {
      console.error("Audio file not found.");
      return;
    }

    // Stop currently playing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play selected audio
    currentAudio = new Audio(file);

    currentAudio.play().catch(error => {
      console.error("Audio playback error:", error);
    });

  });

});


// ===============================
// BACK TO TOP
// ===============================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }

  });

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


// ===============================
// SKYWOLF LOADER
// ===============================

setTimeout(function () {

  const loader = document.getElementById("loader");

  if (loader) {

    loader.style.opacity = "0";

    setTimeout(function () {
      loader.style.display = "none";
    }, 300);

  }

}, 500);
