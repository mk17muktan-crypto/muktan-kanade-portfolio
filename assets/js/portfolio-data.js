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
    src: "./assets/images/Thumbnails/Graphic Design/DG.jpg",
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
    image: {
      src: "./assets/images/Thumbnails/Graphic Design/SSMS.jpg",
      alt: "Samartha Seva Mandal Sajjangad thumbnail"
    },
    imageLabel: "Samartha Seva Mandal Sajjangad"
  },
  {
    title: "Kesariya@100",
    industry: "Heritage / Commemorative Design",
    url: "./portfolio-detail.html?project=graphic-design-kesariya-100",
    image: {
      src: "./assets/images/Thumbnails/Graphic Design/Kesariya.jpg",
      alt: "Kesariya@100 thumbnail"
    },
    imageLabel: "Kesariya@100"
  },
  {
    title: "Autobiography Book Cover",
    industry: "Publishing / Print Design",
    url: "./portfolio-detail.html?project=graphic-design-autobiography-book-cover",
    image: {
      src: "./assets/images/Thumbnails/Print Design/Mahesh Bhau.jpg",
      alt: "Autobiography Book Cover thumbnail"
    },
    imageLabel: "Autobiography Book Cover"
  },
]

},

"graphic-design-victory-polychem": {
  title: "Victory Polychem",
  fullTitle: "Victory Polychem",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Industrial Chemicals",
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
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl: "./index.html?section=portfolio",
    categoryLabel: "Graphic Design",
    categoryUrl: "./index.html?section=portfolio&category=graphic-design",
    currentLabel: "Victory Polychem"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/Victory Polychem.jpg",
      alt: "Victory Polychem portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/Victory Polychem.jpg",
      alt: "Victory Polychem mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Victory Polychem",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Victory Polychem was established in 1994 by the late Dr. A.V. Kaulgud, an eminent scientist in the field of lubrication. The company has been leading in the chemical industry as an expert premier manufacturer and global technical solution provider. Its specialised products are environmentally friendly. Through commitment and extensive R&D, Victory Polychem pioneered nitrite-free products and vegetable oil-based solutions to replace polluting fluids.",
        bodyMobile: "Victory Polychem was established in 1994 by the late Dr. A.V. Kaulgud, an eminent scientist in the field of lubrication. The company is a manufacturer and global technical solution provider in the chemical industry, known for environmentally friendly, nitrite-free and vegetable oil-based solutions."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to make Victory Polychem look reliable, professional and industry-ready. Since the brand works in a technical and chemical-based space, the communication had to feel clean, structured and trustworthy, while still being visually strong enough for marketing and digital use.",
        bodyMobile: "The design needed to make Victory Polychem look reliable, professional and industry-ready. Since the brand works in a technical and chemical-based space, the communication had to feel clean, structured and trustworthy."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included business owners, manufacturers, industrial buyers and dealers who look for quality, consistency and dependability in chemical and polymer-based products. The designs needed to speak to a practical, B2B audience that values clarity over decoration.",
        bodyMobile: "The audience included business owners, manufacturers, industrial buyers and dealers who look for quality, consistency and dependability in chemical and polymer-based products."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of trust, stability and technical confidence. It needed to make the brand feel dependable and capable, while also giving the communication a clean, modern and professional presence.",
        bodyMobile: "The design had to create a feeling of trust, stability and technical confidence. It needed to make the brand feel dependable, capable, clean and professional."
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
    items: []
  },

  designThinking: {
    heading: "Design Thinking",

    points: [
      "The communication was planned to show the product benefits in a clear and practical way.",
      "The focus was on showing the visible before-and-after difference created by the chemical solutions.",
      "It also highlighted the different ways the products can be applied across various use cases.",
      "A key part of the messaging was to communicate that the solutions are non-hazardous and non-toxic.",
      "The overall aim was to show that the products are safe, effective and suitable for a wide range of surfaces."
    ],

    pointsMobile: [
      "The communication was planned to show the product benefits in a clear and practical way.",
      "The focus was on showing the visible before-and-after difference created by the chemical solutions.",
      "The overall aim was to show that the products are safe, effective and suitable for a wide range of surfaces."
    ]
  },

  visualSystem: {
    heading: "Visual System",

    points: [
      "Used the brand colors to maintain consistency and recall.",
      "Added product photographs to keep the communication direct and trustworthy.",
      "Included engine parts and industrial images to make the visuals feel relevant to the target audience.",
      "Used flow patterns to visually suggest protection, movement and application.",
      "Added before-and-after component images to show the product’s real impact.",
      "Used application icons to make the information easier to understand at a glance.",
      "Included clear call-to-action elements to guide the viewer towards the next step."
    ],

    pointsMobile: [
      "Used the brand colors to maintain consistency and recall.",
      "Added product photographs, engine parts and industrial images to keep the visuals direct and relevant.",
      "Used flow patterns, before-and-after images, application icons and clear call-to-action elements to make the communication easier to understand."
    ]
  },

  gallerySections: [
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "victoryPostStyle1",
          title: "Post Style 1: Image Based",
          previewGroupName: "Post Style 1: Image Based",
          items: [
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-1-A.jpg",
              alt: "Victory Polychem image based post style 01"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-1-B.jpg",
              alt: "Victory Polychem image based post style 02"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-1-C.jpg",
              alt: "Victory Polychem image based post style 03"
            }
          ]
        },
        {
          key: "victoryPostStyle2",
          title: "Post Style 2: Image & Product Based",
          previewGroupName: "Post Style 2: Image & Product Based",
          items: [
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-2-A.jpg",
              alt: "Victory Polychem image and product based post style 01"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-2-B.jpg",
              alt: "Victory Polychem image and product based post style 02"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-2-C.jpg",
              alt: "Victory Polychem image and product based post style 03"
            }
          ]
        },
        {
          key: "victoryPostStyle3",
          title: "Post Style 3: Product Based",
          previewGroupName: "Post Style 3: Product Based",
          items: [
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-3-A.jpg",
              alt: "Victory Polychem product based post style 01"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-3-B.jpg",
              alt: "Victory Polychem product based post style 02"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-3-C.jpg",
              alt: "Victory Polychem product based post style 03"
            }
          ]
        },
        {
          key: "victoryPostStyle4",
          title: "Post Style 4: Text & Product Based",
          previewGroupName: "Post Style 4: Text & Product Based",
          items: [
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-4-A.jpg",
              alt: "Victory Polychem text and product based post style 01"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-4-B.jpg",
              alt: "Victory Polychem text and product based post style 02"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-4-C.jpg",
              alt: "Victory Polychem text and product based post style 03"
            }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Raptech Engineering",
      industry: "Engineering / Manufacturing",
      url: "./portfolio-detail.html?project=graphic-design-raptech-engineering",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Raptech.jpg",
        alt: "Raptech Engineering thumbnail"
      },
      imageLabel: "Raptech Engineering"
    },
    {
      title: "Wilo",
      industry: "Pumps / Water Technology",
      url: "./portfolio-detail.html?project=graphic-design-wilo",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Wilo.jpg",
        alt: "Wilo thumbnail"
      },
      imageLabel: "Wilo"
    },
    {
      title: "Celestial",
      industry: "Education / E-learning",
      url: "./portfolio-detail.html?project=graphic-design-celestial",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Celestial.jpg",
        alt: "Celestial thumbnail"
      },
      imageLabel: "Celestial"
    }
  ]
},
"graphic-design-raptech-engineering": {
  title: "Raptech Engineering",
  fullTitle: "Raptech Engineering",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Engineering / Manufacturing",
  projectType: "",
  role: "Graphic Designer",
  deliverables: "Social Media Creatives",

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
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl: "./index.html?section=portfolio",
    categoryLabel: "Graphic Design",
    categoryUrl: "./index.html?section=portfolio&category=graphic-design",
    currentLabel: "Raptech Engineering"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/Raptech.jpg",
      alt: "Raptech Engineering portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/Raptech.jpg",
      alt: "Raptech Engineering mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Raptech Engineering",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Raptech Engineering's journey began in 1990 when Mr. Sitaram Borhade, an ITI-trained machine operator, founded Nitin Engineering Works in a modest 85 sq. ft. space equipped with a single lathe machine. Driven by a commitment to precision and continuously challenging technical competence, the company evolved into Raptech Engineering Pvt. Ltd., becoming a trusted name in the automotive and logistics sectors.",
        bodyMobile: "Raptech Engineering began in 1990 as Nitin Engineering Works in a modest 85 sq. ft. space with a single lathe machine. Over time, it evolved into Raptech Engineering Pvt. Ltd., becoming a trusted name in the automotive and logistics sectors."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present Raptech Engineering as a strong, capable and technically reliable brand. Since the company works in an engineering-led space, the communication had to feel precise, structured and professional, while clearly showing the brand’s industrial strength and service capability.",
        bodyMobile: "The design needed to present Raptech Engineering as a strong, capable and technically reliable brand, while clearly showing its industrial strength and service capability."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included industrial clients, engineers, manufacturers, project heads, business owners and technical decision-makers. These are people who look for clarity, dependability and practical value, so the design had to communicate information in a direct and trustworthy way.",
        bodyMobile: "The audience included industrial clients, engineers, manufacturers, project heads, business owners and technical decision-makers who value clarity, dependability and practical information."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of confidence, trust and technical assurance. It needed to make Raptech Engineering feel dependable, experienced and ready to handle serious industrial or engineering requirements.",
        bodyMobile: "The design had to create a feeling of confidence, trust and technical assurance, making Raptech Engineering feel dependable and experienced."
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
    items: []
  },

  designThinking: {
    heading: "Design Thinking",
    points: [
      "The communication was planned to showcase the brand’s products with clarity, honesty & transparency.",
      "Since the brand had multiple products with multiple use cases, the content needed a more organized approach.",
      "Instead of showing everything at once, the posts were structured to focus on one specific use case per quarter.",
      "This helped keep the messaging simple, focused, and easier for the audience to understand.",
      "The overall strategy was to present each product in a way that felt clear, relevant & application-driven."
    ],
    pointsMobile: [
      "The communication was planned to showcase the brand’s products with clarity, honesty & transparency.",
      "Since the brand had multiple products and use cases, the content needed a more organized approach.",
      "The overall strategy was to present each product in a way that felt clear, relevant & application-driven."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The brand already had a well-defined visual language, which gave the designs a strong foundation.",
      "The colours, logo & overall brand identity were used consistently across the communication.",
      "Supporting shapes and design elements were used to frame and highlight product photographs.",
      "Image placement was kept important, so the products and their applications could be seen clearly.",
      "The final design approach helped the posts feel clean, product-focused & easy to connect with."
    ],
    pointsMobile: [
      "The brand already had a well-defined visual language, which gave the designs a strong foundation.",
      "The colours, logo & overall identity were used consistently across the communication.",
      "The final design approach helped the posts feel clean, product-focused & easy to connect with."
    ]
  },

  gallerySections: [
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "raptechPostStyle1",
          title: "Post Style 1: Image Based Hiring Posts",
          previewGroupName: "Raptech Post Style 1",
          items: [
            {
              src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-1-A.jpg",
              alt: "Raptech image based hiring post 01"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-1-B.jpg",
              alt: "Raptech image based hiring post 02"
            }
          ]
        },
        {
          key: "raptechPostStyle2",
          title: "Post Style 2: Image & Product Based",
          previewGroupName: "Raptech Post Style 2",
          items: [
            {
              src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-2-A.jpg",
              alt: "Raptech image and product based post 01"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-2-B.jpg",
              alt: "Raptech image and product based post 02"
            }
          ]
        },
        {
          key: "raptechPostStyle3",
          title: "Post Style 3: Product Based",
          previewGroupName: "Raptech Post Style 3",
          items: [
            {
              src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-3-A.jpg",
              alt: "Raptech product based post 01"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-3-B.jpg",
              alt: "Raptech product based post 02"
            }
          ]
        },
        {
          key: "raptechPostStyle4",
          title: "Post Style 4: Text & Product Based",
          previewGroupName: "Raptech Post Style 4",
          items: [
            {
              src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-4-A.jpg",
              alt: "Raptech text and product based post 01"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-4-B.jpg",
              alt: "Raptech text and product based post 02"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-4-C.jpg",
              alt: "Raptech text and product based post 03"
            }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Trelawny",
      industry: "Industrial Tools / Engineering",
      url: "./portfolio-detail.html?project=graphic-design-trelawny",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Trelawny.jpg",
        alt: "Trelawny thumbnail"
      },
      imageLabel: "Trelawny"
    },
    {
      title: "COEPian's Academy",
      industry: "Education / Coaching",
      url: "./portfolio-detail.html?project=graphic-design-coepians-academy",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/COEP.jpg",
        alt: "COEPian's Academy thumbnail"
      },
      imageLabel: "COEPian's Academy"
    },
    {
      title: "Sundar Sanskar",
      industry: "Education / Child Development",
      url: "./portfolio-detail.html?project=graphic-design-sundar-sanskar",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Sundar Sanskar.jpg",
        alt: "Sundar Sanskar thumbnail"
      },
      imageLabel: "Sundar Sanskar"
    }
  ]
},
	"graphic-design-trelawny": {
  title: "Trelawny",
  fullTitle: "Trelawny",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Industrial Tools / Engineering",
  projectType: "",
  role: "Graphic Designer",
  deliverables: "Social Media Creatives",

  tools: [
    {
      name: "Adobe Illustrator",
      icon: "./assets/images/software Icons/Adobe_Illustrator_CC_icon.svg"
    },
    {
      name: "Adobe Photoshop",
      icon: "./assets/images/software Icons/Adobe_Photoshop_CC_icon.svg"
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl: "./index.html?section=portfolio",
    categoryLabel: "Graphic Design",
    categoryUrl: "./index.html?section=portfolio&category=graphic-design",
    currentLabel: "Trelawny"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/Trelawny.jpg",
      alt: "Trelawny portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/Trelawny.jpg",
      alt: "Trelawny mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Trelawny",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Trelawny SPT Ltd is the surface preparation equipment specialist, part of the Indutrade Group, Sweden. The company manufactures a range of pneumatic tools and surface preparation equipment in the engineering heart of the UK, Leamington Spa. Established 80 years ago, Trelawny has been offering a range of equipment for preparing concrete, steel and stone.",
        bodyMobile: "Trelawny SPT Ltd is a surface preparation equipment specialist and part of the Indutrade Group, Sweden. Established 80 years ago, the company offers equipment for preparing concrete, steel and stone."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "As an already well known brand, the designs needed to present Trelawny for the Indian construction market. Since the industry depends heavily on trust, quality & delivery, the communication had to feel clean, confident & professional.",
        bodyMobile: "The designs needed to present Trelawny for the Indian construction market with a clean, confident and professional communication style."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience they wanted to focus on was Indian industrial clients, manufacturers & project heads. These are people who look for clarity, dependability & practical value, so the design had to communicate information in a direct and trustworthy way.",
        bodyMobile: "The audience included Indian industrial clients, manufacturers and project heads who look for clarity, dependability and practical value."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of trust, stability & confidence. It needed to make Trelawny feel dependable, organized & professional, while giving the brand a polished presence in a competitive construction market.",
        bodyMobile: "The design had to create a feeling of trust, stability and confidence while giving the brand a polished professional presence."
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
    items: []
  },

  designThinking: {
    heading: "Design Thinking",
    points: [
      "The project needed a more thoughtful & layered approach, because the communication had to work for two different audience groups.",
      "The challenge was to speak to both audiences through one consistent brand language, without making the communication feel scattered.",
      "Each template was planned with relevance — from the content flow and image choice to the overall visual hierarchy.",
      "The aim was to make sure that both audience groups could connect with the message quickly & clearly.",
      "At the same time, the design had to maintain the client’s core brand identity without losing consistency."
    ],
    pointsMobile: [
      "The project needed a thoughtful approach because the communication had to work for two different audience groups.",
      "Each template was planned with relevance — from content flow and image choice to visual hierarchy.",
      "The design had to maintain the client’s core brand identity without losing consistency."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The client already had a clear brand language, so the colours, logo, and identity system gave us a strong starting point.",
      "The main focus was on choosing the right images that would feel relevant to both audience groups.",
      "Background images, main subject visuals, and supporting elements were selected to match the audience’s environment, lifestyle, and expectations.",
      "The visuals were designed to feel brand-consistent, but still specific enough for each audience segment.",
      "Overall, the design approach helped create communication that felt familiar, relevant, and easy for the audience to relate to."
    ],
    pointsMobile: [
      "The client already had a clear brand language, so the colours, logo and identity system gave us a strong starting point.",
      "The main focus was on choosing the right images for each audience group.",
      "The design approach helped create communication that felt familiar, relevant and easy to relate to."
    ]
  },

  gallerySections: [
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "trelawnyPostStyle1",
          title: "Post Style 1: Product and Content Based",
          previewGroupName: "Trelawny Post Style 1",
          items: [
            {
              src: "./assets/images/Portfolio/Graphic Design/Trelawney/Post-Style-1-A.jpg",
              alt: "Trelawny product and content based post 01"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Trelawney/Post-Style-1-B.jpg",
              alt: "Trelawny product and content based post 02"
            }
          ]
        },
        {
          key: "trelawnyPostStyle2",
          title: "Post Style 2: Audience Based",
          previewGroupName: "Trelawny Post Style 2",
          items: [
            {
              src: "./assets/images/Portfolio/Graphic Design/Trelawney/Post-Style-2-A.jpg",
              alt: "Trelawny audience based post 01"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Trelawney/Post-Style-2-B.jpg",
              alt: "Trelawny audience based post 02"
            }
          ]
        },
        {
          key: "trelawnyPostStyle3",
          title: "Post Style 3: Text Based",
          previewGroupName: "Trelawny Post Style 3",
          items: [
            {
              src: "./assets/images/Portfolio/Graphic Design/Trelawney/Post-Style-3-A.jpg",
              alt: "Trelawny text based post 01"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Trelawney/Post-Style-3-B.jpg",
              alt: "Trelawny text based post 02"
            }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "La Mom & Miiracle",
      industry: "Healthcare / Fertility Clinic",
      url: "./portfolio-detail.html?project=graphic-design-la-mom-miiracle",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/LMM.jpg",
        alt: "La Mom & Miiracle thumbnail"
      },
      imageLabel: "La Mom & Miiracle"
    },
    {
      title: "Yogalaya",
      industry: "Wellness / Yoga",
      url: "./portfolio-detail.html?project=graphic-design-yogalaya",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Yogalaya.jpg",
        alt: "Yogalaya thumbnail"
      },
      imageLabel: "Yogalaya"
    },
    {
      title: "BNI Champs",
      industry: "Business Networking",
      url: "./portfolio-detail.html?project=graphic-design-bni-champs",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/BNI.jpg",
        alt: "BNI Champs thumbnail"
      },
      imageLabel: "BNI Champs"
    }
  ]
},
	"graphic-design-celestial": {
  title: "Celestial Institute of Technology",
  fullTitle: "Celestial Institute of Technology",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Education / E-learning",
  projectType: "",
  role: "Graphic Designer",
  deliverables: "Social Media Creatives",

  tools: [
    {
      name: "Adobe Illustrator",
      icon: "./assets/images/software Icons/Adobe_Illustrator_CC_icon.svg"
    },
    {
      name: "Adobe Photoshop",
      icon: "./assets/images/software Icons/Adobe_Photoshop_CC_icon.svg"
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl: "./index.html?section=portfolio",
    categoryLabel: "Graphic Design",
    categoryUrl: "./index.html?section=portfolio&category=graphic-design",
    currentLabel: "Celestial"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "social-posts", label: "Social Media Posts" },
    { id: "website-graphics", label: "Website Graphics" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/Celestial.jpg",
      alt: "Celestial Institute of Technology portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/Celestial.jpg",
      alt: "Celestial Institute of Technology mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Celestial Institute of Technology",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Celestial Institute of Technology is an institute focused on enabling thoughtful workforce and innovative leaders in the new era of digital intelligence. The institute offers courses, professional training, and job opportunities to students and professionals who seek growth in Intelligent Automation and next-generation industrial automation.",
        bodyMobile: "Celestial Institute of Technology focuses on enabling thoughtful workforce and innovative leaders in the new era of digital intelligence, offering courses and training in Intelligent Automation."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present Celestial Institute of Technology as a credible, future-focused and student-friendly educational brand. Since the institute speaks to young students and their families, the communication had to feel clear, aspirational and trustworthy, while highlighting learning, career growth and technical education.",
        bodyMobile: "The design needed to present Celestial as a credible, future-focused and student-friendly educational brand while highlighting learning, career growth and technical education."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included students, parents, aspiring professionals & young learners. The designs needed to connect with students emotionally, while also giving parents a sense of trust, quality & career confidence.",
        bodyMobile: "The audience included students, parents, aspiring professionals and young learners looking for trust, quality and career confidence."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of hope, confidence and ambition. It needed to make students feel excited about their future, while making the institute feel reliable, progressive and capable of guiding them towards better opportunities.",
        bodyMobile: "The design had to create a feeling of hope, confidence and ambition while making the institute feel reliable and progressive."
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
    items: []
  },

  designThinking: {
    heading: "Design Thinking",
    points: [
      "These posts were created to promote Celestial’s courses and offerings in a clear way.",
      "Each quarter followed a different visual approach - using a mix of infographic, image & text designs.",
      "This helped create a simple testing structure to understand which visual style had the best response & callbacks.",
      "The idea was not just to create regular posts, but to learn what the audience connected with the most.",
      "This strategy helped the brand communicate its offerings while also identifying the most effective content direction."
    ],
    pointsMobile: [
      "These posts were created to promote Celestial’s courses and offerings in a clear way.",
      "Each quarter followed a different visual approach using infographic, image and text designs.",
      "This helped identify which visual style the audience connected with the most."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The main design elements used were infographics & images.",
      "The infographics followed a consistent design style, so the style looked easy to recognize.",
      "The image-based posts were kept in a single visual tone.",
      "The design language was kept clean and structured.",
      "Together, the infographics & images helped make the posts feel informative, consistent & visually connected."
    ],
    pointsMobile: [
      "The main design elements used were infographics and images.",
      "The infographics followed a consistent style, while image-based posts were kept in a single visual tone.",
      "Together, the visuals helped make the posts feel informative, consistent and connected."
    ]
  },

  gallerySections: [
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "celestialPostStyle1",
          title: "Post Style 1: Infographic Based",
          previewGroupName: "Celestial Infographic Posts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-1-A.jpg", alt: "Celestial infographic post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-1-B.jpg", alt: "Celestial infographic post 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-1-C.jpg", alt: "Celestial infographic post 03" }
          ]
        },
        {
          key: "celestialPostStyle2",
          title: "Post Style 2: Image Based",
          previewGroupName: "Celestial Image Based Posts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-2-A.jpg", alt: "Celestial image based post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-2-B.jpg", alt: "Celestial image based post 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-2-C.jpg", alt: "Celestial image based post 03" }
          ]
        },
        {
          key: "celestialPostStyle3",
          title: "Post Style 3: Image and Text Based",
          previewGroupName: "Celestial Image and Text Posts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-3-A.jpg", alt: "Celestial image and text post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-3-B.jpg", alt: "Celestial image and text post 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-3-C.jpg", alt: "Celestial image and text post 03" }
          ]
        }
      ]
    },
    {
      id: "website-graphics",
      title: "Website Graphics",
      groups: [
        {
          key: "celestialOfferingsBanners",
          title: "Our Offerings Web Banners",
          previewGroupName: "Celestial Offerings Web Banners",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-4-A.jpg", alt: "Celestial offerings web banner 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-4-B.jpg", alt: "Celestial offerings web banner 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-4-C.jpg", alt: "Celestial offerings web banner 03" }
          ]
        },
        {
          key: "celestialFeatures",
          title: "Features Section",
          previewGroupName: "Celestial Features Section",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-5-A.jpg", alt: "Celestial feature graphic 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-5-B.jpg", alt: "Celestial feature graphic 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-5-C.jpg", alt: "Celestial feature graphic 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-5-D.jpg", alt: "Celestial feature graphic 04" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-5-E.jpg", alt: "Celestial feature graphic 05" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-5-F.jpg", alt: "Celestial feature graphic 06" }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Preeti Garments",
      industry: "Fashion / Apparel",
      url: "./portfolio-detail.html?project=graphic-design-preeti-garments",
      image: { src: "./assets/images/Thumbnails/Graphic Design/Preeti Garments.jpg", alt: "Preeti Garments thumbnail" },
      imageLabel: "Preeti Garments"
    },
    {
      title: "Aai Foods",
      industry: "Food / FMCG",
      url: "./portfolio-detail.html?project=graphic-design-aai-foods",
      image: { src: "./assets/images/Thumbnails/Graphic Design/Aai Foods.jpg", alt: "Aai Foods thumbnail" },
      imageLabel: "Aai Foods"
    },
    {
      title: "Serene Veda",
      industry: "Ayurveda / Wellness",
      url: "./portfolio-detail.html?project=graphic-design-serene-veda",
      image: { src: "./assets/images/Thumbnails/Graphic Design/Serene Veda.jpg", alt: "Serene Veda thumbnail" },
      imageLabel: "Serene Veda"
    }
  ]
},
	"graphic-design-coepians-academy": {
  title: "COEPian's Academy",
  fullTitle: "COEPian's Academy",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Education / Coaching",
  projectType: "",
  role: "Graphic Designer",
  deliverables: "Campaign, Social Media Creatives",

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
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl: "./index.html?section=portfolio",
    categoryLabel: "Graphic Design",
    categoryUrl: "./index.html?section=portfolio&category=graphic-design",
    currentLabel: "COEPian's Academy"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/COEP.jpg",
      alt: "COEPian's Academy portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/COEP.jpg",
      alt: "COEPian's Academy mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "COEPian's Academy",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Since 2015, COEPians Academy™ offers highly personalized and effective learning programs primarily for std X and XII. The academy provides services from 8th std CBSE students to aspirants of competitive exams like JEE, BITS, MHT-CET and NEET. With personalized and focused teaching processes, students are guided towards success in academics and competitive preparation.",
        bodyMobile: "Since 2015, COEPians Academy™ has offered personalized learning programs for school students and competitive exam aspirants, including JEE, BITS, MHT-CET and NEET."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present COEPians Academy as a focused, reliable & student/parent-oriented education brand. Since the academy supports students preparing for important academic and career goals, the communication had to feel clear, motivating & trustworthy.",
        bodyMobile: "The design needed to present COEPians Academy as a focused, reliable and student/parent-oriented education brand."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included students, parents & competitive exam aspirants who are looking for strong guidance, structured learning & confidence in their preparation.",
        bodyMobile: "The audience included students, parents and competitive exam aspirants looking for guidance, structure and confidence."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of hope, confidence & ambition. It needed to make students feel excited about their future, while making the institute feel reliable, progressive & capable of guiding them towards better opportunities.",
        bodyMobile: "The design had to create a feeling of hope, confidence and ambition while making the institute feel reliable and capable."
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
    items: []
  },

  designThinking: {
    heading: "Design Thinking",
    points: [
      "The visuals for COEPian’s were built on a balance of service promotion & student guidance.",
      "The posts highlighted what the institute offered & helped students & parents understand how to prepare better & approach competitive exams with more confidence.",
      "The key part was to showcase student achievements and marks success stories in a visible & respectful way.",
      "The approach positioned COEPian’s as a brand that not only teaches, but also guides, motivates & celebrates student effort."
    ],
    pointsMobile: [
      "The visuals for COEPian’s were built on a balance of service promotion and student guidance.",
      "The posts highlighted what the institute offered and helped students and parents prepare better.",
      "The approach positioned COEPian’s as a brand that teaches, guides, motivates and celebrates student effort."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "Since COEPian’s was at the early stage of building its social media presence, the design approach was kept open, flexible & experimental.",
      "Multiple themes and visual directions were explored to understand what the audience responded to best.",
      "Each theme was created with a clear purpose - to test engagement, relevance, and callback response.",
      "The visuals focused on making the content feel student-friendly, achievement-led & easy for parents to trust.",
      "This experimentation helped shape a more informed visual direction for the brand’s future communication."
    ],
    pointsMobile: [
      "Since COEPian’s was building its social media presence, the design approach was kept open, flexible and experimental.",
      "Multiple themes were explored to understand what the audience responded to best.",
      "The visuals focused on making the content feel student-friendly, achievement-led and easy for parents to trust."
    ]
  },

  gallerySections: [
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "coepPostStyle1",
          title: "Post Style 1",
          previewGroupName: "COEP Post Style 1",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-1-A.jpg", alt: "COEP post style 1 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-1-B.jpg", alt: "COEP post style 1 creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-1-C.jpg", alt: "COEP post style 1 creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-1-D.jpg", alt: "COEP post style 1 creative 04" },
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-1-E.jpg", alt: "COEP post style 1 creative 05" },
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-1-F.jpg", alt: "COEP post style 1 creative 06" }
          ]
        },
        {
          key: "coepPostStyle2",
          title: "Post Style 2",
          previewGroupName: "COEP Post Style 2",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-2-A.jpg", alt: "COEP post style 2 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-2-B.jpg", alt: "COEP post style 2 creative 02" }
          ]
        },
        {
          key: "coepPostStyle3",
          title: "Post Style 3",
          previewGroupName: "COEP Post Style 3",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-3-A.jpg", alt: "COEP post style 3 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-3-B.jpg", alt: "COEP post style 3 creative 02" }
          ]
        },
        {
          key: "coepPostStyle4",
          title: "Post Style 4",
          previewGroupName: "COEP Post Style 4",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-4-A.jpg", alt: "COEP post style 4 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-4-B.jpg", alt: "COEP post style 4 creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-4-C.jpg", alt: "COEP post style 4 creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-4-D.jpg", alt: "COEP post style 4 creative 04" },
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-4-E.jpg", alt: "COEP post style 4 creative 05" },
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-4-F.jpg", alt: "COEP post style 4 creative 06" }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Rainbow Umbrella",
      industry: "Social / CSR",
      url: "./portfolio-detail.html?project=graphic-design-rainbow-umbrella",
      image: { src: "./assets/images/Thumbnails/Graphic Design/RU.jpg", alt: "Rainbow Umbrella thumbnail" },
      imageLabel: "Rainbow Umbrella"
    },
    {
      title: "Nupur Kathak Dance School",
      industry: "Dance / Performing Arts",
      url: "./portfolio-detail.html?project=graphic-design-nupur-kathak",
      image: { src: "./assets/images/Thumbnails/Graphic Design/Nupur.jpg", alt: "Nupur Kathak Dance School thumbnail" },
      imageLabel: "Nupur Kathak Dance School"
    },
    {
      title: "Beyond Bandish",
      industry: "Music / Performing Arts",
      url: "./portfolio-detail.html?project=graphic-design-beyond-bandish",
      image: { src: "./assets/images/Thumbnails/Graphic Design/Serene Veda.jpg", alt: "Beyond Bandish thumbnail" },
      imageLabel: "Beyond Bandish"
        }
      ]
    }
}