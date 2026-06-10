'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    const targetPage = this.dataset.navTarget;

    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
      } else {
        pages[j].classList.remove("active");
      }
    }

    for (let k = 0; k < navigationLinks.length; k++) {
      navigationLinks[k].classList.remove("active");
    }

    this.classList.add("active");

    window.scrollTo(0, 0);

  });
}

// portfolio image popup functionality
const portfolioItems = document.querySelectorAll(".project-item > a");
const portfolioPopup = document.querySelector("[data-portfolio-popup]");
const portfolioPopupImg = document.querySelector("[data-portfolio-popup-img]");
const portfolioPopupCloseElements = document.querySelectorAll("[data-portfolio-popup-close]");

const getPortfolioImageForDevice = function (item) {
  const isMobile = window.innerWidth <= 768;

  const desktopImage = item.dataset.popupDesktop;
  const mobileImage = item.dataset.popupMobile;

  if (isMobile && mobileImage) {
    return mobileImage;
  }

  if (desktopImage) {
    return desktopImage;
  }

  return null;
};

const openPortfolioPopup = function (item) {
  const popupImage = getPortfolioImageForDevice(item);
  const thumbnailImage = item.querySelector(".project-img img");

  if (!popupImage) return;

  portfolioPopupImg.src = popupImage;
  portfolioPopupImg.alt = thumbnailImage ? thumbnailImage.alt : "Portfolio image";

  portfolioPopup.classList.add("active");
  document.body.classList.add("popup-open");

  portfolioPopup.querySelector(".portfolio-popup-content").scrollTop = 0;
};

const closePortfolioPopup = function () {
  portfolioPopup.classList.remove("active");
  document.body.classList.remove("popup-open");

  setTimeout(function () {
    portfolioPopupImg.src = "";
    portfolioPopupImg.alt = "";
  }, 1500);
};

for (let i = 0; i < portfolioItems.length; i++) {
  portfolioItems[i].addEventListener("click", function (event) {
    const popupImage = getPortfolioImageForDevice(this);

    if (popupImage) {
      event.preventDefault();
      openPortfolioPopup(this);
    }
  });
}

for (let i = 0; i < portfolioPopupCloseElements.length; i++) {
  portfolioPopupCloseElements[i].addEventListener("click", closePortfolioPopup);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && portfolioPopup.classList.contains("active")) {
    closePortfolioPopup();
  }
});

// soft background glow follow + idle drift
const root = document.documentElement;

let glowX = window.innerWidth / 2;
let glowY = window.innerHeight / 2;

let targetGlowX = glowX;
let targetGlowY = glowY;

let lastMouseMoveTime = Date.now();
let idleAngle = 0;

const updateGlowPosition = function () {
  const isIdle = Date.now() - lastMouseMoveTime > 1800;

  if (isIdle) {
    idleAngle += 0.006;

    targetGlowX = window.innerWidth / 2 + Math.cos(idleAngle) * 220;
    targetGlowY = window.innerHeight / 2 + Math.sin(idleAngle * 0.8) * 160;
  }

  glowX += (targetGlowX - glowX) * 0.12;
  glowY += (targetGlowY - glowY) * 0.12;
	
  root.style.setProperty("--glow-x", glowX + "px");
  root.style.setProperty("--glow-y", glowY + "px");

  requestAnimationFrame(updateGlowPosition);
};

document.addEventListener("mousemove", function (event) {
  targetGlowX = event.clientX;
  targetGlowY = event.clientY;
  lastMouseMoveTime = Date.now();
});

updateGlowPosition();

// core strengths mobile carousel dots
const serviceList = document.querySelector(".service-list");
const serviceDotsContainer = document.querySelector("[data-service-dots]");
const serviceItems = document.querySelectorAll(".service-item");

let serviceDots = [];

const createServiceDots = function () {
  if (!serviceList || !serviceDotsContainer || serviceItems.length === 0) return;

  serviceDotsContainer.innerHTML = "";
  serviceDots = [];

  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(serviceItems.length / itemsPerSlide);

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    dot.classList.add("service-carousel-dot");
    dot.setAttribute("type", "button");
    dot.setAttribute("aria-label", "Go to core strength slide " + (i + 1));

    if (i === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", function () {
      serviceList.scrollTo({
        left: serviceList.clientWidth * i,
        behavior: "smooth"
      });
    });

    serviceDotsContainer.appendChild(dot);
    serviceDots.push(dot);
  }
};

const updateServiceDots = function () {
  if (!serviceList || serviceDots.length === 0) return;

  const activeIndex = Math.round(serviceList.scrollLeft / serviceList.clientWidth);

  for (let i = 0; i < serviceDots.length; i++) {
    if (i === activeIndex) {
      serviceDots[i].classList.add("active");
    } else {
      serviceDots[i].classList.remove("active");
    }
  }
};

if (serviceList && serviceDotsContainer) {
  createServiceDots();

  serviceList.addEventListener("scroll", function () {
    window.requestAnimationFrame(updateServiceDots);
  });

  window.addEventListener("resize", function () {
    updateServiceDots();
  });
}