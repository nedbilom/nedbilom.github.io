const swiper2 = new Swiper(".team__swiper-mobile .swiper", {
  slidesPerView: 2.1,
  spaceBetween: 15,
  grabCursor: true,
  breakpoints: {
    400: {
      slidesPerView: 4.5,
    },
  },
  on: {
    init: function () {
      const pagination = document.querySelector(".swiper-pagination");
      const step = 2;
      const totalSteps = Math.ceil(this.slides.length / step);

      pagination.innerHTML = "";

      for (let i = 0; i < totalSteps; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        pagination.appendChild(dot);
      }

      updatePagination(this);
    },
    slideChange: function () {
      updatePagination(this);
    },
  },
});

function updatePagination(swiper) {
  const step = 2;
  const activeIndex = Math.floor(swiper.activeIndex / step);

  const dots = document.querySelectorAll(".swiper-pagination .dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === activeIndex);
  });
}

const swiperDesktop = new Swiper(".team__swiper-desktop .swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  grabCursor: true,
  on: {
    init: function () {
      createDesktopPagination(this, ".swiper-pagination-desktop");
    },
    slideChange: function () {
      updateDesktopPagination(this, ".swiper-pagination-desktop");
    },
  },
});

function createDesktopPagination(swiper, paginationSelector) {
  const pagination = document.querySelector(paginationSelector);

  pagination.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    pagination.appendChild(dot);
  }

  updateDesktopPagination(swiper, paginationSelector);
}

function updateDesktopPagination(swiper, paginationSelector) {
  const dots = document.querySelectorAll(`${paginationSelector} .dot`);
  const totalSlides = swiper.slides.length;

  let activeIndex = Math.floor(swiper.activeIndex / 1);
  if (activeIndex >= 3) activeIndex = 2;

  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === activeIndex) {
      dot.classList.add("active");
    }
  });
}

const btn = document.querySelector(".community__cards-btn");
const cards = document.querySelector(".community__cards");
const cover = document.querySelector(".community__cards-cover");

btn.addEventListener("click", () => {
  cover.style.display = "none";
  btn.style.display = "none";
  cards.style.maxHeight = "none";
});
