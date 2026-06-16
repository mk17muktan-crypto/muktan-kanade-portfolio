const queryParams = new URLSearchParams(window.location.search);
const projectId = queryParams.get("project") || "graphic-design-dagdushet-ganpati";
const fallbackProjectId = "graphic-design-dagdushet-ganpati";

const project =
  (typeof portfolioProjects !== "undefined" && portfolioProjects[projectId]) ||
  (typeof portfolioProjects !== "undefined" && portfolioProjects[fallbackProjectId]);

if (!project) {
  throw new Error("Portfolio project not found: " + projectId);
}

const getSectionId = function (tabId) {
  const sectionMap = {
    "project-info": "client-info",
    "client-info": "client-info",
    "elements-used": "visual-system",
    "visual-system": "visual-system"
  };

  return sectionMap[tabId] || tabId;
};

const getResponsiveText = function (item) {
  if (!item) return "";

  const isMobile = window.innerWidth <= 580;

  if (isMobile && item.bodyMobile) return item.bodyMobile;
  if (item.bodyDesktop) return item.bodyDesktop;
  if (item.body) return item.body;

  return "";
};

const getBestWorkItems = function () {
  if (!project.bestWork) return [];

  if (Array.isArray(project.bestWork)) {
    return project.bestWork;
  }

  return project.bestWork.items || [];
};

const createImageItem = function (item) {
  const finalItem = item || { type: "placeholder", label: "Image" };
  const imageSrc = finalItem.src || finalItem.image || finalItem.url || "";

  if (finalItem.type === "placeholder" || !imageSrc) {
    const placeholder = document.createElement("div");
    placeholder.classList.add("case-img-placeholder");
    placeholder.innerText = finalItem.label || "Image";
    return placeholder;
  }

  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = finalItem.alt || finalItem.label || project.title || "Portfolio image";
  image.loading = "lazy";
  return image;
};

const fillTextContent = function () {
  document.title = project.title + " | Muktan Kanade Portfolio";

  document.querySelectorAll("[data-case-title]").forEach(function (item) {
    item.innerText = project.title;
  });

  document.querySelectorAll("[data-case-industry]").forEach(function (item) {
    item.innerText = "Industry: " + project.industry;
  });

  const breadcrumb = project.breadcrumb || {};
  const rootLink = document.querySelector("[data-case-root-link]");
  const breadcrumbCategoryLink = document.querySelector("[data-case-category-link]");
  const breadcrumbCurrentLink = document.querySelector("[data-case-current-link]");
  const backButton = document.querySelector("[data-case-back]");

  if (rootLink) {
    rootLink.innerText = breadcrumb.rootLabel || "Portfolio";
    rootLink.href = breadcrumb.rootUrl || "./index.html?section=portfolio";
  }

  if (breadcrumbCategoryLink) {
    breadcrumbCategoryLink.innerText = breadcrumb.categoryLabel || project.category;
    breadcrumbCategoryLink.href =
      breadcrumb.categoryUrl || "./index.html?section=portfolio&category=" + project.categorySlug;
  }

  if (breadcrumbCurrentLink) {
    breadcrumbCurrentLink.innerText = breadcrumb.currentLabel || project.title;
    breadcrumbCurrentLink.href = "./portfolio-detail.html?project=" + projectId;
  }

  if (backButton) {
    backButton.href = "./index.html?section=portfolio&category=" + project.categorySlug;
  }
};

const renderTabs = function () {
  const tabsWrapper = document.querySelector("[data-case-tabs]");

  if (!tabsWrapper) return;

  const tabs = project.tabs || [
    { id: "client-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "branding", label: "Branding" },
    { id: "campaign", label: "Campaign" },
    { id: "social-posts", label: "Social Media Posts" }
  ];

  tabsWrapper.innerHTML = "";

  tabs.forEach(function (tab, index) {
    const link = document.createElement("a");
    const sectionId = getSectionId(tab.id);

    link.href = "#" + sectionId;
    link.innerText = tab.label;

    if (index === 0) {
      link.classList.add("active");
    }

    tabsWrapper.appendChild(link);
  });
};

const renderCoverImage = function () {
  const coverBox = document.querySelector("[data-case-cover]");

  if (!coverBox) return;

  const isMobile = window.innerWidth <= 580;

  let coverItem = null;

  if (project.hero) {
    coverItem = isMobile ? project.hero.mobile : project.hero.desktop;
  }

  if (!coverItem && project.heroImages && project.heroImages.length > 0) {
    coverItem = project.heroImages[0];
  }

  if (!coverItem) {
    coverItem = { type: "placeholder", label: "Cover Image" };
  }

  coverBox.innerHTML = "";
  coverBox.appendChild(createImageItem(coverItem));
};

const renderProjectOverview = function () {
  const overviewTitle = document.querySelector("[data-project-overview-title]");
  const overviewBlocks = document.querySelector("[data-project-overview-blocks]");

  if (!overviewBlocks) return;

  const overview = project.projectOverview || {};

  if (overviewTitle) {
    overviewTitle.innerText = overview.title || project.fullTitle || project.title;
  }

  overviewBlocks.innerHTML = "";

  const sections = overview.sections || [];

  sections.forEach(function (section) {
    const block = document.createElement("div");
    block.classList.add("case-overview-block");

    block.innerHTML = `
      <h2>${section.heading || ""}</h2>
      <p>${getResponsiveText(section)}</p>
    `;

    overviewBlocks.appendChild(block);
  });
};

const renderProjectSummary = function () {
  const summary = project.summaryBlock || {};

  const roleHeading = document.querySelector("[data-summary-role-heading]");
  const deliverablesHeading = document.querySelector("[data-summary-deliverables-heading]");
  const toolsHeading = document.querySelector("[data-summary-tools-heading]");

  const projectRole = document.querySelector("[data-project-role]");
  const projectDeliverables = document.querySelector("[data-project-deliverables]");
  const projectTools = document.querySelector("[data-project-tools]");

  if (roleHeading) {
    roleHeading.innerText = summary.roleHeading || "My Role";
  }

  if (deliverablesHeading) {
    deliverablesHeading.innerText = summary.deliverablesHeading || "Deliverables";
  }

  if (toolsHeading) {
    toolsHeading.innerText = summary.toolsHeading || "Tools Used";
  }

  if (projectRole) {
    projectRole.innerText = project.role || "Graphic Designer";
  }

  if (projectDeliverables) {
    projectDeliverables.innerText =
      project.deliverables || "Branding, Campaign, Social Media Creatives";
  }

  if (projectTools) {
    projectTools.innerHTML = "";

    const tools = project.tools || [];

    tools.forEach(function (tool) {
      const toolItem = document.createElement("div");
      toolItem.classList.add("case-tool-item");

      toolItem.innerHTML = `
        <img src="${tool.icon}" alt="${tool.name}" title="${tool.name}">
      `;

      projectTools.appendChild(toolItem);
    });
  }
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

  if (casePreviewPrev) {
    casePreviewPrev.classList.toggle("is-hidden", currentPreviewIndex === 0);
  }

  if (casePreviewNext) {
    casePreviewNext.classList.toggle(
      "is-hidden",
      currentPreviewIndex === currentPreviewItems.length - 1
    );
  }
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

const renderBestWork = function () {
  const bestWorkGrid = document.querySelector("[data-best-work]");

  if (!bestWorkGrid) return;

  const items = getBestWorkItems();

  bestWorkGrid.innerHTML = "";

  items.slice(0, 2).forEach(function (item, index) {
    const bestWorkItem = document.createElement("button");
    bestWorkItem.type = "button";
    bestWorkItem.classList.add("case-best-work-item");

    bestWorkItem.appendChild(createImageItem(item));

    bestWorkItem.addEventListener("click", function () {
      openCasePreview(items.slice(0, 2), index);
    });

    bestWorkGrid.appendChild(bestWorkItem);
  });
};

const renderList = function (selector, items) {
  const list = document.querySelector(selector);

  if (!list || !items) return;

  const isMobile = window.innerWidth <= 580;

  let finalItems = [];

  if (Array.isArray(items)) {
    finalItems = items;
  } else if (isMobile && items.pointsMobile) {
    finalItems = items.pointsMobile;
  } else {
    finalItems = items.points || [];
  }

  list.innerHTML = "";

  finalItems.forEach(function (text) {
    const li = document.createElement("li");
    li.innerText = text;
    list.appendChild(li);
  });
};
const renderThinkingSections = function () {
  const designThinkingTitle = document.querySelector("[data-design-thinking-title]");
  const visualSystemTitle = document.querySelector("[data-visual-system-title]");

  if (designThinkingTitle) {
    designThinkingTitle.innerText =
      project.designThinking && project.designThinking.heading
        ? project.designThinking.heading
        : "Design Thinking";
  }

  if (visualSystemTitle) {
    visualSystemTitle.innerText =
      project.visualSystem && project.visualSystem.heading
        ? project.visualSystem.heading
        : "Visual System";
  }

  renderList("[data-design-thinking]", project.designThinking);
  renderList("[data-visual-system]", project.visualSystem || project.elementsUsed);
};

const createMobileGalleryDots = function (gallery, items) {
  if (!gallery || !items || items.length <= 1) return;

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

    if (index === 0) {
      dot.classList.add("active");
    }

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
};

const renderGallerySections = function () {
  const galleryRoot = document.querySelector("[data-gallery-sections]");

  if (!galleryRoot) return;

  galleryRoot.innerHTML = "";

  const sections = project.gallerySections || [];

const mobileCarouselKeys = [
  "atirudraMahayadnya2025",
  "shahaleMohotsav2025",
  "dailyPostingRugnaseva",
  "dailyPostingTopical",

  "celestialFeatures",
  "coepPostStyle4",
  "lmmPostStyle3",
  "preetiPostStyle1"

];

  sections.forEach(function (section) {
    const sectionElement = document.createElement("section");

    sectionElement.classList.add(
      "case-section",
      "case-gallery-section",
      "case-gallery-section-" + section.id
    );

    sectionElement.id = section.id;

    const sectionTitle = document.createElement("h2");
    sectionTitle.innerText = section.title;

    sectionElement.appendChild(sectionTitle);

    const groups = section.groups || [];

    groups.forEach(function (group) {
      const subsection = document.createElement("div");

      subsection.classList.add(
        "case-subsection",
        "case-subsection-" + group.key
      );

      const subsectionTitle = document.createElement("h3");
      subsectionTitle.innerText = group.title;

      const gallery = document.createElement("div");

      gallery.classList.add(
        "case-gallery",
        "case-gallery-" + section.id,
        "case-gallery-" + group.key
      );

      const items = group.items || [];

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

      subsection.appendChild(subsectionTitle);
      subsection.appendChild(gallery);

      sectionElement.appendChild(subsection);

      if (mobileCarouselKeys.includes(group.key)) {
        createMobileGalleryDots(gallery, items);
      }
    });

    galleryRoot.appendChild(sectionElement);
  });
};

const renderNextProjects = function () {
  const nextGrid = document.querySelector("[data-next-projects]");
  const nextTitle = document.querySelector("[data-next-title]");

  if (!nextGrid || !nextTitle) return;

  nextTitle.innerText = project.relatedProjectsTitle || "View Other Projects";
  nextGrid.innerHTML = "";

  const related = project.relatedProjects || [];

  related.slice(0, 3).forEach(function (item) {
    const card = document.createElement("a");
    card.classList.add("case-next-card");
    card.href = item.url;

    const thumb = document.createElement("div");
thumb.classList.add("case-next-thumb");

thumb.appendChild(
  createImageItem(item.image || { type: "placeholder", label: item.imageLabel || item.title })
);

const title = document.createElement("h3");
title.innerText = item.title;

const industry = document.createElement("p");
industry.innerText = item.industry;

card.appendChild(thumb);
card.appendChild(title);
card.appendChild(industry);

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

fillTextContent();
renderTabs();
renderCoverImage();
renderProjectOverview();
renderProjectSummary();
renderBestWork();
renderThinkingSections();
renderGallerySections();
renderNextProjects();
initTabs();
initCaseBackgroundGlow();
initBackButtonStickyAlignment();
initHideNavOnScroll();