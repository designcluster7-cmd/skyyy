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

// =========================
// SKYWOLF MOBILE MENU
// =========================

const menuButton = document.querySelector(".menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

});

// BACK TO TOP
const backToTop = document.getElementById("backToTop");

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

// SKYWOLF LOADER
setTimeout(function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";
        setTimeout(function () {
            loader.style.display = "none";
        }, 300);
    }
}, 500);

// SECTION REVEAL ANIMATION
const revealSections = document.querySelectorAll("section");
revealSections.forEach((section) => {
    section.classList.add("reveal");
});


function revealOnScroll() {
    revealSections.forEach((section) => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.classList.add("reveal-show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
