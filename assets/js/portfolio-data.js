const makePlaceholders = function (count, labelPrefix) {
  return Array.from({ length: count }, function (_, index) {
    return {
      type: "placeholder",
      label: `${labelPrefix} ${String(index + 1).padStart(2, "0")}`
    };
  });
};

const portfolioProjects = {
"graphic-design-dagdushet-ganpati": {
  title: "Dagdushet Ganpati",
  fullTitle: "Shrimant Dagdusheth Halwai Ganpati",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Religious / Devotional Organisation",
  projectType: "",
  role: "Graphic Designer",
  deliverables: "Branding, Campaign, Social Media Creatives",

  tools: [
    {
      name: "Adobe Illustrator",
      icon: "./assets/images/software Icons/Adobe_Illustrator_CC_icon.svg"
    },
    {
      name: "Adobe Photoshop",
      icon: "./assets/images/software Icons/Adobe_Photoshop_CC_icon.svg"
    },
    {
      name: "Canva",
      icon: "./assets/images/software Icons/canva-icon.svg"
    },
    {
      name: "Corel Draw",
      icon: "./assets/images/software Icons/corel-draw.png"
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl: "./index.html?section=portfolio",
    categoryLabel: "Graphic Design",
    categoryUrl: "./index.html?section=portfolio&category=graphic-design",
    currentLabel: "Dagdushet Ganpati"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "branding", label: "Branding" },
    { id: "campaign", label: "Campaign" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: { type: "placeholder", label: "Cover Image" },
    mobile: { type: "placeholder", label: "Cover Image" }
  },

  projectOverview: {
    title: "About Shrimant Dagdusheth Halwai Ganpati",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Shrimant Dagdusheth Halwai Ganpati – the most endearing deity to the devotees. Shrimant Dagdusheth Halwai Ganpati is the epitome of pride and honor to the city of Pune. Devotees from every part of India and the world come here to pray to Lord Ganesha every year. Today, Shrimant Dagdusheth Halwai Temple is not only one of the most highly revered places of worship in India but an institution that is actively engaged in social welfare and cultural development through Shrimant Dagdusheth Halwai Sarvajanik Ganpati Trust. Every year, the Ganpati festival was celebrated with deep faith and enthusiasm, not only by Dagdusheth’s family but the entire neighborhood.",
        bodyMobile: "Shrimant Dagdusheth Halwai Ganpati – the most endearing deity to the devotees. Shrimant Dagdusheth Halwai Ganpati is the epitome of pride and honor to the city of Pune. Devotees from every part of India and the world come here to pray to Lord Ganesha every year. Today, Shrimant Dagdusheth Halwai Temple is not only one of the most highly revered places of worship in India but an institution that is actively engaged in social welfare and cultural development through Shrimant Dagdusheth Halwai Sarvajanik Ganpati Trust. Every year, the Ganpati festival was celebrated with deep faith and enthusiasm, not only by Dagdusheth’s family but the entire neighborhood."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design need was to create communication that felt devotional, respectful and visually strong, while still being suitable for modern digital platforms. The work had to maintain the sacred identity of Shrimant Dagdusheth Halwai Ganpati, but also make the campaign and social media creatives feel clear, engaging and easy to connect with for today’s audience.",
        bodyMobile: "The design needed to feel devotional, respectful and visually strong, while working well on modern digital platforms. It had to keep the sacred identity of Shrimant Dagdusheth Halwai Ganpati intact and still feel clear, engaging and campaign-ready."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included devotees, local followers, families, festival visitors and people who connect emotionally with Ganpati Bappa. Since the communication was also used across digital platforms, the designs needed to work for both traditional devotees and younger audiences who discover and engage with religious content through social media.",
        bodyMobile: "The audience included devotees, families, local followers, festival visitors and younger digital audiences who connect with Ganpati Bappa through social media and online content."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design needed to create a feeling of devotion, warmth, celebration and trust. It had to feel spiritually rich without becoming too heavy, and festive without losing respect. The aim was to make people feel connected to Ganpati Bappa, the mandir’s legacy and the emotional energy of the occasion.",
        bodyMobile: "The design had to create a feeling of devotion, warmth, celebration and trust. It needed to feel festive and emotionally rich without losing the respect and sacredness of the mandir."
      }
    ]
  },

  summaryBlock: {
    roleHeading: "My Role",
    deliverablesHeading: "Deliverables",
    toolsHeading: "Tools Used"
  },

  bestWork: {
    title: "",
    items: [
      { type: "placeholder", label: "Best Work 01" },
      { type: "placeholder", label: "Best Work 02" },
      { type: "placeholder", label: "Best Work 03" },
      { type: "placeholder", label: "Best Work 04" }
    ]
  },

  designThinking: {
    heading: "Design Thinking",
    points: [
      "This client was a unique case because their needs work across various formats, occasions & daily requirements.",
      "With a very high volume of social media posts going out every day, the biggest challenge was to bring structure to the chaos.",
      "The demand was not only about designing individual posts, but about creating a system that could manage speed, variety & consistency at the same time.",
      "The goal was to make every post feel different enough to stay engaging, but still connected enough to look like it belonged to one larger visual family.",
      "Overall, we focused on creating a visual system that could handle scale, repetition & daily updates without losing clarity."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The design language was challenging because the brand needed to publish multiple posts every day while still maintaining a consistent visual identity.",
      "Each post had to feel fresh, but also connected to the larger Dagdusheth communication style.",
      "Colours were kept more flexible instead of fixed brand colors. A palette inspired by the Paithani saree was chosen because it was, in context perfect of the brand.",
      "For major occasions, a separate design language was created to make those festivals feel more grand, special & emotionally elevated.",
      "The final system balanced daily consistency with festive distinction, making the brand feel organized, devotional & visually rich."
    ]
  },

  gallerySections: [
    {
      id: "branding",
      title: "Branding",
      groups: [
        {
          key: "festivalLogos",
          title: "Festival Logos",
          previewGroupName: "Festival Logos",
          items: makePlaceholders(9, "Festival Logo")
        },
        {
          key: "wallpapers",
          title: "Wallpapers",
          previewGroupName: "Wallpapers",
          items: makePlaceholders(4, "Wallpaper")
        }
      ]
    },

    {
      id: "campaign",
      title: "Campaign",
      groups: [
        {
          key: "ganeshUtsav2025",
          title: "Ganesh Utsav 2025",
          previewGroupName: "Ganesh Utsav 2025",
          items: makePlaceholders(5, "Ganesh Utsav 2025")
        },
        {
          key: "ganeshJanmaSohola2025",
          title: "Ganesh Janma Sohola 2025",
          previewGroupName: "Ganesh Janma Sohola 2025",
          items: makePlaceholders(5, "Ganesh Janma Sohola 2025")
        },
        {
          key: "atirudraMahayadnya2025",
          title: "Atirudra Mahayadnya 2025",
          previewGroupName: "Atirudra Mahayadnya 2025",
          items: makePlaceholders(5, "Atirudra Mahayadnya 2025")
        },
        {
          key: "shahaleMohotsav2025",
          title: "Shahale Mohotsav 2025",
          previewGroupName: "Shahale Mohotsav 2025",
          items: makePlaceholders(4, "Shahale Mohotsav 2025")
        }
      ]
    },

    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "dailyPostingRugnaseva",
          title: "Daily Posting: Rugnaseva, Shikshan Sanstha, Shradhanjali post Style",
          previewGroupName: "Daily Posting",
          items: makePlaceholders(4, "Daily Posting")
        },
        {
          key: "dailyPostingTopical",
          title: "Daily Posting: Topical post Style",
          previewGroupName: "Topical Post Style",
          items: makePlaceholders(2, "Topical Post")
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Samartha Seva Mandal Sajjangad",
      industry: "Religious / Spiritual Organisation",
      url: "./portfolio-detail.html?project=graphic-design-samartha-seva-mandal",
      imageLabel: "Samartha Seva Mandal Sajjangad"
    },
    {
      title: "Kesariya@100",
      industry: "Heritage / Commemorative Design",
      url: "./portfolio-detail.html?project=graphic-design-kesariya-100",
      imageLabel: "Kesariya@100"
    },
    {
      title: "Autobiography Book Cover",
      industry: "Publishing / Print Design",
      url: "./portfolio-detail.html?project=graphic-design-autobiography-book-cover",
      imageLabel: "Autobiography Book Cover"
    }
  ]
}
};