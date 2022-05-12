let seacrhBtn = document.querySelector("#search-btn");
let seacrhBarContainer = document.querySelector(".search-bar-container");
let searchInput = document.querySelector("#search-bar");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menuIcon = document.querySelector("#menu-bar");
let headerNavbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");
//////////////////////////////////////////////////////////////////
let closeMenu = (menu, search, all) => {
  if (menu) {
    headerNavbar.classList.remove("showMenu"),
      menuIcon.classList.remove("fa-close");
  } else if (search) {
    seacrhBtn.classList.remove("fa-close");
    seacrhBarContainer.classList.remove("show");
  } else if (all) {
    seacrhBtn.classList.remove("fa-close");
    seacrhBarContainer.classList.remove("show");
    headerNavbar.classList.remove("showMenu"),
      menuIcon.classList.remove("fa-close");
  }
};

window.onscroll = () => {
  seacrhBtn.classList.remove("fa-close");
  seacrhBarContainer.classList.remove("show");
  headerNavbar.classList.remove("showMenu");
  menuIcon.classList.remove("fa-close");
  loginForm.classList.remove("showForm");
};
//////////////////////////////////////////////////////////////////////////////
seacrhBtn.addEventListener("click", () => {
  seacrhBtn.classList.toggle("fa-close");
  seacrhBarContainer.classList.toggle("show");
  searchInput.value = "";
  closeMenu(true, false, false);
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("showForm");

  closeMenu(false, false, true);
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("showForm");
});

menuIcon.addEventListener("click", () => {
  headerNavbar.classList.toggle("showMenu");
  menuIcon.classList.toggle("fa-close");
  closeMenu(false, true, false);
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
