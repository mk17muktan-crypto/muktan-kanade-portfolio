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
    desktop: {
    src: "./assets/images/Thumbnails/Graphic Design/Desktop/DG.jpg",
    alt: "Shrimant Dagdusheth Halwai Ganpati cover image"
  },
    mobile: {
    src: "./assets/images/Portfolio/Graphic Design/Mobile/DG.jpg",
    alt: "Shrimant Dagdusheth Halwai Ganpati cover image"
  },
  },

  projectOverview: {
    title: "Shrimant Dagdusheth Halwai Ganpati",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Shrimant Dagdusheth Halwai Ganpati – the most endearing deity to the devotees. Shrimant Dagdusheth Halwai Ganpati is the epitome of pride and honor to the city of Pune. Devotees from every part of India and the world come here to pray to Lord Ganesha every year. Today, Shrimant Dagdusheth Halwai Temple is not only one of the most highly revered places of worship in India but an institution that is actively engaged in social welfare and cultural development through Shrimant Dagdusheth Halwai Sarvajanik Ganpati Trust. Every year, the Ganpati festival was celebrated with deep faith and enthusiasm, not only by Dagdusheth’s family but the entire neighborhood.",
        bodyMobile: "Shrimant Dagdusheth Halwai Ganpati – the most endearing deity to the devotees. Shrimant Dagdusheth Halwai Ganpati is the epitome of pride and honor to the city of Pune. Devotees from every part of India and the world come here to pray to Lord Ganesha every year. Today, Shrimant Dagdusheth Halwai Temple is not only one of the most highly revered places of worship in India but an institution that is actively engaged in social welfare and cultural development through Shrimant Dagdusheth Halwai Sarvajanik Ganpati Trust. Every year, the Ganpati festival was celebrated with deep faith and enthusiasm, not only by Dagdusheth’s family but the entire neighborhood."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design need was to create communication that felt devotional, respectful and visually strong, while still being suitable for modern digital platforms. The work had to maintain the sacred identity of Shrimant Dagdusheth Halwai Ganpati, but also make the campaign and social media creatives feel clear, engaging and easy to connect with for today’s audience.",
        bodyMobile: "The design needed to feel devotional, respectful and visually strong, while working well on modern digital platforms.<br>It had to keep the sacred identity of Shrimant Dagdusheth Halwai Ganpati intact and still feel clear, engaging and campaign-ready."
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
    { type: "placeholder", label: "Best Work 02" }
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
  ],

  pointsMobile: [
    "This client needed designs across daily posts, special occasions and multiple content formats.",
    "Since many posts had to go out every day, the main challenge was to bring structure, speed and consistency to a high-volume design process.",
    "The goal was not just to design individual posts, but to create a visual system where every post felt fresh while still belonging to one larger Dagdusheth visual family."
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
  ],

  pointsMobile: [
    "Instead of using fixed colours repeatedly, the colour direction was kept more rich and flexible. A palette inspired by the Paithani saree was chosen because it felt traditional, premium and culturally right for Dagdusheth.",
    "For major occasions, a separate design language was created to make the festivals feel more grand, special and emotionally elevated.",
    "The final system balanced daily consistency with festive distinction."
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
        items: [
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Logo-1.jpg",
            alt: "Logos 01"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Logo-2.jpg",
            alt: "Logos 02"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Logo-3.jpg",
            alt: "Logos 03"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Logo-4.jpg",
            alt: "Logos 04"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Logo-5.jpg",
            alt: "Logos 05"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Logo-6.jpg",
            alt: "Logos 06"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Logo-7.jpg",
            alt: "Logos 07"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Logo-8.jpg",
            alt: "Logos 08"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Logo-9.jpg",
            alt: "Logos 09"
          }
        ]
      },

      {
        key: "wallpapers",
        title: "Wallpapers",
        previewGroupName: "Wallpapers",
        items: [
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Wallpaper-1.jpg",
            alt: "Wallpapers 01"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Wallpaper-2.jpg",
            alt: "Wallpapers 02"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Wallpaper-3.jpg",
            alt: "Wallpapers 03"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Wallpaper-4.jpg",
            alt: "Wallpapers 04"
          }
        ]
      }
    ]
  },

  {
    id: "campaign",
    title: "Campaign",
    groups: [
      {
        key: "ganeshUtsav2024",
        title: "Ganesh Utsav 2024",
        previewGroupName: "Ganesh Utsav 2024",
        items: [
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/GU 2024 Image 1.jpg",
            alt: "Ganesh Utsav 2024 creative 01"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/GU-2024-Image-2.jpg",
            alt: "Ganesh Utsav 2024 creative 02"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/GU-2024-Image-3.jpg",
            alt: "Ganesh Utsav 2024 creative 03"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/GU-2024-Image-4.jpg",
            alt: "Ganesh Utsav 2024 creative 04"
          }
        ]
      },

      {
        key: "ganeshUtsav2025",
        title: "Ganesh Utsav 2025",
        previewGroupName: "Ganesh Utsav 2025",
        items: [
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/GU-2025-Image-1.jpg",
            alt: "Ganesh Utsav 2025 creative 01"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/GU-2025-Image-2.jpg",
            alt: "Ganesh Utsav 2025 creative 02"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/GU-2025-Image-3.jpg",
            alt: "Ganesh Utsav 2025 creative 03"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/GU-2025-Image-4.jpg",
            alt: "Ganesh Utsav 2025 creative 04"
          }
        ]
      },

      {
        key: "ganeshJanmaSohola2025",
        title: "Ganesh Janma Sohola 2025",
        previewGroupName: "Ganesh Janma Sohola 2025",
        items: [
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Ganesh-Janma-1.jpg",
            alt: "Ganesh Janma Sohola 2025 creative 01"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Ganesh-Janma-2.jpg",
            alt: "Ganesh Janma Sohola 2025 creative 02"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Ganesh-Janma-3.jpg",
            alt: "Ganesh Janma Sohola 2025 creative 03"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Ganesh-Janma-4.jpg",
            alt: "Ganesh Janma Sohola 2025 creative 04"
          }
        ]
      },

      {
        key: "atirudraMahayadnya2025",
        title: "Atirudra Mahayadnya 2025",
        previewGroupName: "Atirudra Mahayadnya 2025",
        items: [
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Atirudra-1.jpg",
            alt: "Atirudra Mahayadnya 2025 creative 01"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Atirudra-2.jpg",
            alt: "Atirudra Mahayadnya 2025 creative 02"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Atirudra-3.jpg",
            alt: "Atirudra Mahayadnya 2025 creative 03"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Atirudra-4.jpg",
            alt: "Atirudra Mahayadnya 2025 creative 04"
          }
        ]
      },

      {
        key: "shahaleMohotsav2025",
        title: "Shahale Mohotsav 2025",
        previewGroupName: "Shahale Mohotsav 2025",
        items: [
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Shahale-1.jpg",
            alt: "Shahale Mohotsav 2025 creative 01"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Shahale-2.jpg",
            alt: "Shahale Mohotsav 2025 creative 02"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Shahale-3.jpg",
            alt: "Shahale Mohotsav 2025 creative 03"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Shahale-4.jpg",
            alt: "Shahale Mohotsav 2025 creative 04"
          }
        ]
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
        items: [
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Daily-1.jpg",
            alt: "Daily Posting creative 01"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Daily-2.jpg",
            alt: "Daily Posting creative 02"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Daily-3.jpg",
            alt: "Daily Posting creative 03"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Daily-4.jpg",
            alt: "Daily Posting creative 04"
          }
        ]
      },
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