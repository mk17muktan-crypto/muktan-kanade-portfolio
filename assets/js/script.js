'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials carousel + read more modal
const testimonialsList = document.querySelector("[data-testimonials-list]");
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const testimonialDotsContainer = document.querySelector("[data-testimonial-dots]");
const testimonialPrevBtn = document.querySelector("[data-testimonial-prev]");
const testimonialNextBtn = document.querySelector("[data-testimonial-next]");

const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalOccupation = document.querySelector("[data-modal-occupation]");
const modalCompany = document.querySelector("[data-modal-company]");


const openTestimonialModal = function (item) {
  if (!modalContainer) return;

  const avatar = item.querySelector("[data-testimonials-avatar]");
  const title = item.querySelector("[data-testimonials-title]");
  const text = item.querySelector("[data-testimonials-text]");
  const occupation = item.querySelector("[data-testimonials-occupation]");
  const company = item.querySelector("[data-testimonials-company]");

  if (avatar && modalImg) {
    modalImg.src = avatar.src;
    modalImg.alt = avatar.alt;
  }

  if (title && modalTitle) {
    modalTitle.innerText = title.innerText;
  }

  if (text && modalText) {
    modalText.innerHTML = `<p>${text.innerText}</p>`;
  }

  if (occupation && modalOccupation) {
    modalOccupation.innerText = occupation.innerText;
  }

  if (company && modalCompany) {
    modalCompany.innerText = company.innerText;
    modalCompany.href = company.href || "https://imepl.com/";
  }


  modalContainer.classList.remove("is-closing");
  modalContainer.classList.add("active");

  if (overlay) overlay.classList.add("active");

  document.body.classList.add("testimonial-modal-open");
};

const closeTestimonialModal = function () {
  if (!modalContainer || !modalContainer.classList.contains("active")) return;

  modalContainer.classList.add("is-closing");

  if (overlay) overlay.classList.remove("active");

  setTimeout(function () {
    modalContainer.classList.remove("active", "is-closing");
    document.body.classList.remove("testimonial-modal-open");
  }, 720);
};

// testimonial read more + modal close events
for (let i = 0; i < testimonialsItem.length; i++) {
  const readMoreButton = testimonialsItem[i].querySelector("[data-testimonials-read-more]");

  if (readMoreButton) {
    readMoreButton.addEventListener("click", function () {
      openTestimonialModal(testimonialsItem[i]);
    });
  }
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeTestimonialModal);
}

if (overlay) {
  overlay.addEventListener("click", closeTestimonialModal);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modalContainer && modalContainer.classList.contains("active")) {
    closeTestimonialModal();
  }
});

// testimonial carousel dots + desktop arrows
let testimonialDots = [];
let currentTestimonialPage = 0;

const getTestimonialItems = function () {
  return Array.from(document.querySelectorAll("[data-testimonials-item]"));
};

const getTestimonialsPerView = function () {
  return window.innerWidth > 580 ? 2 : 1;
};

const getTestimonialPageCount = function () {
  const items = getTestimonialItems();
  return Math.ceil(items.length / getTestimonialsPerView());
};

const updateTestimonialArrows = function () {
  const pageCount = getTestimonialPageCount();

  if (testimonialPrevBtn) {
    testimonialPrevBtn.classList.toggle("is-hidden", currentTestimonialPage <= 0);
  }

  if (testimonialNextBtn) {
    testimonialNextBtn.classList.toggle("is-hidden", currentTestimonialPage >= pageCount - 1);
  }
};

const setTestimonialActivePage = function (pageIndex) {
  const pageCount = getTestimonialPageCount();

  currentTestimonialPage = Math.max(0, Math.min(pageIndex, pageCount - 1));

  testimonialDots.forEach(function (dot, index) {
    dot.classList.toggle("active", index === currentTestimonialPage);
  });

  updateTestimonialArrows();
};

const scrollToTestimonialPage = function (pageIndex) {
  if (!testimonialsList) return;

  const items = getTestimonialItems();
  const perView = getTestimonialsPerView();
  const pageCount = getTestimonialPageCount();

  const safePageIndex = Math.max(0, Math.min(pageIndex, pageCount - 1));
  const targetIndex = safePageIndex * perView;
  const targetItem = items[targetIndex];

  if (!targetItem) return;

  const maxScrollLeft = testimonialsList.scrollWidth - testimonialsList.clientWidth;
  const isLastPage = safePageIndex === pageCount - 1;

  testimonialsList.scrollTo({
    left: isLastPage ? maxScrollLeft : targetItem.offsetLeft,
    behavior: "smooth"
  });

  setTestimonialActivePage(safePageIndex);
};

const updateTestimonialDots = function () {
  if (!testimonialsList || testimonialDots.length === 0) return;

  const items = getTestimonialItems();
  const perView = getTestimonialsPerView();
  const pageCount = getTestimonialPageCount();
  const maxScrollLeft = testimonialsList.scrollWidth - testimonialsList.clientWidth;

  let activeItemIndex = 0;

  if (testimonialsList.scrollLeft >= maxScrollLeft - 3) {
    activeItemIndex = items.length - 1;
  } else {
    const listCenter = testimonialsList.scrollLeft + testimonialsList.clientWidth / 2;
    let closestDistance = Infinity;

    items.forEach(function (item, index) {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(listCenter - itemCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        activeItemIndex = index;
      }
    });
  }

  const activePageIndex = Math.min(
    pageCount - 1,
    Math.floor(activeItemIndex / perView)
  );

  setTestimonialActivePage(activePageIndex);
};

const createTestimonialDots = function () {
  if (!testimonialsList || !testimonialDotsContainer || testimonialsItem.length === 0) return;

  testimonialDotsContainer.innerHTML = "";
  testimonialDots = [];

  const pageCount = getTestimonialPageCount();

  for (let index = 0; index < pageCount; index++) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.classList.add("testimonial-carousel-dot");

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", function () {
      scrollToTestimonialPage(index);
    });

    testimonialDotsContainer.appendChild(dot);
    testimonialDots.push(dot);
  }

  setTestimonialActivePage(0);
};

if (testimonialPrevBtn) {
  testimonialPrevBtn.addEventListener("click", function () {
    scrollToTestimonialPage(currentTestimonialPage - 1);
  });
}

if (testimonialNextBtn) {
  testimonialNextBtn.addEventListener("click", function () {
    scrollToTestimonialPage(currentTestimonialPage + 1);
  });
}

if (testimonialsList && testimonialDotsContainer) {
  createTestimonialDots();

  testimonialsList.addEventListener("scroll", function () {
    window.requestAnimationFrame(updateTestimonialDots);
  });

  window.addEventListener("resize", function () {
    createTestimonialDots();
    updateTestimonialDots();
  });

  updateTestimonialDots();
}


// portfolio filter variables
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

};

// portfolio category button click
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

const selectedValue = this.dataset.filterValue || this.querySelector(".portfolio-category-text").innerText.toLowerCase();
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
this.classList.add("active");

this.scrollIntoView({
  behavior: "smooth",
  inline: "center",
  block: "nearest"
});

lastClickedBtn = this;

  });

}

// show Live Projects by default
if (filterBtn.length > 0) {
  filterFunc("live projects");
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

  document.body.classList.remove("page-about", "page-resume", "page-portfolio", "page-contact");
  document.body.classList.add("page-" + targetPage);
	
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

// set initial page class on load
const initialActiveNav = document.querySelector("[data-nav-link].active");

if (initialActiveNav) {
  document.body.classList.add("page-" + initialActiveNav.dataset.navTarget);
}

// custom contact multi-select dropdown
const customSelect = document.querySelector("[data-custom-select]");

if (customSelect) {
  const customSelectTrigger = customSelect.querySelector("[data-custom-select-trigger]");
  const customSelectOptions = customSelect.querySelectorAll("[data-custom-select-option]");
  const selectedTagsContainer = customSelect.querySelector("[data-selected-tags]");
  const interestHiddenInput = customSelect.querySelector(".interest-hidden-input");

  let selectedOptions = [];

  const updateSelectedTags = function () {
    selectedTagsContainer.innerHTML = "";

    if (selectedOptions.length === 0) {
      selectedTagsContainer.innerHTML = '<span class="select-placeholder">I\'m Interested In</span>';
    } else {
      for (let i = 0; i < selectedOptions.length; i++) {
        const tag = document.createElement("span");
        tag.classList.add("selected-tag");
        tag.innerHTML = `
          ${selectedOptions[i]}
          <button type="button" aria-label="Remove ${selectedOptions[i]}" data-remove-option="${selectedOptions[i]}">
            <ion-icon name="close-outline"></ion-icon>
          </button>
        `;

        selectedTagsContainer.appendChild(tag);
      }
    }

    interestHiddenInput.value = selectedOptions.join(", ");
    interestHiddenInput.dispatchEvent(new Event("input", { bubbles: true }));
    interestHiddenInput.dispatchEvent(new Event("change", { bubbles: true }));
  };

  customSelectTrigger.addEventListener("click", function () {
    customSelect.classList.toggle("active");
  });

  for (let i = 0; i < customSelectOptions.length; i++) {
    customSelectOptions[i].addEventListener("click", function () {
      const selectedValue = this.dataset.customSelectOption;

      if (selectedOptions.includes(selectedValue)) {
        selectedOptions = selectedOptions.filter(function (option) {
          return option !== selectedValue;
        });

        this.classList.remove("selected");
      } else {
        selectedOptions.push(selectedValue);
        this.classList.add("selected");
      }

      updateSelectedTags();
    });
  }

  selectedTagsContainer.addEventListener("click", function (event) {
    const removeButton = event.target.closest("[data-remove-option]");

    if (!removeButton) return;

    event.stopPropagation();

    const optionToRemove = removeButton.dataset.removeOption;

    selectedOptions = selectedOptions.filter(function (option) {
      return option !== optionToRemove;
    });

    for (let i = 0; i < customSelectOptions.length; i++) {
      if (customSelectOptions[i].dataset.customSelectOption === optionToRemove) {
        customSelectOptions[i].classList.remove("selected");
      }
    }

    updateSelectedTags();
  });

  document.addEventListener("click", function (event) {
    if (!customSelect.contains(event.target)) {
      customSelect.classList.remove("active");
    }
  });

  updateSelectedTags();
}

// mobile portfolio category slow idle auto-scroll
const portfolioCategoryMenu = document.querySelector(".portfolio-category-menu");

if (portfolioCategoryMenu) {
  let categoryScrollDirection = 1;
  let categoryIdleTimer;
  let categoryAutoScrollFrame;
  let isCategoryAutoScrolling = false;

  const stopCategoryAutoScroll = function () {
    isCategoryAutoScrolling = false;

    if (categoryAutoScrollFrame) {
      cancelAnimationFrame(categoryAutoScrollFrame);
    }
  };

  const startCategoryAutoScroll = function () {
    if (window.innerWidth > 580) return;

    isCategoryAutoScrolling = true;

    const autoScroll = function () {
      if (!isCategoryAutoScrolling) return;

      const maxScrollLeft = portfolioCategoryMenu.scrollWidth - portfolioCategoryMenu.clientWidth;

      if (portfolioCategoryMenu.scrollLeft >= maxScrollLeft - 1) {
        categoryScrollDirection = -1;
      }

      if (portfolioCategoryMenu.scrollLeft <= 1) {
        categoryScrollDirection = 1;
      }

      portfolioCategoryMenu.scrollLeft += categoryScrollDirection * 0.35;

      categoryAutoScrollFrame = requestAnimationFrame(autoScroll);
    };

    autoScroll();
  };

  const resetCategoryIdleScroll = function () {
    stopCategoryAutoScroll();

    clearTimeout(categoryIdleTimer);

    categoryIdleTimer = setTimeout(function () {
      startCategoryAutoScroll();
    }, 5000);
  };

  portfolioCategoryMenu.addEventListener("touchstart", resetCategoryIdleScroll);
  portfolioCategoryMenu.addEventListener("mousedown", resetCategoryIdleScroll);
  portfolioCategoryMenu.addEventListener("wheel", resetCategoryIdleScroll);
  portfolioCategoryMenu.addEventListener("scroll", function () {
    if (!isCategoryAutoScrolling) {
      resetCategoryIdleScroll();
    }
  });

  window.addEventListener("resize", function () {
    resetCategoryIdleScroll();
  });

  resetCategoryIdleScroll();
}

// open correct section/category when coming back from portfolio-detail.html
const pageUrlParams = new URLSearchParams(window.location.search);
const requestedSection = pageUrlParams.get("section");
const requestedCategory = pageUrlParams.get("category");

const openRequestedSectionAndCategory = function () {
  if (!requestedSection) return;

  const targetNav = document.querySelector(`[data-nav-target="${requestedSection}"]`);

  if (targetNav) {
    targetNav.click();
  }

  if (requestedSection === "portfolio" && requestedCategory) {
    const categoryText = requestedCategory.replace(/-/g, " ");

    filterFunc(categoryText);

    for (let i = 0; i < filterBtn.length; i++) {
      const buttonText = filterBtn[i].querySelector(".portfolio-category-text").innerText.toLowerCase();

      if (buttonText === categoryText) {
        filterBtn[i].classList.add("active");
        lastClickedBtn = filterBtn[i];

        filterBtn[i].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      } else {
        filterBtn[i].classList.remove("active");
      }
    }
  }
};

// mobile main navbar hide/show on scroll
const initMobileMainNavHideOnScroll = function () {
  const mainNavbar = document.querySelector(".navbar");

  if (!mainNavbar) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    if (window.innerWidth > 580) {
      mainNavbar.classList.remove("is-hidden");
      lastScrollY = Math.max(currentScrollY, 0);
      return;
    }

    const scrollingDown = currentScrollY > lastScrollY + 4;
    const scrollingUp = currentScrollY < lastScrollY - 4;

    if (currentScrollY > 90 && scrollingDown) {
      mainNavbar.classList.add("is-hidden");
    }

    if (scrollingUp || currentScrollY <= 40) {
      mainNavbar.classList.remove("is-hidden");
    }

    lastScrollY = Math.max(currentScrollY, 0);
  }, { passive: true });
};

initMobileMainNavHideOnScroll();

openRequestedSectionAndCategory();