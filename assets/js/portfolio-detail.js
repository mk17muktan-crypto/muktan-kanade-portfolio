/* global portfolioProjects */

const queryParams = new URLSearchParams(window.location.search);
const projectId = queryParams.get("project") || "graphic-design-dagdushet-ganpati";
const fallbackProjectId = "graphic-design-dagdushet-ganpati";

const project =
  (typeof portfolioProjects !== "undefined" && portfolioProjects[projectId]) ||
  (typeof portfolioProjects !== "undefined" && portfolioProjects[fallbackProjectId]);

if (!project) {
  throw new Error("Portfolio project not found: " + projectId);
}

document.body.classList.toggle(
  "print-design-page",
  project.category === "Print Design"
);

document.body.classList.toggle(
  "graphic-design-page",
  project.category === "Graphic Design"
);

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


const createImageItem = function (
  item,
  options = {}
) {
  const finalItem = item || {
    type: "placeholder",
    label: "Image"
  };


  const imageSrc =
    options.src ||
    finalItem.previewSrc ||
    finalItem.src ||
    finalItem.image ||
    finalItem.url ||
    "";


  if (
    finalItem.type === "placeholder" ||
    !imageSrc
  ) {
    const placeholder =
      document.createElement("div");

    placeholder.classList.add(
      "case-img-placeholder"
    );

    placeholder.innerText =
      finalItem.label || "Image";

    return placeholder;
  }


  const loadingMode =
    options.loading ||
    finalItem.loading ||
    "lazy";


  const priority =
    options.fetchPriority ||
    finalItem.fetchPriority ||
    (
      loadingMode === "eager"
        ? "high"
        : "low"
    );


  const image =
    document.createElement("img");


  image.src = imageSrc;

  image.alt =
    finalItem.alt ||
    finalItem.label ||
    project.title ||
    "Portfolio image";


  image.loading = loadingMode;
  image.decoding = "async";

  image.setAttribute(
    "fetchpriority",
    priority
  );


  /*
   * Optional responsive-image support.
   * Existing image objects do not need
   * these properties to keep working.
   */

  const imageSrcset =
    options.srcset ||
    finalItem.srcset ||
    "";

  const imageSizes =
    options.sizes ||
    finalItem.sizes ||
    "";


  if (imageSrcset) {
    image.srcset =
      imageSrcset;
  }


  if (imageSizes) {
    image.sizes =
      imageSizes;
  }


  /*
   * Reserve image space when dimensions
   * are available, reducing layout shifts.
   */

  if (finalItem.width) {
    image.setAttribute(
      "width",
      finalItem.width
    );
  }


  if (finalItem.height) {
    image.setAttribute(
      "height",
      finalItem.height
    );
  }


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

if (project.layout === "ux-case-study" && tab.desktopLabel) {
  link.innerHTML = tab.desktopLabel;
} else {
  link.innerText = tab.label;
}
    if (index === 0) {
      link.classList.add("active");
    }

    tabsWrapper.appendChild(link);
  });
};

const renderCoverImage = function () {
  const coverBox =
    document.querySelector(
      "[data-case-cover]"
    );

  if (!coverBox) return;

  const isMobile =
    window.innerWidth <= 580;

  let coverItem = null;


  if (project.hero) {
    coverItem =
      isMobile
        ? project.hero.mobile
        : project.hero.desktop;
  }


  if (
    !coverItem &&
    project.heroImages &&
    project.heroImages.length > 0
  ) {
    coverItem =
      project.heroImages[0];
  }


  if (!coverItem) {
    coverItem = {
      type: "placeholder",
      label: "Cover Image"
    };
  }


  coverBox.innerHTML = "";

  coverBox.appendChild(
    createImageItem(
      coverItem,
      {
        loading: "eager",
        fetchPriority: "high"
      }
    )
  );
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

const renderUXCaseStudy = function () {
  const uxRoot = document.querySelector("[data-ux-case-study]");
  const uxData = project.uxCaseStudy;

  const isUXCaseStudy =
    project.layout === "ux-case-study" &&
    uxRoot &&
    uxData;

  document.body.classList.toggle(
    "ux-case-study-page",
    Boolean(isUXCaseStudy)
  );

const usesWebsiteUXTemplate = [
  "ui-ux-dagdusheth-website",
  "ui-ux-ssms-website",
  "ui-ux-la-mom-miiracle"
].includes(projectId);

/*
 * Shared website UI/UX template.
 * This reuses the Dagdusheth website CSS for:
 * Dagdusheth, SSMS and La Mom & Miiracle.
 */

document.body.classList.toggle(
  "ux-dagdusheth-page",
  Boolean(
    isUXCaseStudy &&
    usesWebsiteUXTemplate
  )
);


/*
 * Project-specific SSMS adjustments.
 */

document.body.classList.toggle(
  "ux-ssms-page",
  Boolean(
    isUXCaseStudy &&
    projectId === "ui-ux-ssms-website"
  )
);


/*
 * Project-specific La Mom & Miiracle adjustments.
 */

document.body.classList.toggle(
  "ux-lmm-page",
  Boolean(
    isUXCaseStudy &&
    projectId === "ui-ux-la-mom-miiracle"
  )
);
	
  if (!uxRoot) return;

  if (!isUXCaseStudy) {
    uxRoot.hidden = true;
    uxRoot.innerHTML = "";
    return;
  }

  const renderParagraphs = function (paragraphs) {
    return (paragraphs || [])
      .map(function (paragraph) {
        return `<p>${paragraph}</p>`;
      })
      .join("");
  };

  const renderTools = function () {
    return (project.tools || [])
      .map(function (tool) {
        return `
          <div class="ux-summary-tool">
            <img
              src="${tool.icon}"
              alt="${tool.name}"
              title="${tool.name}">
          </div>
        `;
      })
      .join("");
  };

  const renderResearchPoints = function () {
    return (uxData.research.points || [])
      .map(function (point) {
        return `
          <div class="ux-research-point">
            <p>${point}</p>
          </div>
        `;
      })
      .join("");
  };	
	
const renderAudienceGroups = function () {
  return (uxData.targetAudience.groups || [])
    .map(function (group) {
      return `
        <div class="ux-audience-card">
          <h3>${group.title}</h3>
          <p>${group.description}</p>
        </div>
      `;
    })
    .join("");
};

const renderUserProblems = function () {
  return (uxData.userProblems.items || [])
    .map(function (problem) {
      return `
        <div class="ux-problem-item">
          <p>${problem}</p>
        </div>
      `;
    })
    .join("");
};

const renderPersonas = function () {
  return (uxData.personas.items || [])
    .map(function (persona) {
      return `
        <div class="ux-persona-card">

          <div class="ux-persona-image">
            <img
              src="${persona.image}"
              alt="${persona.name}"
              loading="lazy">
          </div>

          <div class="ux-persona-heading">
            <h3>${persona.name}</h3>
            <p>${persona.type}</p>
          </div>

          <div class="ux-persona-divider"></div>

          <div class="ux-persona-details">

            <div>
              <strong>Background:</strong>
              <p>${persona.background}</p>
            </div>

            <div>
              <strong>Main Need:</strong>
              <p>${persona.mainNeed}</p>
            </div>

          </div>

        </div>
      `;
    })
    .join("");
};
	
const renderUserNeeds = function () {
  return (uxData.keyUserNeeds.items || [])
    .map(function (item) {
      return `
        <div class="ux-need-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      `;
    })
    .join("");
};

const renderPriorityGroups = function () {
  return (uxData.featurePrioritization.groups || [])
    .map(function (group) {
      const listItems = (group.items || [])
        .map(function (item) {
          return `<li>${item}</li>`;
        })
        .join("");

      return `
        <div class="ux-priority-card ux-priority-${group.level}">
          <h3>${group.title}</h3>

          <ul>
            ${listItems}
          </ul>
        </div>
      `;
    })
    .join("");
};

const renderColorGroups = function () {
  return (uxData.designSystem.colors || [])
    .map(function (group) {
      const swatches = (group.values || [])
        .map(function (color) {
          return `
            <span
              class="ux-color-swatch"
              style="--ux-swatch-color: ${color};"
              title="${color}">
            </span>
          `;
        })
        .join("");

      return `
        <div class="ux-color-group">
          <p>${group.title}</p>

          <div class="ux-color-swatches">
            ${swatches}
          </div>
        </div>
      `;
    })
    .join("");
};

const renderTypographyRows = function () {
  return (uxData.designSystem.typography || [])
    .map(function (item) {
      return `
        <div class="ux-type-row ux-type-${item.className}">
          <span>${item.label}</span>
          <strong>${item.sample}</strong>
        </div>
      `;
    })
    .join("");
};	
	
const renderSimpleButtons = function () {
  const buttons =
    uxData.designSystem &&
    Array.isArray(uxData.designSystem.buttons)
      ? uxData.designSystem.buttons
      : [];

  return buttons
    .map(function (button) {
      return `
        <div
          class="ux-simple-demo-button"
          style="--ux-simple-button-color: ${button.color};">

          ${button.label}

        </div>
      `;
    })
    .join("");
};	
	
const renderFinalScreenGroups = function () {
  const finalUI = uxData.finalUIScreens || {};
  const groups = Array.isArray(finalUI.groups)
    ? finalUI.groups
    : [];

  return groups
    .map(function (group, groupIndex) {
      const screenItems = (group.items || [])
        .map(function (item, screenIndex) {
          return `
            <button
              class="ux-final-screen"
              type="button"
              data-ux-final-screen
              data-ux-final-group="${groupIndex}"
              data-ux-final-index="${screenIndex}"
              aria-label="Open ${item.alt}">

              <img
                src="${item.src}"
                alt="${item.alt}"
                loading="lazy">

            </button>
          `;
        })
        .join("");

      return `
        <div
          class="ux-final-group ux-final-group-${group.layout || "full"}">

          <div class="ux-final-group-heading">
            <h3>
              <span>${group.number}.</span>
              ${group.title}
            </h3>
          </div>

          <p class="ux-final-group-subtitle">
            ${group.subtitle}
          </p>

          <div class="ux-final-screens-grid">
            ${screenItems}
          </div>

        </div>
      `;
    })
    .join("");
};
	
const renderFinalUISection = function () {
  const finalUI = uxData.finalUIScreens;

  if (!finalUI) return "";

  if (finalUI.variant === "live-website") {
    const previewImage = finalUI.image || {};

    return `
      <section
        class="ux-section ux-final-ui-section ux-live-final-ui-section ux-tab-section"
        id="final-ui-screens">

        <h2>${finalUI.heading || "Final UI Screens"}</h2>

        <div class="ux-live-final-copy">

          <p>
            ${finalUI.introduction || ""}
          </p>

          <a
            class="ux-live-final-link"
            href="${finalUI.liveUrl}"
            target="_blank"
            rel="noopener noreferrer">

            ${finalUI.liveLabel || finalUI.liveUrl}

          </a>

        </div>

        <button
          class="ux-live-final-preview"
          type="button"
          data-ux-live-final-screen
          aria-label="Open the Dagdusheth Ganpati website preview">

${previewImage.src ? `
  <img
    src="${previewImage.src}"
    alt="${previewImage.alt || "Final website interface"}"
    loading="lazy">
` : `
  <div class="ux-live-final-placeholder">
    ${previewImage.label || "Final UI Website Preview"}
  </div>
`}

        </button>

      </section>
    `;
  }

  return `
    <section
      class="ux-section ux-final-ui-section ux-tab-section"
      id="final-ui-screens">

      <h2>${finalUI.heading}</h2>

      <p class="ux-final-ui-intro">
        ${finalUI.introduction}
      </p>

      <div class="ux-final-groups">
        ${renderFinalScreenGroups()}
      </div>

    </section>
  `;
};
	
  uxRoot.hidden = false;

  uxRoot.innerHTML = `
    <section
      class="ux-section ux-about-section"
      id="about-project">

      <h2>${uxData.about.heading}</h2>

      <div class="ux-about-grid">

        <div class="ux-about-copy">
          ${renderParagraphs(uxData.about.primaryText)}
        </div>

        <div class="ux-about-copy ux-about-goal">
          ${renderParagraphs(uxData.about.goalText)}

          <p class="ux-about-highlight">
            ${uxData.about.contextHighlight}
          </p>
        </div>

        <aside class="ux-summary-card">

          <div class="ux-summary-section">
            <p>My Role</p>
            <h3>${project.role}</h3>
          </div>

          <div class="ux-summary-section">
            <p>Deliverables</p>
            <h3>${project.deliverables}</h3>
          </div>

          <div class="ux-summary-section">
            <p>Tools Used</p>

            <div class="ux-summary-tools">
              ${renderTools()}
            </div>
          </div>

        </aside>

      </div>

    </section>


<section class="ux-research-section ux-about-research">

      <div class="ux-research-grid">

        <div class="ux-research-context">

          <h2>${uxData.research.heading}</h2>

          ${renderParagraphs(uxData.research.contextText)}

          <div class="ux-purpose-card">
            <p>${uxData.research.purposeLabel}</p>

            <strong>
              ${uxData.research.purposeStatement}
            </strong>
          </div>

        </div>


        <div class="ux-research-points-area">

          <h2>${uxData.research.pointsHeading}</h2>

          <div class="ux-research-points-grid">
            ${renderResearchPoints()}
          </div>

          <div class="ux-research-footer">

            <div class="ux-research-point ux-remote-control-point">
              <p>${uxData.research.remoteControlPoint}</p>
            </div>

            <p class="ux-research-takeaway">
              ${uxData.research.takeaway}
            </p>

          </div>

        </div>

      </div>

    </section>


    <section
      class="ux-section ux-usp-section"
      id="unique-selling-proposition">

      <div class="ux-usp-card">
        <h2>${uxData.usp.heading}</h2>
        <p>${uxData.usp.statement}</p>
      </div>
    </section>
<section class="ux-section ux-audience-problems-section">

  <div class="ux-audience-problems-grid">

    <div
      class="ux-target-audience ux-tab-section"
      id="target-audience">

      <h2>${uxData.targetAudience.heading}</h2>

      <p class="ux-section-intro">
        ${uxData.targetAudience.description}
      </p>

      <div class="ux-audience-list">
        ${renderAudienceGroups()}
      </div>

    </div>


    <div
      class="ux-user-problems ux-tab-section"
      id="user-problems-identified">

      <h2>${uxData.userProblems.heading}</h2>

      <p class="ux-section-intro">
        ${uxData.userProblems.description}
      </p>

      <div class="ux-problems-list">
        ${renderUserProblems()}
      </div>

      <p class="ux-problems-takeaway">
        ${uxData.userProblems.takeaway}
      </p>

    </div>

  </div>

</section>


<section
  class="ux-section ux-personas-section ux-tab-section"
  id="user-personas">

  <h2>${uxData.personas.heading}</h2>

  <p class="ux-personas-intro">
    ${uxData.personas.introduction}
  </p>

  <div class="ux-personas-grid">
    ${renderPersonas()}
  </div>

</section>

<section class="ux-section ux-needs-priority-section">

  <div class="ux-needs-priority-grid">

    <div
      class="ux-key-needs ux-tab-section"
      id="key-user-needs">

      <h2>${uxData.keyUserNeeds.heading}</h2>

      <p class="ux-section-intro">
        ${uxData.keyUserNeeds.description}
      </p>

      <div class="ux-needs-list">
        ${renderUserNeeds()}
      </div>

    </div>


    <div
      class="ux-feature-priority ux-tab-section"
      id="feature-prioritization">

      <h2>${uxData.featurePrioritization.heading}</h2>

      <p class="ux-section-intro">
        ${uxData.featurePrioritization.description}
      </p>

      <div class="ux-priority-list">
        ${renderPriorityGroups()}
      </div>

      <p class="ux-priority-takeaway">
        ${uxData.featurePrioritization.takeaway}
      </p>

    </div>

  </div>

</section>


<section
  class="ux-section ux-design-system-section ux-tab-section"
  id="design-system">

  <h2>${uxData.designSystem.heading}</h2>

  <p class="ux-design-system-intro">
    ${uxData.designSystem.description}
  </p>

  <div class="ux-design-system-grid">

    <div class="ux-design-system-left">

      <div class="ux-system-block ux-colors-block">
        <h3>Colors</h3>

        <div class="ux-color-groups">
          ${renderColorGroups()}
        </div>
      </div>


      <div class="ux-system-block ux-typography-block">
        <h3>Typography</h3>

        <div class="ux-typography-list">
          ${renderTypographyRows()}
        </div>
      </div>

    </div>


    <div class="ux-design-system-right">

<div class="ux-system-block ux-buttons-block">
  <h3>Buttons</h3>

  <div class="ux-simple-button-showcase">
    ${renderSimpleButtons()}
  </div>

  <div class="ux-button-showcase">

          <div class="ux-button-panel">

            <div class="ux-demo-button ux-demo-button-green">
              Log in
            </div>

            <div class="ux-segmented-button">
              <span>Log in</span>
              <span>Register</span>
            </div>

          </div>


          <div class="ux-button-panel">

            <div class="ux-demo-button ux-demo-button-green">
              Book An Appointment
            </div>

            <div class="ux-demo-button ux-demo-button-orange">
              Remind Me Later
            </div>

            <div class="ux-demo-button ux-demo-button-pink">
              Ignore
            </div>

          </div>


          <div class="ux-button-utility-row">

            <div class="ux-small-action ux-small-action-service">
              <ion-icon name="construct-outline"></ion-icon>
              <span>Appointment</span>
            </div>

            <div class="ux-small-action ux-small-action-power">
              <ion-icon name="flash-outline"></ion-icon>
              <span>Power Mode</span>
            </div>

            <div class="ux-round-action">
              <ion-icon name="search-outline"></ion-icon>
            </div>

            <div class="ux-round-action">
              <ion-icon name="locate-outline"></ion-icon>
            </div>

            <div class="ux-square-action">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>

            <div class="ux-square-action">
              <ion-icon name="home-outline"></ion-icon>
            </div>

          </div>

        </div>

      </div>


      <div class="ux-system-lower-grid">

        <div class="ux-system-block ux-tabbar-block">
          <h3>Tab Bar</h3>

          <div class="ux-tab-state-labels">
            <span>State: On-click</span>
            <span>State: Default</span>
          </div>

          <div class="ux-demo-tabbar">

            <ion-icon name="home-outline"></ion-icon>

            <ion-icon name="location-outline"></ion-icon>

            <span class="ux-demo-tabbar-main">
              <ion-icon name="ellipse-outline"></ion-icon>
            </span>

            <ion-icon name="flash-outline"></ion-icon>

            <ion-icon name="settings-outline"></ion-icon>

          </div>

        </div>


        <div class="ux-system-block ux-icons-block">
          <h3>Icons</h3>

          <div class="ux-icons-grid">

            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="locate-outline"></ion-icon>
            <ion-icon name="flash-outline"></ion-icon>
            <ion-icon name="notifications-outline"></ion-icon>
            <ion-icon name="bluetooth-outline"></ion-icon>
            <ion-icon name="calendar-outline"></ion-icon>

            <ion-icon name="home-outline"></ion-icon>
            <ion-icon name="location-outline"></ion-icon>
            <ion-icon name="navigate-outline"></ion-icon>
            <ion-icon name="settings-outline"></ion-icon>
            <ion-icon name="speedometer-outline"></ion-icon>
            <ion-icon name="thermometer-outline"></ion-icon>

            <ion-icon name="construct-outline"></ion-icon>
            <ion-icon name="time-outline"></ion-icon>
            <ion-icon name="documents-outline"></ion-icon>
            <ion-icon name="trash-outline"></ion-icon>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

${renderFinalUISection()}

  `;

const finalScreenButtons = uxRoot.querySelectorAll(
  "[data-ux-final-screen]"
);

finalScreenButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const groupIndex = Number(button.dataset.uxFinalGroup);
    const screenIndex = Number(button.dataset.uxFinalIndex);

    const screenGroup =
      uxData.finalUIScreens.groups[groupIndex];

    if (!screenGroup || !screenGroup.items) return;

    openCasePreview(screenGroup.items, screenIndex);
  });
});	

const liveFinalScreenButton = uxRoot.querySelector(
  "[data-ux-live-final-screen]"
);

if (
  liveFinalScreenButton &&
  uxData.finalUIScreens &&
  uxData.finalUIScreens.image &&
  uxData.finalUIScreens.image.src
) {
  liveFinalScreenButton.addEventListener("click", function () {
    openCasePreview(
      [uxData.finalUIScreens.image],
      0
    );
  });
}	
	
};

/*-----------------------------------*\
  #EMPLOYMENT DISCLOSURE
\*-----------------------------------*/

const renderEmploymentDisclosure =
  function () {

    /*
     * Remove any disclosure card that
     * already exists outside or inside
     * the intended summary stack.
     *
     * This prevents duplicated or orphaned
     * full-width cards.
     */

    document
      .querySelectorAll(
        "body.portfolio-detail-page " +
        ".employment-disclosure-card"
      )
      .forEach(function (card) {
        card.remove();
      });


    /*
     * OLA is excluded completely.
     */

    if (
      projectId ===
      "ui-ux-ola-scooty-app"
    ) {
      return;
    }


    /*
     * Select only the correct summary card
     * for the current page structure.
     */

    const isUXProject =
      document.body.classList.contains(
        "ux-case-study-page"
      );


    const summaryCard =
      isUXProject
        ? document.querySelector(
            "[data-ux-case-study] " +
            ".ux-summary-card"
          )
        : document.querySelector(
            "#client-info " +
            ".case-project-summary-card"
          );


    if (!summaryCard) return;


    /*
     * Use the existing stack if one has
     * already been created.
     */

    let summaryStack =
      summaryCard.closest(
        ".project-summary-stack"
      );


    /*
     * Otherwise create one around the
     * existing yellow summary card.
     */

    if (!summaryStack) {
      summaryStack =
        document.createElement("div");

      summaryStack.classList.add(
        "project-summary-stack"
      );


      summaryCard.parentNode.insertBefore(
        summaryStack,
        summaryCard
      );


      summaryStack.appendChild(
        summaryCard
      );
    }


    /*
     * Create exactly one disclosure card.
     */

    const disclosureCard =
      document.createElement("aside");

    disclosureCard.classList.add(
      "employment-disclosure-card"
    );

    disclosureCard.setAttribute(
      "aria-label",
      "Employment disclosure"
    );


    disclosureCard.innerHTML = `
      <p class="employment-disclosure-text">
        I have worked for this client when I was employed by
      </p>

      <img
        class="employment-disclosure-logo"
        src="./assets/images/H_Logo No BG.png"
        alt="Indian Magic Eye"
        loading="lazy"
        decoding="async">
    `;


    summaryStack.appendChild(
      disclosureCard
    );
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
  frame.appendChild(
  createImageItem(
    currentPreviewItems[
      currentPreviewIndex
    ],
    {
      loading: "eager",
      fetchPriority: "high"
    }
  )
);

  casePreviewStage.appendChild(frame);

  casePreviewThumbs.innerHTML = "";
  const oldThumbSlider = document.querySelector("[data-case-preview-thumb-slider]");

if (oldThumbSlider) {
  oldThumbSlider.remove();
}

casePreviewThumbs.onscroll = null;

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

	if (currentPreviewItems.length > 5) {
  const thumbSlider = document.createElement("div");
  thumbSlider.classList.add("case-preview-thumb-scrollbar");
  thumbSlider.setAttribute("data-case-preview-thumb-slider", "");

  const thumbSliderFill = document.createElement("span");
  thumbSlider.appendChild(thumbSliderFill);

  casePreviewThumbs.after(thumbSlider);

  const updateThumbSlider = function () {
    const maxScroll = casePreviewThumbs.scrollWidth - casePreviewThumbs.clientWidth;

    if (maxScroll <= 0) {
      thumbSliderFill.style.width = "100%";
      thumbSliderFill.style.transform = "translateX(0)";
      return;
    }

    const visibleRatio = casePreviewThumbs.clientWidth / casePreviewThumbs.scrollWidth;
    const fillWidth = Math.max(22, thumbSlider.clientWidth * visibleRatio);
    const progress = casePreviewThumbs.scrollLeft / maxScroll;
    const maxTravel = thumbSlider.clientWidth - fillWidth;

    thumbSliderFill.style.width = fillWidth + "px";
    thumbSliderFill.style.transform = "translateX(" + progress * maxTravel + "px)";
  };

  casePreviewThumbs.onscroll = function () {
    window.requestAnimationFrame(updateThumbSlider);
  };

  thumbSlider.addEventListener("click", function (event) {
    const rect = thumbSlider.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const clickRatio = clickPosition / rect.width;
    const maxScroll = casePreviewThumbs.scrollWidth - casePreviewThumbs.clientWidth;

    casePreviewThumbs.scrollTo({
      left: maxScroll * clickRatio,
      behavior: "smooth"
    });
  });

  window.requestAnimationFrame(updateThumbSlider);
}
	
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

/*-----------------------------------*\
  #LAZY GALLERY RENDERING
\*-----------------------------------*/

let gallerySectionRenderers =
  Object.create(null);

let galleryLazyObserver = null;


const renderGallerySectionContent =
  function (
    sectionElement,
    section
  ) {
    if (
      !sectionElement ||
      !section ||
      sectionElement.dataset
        .galleryRendered === "true"
    ) {
      return;
    }


    sectionElement.dataset
      .galleryRendered = "true";


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


    const contentFragment =
      document.createDocumentFragment();

    const groups =
      section.groups || [];


    groups.forEach(function (group) {
      const subsection =
        document.createElement("div");

      subsection.classList.add(
        "case-subsection",
        "case-subsection-" + group.key
      );


      const subsectionTitle =
        document.createElement("h3");

      subsectionTitle.innerText =
        group.title || "";


      const gallery =
        document.createElement("div");

      gallery.classList.add(
        "case-gallery",
        "case-gallery-" + section.id,
        "case-gallery-" + group.key
      );


      const items =
        group.items || [];


      items.forEach(
        function (item, index) {
          const galleryItem =
            document.createElement(
              "button"
            );

          galleryItem.type = "button";

          galleryItem.classList.add(
            "case-gallery-item"
          );


          galleryItem.appendChild(
            createImageItem(
              item,
              {
                loading: "lazy",
                fetchPriority: "low"
              }
            )
          );


          galleryItem.addEventListener(
            "click",
            function () {
              openCasePreview(
                items,
                index
              );
            }
          );


          gallery.appendChild(
            galleryItem
          );
        }
      );


      if (group.title) {
        subsection.appendChild(
          subsectionTitle
        );
      }


      subsection.appendChild(
        gallery
      );

      contentFragment.appendChild(
        subsection
      );


      if (
        mobileCarouselKeys.includes(
          group.key
        )
      ) {
        createMobileGalleryDots(
          gallery,
          items
        );
      }
    });


    sectionElement.appendChild(
      contentFragment
    );


    const placeholder =
      sectionElement.querySelector(
        "[data-gallery-lazy-placeholder]"
      );

    if (placeholder) {
      placeholder.remove();
    }


    if (galleryLazyObserver) {
      galleryLazyObserver.unobserve(
        sectionElement
      );
    }
  };


const ensureCaseSectionRendered =
  function (targetElement) {
    if (!targetElement) return;


    const gallerySection =
      targetElement.classList.contains(
        "case-gallery-section"
      )
        ? targetElement
        : targetElement.closest(
            ".case-gallery-section"
          );


    if (!gallerySection) return;


    const renderSection =
  gallerySectionRenderers[
    gallerySection.id
  ];


    if (renderSection) {
      renderSection();
    }
  };

const renderGallerySections =
  function () {
    const galleryRoot =
      document.querySelector(
        "[data-gallery-sections]"
      );

    if (!galleryRoot) return;


    galleryRoot.innerHTML = "";

    gallerySectionRenderers =
  Object.create(null);


    if (galleryLazyObserver) {
      galleryLazyObserver.disconnect();
      galleryLazyObserver = null;
    }


    const sections =
      project.gallerySections || [];


    if (
      "IntersectionObserver"
      in window
    ) {
      galleryLazyObserver =
        new IntersectionObserver(
          function (entries) {
            entries.forEach(
              function (entry) {
                if (
                  !entry.isIntersecting
                ) {
                  return;
                }


                ensureCaseSectionRendered(
                  entry.target
                );
              }
            );
          },
          {
            /*
             * Build the gallery before
             * the visitor reaches it.
             */
            rootMargin:
              "900px 0px 900px 0px",

            threshold: 0.01
          }
        );
    }


    sections.forEach(
      function (section) {
        const sectionElement =
          document.createElement(
            "section"
          );


        sectionElement.classList.add(
          "case-section",
          "case-gallery-section",
          "case-gallery-section-" +
            section.id
        );

        sectionElement.id =
          section.id;

        sectionElement.dataset
          .galleryRendered = "false";


        const sectionTitle =
          document.createElement("h2");

        sectionTitle.innerText =
          section.title;


        const placeholder =
          document.createElement("div");

        placeholder.classList.add(
          "case-gallery-lazy-placeholder"
        );

        placeholder.setAttribute(
          "data-gallery-lazy-placeholder",
          ""
        );

        placeholder.setAttribute(
          "aria-hidden",
          "true"
        );


        /*
         * Reserve approximately the space
         * the gallery will eventually use.
         * This reduces scroll jumping.
         */

        const groups =
          section.groups || [];

        const isMobile =
          window.innerWidth <= 580;


        let estimatedHeight = 280;


        if (isMobile) {
          estimatedHeight =
            Math.max(
              280,
              160 +
                groups.length * 390
            );
        } else {
          const estimatedRows =
            groups.reduce(
              function (
                rowCount,
                group
              ) {
                const itemCount =
                  (
                    group.items || []
                  ).length;

                return (
                  rowCount +
                  Math.max(
                    1,
                    Math.ceil(
                      itemCount / 3
                    )
                  )
                );
              },
              0
            );


          estimatedHeight =
            Math.max(
              280,
              140 +
                estimatedRows * 260 +
                groups.length * 65
            );
        }


        /*
         * Prevent extremely large
         * placeholder areas.
         */

        placeholder.style.minHeight =
          Math.min(
            estimatedHeight,
            1600
          ) + "px";


        sectionElement.appendChild(
          sectionTitle
        );

        sectionElement.appendChild(
          placeholder
        );

        galleryRoot.appendChild(
          sectionElement
        );


        const renderSection =
          function () {
            renderGallerySectionContent(
              sectionElement,
              section
            );
          };


        gallerySectionRenderers[
  section.id
] = renderSection;


        if (galleryLazyObserver) {
          galleryLazyObserver.observe(
            sectionElement
          );
        } else {
          /*
           * Safe fallback for browsers
           * without IntersectionObserver.
           */
          renderSection();
        }
      }
    );
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

const target =
  document.querySelector(
    this.getAttribute("href")
  );

if (!target) return;


/*
 * A gallery tab may point to a section
 * that has not been built yet.
 */

ensureCaseSectionRendered(
  target
);



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

const initCaseBackgroundGlow =
  function () {
    const root =
      document.documentElement;

    let glowX =
      window.innerWidth / 2;

    let glowY =
      window.innerHeight / 2;

    let targetGlowX =
      glowX;

    let targetGlowY =
      glowY;

    let lastMouseMoveTime =
      Date.now();

    let idleAngle = 0;

    let animationFrame = null;
    let isRunning = false;


    const updateGlowPosition =
      function () {
        if (document.hidden) {
          animationFrame = null;
          isRunning = false;
          return;
        }


        const isIdle =
          Date.now() -
          lastMouseMoveTime >
          1800;


        if (isIdle) {
          idleAngle += 0.006;

          targetGlowX =
            window.innerWidth / 2 +
            Math.cos(
              idleAngle
            ) * 220;

          targetGlowY =
            window.innerHeight / 2 +
            Math.sin(
              idleAngle * 0.8
            ) * 160;
        }


        glowX +=
          (
            targetGlowX -
            glowX
          ) * 0.12;

        glowY +=
          (
            targetGlowY -
            glowY
          ) * 0.12;


        root.style.setProperty(
          "--glow-x",
          glowX + "px"
        );

        root.style.setProperty(
          "--glow-y",
          glowY + "px"
        );


        animationFrame =
          requestAnimationFrame(
            updateGlowPosition
          );
      };


    const startGlow =
      function () {
        if (
          isRunning ||
          document.hidden
        ) {
          return;
        }

        isRunning = true;

        animationFrame =
          requestAnimationFrame(
            updateGlowPosition
          );
      };


    const stopGlow =
      function () {
        if (
          animationFrame !== null
        ) {
          cancelAnimationFrame(
            animationFrame
          );
        }

        animationFrame = null;
        isRunning = false;
      };


    document.addEventListener(
      "mousemove",
      function (event) {
        targetGlowX =
          event.clientX;

        targetGlowY =
          event.clientY;

        lastMouseMoveTime =
          Date.now();
      },
      {
        passive: true
      }
    );


    document.addEventListener(
      "visibilitychange",
      function () {
        if (document.hidden) {
          stopGlow();
          return;
        }

        lastMouseMoveTime =
          Date.now();

        startGlow();
      }
    );


    window.addEventListener(
      "pagehide",
      stopGlow
    );


    window.addEventListener(
      "pageshow",
      startGlow
    );


    startGlow();
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

const initMobileTabsMenu = function () {
  const mobileTabsUI = document.querySelector("[data-mobile-tabs-ui]");
  const mobileTabsToggle = document.querySelector("[data-mobile-tabs-toggle]");
  const mobileTabsMenu = document.querySelector("[data-mobile-tabs-menu]");
  const mobileTabsList = document.querySelector("[data-mobile-tabs-list]");
  const mobileTabsCloseElements = document.querySelectorAll("[data-mobile-tabs-close]");

  if (
    !mobileTabsUI ||
    !mobileTabsToggle ||
    !mobileTabsMenu ||
    !mobileTabsList
  ) {
    return;
  }

  const tabs = project.tabs || [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "branding", label: "Branding" },
    { id: "campaign", label: "Campaign" },
    { id: "social-posts", label: "Social Media Posts" }
  ];

  const mobileTabButtons = [];
  let isMenuOpen = false;
  let scrollAnimationFrame = null;

  const setMenuOpen = function (shouldOpen) {
    isMenuOpen = shouldOpen;

    mobileTabsUI.classList.toggle("is-open", shouldOpen);
    document.body.classList.toggle("case-mobile-tabs-open", shouldOpen);

    mobileTabsToggle.setAttribute(
      "aria-expanded",
      shouldOpen ? "true" : "false"
    );

    mobileTabsToggle.setAttribute(
      "aria-label",
      shouldOpen ? "Close project tabs" : "Open project tabs"
    );

    if (shouldOpen) {
      const activeButton = mobileTabsList.querySelector(
        ".case-mobile-tab-option.active"
      );

      window.setTimeout(function () {
        if (activeButton) {
          activeButton.focus();
        }
      }, 280);
    }
  };

  const setActiveMobileTab = function (activeButton) {
    mobileTabButtons.forEach(function (button) {
      const isActive = button === activeButton;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  mobileTabsList.innerHTML = "";

  tabs.forEach(function (tab, index) {
    const sectionId = getSectionId(tab.id);

    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("case-mobile-tab-option");
    button.dataset.mobileTabTarget = sectionId;
    button.innerText = tab.label;

    if (index === 0) {
      button.classList.add("active");
      button.setAttribute("aria-current", "true");
    } else {
      button.setAttribute("aria-current", "false");
    }

button.addEventListener("click", function () {
  const targetSection =
    document.getElementById(sectionId);

if (!targetSection) return;


/*
 * Build the selected gallery before
 * calculating its mobile scroll position.
 */

ensureCaseSectionRendered(
  targetSection
);


setActiveMobileTab(button);
setMenuOpen(false);

  /*
   * Explicitly remove the body scroll lock.
   * This is necessary for mobile Safari.
   */
  document.body.classList.remove(
    "case-mobile-tabs-open"
  );

  const scrollToTargetSection = function () {
    const targetTop =
      targetSection.getBoundingClientRect().top +
      window.scrollY -
      24;

    window.scrollTo({
      top: Math.max(0, targetTop),
      left: 0,
      behavior: "smooth"
    });
  };

  /*
   * Wait until the menu closes and the browser
   * restores normal page scrolling.
   */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      window.setTimeout(
        scrollToTargetSection,
        60
      );
    });
  });
});

    mobileTabsList.appendChild(button);
    mobileTabButtons.push(button);
  });

  const updateActiveMobileTab = function () {
    if (window.innerWidth > 580 || mobileTabButtons.length === 0) return;

    let activeButton = mobileTabButtons[0];
    const activationLine = 150;

    mobileTabButtons.forEach(function (button) {
      const sectionId = button.dataset.mobileTabTarget;
      const targetSection = document.getElementById(sectionId);

      if (
        targetSection &&
        targetSection.getBoundingClientRect().top <= activationLine
      ) {
        activeButton = button;
      }
    });

    const pageBottomReached =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 8;

    if (pageBottomReached) {
      activeButton = mobileTabButtons[mobileTabButtons.length - 1];
    }

    setActiveMobileTab(activeButton);
  };

  mobileTabsToggle.addEventListener("click", function () {
    setMenuOpen(!isMenuOpen);
  });

  mobileTabsCloseElements.forEach(function (element) {
    element.addEventListener("click", function () {
      setMenuOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isMenuOpen) {
      setMenuOpen(false);
      mobileTabsToggle.focus();
    }
  });

  window.addEventListener(
    "scroll",
    function () {
      if (scrollAnimationFrame) {
        window.cancelAnimationFrame(scrollAnimationFrame);
      }

      scrollAnimationFrame = window.requestAnimationFrame(
        updateActiveMobileTab
      );
    },
    { passive: true }
  );

  window.addEventListener("resize", function () {
    if (window.innerWidth > 580) {
      setMenuOpen(false);
    }

    updateActiveMobileTab();
  });

  updateActiveMobileTab();
};

const initHideNavOnScroll = function () {
  const mobileNav =
    document.querySelector(
      "[data-case-mobile-nav]"
    );

  if (!mobileNav) return;

  let lastScrollY =
    Math.max(window.scrollY, 0);

  let scrollFrame = null;


  const setMobileNavHidden = function (
    shouldHide
  ) {
    mobileNav.classList.toggle(
      "is-hidden",
      shouldHide
    );

    document.body.classList.toggle(
      "case-mobile-nav-hidden",
      shouldHide
    );
  };


  const updateMobileNav = function () {
    const currentScrollY =
      Math.max(window.scrollY, 0);

    if (window.innerWidth > 580) {
      setMobileNavHidden(false);
      lastScrollY = currentScrollY;
      scrollFrame = null;
      return;
    }

    const scrollDifference =
      currentScrollY - lastScrollY;


    /*
     * Always show the navbar near
     * the beginning of the page.
     */
    if (currentScrollY <= 40) {
      setMobileNavHidden(false);
    }

    /*
     * Page moving downward:
     * hide the bottom navbar.
     */
    else if (scrollDifference > 5) {
      setMobileNavHidden(true);
    }

    /*
     * Page moving upward:
     * reveal the bottom navbar.
     */
    else if (scrollDifference < -5) {
      setMobileNavHidden(false);
    }


    if (Math.abs(scrollDifference) > 5) {
      lastScrollY = currentScrollY;
    }

    scrollFrame = null;
  };


  const requestMobileNavUpdate =
    function () {
      if (scrollFrame !== null) return;

      scrollFrame =
        requestAnimationFrame(
          updateMobileNav
        );
    };


  setMobileNavHidden(false);

  window.addEventListener(
    "scroll",
    requestMobileNavUpdate,
    { passive: true }
  );


  window.addEventListener(
    "resize",
    function () {
      lastScrollY =
        Math.max(window.scrollY, 0);

      if (window.innerWidth > 580) {
        setMobileNavHidden(false);
      }
    }
  );


  /*
   * Restore a clean navbar state when
   * the browser returns from its cache.
   */
  window.addEventListener(
    "pageshow",
    function () {
      lastScrollY =
        Math.max(window.scrollY, 0);

      setMobileNavHidden(false);
    }
  );
};

/*-----------------------------------*\
  #CATEGORY-SPECIFIC CONTACT CTA
\*-----------------------------------*/

const caseContactContent = {
  "Graphic Design": {
    heading:
      "Feels like a good fit? Let’s talk.",

    body:
      "You have already seen how I approach different briefs and formats. A quick conversation could help us understand whether the way I work matches what your team is looking for."
  },

  "UI/UX": {
    heading:
      "Think this approach could work for your product?",

    body:
      "You have seen how I organise information, build structure and think through digital experiences. It would be good to hear what your team is working on and see whether there is a fit."
  },

  "AI-Assisted Design": {
    heading:
      "Exploring where AI could fit into your creative process?",

    body:
      "You have seen how I use AI with direction, judgement and control. A quick chat could help us understand where this approach might genuinely help your team."
  },

  "Print Design": {
    heading:
      "Need someone who understands both design and real-world use?",

    body:
      "You have already seen the work. The next step is simply to discuss the kind of print, packaging or collateral your team handles and whether my approach fits those needs."
  }
};


const renderCaseContactCta = function () {
  const ctaSection =
    document.querySelector(
      "[data-case-contact-cta]"
    );

  const ctaHeading =
    document.querySelector(
      "[data-case-contact-heading]"
    );

  const ctaCopy =
    document.querySelector(
      "[data-case-contact-copy]"
    );

  if (
    !ctaSection ||
    !ctaHeading ||
    !ctaCopy
  ) {
    return;
  }


  const categoryContent =
    caseContactContent[project.category];


  /*
   * Prevent the Graphic Design placeholder
   * from appearing on unsupported categories.
   */

  if (!categoryContent) {
    ctaSection.hidden = true;
    return;
  }


  ctaSection.hidden = false;

  ctaHeading.textContent =
    categoryContent.heading;

  ctaCopy.textContent =
    categoryContent.body;
};

/*-----------------------------------*\
  #RESET DETAIL PAGE SCROLL LOCKS
\*-----------------------------------*/

const resetDetailPageScrollLocks = function () {
  document.body.classList.remove(
    "case-mobile-tabs-open",
    "case-preview-open",
    "case-mobile-nav-hidden"
  );

  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

/*-----------------------------------*\
  #IMAGE LOADING HINTS
\*-----------------------------------*/

const optimiseRenderedCaseImages =
  function () {
    const heroImage =
      document.querySelector(
        "[data-case-cover] img"
      );

    const images =
      document.querySelectorAll(
        "body.portfolio-detail-page img"
      );


    images.forEach(function (image) {
      image.decoding = "async";


      if (image === heroImage) {
        image.loading = "eager";

        image.setAttribute(
          "fetchpriority",
          "high"
        );

        return;
      }


      if (
        !image.hasAttribute("loading")
      ) {
        image.loading = "lazy";
      }


      if (
        !image.hasAttribute(
          "fetchpriority"
        )
      ) {
        image.setAttribute(
          "fetchpriority",
          "low"
        );
      }
    });
  };

/*-----------------------------------*\
  #CASE SECTION REVEAL
\*-----------------------------------*/

const initCaseSectionReveal =
  function () {
    document.documentElement.classList.add(
      "reveal-enabled"
    );


    const revealTargets =
      document.querySelectorAll([
        "#client-info",
        ".case-two-column",
        "[data-gallery-sections] > .case-gallery-section",
        ".case-contact-cta",
        ".case-next-projects",
        "[data-ux-case-study] > *"
      ].join(","));


    if (
      !(
        "IntersectionObserver"
        in window
      )
    ) {
      revealTargets.forEach(
        function (target) {
          target.classList.add(
            "is-visible"
          );
        }
      );

      return;
    }


    const revealObserver =
      new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(
            function (entry) {
              if (
                !entry.isIntersecting
              ) {
                return;
              }

              entry.target.classList.add(
                "is-visible"
              );

              observer.unobserve(
                entry.target
              );
            }
          );
        },
        {
          threshold: 0.08,

          rootMargin:
            "0px 0px -8% 0px"
        }
      );


    revealTargets.forEach(
      function (target) {
        target.classList.add(
          "reveal-on-scroll"
        );

        revealObserver.observe(
          target
        );
      }
    );
  };	
	
const renderInitialHashSection =
  function () {
    if (!window.location.hash) return;


    const target =
      document.querySelector(
        window.location.hash
      );


    if (target) {
      ensureCaseSectionRendered(
        target
      );
    }
  };
	
resetDetailPageScrollLocks();

window.addEventListener(
  "pageshow",
  resetDetailPageScrollLocks
);



fillTextContent();
renderTabs();
renderCoverImage();
renderProjectOverview();
renderProjectSummary();
renderUXCaseStudy();
renderEmploymentDisclosure();
renderThinkingSections();
renderGallerySections();
renderInitialHashSection();
renderCaseContactCta();
renderNextProjects();
optimiseRenderedCaseImages();
initCaseSectionReveal();

initTabs();
initMobileTabsMenu();
initCaseBackgroundGlow();
initBackButtonStickyAlignment();
initHideNavOnScroll();