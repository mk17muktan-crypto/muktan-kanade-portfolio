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
  document.querySelector("[data-client-description]").innerText = project.description;

  const breadcrumbCategoryLink = document.querySelector("[data-case-category-link]");
  const breadcrumbCurrentLink = document.querySelector("[data-case-current-link]");
  const backButton = document.querySelector("[data-case-back]");

  if (breadcrumbCategoryLink) {
    breadcrumbCategoryLink.innerText = project.category;
    breadcrumbCategoryLink.href = "./index.html?section=portfolio&category=" + project.categorySlug;
  }

  if (breadcrumbCurrentLink) {
    breadcrumbCurrentLink.innerText = project.title;
    breadcrumbCurrentLink.href = "./portfolio-detail.html?project=" + projectId;
  }

  if (backButton) {
    backButton.href = "./index.html?section=portfolio&category=" + project.categorySlug;
  }
};

const renderClientStrip = function () {
  const strip = document.querySelector("[data-client-strip]");

  if (!strip) return;

  strip.innerHTML = "";

  const oldDots = document.querySelector(".case-client-dots");

  if (oldDots) {
    oldDots.remove();
  }

  const images = project.clientImages && project.clientImages.length ? project.clientImages : [
    { type: "placeholder", label: "Client Image 01" },
    { type: "placeholder", label: "Client Image 02" },
    { type: "placeholder", label: "Client Image 03" },
    { type: "placeholder", label: "Client Image 04" }
  ];

  images.forEach(function (item) {
    const wrap = document.createElement("div");
    wrap.classList.add("client-strip-item");
    wrap.appendChild(createImageItem(item));
    strip.appendChild(wrap);
  });

  if (images.length <= 1) return;

  const dots = document.createElement("div");
  dots.classList.add("case-mobile-gallery-dots", "case-client-dots");

  const getClientItems = function () {
    return Array.from(strip.querySelectorAll(".client-strip-item"));
  };

  const updateClientDots = function () {
    const clientItems = getClientItems();
    const dotButtons = dots.querySelectorAll(".case-dot");

    if (clientItems.length === 0 || dotButtons.length === 0) return;

    const maxScrollLeft = strip.scrollWidth - strip.clientWidth;

    let activeIndex = 0;

    if (strip.scrollLeft >= maxScrollLeft - 3) {
      activeIndex = clientItems.length - 1;
    } else {
      const stripCenter = strip.scrollLeft + strip.clientWidth / 2;
      let closestDistance = Infinity;

      clientItems.forEach(function (item, index) {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(stripCenter - itemCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          activeIndex = index;
        }
      });
    }

    dotButtons.forEach(function (dot, index) {
      dot.classList.toggle("active", index === activeIndex);
    });
  };

  images.forEach(function (_, index) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.classList.add("case-dot");

    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", function () {
      const clientItems = getClientItems();
      const targetItem = clientItems[index];

      if (!targetItem) return;

      const maxScrollLeft = strip.scrollWidth - strip.clientWidth;

      strip.scrollTo({
        left: index === clientItems.length - 1 ? maxScrollLeft : targetItem.offsetLeft,
        behavior: "smooth"
      });
    });

    dots.appendChild(dot);
  });

  strip.after(dots);

  strip.addEventListener("scroll", function () {
    window.requestAnimationFrame(updateClientDots);
  });

  window.addEventListener("resize", updateClientDots);

  updateClientDots();
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

  const getGalleryItems = function () {
    return Array.from(gallery.querySelectorAll(".case-gallery-item"));
  };

  const updateGalleryDots = function () {
    const galleryItems = getGalleryItems();
    const dotButtons = dots.querySelectorAll(".case-dot");

    if (galleryItems.length === 0 || dotButtons.length === 0) return;

    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;

    let activeIndex = 0;

    /* Force last dot when user reaches the end */
    if (gallery.scrollLeft >= maxScrollLeft - 3) {
      activeIndex = galleryItems.length - 1;
    } else {
      const galleryCenter = gallery.scrollLeft + gallery.clientWidth / 2;
      let closestDistance = Infinity;

      galleryItems.forEach(function (item, index) {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(galleryCenter - itemCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          activeIndex = index;
        }
      });
    }

    dotButtons.forEach(function (dot, index) {
      dot.classList.toggle("active", index === activeIndex);
    });
  };

  items.forEach(function (_, index) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.classList.add("case-dot");

    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", function () {
      const galleryItems = getGalleryItems();
      const targetItem = galleryItems[index];

      if (!targetItem) return;

      const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;

      gallery.scrollTo({
        left: index === galleryItems.length - 1 ? maxScrollLeft : targetItem.offsetLeft,
        behavior: "smooth"
      });
    });

    dots.appendChild(dot);
  });

  gallery.after(dots);

  gallery.addEventListener("scroll", function () {
    window.requestAnimationFrame(updateGalleryDots);
  });

  window.addEventListener("resize", updateGalleryDots);

  updateGalleryDots();
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
  const tabsWrapper = document.querySelector("[data-case-tabs]");
  const tabs = document.querySelectorAll("[data-case-tabs] a");

  if (!tabsWrapper || tabs.length === 0) return;

  const isMobile = function () {
    return window.innerWidth <= 580;
  };

  /* No tab behaviour on mobile */
  if (isMobile()) return;

  let lockedTab = null;
  let scrollSettleTimer = null;

  const getScrollOffset = function () {
    return tabsWrapper.offsetHeight + 72;
  };

  const getTargetTop = function (target) {
    return target.getBoundingClientRect().top + window.scrollY;
  };

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

      lockedTab = this;
      setActiveTab(this);

      clearTimeout(scrollSettleTimer);

      window.scrollTo({
        top: getTargetTop(target) - getScrollOffset(),
        behavior: "smooth"
      });

      scrollSettleTimer = setTimeout(function () {
        setActiveTab(lockedTab);
        lockedTab = null;
      }, 1200);
    });
  });

  window.addEventListener("scroll", function () {
    if (lockedTab) {
      clearTimeout(scrollSettleTimer);

      scrollSettleTimer = setTimeout(function () {
        setActiveTab(lockedTab);
        lockedTab = null;
      }, 180);

      return;
    }

    let activeTab = tabs[0];
    const offset = getScrollOffset() + 24;

    tabs.forEach(function (tab) {
      const target = document.querySelector(tab.getAttribute("href"));

      if (target && window.scrollY >= getTargetTop(target) - offset) {
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
  const backButton = document.querySelector("[data-case-back]");

  if (!tabs || !backButton) return;

  let desktopTriggerY = 0;

  const isMobile = function () {
    return window.innerWidth <= 580;
  };

  const calculateDesktopTrigger = function () {
    if (isMobile()) return;

    const tabsTopValue = parseFloat(window.getComputedStyle(tabs).top) || 0;
    desktopTriggerY = window.scrollY + tabs.getBoundingClientRect().top - tabsTopValue;
  };

  const updateBackButtonState = function () {
    const currentScrollY = window.scrollY;

    /* Mobile: keep back button removed */
    if (isMobile()) {
      document.body.classList.remove("case-tabs-stuck");
      return;
    }

    /* Desktop: restore back button alignment with tab bar */
    if (currentScrollY >= desktopTriggerY) {
      document.body.classList.add("case-tabs-stuck");
    } else {
      document.body.classList.remove("case-tabs-stuck");
    }
  };

  calculateDesktopTrigger();
  updateBackButtonState();

  window.addEventListener("scroll", updateBackButtonState, { passive: true });

  window.addEventListener("resize", function () {
    calculateDesktopTrigger();
    updateBackButtonState();
  });

  window.addEventListener("load", function () {
    calculateDesktopTrigger();
    updateBackButtonState();
  });
};

const initHideNavOnScroll = function () {
  const mobileNav = document.querySelector("[data-case-mobile-nav]");

  if (!mobileNav) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    if (window.innerWidth > 580) {
      mobileNav.classList.remove("is-hidden");
      lastScrollY = Math.max(currentScrollY, 0);
      return;
    }

    const scrollingDown = currentScrollY > lastScrollY + 4;
    const scrollingUp = currentScrollY < lastScrollY - 4;

    if (currentScrollY > 90 && scrollingDown) {
      mobileNav.classList.add("is-hidden");
    }

    if (scrollingUp || currentScrollY <= 40) {
      mobileNav.classList.remove("is-hidden");
    }

    lastScrollY = Math.max(currentScrollY, 0);
  }, { passive: true });
};
const renderList = function (selector, items) {
  const list = document.querySelector(selector);

  if (!list || !items) return;

  list.innerHTML = "";

  items.forEach(function (text) {
    const li = document.createElement("li");
    li.innerText = text;
    list.appendChild(li);
  });
};

fillTextContent();
renderClientStrip();
renderList("[data-design-thinking]", project.designThinking);
renderList("[data-elements-used]", project.elementsUsed);
renderGalleries();
renderNextProjects();
initTabs();
initCaseBackgroundGlow();
initBackButtonStickyAlignment();
initHideNavOnScroll();