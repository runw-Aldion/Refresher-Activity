document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");
  const html = document.documentElement;

  function updateIcon(isDark) {
    toggleButton.innerHTML = isDark ? 
      `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>` :
      `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>`;
  }

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
  
  updateIcon(html.classList.contains("dark"));

  toggleButton.addEventListener("click", () => {
    html.classList.toggle("dark");
    const newTheme = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    
    updateIcon(newTheme === "dark");
  });

  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target === mobileMenu) {
      mobileMenu.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    });
  });

  const profileImages = document.querySelectorAll("aside img");
  const imageModal = document.getElementById("imageModal");
  const zoomedImage = document.getElementById("zoomedImage");
  const closeModal = document.getElementById("closeModal");

  profileImages.forEach(image => {
    image.style.cursor = "pointer";
    image.addEventListener("click", () => {
      zoomedImage.src = image.src;
      imageModal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      imageModal.classList.add("hidden");
      document.body.style.overflow = "";
    });
  }

  if (imageModal) {
    imageModal.addEventListener("click", (event) => {
      if (event.target === imageModal) {
        imageModal.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !imageModal.classList.contains("hidden")) {
      imageModal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      mobileMenu.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  });
});

document.getElementById("sendEmailButton")?.addEventListener("click", () => {
  window.location.href = "aldion.i.viernes@email.com";
});
