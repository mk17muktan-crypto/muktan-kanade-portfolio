"use strict";

const params = new URLSearchParams(window.location.search);
const projectId = params.get("project") || "graphic-design-dagdushet-ganpati";
const project = portfolioProjects[projectId];

if (!project) {
  document.body.innerHTML = "<main class='case-main'><h1 style='color:white;'>Project not found</h1></main>";
}

const createPlaceholder = function (label) {
  const div = document.createElement("div");
  div.classList.add("case-img-placeholder");
  div.innerText = label || "Placeholder Image";
  return div;
};

const createImageItem = function (item) {
  if (!item || item.type === "placeholder") {
    return createPlaceholder(item ? item.label : "Placeholder Image");
  }

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt || "";
  img.loading = "lazy";
  return img;
};

const fillTextContent = function () {
  document.title = project.title + " | Muktan Kanade Portfolio";

  document.querySelector("[data-case-title]").innerText = project.title;
  document.querySelector("[data-case-industry]").innerText = "Industry: " + project.industry;
  document.querySelector("[data-case-breadcrumb]").innerText = project.breadcrumb;
  document.querySelector("[data-client-description]").innerText = project.description;
  const backButton = document.querySelector("[data-case-back]");

if (backButton) {
  backButton.href = "./index.html?section=portfolio&category=" + project.categorySlug;
}
};

const renderList = function (selector, items) {
  const list = document.querySelector(selector);
  list.innerHTML = "";

  items.forEach(function (text) {
    const li = document.createElement("li");
    li.innerText = text;
    list.appendChild(li);
  });
};

const initCarousel = function (root, startIndex = 1) {
  const track = root.querySelector("[data-carousel-track]");
  const dotsContainer = root.querySelector("[data-carousel-dots]");
  const slides = Array.from(track.children);

  let currentIndex = startIndex;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  dotsContainer.innerHTML = "";

  slides.forEach(function (_, index) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.classList.add("case-dot");

    dot.addEventListener("click", function () {
      goToSlide(index);
    });

    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  const getPrevIndex = function () {
    return currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  };

  const getNextIndex = function () {
    return currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  };

  function updateCarousel() {
    const prevIndex = getPrevIndex();
    const nextIndex = getNextIndex();

    slides.forEach(function (slide, index) {
      slide.classList.remove("is-active", "is-prev", "is-next");

      if (index === currentIndex) {
        slide.classList.add("is-active");
      } else if (index === prevIndex) {
        slide.classList.add("is-prev");
      } else if (index === nextIndex) {
        slide.classList.add("is-next");
      }
    });

    dots.forEach(function (dot, index) {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    currentIndex = index;
    updateCarousel();
  }

  root.addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX;
    currentX = startX;
    isDragging = true;
  });

  root.addEventListener("touchmove", function (event) {
    if (!isDragging) return;
    currentX = event.touches[0].clientX;
  });

  root.addEventListener("touchend", function () {
    if (!isDragging) return;

    const diff = currentX - startX;

    if (Math.abs(diff) > 40) {
      if (diff < 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
    }

    isDragging = false;
  });

  root.addEventListener("wheel", function (event) {
    if (Math.abs(event.deltaX) < 8 && Math.abs(event.deltaY) < 20) return;

    event.preventDefault();

    if (event.deltaX > 0 || event.deltaY > 0) {
      goToSlide(currentIndex + 1);
    } else {
      goToSlide(currentIndex - 1);
    }
  }, { passive: false });

  updateCarousel();
};
const renderHeroCarousel = function () {
  const root = document.querySelector("[data-hero-carousel]");
  const track = root.querySelector("[data-carousel-track]");

  track.innerHTML = "";

  project.heroImages.slice(0, 3).forEach(function (item) {
    const slide = document.createElement("div");
    slide.classList.add("case-carousel-slide");
    slide.appendChild(createImageItem(item));
    track.appendChild(slide);
  });

  initCarousel(root, 1);
};

const renderClientStrip = function () {
  const strip = document.querySelector("[data-client-strip]");
  strip.innerHTML = "";

  const images = project.clientImages.length ? project.clientImages : [
    { type: "placeholder", label: "Client Image 01" },

    { type: "placeholder", label: "Client Image 02" },
    { type: "placeholder", label: "Client Image 03" },
    { type: "placeholder", label: "Client Image 04" }
  ];

  const doubledImages = images.concat(images);

  doubledImages.forEach(function (item) {
    const wrap = document.createElement("div");
    wrap.classList.add("client-strip-item");
    wrap.appendChild(createImageItem(item));
    strip.appendChild(wrap);
  });
};

let currentPreviewItems = [];
let currentPreviewIndex = 0;

const casePreview = document.querySelector("[data-case-preview]");
const casePreviewStage = document.querySelector("[data-case-preview-stage]");
const casePreviewThumbs = document.querySelector("[data-case-preview-thumbs]");
const casePreviewPrev = document.querySelector("[data-case-preview-prev]");
const casePreviewNext = document.querySelector("[data-case-preview-next]");
const casePreviewCloseElements = document.querySelectorAll("[data-case-preview-close]");

const renderPreviewImage = function () {
  if (!casePreview || !casePreviewStage || !casePreviewThumbs) return;

  casePreviewStage.innerHTML = "";

  const frame = document.createElement("div");
  frame.classList.add("case-preview-frame");
  frame.appendChild(createImageItem(currentPreviewItems[currentPreviewIndex]));

  casePreviewStage.appendChild(frame);

  casePreviewThumbs.innerHTML = "";

  currentPreviewItems.forEach(function (item, index) {
    const thumb = document.createElement("button");
    thumb.type = "button";
    thumb.classList.add("case-preview-thumb");

    if (index === currentPreviewIndex) {
      thumb.classList.add("active");
    }

    thumb.appendChild(createImageItem(item));

    thumb.addEventListener("click", function () {
      currentPreviewIndex = index;
      renderPreviewImage();
    });

    casePreviewThumbs.appendChild(thumb);
  });

  casePreviewPrev.classList.toggle("is-hidden", currentPreviewIndex === 0);
  casePreviewNext.classList.toggle("is-hidden", currentPreviewIndex === currentPreviewItems.length - 1);
};

const openCasePreview = function (items, index) {
  if (!casePreview) return;

  currentPreviewItems = items;
  currentPreviewIndex = index;

  renderPreviewImage();

  casePreview.classList.add("active");
  document.body.classList.add("case-preview-open");
};

const closeCasePreview = function () {
  if (!casePreview) return;

  casePreview.classList.remove("active");
  document.body.classList.remove("case-preview-open");
};

if (casePreviewPrev) {
  casePreviewPrev.addEventListener("click", function () {
    if (currentPreviewIndex <= 0) return;

    currentPreviewIndex -= 1;
    renderPreviewImage();
  });
}

if (casePreviewNext) {
  casePreviewNext.addEventListener("click", function () {
    if (currentPreviewIndex >= currentPreviewItems.length - 1) return;

    currentPreviewIndex += 1;
    renderPreviewImage();
  });
}

casePreviewCloseElements.forEach(function (item) {
  item.addEventListener("click", closeCasePreview);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeCasePreview();
  }
});

const renderGalleries = function () {
  const galleries = document.querySelectorAll("[data-gallery]");

  galleries.forEach(function (gallery) {
    const key = gallery.dataset.gallery;
    const items = project.galleries[key] || [];

    gallery.innerHTML = "";

    items.forEach(function (item, index) {
      const galleryItem = document.createElement("button");
      galleryItem.type = "button";
      galleryItem.classList.add("case-gallery-item");
      galleryItem.appendChild(createImageItem(item));

      galleryItem.addEventListener("click", function () {
        openCasePreview(items, index);
      });

      gallery.appendChild(galleryItem);
    });

    if (items.length > 1) {
      const dots = document.createElement("div");
      dots.classList.add("case-mobile-gallery-dots");

      items.forEach(function (_, index) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.classList.add("case-dot");

        if (index === 0) dot.classList.add("active");

        dot.addEventListener("click", function () {
          gallery.scrollTo({
            left: gallery.clientWidth * index,
            behavior: "smooth"
          });
        });

        dots.appendChild(dot);
      });

      gallery.after(dots);

      gallery.addEventListener("scroll", function () {
        const activeIndex = Math.round(gallery.scrollLeft / gallery.clientWidth);
        const dotButtons = dots.querySelectorAll(".case-dot");

        dotButtons.forEach(function (dot, index) {
          dot.classList.toggle("active", index === activeIndex);
        });
      });
    }
  });
};
const renderNextProjects = function () {
  const nextGrid = document.querySelector("[data-next-projects]");
  const nextTitle = document.querySelector("[data-next-title]");

  nextTitle.innerText = project.relatedProjectsTitle || "View Other Projects";
  nextGrid.innerHTML = "";

  const related = project.relatedProjects || [];

  related.slice(0, 3).forEach(function (item) {
    const card = document.createElement("a");
    card.classList.add("case-next-card");
    card.href = item.url;

    card.innerHTML = `
      <div class="case-next-thumb">
        <div class="case-img-placeholder">${item.imageLabel || item.title}</div>
      </div>
      <h3>${item.title}</h3>
      <p>${item.industry}</p>
    `;

    nextGrid.appendChild(card);
  });
};

const initTabs = function () {
  const tabs = document.querySelectorAll("[data-case-tabs] a");
  let manualTabLock = false;

  const setActiveTab = function (activeTab) {
    tabs.forEach(function (tab) {
      tab.classList.toggle("active", tab === activeTab);
    });
  };

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      event.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (!target) return;

      manualTabLock = true;
      setActiveTab(this);

      window.scrollTo({
        top: target.offsetTop - 98,
        behavior: "smooth"
      });

      setTimeout(function () {
        manualTabLock = false;
      }, 900);
    });
  });

  window.addEventListener("scroll", function () {
    if (manualTabLock) return;

    let activeTab = tabs[0];

    tabs.forEach(function (tab) {
      const target = document.querySelector(tab.getAttribute("href"));

      if (target && window.scrollY >= target.offsetTop - 150) {
        activeTab = tab;
      }
    });

    setActiveTab(activeTab);
  });
};

const initCaseBackgroundGlow = function () {
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
};

const initBackButtonStickyAlignment = function () {
  const tabs = document.querySelector("[data-case-tabs]");
  if (!tabs) return;

  let stickyTrigger = 0;

  const calculateStickyTrigger = function () {
    const tabsTopValue = parseFloat(window.getComputedStyle(tabs).top) || 0;
    stickyTrigger = tabs.offsetTop - tabsTopValue;
  };

  const updateBackButtonState = function () {
    if (window.innerWidth <= 580) {
      document.body.classList.remove("case-tabs-stuck");
      return;
    }

    if (window.scrollY >= stickyTrigger) {
      document.body.classList.add("case-tabs-stuck");
    } else {
      document.body.classList.remove("case-tabs-stuck");
    }
  };

  calculateStickyTrigger();
  updateBackButtonState();

  window.addEventListener("scroll", updateBackButtonState);
  window.addEventListener("resize", function () {
    calculateStickyTrigger();
    updateBackButtonState();
  });

  window.addEventListener("load", function () {
    calculateStickyTrigger();
    updateBackButtonState();
  });
};

fillTextContent();
renderHeroCarousel();
renderClientStrip();
renderList("[data-design-thinking]", project.designThinking);
renderList("[data-elements-used]", project.elementsUsed);
renderGalleries();
renderNextProjects();
initTabs();
initCaseBackgroundGlow();
initBackButtonStickyAlignment();