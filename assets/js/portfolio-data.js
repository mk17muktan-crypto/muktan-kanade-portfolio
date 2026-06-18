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
      src: "./assets/images/Thumbnails/Graphic Design/Raptech Engineering.jpg",
      alt: "Raptech Engineering portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/Raptech Engineering.jpg",
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
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-1-A.jpg", alt: "Raptech image based hiring post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-1-B.jpg", alt: "Raptech image based hiring post 02" }
          ]
        },
        {
          key: "raptechPostStyle2",
          title: "Post Style 2: Image & Product Based",
          previewGroupName: "Raptech Post Style 2",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-2-A.jpg", alt: "Raptech image and product based post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-2-B.jpg", alt: "Raptech image and product based post 02" }
          ]
        },
        {
          key: "raptechPostStyle3",
          title: "Post Style 3: Product Based",
          previewGroupName: "Raptech Post Style 3",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-3-A.jpg", alt: "Raptech product based post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-3-B.jpg", alt: "Raptech product based post 02" }
          ]
        },
        {
          key: "raptechPostStyle4",
          title: "Post Style 4: Text & Product Based",
          previewGroupName: "Raptech Post Style 4",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-4-A.jpg", alt: "Raptech text and product based post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-4-B.jpg", alt: "Raptech text and product based post 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-4-C.jpg", alt: "Raptech text and product based post 03" }
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
      image: { src: "./assets/images/Thumbnails/Graphic Design/Trelawny.jpg", alt: "Trelawny thumbnail" },
      imageLabel: "Trelawny"
    },
    {
      title: "COEPian's Academy",
      industry: "Education / Coaching",
      url: "./portfolio-detail.html?project=graphic-design-coepians-academy",
      image: { src: "./assets/images/Thumbnails/Graphic Design/COEP.jpg", alt: "COEPian's Academy thumbnail" },
      imageLabel: "COEPian's Academy"
    },
    {
      title: "Sundar Sanskar",
      industry: "Education / Child Development",
      url: "./portfolio-detail.html?project=graphic-design-sundar-sanskar",
      image: { src: "./assets/images/Thumbnails/Graphic Design/Sundar Sanskar.jpg", alt: "Sundar Sanskar thumbnail" },
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
    { name: "Adobe Illustrator", icon: "./assets/images/software Icons/Adobe_Illustrator_CC_icon.svg" },
    { name: "Adobe Photoshop", icon: "./assets/images/software Icons/Adobe_Photoshop_CC_icon.svg" }
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
    desktop: { src: "./assets/images/Thumbnails/Graphic Design/Trelawny.jpg", alt: "Trelawny portfolio cover image" },
    mobile: { src: "./assets/images/Thumbnails/Graphic Design/Mobile/Trelawny.jpg", alt: "Trelawny mobile portfolio cover image" }
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

  bestWork: { title: "", items: [] },

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
            { src: "./assets/images/Portfolio/Graphic Design/Trelawney/Post-Style-1-A.jpg", alt: "Trelawny product and content based post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Trelawney/Post-Style-1-B.jpg", alt: "Trelawny product and content based post 02" }
          ]
        },
        {
          key: "trelawnyPostStyle2",
          title: "Post Style 2: Audience Based",
          previewGroupName: "Trelawny Post Style 2",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Trelawney/Post-Style-2-A.jpg", alt: "Trelawny audience based post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Trelawney/Post-Style-2-B.jpg", alt: "Trelawny audience based post 02" }
          ]
        },
        {
          key: "trelawnyPostStyle3",
          title: "Post Style 3: Text Based",
          previewGroupName: "Trelawny Post Style 3",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Trelawney/Post-Style-3-A.jpg", alt: "Trelawny text based post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Trelawney/Post-Style-3-B.jpg", alt: "Trelawny text based post 02" }
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
      image: { src: "./assets/images/Thumbnails/Graphic Design/LMM.jpg", alt: "La Mom & Miiracle thumbnail" },
      imageLabel: "La Mom & Miiracle"
    },
    {
      title: "Yogalaya",
      industry: "Wellness / Yoga",
      url: "./portfolio-detail.html?project=graphic-design-yogalaya",
      image: { src: "./assets/images/Thumbnails/Graphic Design/Yogalaya.jpg", alt: "Yogalaya thumbnail" },
      imageLabel: "Yogalaya"
    },
    {
      title: "BNI Champs",
      industry: "Business Networking",
      url: "./portfolio-detail.html?project=graphic-design-bni-champs",
      image: { src: "./assets/images/Thumbnails/Graphic Design/BNI.jpg", alt: "BNI Champs thumbnail" },
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
        bodyDesktop: "Celestial Institute of Technology is an institute focused on enabling Thoughtful Workforce and Innovative Leaders in the new era of digital intelligence. The institute offers courses, professional training, and job opportunities to students and professionals who seek growth in Intelligent Automation and next-generation industrial automation.",
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
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Preeti Garments.jpg",
        alt: "Preeti Garments thumbnail"
      },
      imageLabel: "Preeti Garments"
    },
    {
      title: "Aai Foods",
      industry: "Food / FMCG",
      url: "./portfolio-detail.html?project=graphic-design-aai-foods",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Aai Foods.jpg",
        alt: "Aai Foods thumbnail"
      },
      imageLabel: "Aai Foods"
    },
    {
      title: "Serene Veda",
      industry: "Ayurveda / Wellness",
      url: "./portfolio-detail.html?project=graphic-design-serene-veda",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Serene Veda.jpg",
        alt: "Serene Veda thumbnail"
      },
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
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/RU.jpg",
        alt: "Rainbow Umbrella thumbnail"
      },
      imageLabel: "Rainbow Umbrella"
    },
    {
      title: "Nupur Kathak Dance School",
      industry: "Dance / Performing Arts",
      url: "./portfolio-detail.html?project=graphic-design-nupur-kathak",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Nupur.jpg",
        alt: "Nupur Kathak Dance School thumbnail"
      },
      imageLabel: "Nupur Kathak Dance School"
    },
    {
      title: "Beyond Bandish",
      industry: "Music / Performing Arts",
      url: "./portfolio-detail.html?project=graphic-design-beyond-bandish",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Serene Veda.jpg",
        alt: "Beyond Bandish thumbnail"
      },
      imageLabel: "Beyond Bandish"
     }
   ]
 },
	
"graphic-design-la-mom-miiracle": {
  title: "La Mom & Miiracle",
  fullTitle: "La Mom & Miiracle",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Healthcare / Fertility Clinic",
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
    currentLabel: "La Mom & Miiracle"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/LMM.jpg",
      alt: "La Mom & Miiracle portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/LMM.jpg",
      alt: "La Mom & Miiracle mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "La Mom & Miiracle",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "At La Mom & Miiracle, the clinic is committed to empowering women and couples on their fertility journey. Led by Dr. Asmita Potdar, a renowned IVF specialist in Pune, the clinic provides world-class fertility treatments tailored to individual needs. With over 18 years of experience, Dr. Potdar has helped thousands of patients navigate IVF, high-risk pregnancy and other reproductive challenges with compassionate and holistic care.",
        bodyMobile: "La Mom & Miiracle is a fertility clinic led by Dr. Asmita Potdar, an IVF specialist in Pune with over 18 years of experience. The clinic supports women and couples through fertility treatments, pregnancy care and reproductive health guidance."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present La Mom & Miiracle as a warm, caring and trustworthy brand connected to motherhood, babies & early parenting. The communication had to feel soft, emotional & reassuring, while still looking clean, modern & suitable for digital platforms.",
        bodyMobile: "The design needed to present La Mom & Miiracle as a warm, caring and trustworthy brand connected to motherhood, fertility care and early parenting."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included mothers, expecting parents, young families and caregivers who look for products, services or guidance that feel safe, gentle and reliable.",
        bodyMobile: "The audience included mothers, expecting parents, young families and caregivers looking for care, safety and reassurance."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of love, care, comfort & trust. It needed to feel nurturing & gentle, making the audience feel that the brand understands the emotional side of motherhood & family care.",
        bodyMobile: "The design had to create a feeling of love, care, comfort and trust while feeling soft, nurturing and gentle."
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
      "Since the subject was sensitive & deeply personal, the visuals had to feel comforting, respectful & clear.",
      "The aim was to create posts that made people feel informed without making the subject feel intimidating or uncomfortable.",
      "As this was her first step into social media, the content had to gently introduce who she is, what she does & the kind of care patients can expect from her.",
      "The posts included a mix of doctor introduction, clinic interiors, patient-friendly information & awareness-led campaigns.",
      "Topics such as cervical cancer awareness were handled with a balance of seriousness and reassurance.",
      "Overall, the strategy was to build trust, approachability & confidence around the doctor and her practice."
    ],
    pointsMobile: [
      "Since the subject was sensitive and deeply personal, the visuals had to feel comforting, respectful and clear.",
      "The content gently introduced the doctor, her work and the kind of care patients could expect.",
      "Overall, the strategy was to build trust, approachability and confidence around the doctor and her practice."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The visual language was designed to feel soft, open & emotionally reassuring.",
      "Sharp corners and harsh elements were consciously avoided to keep the brand identity gentle and patient-friendly.",
      "The layouts used spacious compositions, rounded forms & soft bubbly elements to create a sense of comfort.",
      "The colour scheme supported a warm, positive & caring tone.",
      "Every element was chosen to make the communication feel less clinical and more human.",
      "The final look helped the brand feel welcoming, calm, happy & easy to trust."
    ],
    pointsMobile: [
      "The visual language was designed to feel soft, open and emotionally reassuring.",
      "Rounded forms, spacious layouts and soft elements were used to create comfort.",
      "The final look helped the brand feel welcoming, calm, happy and easy to trust."
    ]
  },

  gallerySections: [
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "lmmPostStyle1",
          title: "Post Style 1",
          previewGroupName: "La Mom & Miiracle Post Style 1",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-1-A.jpg", alt: "La Mom & Miiracle post style 1 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-1-B.jpg", alt: "La Mom & Miiracle post style 1 creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-1-C.jpg", alt: "La Mom & Miiracle post style 1 creative 03" }
          ]
        },
        {
          key: "lmmPostStyle2",
          title: "Post Style 2",
          previewGroupName: "La Mom & Miiracle Post Style 2",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-2-A.jpg", alt: "La Mom & Miiracle post style 2 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-2-B.jpg", alt: "La Mom & Miiracle post style 2 creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-2-C.jpg", alt: "La Mom & Miiracle post style 2 creative 03" }
          ]
        },
        {
          key: "lmmPostStyle3",
          title: "Post Style 3",
          previewGroupName: "La Mom & Miiracle Post Style 3",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-3-A.jpg", alt: "La Mom & Miiracle post style 3 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-3-B.jpg", alt: "La Mom & Miiracle post style 3 creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-3-C.jpg", alt: "La Mom & Miiracle post style 3 creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-3-D.jpg", alt: "La Mom & Miiracle post style 3 creative 04" },
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-3-E.jpg", alt: "La Mom & Miiracle post style 3 creative 05" },
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-3-F.jpg", alt: "La Mom & Miiracle post style 3 creative 06" }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Sundar Sanskar",
      industry: "Education / Child Development",
      url: "./portfolio-detail.html?project=graphic-design-sundar-sanskar",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Sundar Sanskar.jpg",
        alt: "Sundar Sanskar thumbnail"
      },
      imageLabel: "Sundar Sanskar"
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

"graphic-design-wilo": {
  title: "Wilo",
  fullTitle: "Wilo",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Pumps / Water Technology",
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
    currentLabel: "Wilo"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/Wilo.jpg",
      alt: "Wilo portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/Wilo.jpg",
      alt: "Wilo mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Wilo",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Wilo India plays a vital role in providing water supply solutions for the building services, water management, and industrial sectors. The company employs over 1,250 people and has a strong nationwide presence, with 5 regional offices, 23 branch offices, and a network of 300+ dealers, distributors, and service partners.",
        bodyMobile: "Wilo India provides water supply solutions for building services, water management and industrial sectors, with a strong nationwide presence across India."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "Since Wilo is an established brand working with important infrastructure and engineering products, the visuals had to feel clean, precise and professional, while making the information easy to understand.",
        bodyMobile: "The visuals had to feel clean, precise and professional while making Wilo’s product information easy to understand."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included engineers, contractors, consultants, dealers and business owners who look for dependable water and pumping solutions. The design needed to communicate clearly to people who value performance, efficiency, durability and trust.",
        bodyMobile: "The audience included engineers, contractors, consultants, dealers and business owners looking for dependable water and pumping solutions."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of confidence, trust and technical assurance. It needed to make Wilo feel dependable, advanced and capable of supporting serious water management and engineering needs.",
        bodyMobile: "The design had to create confidence, trust and technical assurance, making Wilo feel dependable and advanced."
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
      "The goal for Wilo was to support the brand’s entry into the Amazon e-commerce market with visuals that felt sharp, product-led & conversion-focused.",
      "The e-commerce ads were designed with a clear purpose: to highlight the right product benefits and visual cues that could help drive better clicks and customer interest.",
      "Alongside this, separate social media posts were created with a more simple, structured & informative format.",
      "These posts focused on presenting the product, its applications & its USPs in a way that was easy to understand.",
      "The overall strategy was to balance two needs: performance-driven e-commerce communication and brand-consistent social media content."
    ],
    pointsMobile: [
      "The goal was to support Wilo’s entry into the Amazon e-commerce market with sharp, product-led visuals.",
      "The posts focused on presenting the product, applications and USPs in a clear way.",
      "The overall strategy balanced performance-driven e-commerce communication with brand-consistent social media content."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The design language was built using Wilo’s existing visual asset library, which included product images, backgrounds, logos & supporting brand elements.",
      "Since the brand already had a vast collection of material, the challenge was not to create everything from scratch.",
      "The real task was to choose the right visual elements that would create the strongest impact for each communication piece.",
      "Product visuals were used with purpose, making sure they supported the message instead of simply filling space.",
      "Each design was structured to feel clean, professional, technical & easy to read.",
      "The design approach helped the communication feel brand-aligned, product-focused & visually effective across both e-commerce and social media."
    ],
    pointsMobile: [
      "The design language was built using Wilo’s existing visual asset library.",
      "The task was to choose the right visual elements for the strongest impact.",
      "The final communication felt brand-aligned, product-focused and visually effective."
    ]
  },

  gallerySections: [
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "wiloPostStyle1",
          title: "Post Style 1: Amazon Posts",
          previewGroupName: "Wilo Amazon Posts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-1-A.jpg", alt: "Wilo Amazon post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-1-B.jpg", alt: "Wilo Amazon post 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-1-C.jpg", alt: "Wilo Amazon post 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-1-D.jpg", alt: "Wilo Amazon post 04" }
          ]
        },
        {
          key: "wiloPostStyle2",
          title: "Post Style 2: Event Invites",
          previewGroupName: "Wilo Event Invites",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-2-A.jpg", alt: "Wilo event invite 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-2-B.jpg", alt: "Wilo event invite 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-2-C.jpg", alt: "Wilo event invite 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-2-D.jpg", alt: "Wilo event invite 04" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-2-E.jpg", alt: "Wilo event invite 05" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-2-F.jpg", alt: "Wilo event invite 06" }
          ]
        },
        {
          key: "wiloPostStyle3",
          title: "Post Style 3: Hiring Posts",
          previewGroupName: "Wilo Hiring Posts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-3-A.jpg", alt: "Wilo hiring post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-3-B.jpg", alt: "Wilo hiring post 02" }
          ]
        },
        {
          key: "wiloPostStyle4",
          title: "Post Style 4: Image Based Posts",
          previewGroupName: "Wilo Image Based Posts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-4-A.jpg", alt: "Wilo image based post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-4-B.jpg", alt: "Wilo image based post 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-4-C.jpg", alt: "Wilo image based post 03" }
          ]
        },
        {
          key: "wiloPostStyle5",
          title: "Post Style 5: Image & Content Based Posts",
          previewGroupName: "Wilo Image and Content Posts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-5-A.jpg", alt: "Wilo image and content post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-5-B.jpg", alt: "Wilo image and content post 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-5-C.jpg", alt: "Wilo image and content post 03" }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Sundar Sanskar",
      industry: "Education / Child Development",
      url: "./portfolio-detail.html?project=graphic-design-sundar-sanskar",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Sundar Sanskar.jpg",
        alt: "Sundar Sanskar thumbnail"
      },
      imageLabel: "Sundar Sanskar"
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
	
"graphic-design-samartha-seva-mandal": {
  title: "Samartha Seva Mandal",
  fullTitle: "Samartha Seva Mandal",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Religious / Spiritual Organisation",
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
    currentLabel: "Samartha Seva Mandal"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "branding", label: "Branding Logos" },
    { id: "symbols", label: "Symbols" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/SSMS.jpg",
      alt: "Samartha Seva Mandal portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/SSMS.jpg",
      alt: "Samartha Seva Mandal mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Samartha Seva Mandal",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Samartha Seva Mandal is a religious and spiritual organisation with a long-standing legacy rooted in devotion, tradition and community connection. The communication needed to respect this heritage while helping the Mandal appear more organised, refined and relevant for a modern audience.",
        bodyMobile: "Samartha Seva Mandal is a religious and spiritual organisation with a long-standing legacy rooted in devotion, tradition and community connection."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The existing branding felt traditional and dated, so the design needed to create a fresh, modern and more organised visual language without erasing the Mandal’s identity. The aim was to bring the brand forward into a newer visual world while keeping its cultural tone intact.",
        bodyMobile: "The design needed to create a fresh, modern and organised visual language while keeping the Mandal’s cultural and devotional identity intact."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included devotees, followers, families, community members and younger digital audiences who connect with the Mandal through cultural, spiritual and social content.",
        bodyMobile: "The audience included devotees, families, community members and younger digital audiences connected to cultural and spiritual content."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of devotion, heritage, warmth and trust. It needed to feel rooted in legacy while also appearing refined, modern and future-ready.",
        bodyMobile: "The design had to create a feeling of devotion, heritage, warmth and trust while feeling refined and future-ready."
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
      "This mandal has a long-standing legacy built over many decades, so the design approach had to respect its roots while making it more relevant for today.",
      "The existing branding felt traditional & dated, so the aim was to create a fresh, modern & more organized visual language.",
      "The strategy was not to erase the Mandal's identity, but to bring it forward into a newer visual world.",
      "A key focus was to develop a design system and iconography that felt clear, current & easier to use across different platforms.",
      "The overall direction balanced heritage, devotion & modern communication, making the mandal’s presence feel more refined and future-ready."
    ],
    pointsMobile: [
      "The design approach had to respect the Mandal’s roots while making it more relevant for today.",
      "The strategy was not to erase the identity, but to bring it forward into a newer visual world.",
      "The overall direction balanced heritage, devotion and modern communication."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The overall look and feel was reshaped & modernized while still keeping the tone aligned with the Mandal's preference & cultural identity.",
      "A new set of visual elements & iconography was created to make the communication feel more structured, recognizable & contemporary.",
      "The execution included both 3D-style visuals & clean 2D illustrations, giving the brand more flexibility across different types of content.",
      "The color palette combined bright tones with earthy shades, creating a balance of energy, tradition & warmth.",
      "The final design language helped the Mandal feel rooted in its legacy, yet ready for a more modern audience."
    ],
    pointsMobile: [
      "The overall look and feel was reshaped and modernised while keeping the cultural tone intact.",
      "A new set of visual elements and iconography made the communication feel structured and contemporary.",
      "The final design language helped the Mandal feel rooted in its legacy, yet ready for a modern audience."
    ]
  },

  gallerySections: [
    {
      id: "branding",
      title: "Branding Logos",
      groups: [
        {
          key: "ssmsLogos",
          title: "Logos",
          previewGroupName: "Samartha Seva Mandal Logos",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Logo-1.jpg", alt: "Samartha Seva Mandal logo 01" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Logo-2.jpg", alt: "Samartha Seva Mandal logo 02" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Logo-3.jpg", alt: "Samartha Seva Mandal logo 03" }
          ]
        }
      ]
    },
    {
      id: "symbols",
      title: "Symbols",
      groups: [
        {
          key: "ssmsSymbols",
          title: "Symbols",
          previewGroupName: "Samartha Seva Mandal Symbols",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-A.jpg", alt: "Samartha Seva Mandal symbol A" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-B.jpg", alt: "Samartha Seva Mandal symbol B" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-C.jpg", alt: "Samartha Seva Mandal symbol C" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-D.jpg", alt: "Samartha Seva Mandal symbol D" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-E.jpg", alt: "Samartha Seva Mandal symbol E" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-F.jpg", alt: "Samartha Seva Mandal symbol F" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-G.jpg", alt: "Samartha Seva Mandal symbol G" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-H.jpg", alt: "Samartha Seva Mandal symbol H" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-I.jpg", alt: "Samartha Seva Mandal symbol I" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-J.jpg", alt: "Samartha Seva Mandal symbol J" }
          ]
        }
      ]
    },
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "ssmsSocialPosts",
          title: "Social Media Posts",
          previewGroupName: "Samartha Seva Mandal Social Posts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Post-Style-1-A.jpg", alt: "Samartha Seva Mandal social post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Post-Style-1-B.jpg", alt: "Samartha Seva Mandal social post 02" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Post-Style-1-C.jpg", alt: "Samartha Seva Mandal social post 03" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Post-Style-1-D.jpg", alt: "Samartha Seva Mandal social post 04" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Post-Style-1-E.jpg", alt: "Samartha Seva Mandal social post 05" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Post-Style-1-F.jpg", alt: "Samartha Seva Mandal social post 06" }
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
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Preeti Garments.jpg",
        alt: "Preeti Garments thumbnail"
      },
      imageLabel: "Preeti Garments"
    },
    {
      title: "Aai Foods",
      industry: "Food / FMCG",
      url: "./portfolio-detail.html?project=graphic-design-aai-foods",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Aai Foods.jpg",
        alt: "Aai Foods thumbnail"
      },
      imageLabel: "Aai Foods"
    },
    {
      title: "Serene Veda",
      industry: "Ayurveda / Wellness",
      url: "./portfolio-detail.html?project=graphic-design-serene-veda",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Serene Veda.jpg",
        alt: "Serene Veda thumbnail"
      },
      imageLabel: "Serene Veda"
    }
  ]
 },

"graphic-design-sundar-sanskar": {
  title: "Sundar Sanskar",
  fullTitle: "Sundar Sanskar",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Education / Child Development",
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
    currentLabel: "Sundar Sanskar"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/Sundar Sanskar.jpg",
      alt: "Sundar Sanskar portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/Sundar Sanskar.jpg",
      alt: "Sundar Sanskar mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Sundar Sanskar",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Spirituality is the basis of a prosperous life. According to the founder, Prampujya Sadguru Shri Nana, spirituality has the power to bring mental and physical changes in a human being. Sundar Sanskar and Swadhyay focus on good teachings, values and self-development through study, practice and cultural grounding.",
        bodyMobile: "Sundar Sanskar focuses on values, spirituality and self-development through good teachings and Swadhyay. It is built around cultural grounding, discipline and positive development."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present Sundar Sanskar as a warm, value-driven and culturally rooted brand. Since the work was connected to learning, values and positive development, the communication had to feel simple, trustworthy and emotionally meaningful, while still looking clean and engaging for modern audiences.",
        bodyMobile: "The design needed to present Sundar Sanskar as a warm, value-driven and culturally rooted brand while still feeling clean and engaging for modern audiences."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included parents, children, families and people who value culture, discipline and good upbringing. The design needed to connect with parents through trust, while also feeling friendly and approachable for younger audiences.",
        bodyMobile: "The audience included parents, children, families and people who value culture, discipline and good upbringing."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of trust, warmth, positivity and cultural connection. It needed to make the audience feel that Sundar Sanskar is not just about learning, but about building values, confidence and character in a gentle and meaningful way.",
        bodyMobile: "The design had to create trust, warmth, positivity and cultural connection while making the brand feel gentle and meaningful."
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
      "The strategy was to create a visual style that felt old-school in its values, but modern in its presentation.",
      "The tone of the words and the design language had to work together, so the brand felt trustworthy, rooted and still relevant to today’s students and parents.",
      "The aim was to make the organization feel familiar and dependable, without making it look outdated.",
      "Every piece of communication was planned to create curiosity, confidence and emotional interest.",
      "The overall direction was to make parents and students feel that this is an organization worth understanding, trusting and engaging with further."
    ],
    pointsMobile: [
      "The strategy was to create a visual style that felt old-school in its values, but modern in its presentation.",
      "The aim was to make the organization feel familiar and dependable without making it look outdated.",
      "Every piece of communication was planned to create curiosity, confidence and emotional interest."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The design elements followed the same idea of being old-school yet modern.",
      "The visuals were treated in a way that felt personal, layered and expressive rather than flat or overly digital.",
      "Photographs were used like collected memories, almost as if they had been printed, cut and thoughtfully placed together.",
      "At the same time, the layout and execution kept the design looking clean, structured and contemporary.",
      "The final visual language created a balance of warmth, credibility, creativity and modern appeal."
    ],
    pointsMobile: [
      "The design elements followed the idea of being old-school yet modern.",
      "Photographs were treated like collected memories, giving the visuals a personal and expressive feel.",
      "The final visual language created a balance of warmth, credibility and modern appeal."
    ]
  },

  gallerySections: [
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "sundarPostStyle1",
          title: "Post Style 1",
          previewGroupName: "Sundar Sanskar Post Style 1",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Sundar Sanskar/Post-Style-1-A.jpg", alt: "Sundar Sanskar post style 1 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Sundar Sanskar/Post-Style-1-B.jpg", alt: "Sundar Sanskar post style 1 creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Sundar Sanskar/Post-Style-1-C.jpg", alt: "Sundar Sanskar post style 1 creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Sundar Sanskar/Post-Style-1-D.jpg", alt: "Sundar Sanskar post style 1 creative 04" }
          ]
        },
        {
          key: "sundarPostStyle2",
          title: "Post Style 2: Post Templates",
          previewGroupName: "Sundar Sanskar Post Templates",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Sundar Sanskar/Post-Style-2-A.jpg", alt: "Sundar Sanskar post template 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Sundar Sanskar/Post-Style-2-B.jpg", alt: "Sundar Sanskar post template 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Sundar Sanskar/Post-Style-2-C.jpg", alt: "Sundar Sanskar post template 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Sundar Sanskar/Post-Style-2-D.jpg", alt: "Sundar Sanskar post template 04" },
            { src: "./assets/images/Portfolio/Graphic Design/Sundar Sanskar/Post-Style-2-E.jpg", alt: "Sundar Sanskar post template 05" },
            { src: "./assets/images/Portfolio/Graphic Design/Sundar Sanskar/Post-Style-2-F.jpg", alt: "Sundar Sanskar post template 06" }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Kesariya@100",
      industry: "Cultural / Community Event",
      url: "./portfolio-detail.html?project=graphic-design-kesariya-100",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Kesariya.jpg",
        alt: "Kesariya@100 thumbnail"
      },
      imageLabel: "Kesariya@100"
    },
    {
      title: "Beyond Bandish",
      industry: "Music / Performing Arts",
      url: "./portfolio-detail.html?project=graphic-design-beyond-bandish",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/BB.jpg",
        alt: "Beyond Bandish thumbnail"
      },
      imageLabel: "Beyond Bandish"
    },
    {
      title: "Nupur Kathak Dance School",
      industry: "Dance / Performing Arts",
      url: "./portfolio-detail.html?project=graphic-design-nupur-kathak",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Nupur.jpg",
        alt: "Nupur Kathak Dance School thumbnail"
      },
      imageLabel: "Nupur Kathak Dance School"
    }
  ]
},

"graphic-design-yogalaya": {
  title: "Yogalaya Pune",
  fullTitle: "Yogalaya Pune",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Wellness / Yoga",
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
    currentLabel: "Yogalaya Pune"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/Yogalaya.jpg",
      alt: "Yogalaya Pune portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/Yogalaya.jpg",
      alt: "Yogalaya Pune mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Yogalaya Pune",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Rupa Kanade is an educated yoga professional and a Certified Yoga Alliance Teacher. With more than 20 years of experience in practicing Yoga, she has mastered the art of Yoga and finds happiness in making others positive and solving their problems through meditation and yoga. Her holistic approach focuses on the balance of mind and body throughout the process of healing.",
        bodyMobile: "Rupa Kanade is a Certified Yoga Alliance Teacher with more than 20 years of experience in yoga. Her approach focuses on healing, balance, meditation and positivity."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present Yogalaya Pune as a peaceful, trustworthy and wellness-focused brand. Since yoga is connected to health, balance and inner calm, the communication had to feel clean, soothing and grounded, while still looking professional and easy to connect with.",
        bodyMobile: "The design needed to present Yogalaya Pune as a peaceful, trustworthy and wellness-focused brand connected to health, balance and inner calm."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included yoga learners, working professionals, health-conscious individuals, beginners, regular practitioners and people looking for physical and mental well-being.",
        bodyMobile: "The audience included yoga learners, working professionals, beginners, regular practitioners and people looking for physical and mental well-being."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of calm, trust, balance and positivity. It needed to make people feel that Yogalaya Pune is a space where they can slow down, reconnect with themselves and work towards better health in a supportive environment.",
        bodyMobile: "The design had to create calm, trust, balance and positivity, making Yogalaya Pune feel supportive and grounding."
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
      "The information architecture had to be clear, structured and easy to follow, especially because the communication was speaking to two different audiences.",
      "The posts were not only meant to attract potential yoga students, but also aspiring yoga teachers who wanted to become certified under Rupa Kanade’s guidance.",
      "This made the communication more layered, as it had to promote both yoga learning and teacher training within the same brand language.",
      "The strategy was to create a one message, two audiences approach, where each post could inform, inspire and guide both groups.",
      "The content was organized in a way that made the offerings feel trustworthy, approachable and purposeful."
    ],
    pointsMobile: [
      "The information architecture had to be clear and easy to follow because the communication was speaking to two audiences.",
      "The posts promoted both yoga learning and teacher training within the same brand language.",
      "The content was organised to make the offerings feel trustworthy, approachable and purposeful."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The design elements continued the same tone established in the logo — calm, caring, health-focused and grounded.",
      "Soft visual elements were used to make the posts feel peaceful, warm and easy to connect with.",
      "The visual language was kept simple and consistent, which made it easier to extend across multiple posts.",
      "This consistency helped the brand feel more recognisable and emotionally aligned across the campaign.",
      "Overall, the design system was easy to replicate while still maintaining a sense of care, balance and wellness."
    ],
    pointsMobile: [
      "The design elements continued the calm, caring and health-focused tone established in the logo.",
      "Soft visual elements made the posts feel peaceful, warm and easy to connect with.",
      "The design system was easy to replicate while maintaining care, balance and wellness."
    ]
  },

  gallerySections: [
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "yogalayaPostStyle1",
          title: "Post Style 1",
          previewGroupName: "Yogalaya Post Style 1",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-1-A.jpg", alt: "Yogalaya post style 1 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-1-B.jpg", alt: "Yogalaya post style 1 creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-1-C.jpg", alt: "Yogalaya post style 1 creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-1-D.jpg", alt: "Yogalaya post style 1 creative 04" }
          ]
        },
        {
          key: "yogalayaPostStyle2",
          title: "Post Style 2: Post Templates",
          previewGroupName: "Yogalaya Post Templates",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-A.jpg", alt: "Yogalaya post template 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-B.jpg", alt: "Yogalaya post template 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-C.jpg", alt: "Yogalaya post template 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-D.jpg", alt: "Yogalaya post template 04" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-E.jpg", alt: "Yogalaya post template 05" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-F.jpg", alt: "Yogalaya post template 06" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-G.jpg", alt: "Yogalaya post template 07" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-H.jpg", alt: "Yogalaya post template 08" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-I.jpg", alt: "Yogalaya post template 09" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-J.jpg", alt: "Yogalaya post template 10" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-K.jpg", alt: "Yogalaya post template 11" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-L.jpg", alt: "Yogalaya post template 12" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-M.jpg", alt: "Yogalaya post template 13" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-N.jpg", alt: "Yogalaya post template 14" }
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
      title: "Celestial",
      industry: "Education / E-learning",
      url: "./portfolio-detail.html?project=graphic-design-celestial",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Celestial.jpg",
        alt: "Celestial thumbnail"
      },
      imageLabel: "Celestial"
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
    }
  ]
},

"graphic-design-bni-champs": {
  title: "BNI Champs",
  fullTitle: "BNI Champs",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Business Networking",
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
    currentLabel: "BNI Champs"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/BNI.jpg",
      alt: "BNI Champs portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/BNI.jpg",
      alt: "BNI Champs mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "BNI Champs",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Founded by Dr. Ivan Misner in 1985, BNI is now the world’s largest networking organization with decades of continuous growth. A BNI Membership provides the environment, training and support to build trusted relationships. Members attend weekly chapter meetings that follow a structured agenda designed to maximise referrals and long-term business collaboration.",
        bodyMobile: "BNI is one of the world’s largest business networking organizations, helping members build trusted relationships, exchange referrals and grow through structured networking."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present BNI as a professional, high-trust and opportunity-driven business networking platform. Since the communication was meant for entrepreneurs and professionals, it had to feel sharp, credible and well-structured, while clearly highlighting the value of referrals, networking and business growth.",
        bodyMobile: "The design needed to present BNI as a professional, high-trust and opportunity-driven business networking platform."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included business owners, entrepreneurs, professionals, consultants, service providers and decision-makers who are looking to grow through meaningful business connections. The design needed to speak to people who value trust, credibility, referrals and long-term professional relationships.",
        bodyMobile: "The audience included business owners, entrepreneurs, professionals, consultants and decision-makers looking to grow through meaningful business connections."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of confidence, ambition and professional trust. It needed to make BNI feel like a serious growth platform where people can build strong relationships, find opportunities and move their business forward.",
        bodyMobile: "The design had to create confidence, ambition and professional trust, making BNI feel like a serious growth platform."
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
      "Since the client operated in a corporate and networking-driven environment, the design approach had to feel professional, structured and dynamic.",
      "The communication was centered around people and their stories, so the portraits and member images needed to have a strong visual presence.",
      "The layout had to give enough importance to each individual while still keeping the overall communication clean and business-like.",
      "The information hierarchy was planned in a simple, repeatable format, making it easy to create multiple posts in bulk.",
      "The overall strategy was to build a system that could present each story with clarity, consistency and impact."
    ],
    pointsMobile: [
      "The design approach had to feel professional, structured and dynamic.",
      "The communication was centered around people and their stories, so portraits needed strong visual presence.",
      "The strategy was to build a system that could present each story with clarity, consistency and impact."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "BNI already had a clear and established brand language, so the focus was not on reinventing the identity.",
      "The design system worked within the existing brand colours, structure and visual expectations.",
      "Modular elements were used so that the layouts could be replicated easily across different posts and member stories.",
      "Consistency was a key focus, especially because the communication had to work at scale.",
      "The final design language felt corporate, organized, people-focused and easy to extend across the campaign."
    ],
    pointsMobile: [
      "BNI already had a clear and established brand language, so the focus was not on reinventing the identity.",
      "Modular elements were used so the layouts could be replicated easily across posts.",
      "The final design language felt corporate, organised, people-focused and easy to extend."
    ]
  },

  gallerySections: [
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "bniSocialPosts",
          title: "Social Media Posts",
          previewGroupName: "BNI Champs Social Media Posts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/BNI/Post-Style-2-A.jpg", alt: "BNI Champs social post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/BNI/Post-Style-2-B.jpg", alt: "BNI Champs social post 02" },
            { src: "./assets/images/Portfolio/Graphic Design/BNI/Post-Style-2-C.jpg", alt: "BNI Champs social post 03" },
            { src: "./assets/images/Portfolio/Graphic Design/BNI/Post-Style-2-D.jpg", alt: "BNI Champs social post 04" },
            { src: "./assets/images/Portfolio/Graphic Design/BNI/Post-Style-2-E.jpg", alt: "BNI Champs social post 05" },
            { src: "./assets/images/Portfolio/Graphic Design/BNI/Post-Style-2-F.jpg", alt: "BNI Champs social post 06" }
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
      title: "Samartha Seva Mandal",
      industry: "Religious / Spiritual Organisation",
      url: "./portfolio-detail.html?project=graphic-design-samartha-seva-mandal",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/SSMS.jpg",
        alt: "Samartha Seva Mandal thumbnail"
      },
      imageLabel: "Samartha Seva Mandal"
    }
  ]
},
	
"graphic-design-preeti-garments": {
  title: "Preeti Garments",
  fullTitle: "Preeti Garments",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Fashion / Apparel",
  projectType: "",
  role: "Graphic Designer",
  deliverables: "Branding, Social Media Creatives",

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
    currentLabel: "Preeti Garments"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "branding", label: "Branding" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/Preeti Garments.jpg",
      alt: "Preeti Garments portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/Preeti Garments.jpg",
      alt: "Preeti Garments mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Preeti Garments",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Preeti Garments is a family-owned and family-run women’s clothing brand built with a strong understanding of everyday comfort, care and practical style. The brand offers a wide range of women’s garments with a focus on clothing that feels comfortable, modest and easy to wear. What makes the business special is its personal journey, first managed by the client’s mother and now carried forward by the next generation.",
        bodyMobile: "Preeti Garments is a family-owned women’s clothing brand focused on everyday comfort, modest style and practical fashion. The brand carries a sense of trust, warmth and continuity."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present Preeti Garments as a stylish, reliable and approachable garment brand. Since the work was connected to fashion and clothing, the communication had to feel fresh, clean and visually appealing, while still making the products look practical, comfortable and easy to choose.",
        bodyMobile: "The design needed to present Preeti Garments as a stylish, reliable and approachable garment brand with a fresh and comfortable visual presence."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The main audience were women who look for garments that feel comfortable, good-looking and dependable. The design needed to connect with people who value style, quality, affordability and trust.",
        bodyMobile: "The audience included women looking for garments that feel comfortable, good-looking, affordable and dependable."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of comfort, confidence and freshness. It needed to make the brand feel friendly and dependable, while also giving the garments a clean, attractive and modern presence.",
        bodyMobile: "The design had to create comfort, confidence and freshness while making the brand feel friendly, dependable and modern."
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
      "The task was to create a fresh brand identity for Preeti Garments, while giving the brand a more structured, polished and elegant presence.",
      "Since the market has many similar businesses, the identity had to help the brand feel more refined and memorable.",
      "The main direction was to position the new Preeti Garments as a brand that offers premium-looking products at an accessible price point.",
      "The communication had to balance two things carefully - affordability and aspiration.",
      "The goal was to make the brand feel more confident, organized and appealing without making it look distant from its existing customer base."
    ],
    pointsMobile: [
      "The task was to create a fresh brand identity while giving Preeti Garments a structured, polished and elegant presence.",
      "The identity had to help the brand feel more refined and memorable in a crowded market.",
      "The communication had to balance affordability and aspiration."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "Three different logo styles were explored, each with its own visual direction and personality.",
      "Each style used a separate family of design elements to present the brand from a different creative angle.",
      "The approach was not limited to textbook graphic design rules alone; it was also guided by the client’s comfort, emotion and personal connection with the brand.",
      "The objective was to create an identity that felt professional and elegant, but also something the client genuinely loved and felt proud to use.",
      "Overall, the design process balanced strategic thinking, visual appeal, and client preference to arrive at a brand identity that felt right for Preeti Garments."
    ],
    pointsMobile: [
      "Three different logo styles were explored, each with its own visual direction and personality.",
      "The process balanced strategic thinking, visual appeal and client preference.",
      "The final identity needed to feel professional, elegant and personally meaningful to the client."
    ]
  },

  gallerySections: [
    {
      id: "branding",
      title: "Branding",
      groups: [
        {
          key: "preetiBrandingOption1",
          title: "Option 1",
          previewGroupName: "Preeti Garments Branding Option 1",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Branding-1-A.jpg", alt: "Preeti Garments branding option 1 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Branding-1-B.jpg", alt: "Preeti Garments branding option 1 creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Branding-1-C.jpg", alt: "Preeti Garments branding option 1 creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Branding-1-D.jpg", alt: "Preeti Garments branding option 1 creative 04" }
          ]
        },
        {
          key: "preetiBrandingOption2",
          title: "Option 2",
          previewGroupName: "Preeti Garments Branding Option 2",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Branding-2-A.jpg", alt: "Preeti Garments branding option 2 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Branding-2-B.jpg", alt: "Preeti Garments branding option 2 creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Branding-2-C.jpg", alt: "Preeti Garments branding option 2 creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Branding-2-D.jpg", alt: "Preeti Garments branding option 2 creative 04" }
          ]
        },
        {
          key: "preetiBrandingOption3",
          title: "Option 3",
          previewGroupName: "Preeti Garments Branding Option 3",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Branding-3-A.jpg", alt: "Preeti Garments branding option 3 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Branding-3-B.jpg", alt: "Preeti Garments branding option 3 creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Branding-3-C.jpg", alt: "Preeti Garments branding option 3 creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Branding-3-D.jpg", alt: "Preeti Garments branding option 3 creative 04" }
          ]
        }
      ]
    },
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "preetiPostStyle1",
          title: "Post Style 1",
          previewGroupName: "Preeti Garments Post Style 1",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Post-Style-1-A.jpg", alt: "Preeti Garments post style 1 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Post-Style-1-B.jpg", alt: "Preeti Garments post style 1 creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Post-Style-1-C.jpg", alt: "Preeti Garments post style 1 creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Post-Style-1-D.jpg", alt: "Preeti Garments post style 1 creative 04" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Post-Style-1-E.jpg", alt: "Preeti Garments post style 1 creative 05" }
          ]
        },
        {
          key: "preetiPostStyle2",
          title: "Post Style 2: Post Templates",
          previewGroupName: "Preeti Garments Post Templates",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Post-Style-2-A.jpg", alt: "Preeti Garments post template 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Post-Style-2-B.jpg", alt: "Preeti Garments post template 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Post-Style-2-C.jpg", alt: "Preeti Garments post template 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Post-Style-2-D.jpg", alt: "Preeti Garments post template 04" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Post-Style-2-E.jpg", alt: "Preeti Garments post template 05" },
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Post-Style-2-F.jpg", alt: "Preeti Garments post template 06" }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Dagdushet Ganpati",
      industry: "Religious / Devotional Organisation",
      url: "./portfolio-detail.html?project=graphic-design-dagdushet-ganpati",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/DG.jpg",
        alt: "Dagdushet Ganpati thumbnail"
      },
      imageLabel: "Dagdushet Ganpati"
    },
    {
      title: "Victory Polychem",
      industry: "Industrial Chemicals",
      url: "./portfolio-detail.html?project=graphic-design-victory-polychem",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Victory Polychem.jpg",
        alt: "Victory Polychem thumbnail"
      },
      imageLabel: "Victory Polychem"
    },
    {
      title: "Raptech Engineering",
      industry: "Engineering / Manufacturing",
      url: "./portfolio-detail.html?project=graphic-design-raptech-engineering",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Raptech Engineering.jpg",
        alt: "Raptech Engineering thumbnail"
      },
      imageLabel: "Raptech Engineering"
    }
  ]
},

"graphic-design-aai-foods": {
  title: "Aai Foods",
  fullTitle: "Aai Foods",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Food / FMCG",
  projectType: "",
  role: "Graphic Designer",
  deliverables: "Branding, Packaging",

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
    currentLabel: "Aai Foods"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "branding", label: "Branding" },
    { id: "packaging", label: "Packaging" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/Aai Foods.jpg",
      alt: "Aai Foods portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/Aai Foods.jpg",
      alt: "Aai Foods mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Aai Foods",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Aai Foods is a husband-and-wife-led food brand built around the idea of making everyday cooking simpler, quicker and more approachable. The journey began from their experience in running a cloud kitchen, where they saw that many people wanted to enjoy home-style food but struggled with the time, confidence or know-how needed to cook it well. This led them to create ready-to-use masala premixes that help people prepare flavourful food with less effort.",
        bodyMobile: "Aai Foods is a husband-and-wife-led food brand created to make everyday cooking simpler and more approachable through ready-to-use masala premixes."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present Aai Foods as a warm, trustworthy and homely food brand. Since food is deeply connected to taste, comfort and memory, the communication had to feel fresh, appetising and emotionally familiar, while still looking clean and professional for digital and marketing use.",
        bodyMobile: "The design needed to present Aai Foods as a warm, trustworthy and homely food brand with a fresh, appetising and professional look."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included families, homemakers, food lovers, everyday buyers and people looking for tasty, reliable food products. The design needed to connect with people who value quality, hygiene, tradition, flavour and trust.",
        bodyMobile: "The audience included families, homemakers, food lovers and everyday buyers who value quality, hygiene, tradition, flavour and trust."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of warmth, hunger, trust and homely comfort. It needed to make the audience feel that Aai Foods offers food that is not just tasty, but also familiar, caring and made with sincerity.",
        bodyMobile: "The design had to create warmth, hunger, trust and homely comfort, making the brand feel familiar and sincere."
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
      "The main objective was not to create a completely new identity, but to refine and correct the existing logo so it could work better on packaging.",
      "The logo had to be made more print-friendly, clear and adaptable, especially for smaller packaging formats.",
      "The packaging communication was built around the key points provided by the client, making sure nothing important was lost.",
      "The layout was structured carefully so that each element had a clear role and the information felt organized, readable and easy to follow.",
      "Since the format was a sticker rather than full packaging, the design had to work within tight space limitations while still looking complete and effective."
    ],
    pointsMobile: [
      "The objective was to refine and correct the existing logo so it could work better on packaging.",
      "The packaging communication was built around the client’s key points while keeping the layout readable.",
      "The design had to work within tight sticker format limitations while still feeling complete."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "Black was used as the main background to give the logo stronger contrast and help it stand out, even at a smaller size.",
      "The visual hierarchy was kept simple and direct, with the final dish as the main visual focus.",
      "The name of the masala was given the next level of importance, so the product could be identified quickly.",
      "The design avoided unnecessary clutter and focused only on what mattered most.",
      "Despite the limitations of the sticker format, the final look felt homely, clear, practical and to the point."
    ],
    pointsMobile: [
      "Black was used as the main background to give the logo stronger contrast.",
      "The visual hierarchy was kept simple, with the final dish as the main focus.",
      "The final look felt homely, clear, practical and to the point."
    ]
  },

  gallerySections: [
    {
      id: "branding",
      title: "Branding",
      groups: [
        {
          key: "aaiBranding",
          title: "Branding",
          previewGroupName: "Aai Foods Branding",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Branding-1-A.jpg", alt: "Aai Foods branding creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Branding-1-B.jpg", alt: "Aai Foods branding creative 02" }
          ]
        }
      ]
    },
    {
      id: "packaging",
      title: "Packaging",
      groups: [
        {
          key: "aaiPackaging",
          title: "Packaging",
          previewGroupName: "Aai Foods Packaging",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Packaging-1-A.jpg", alt: "Aai Foods packaging creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Packaging-1-B.jpg", alt: "Aai Foods packaging creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Packaging-1-C.jpg", alt: "Aai Foods packaging creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Packaging-1-D.jpg", alt: "Aai Foods packaging creative 04" },
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Packaging-1-E.jpg", alt: "Aai Foods packaging creative 05" },
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Packaging-2-F.jpg", alt: "Aai Foods packaging creative 06" }
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
      title: "Samartha Seva Mandal",
      industry: "Religious / Spiritual Organisation",
      url: "./portfolio-detail.html?project=graphic-design-samartha-seva-mandal",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/SSMS.jpg",
        alt: "Samartha Seva Mandal thumbnail"
      },
      imageLabel: "Samartha Seva Mandal"
    }
  ]
},

"graphic-design-serene-veda": {
  title: "Serene Veda",
  fullTitle: "Serene Veda",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Ayurveda / Wellness",
  projectType: "",
  role: "Graphic Designer",
  deliverables: "Branding, Packaging",

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
    currentLabel: "Serene Veda"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "branding", label: "Branding" },
    { id: "packaging", label: "Packaging" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/Serene Veda.jpg",
      alt: "Serene Veda portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/Serene Veda.jpg",
      alt: "Serene Veda mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Serene Veda",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "Serene Veda is a homegrown wellness brand that creates super seed mixes and refreshing detox tea blends for people looking to support their health through simple, mindful nutrition. The brand is guided by the experience of a yoga teacher with over 20 years of understanding people’s health, lifestyle and everyday wellness needs. Each product is made in a home-based setup, bringing a sense of purity, trust and handcrafted care to the brand.",
        bodyMobile: "Serene Veda is a homegrown wellness brand that creates super seed mixes and detox tea blends for people looking to support their health through mindful nutrition."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present Serene Veda as a calm, natural and trustworthy wellness brand. Since the products are connected to nutrition, balance and mindful living, the communication had to feel soft, pure and emotionally reassuring, while still looking polished enough for packaging and brand use.",
        bodyMobile: "The design needed to present Serene Veda as a calm, natural and trustworthy wellness brand connected to nutrition, balance and mindful living."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included health-conscious individuals, yoga practitioners, wellness-focused buyers, families and people who look for natural products that feel pure, gentle and easy to include in everyday life.",
        bodyMobile: "The audience included health-conscious individuals, yoga practitioners, wellness-focused buyers and families looking for natural, gentle products."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of calmness, care, purity and relaxation. It needed to make the brand feel natural, personal and thoughtfully prepared, rather than loud or mass-produced.",
        bodyMobile: "The design had to create calmness, care, purity and relaxation while making the brand feel natural and personal."
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
      "The design language was intentionally created to feel different from the usual wellness and food packaging style.",
      "Most brands in this space rely heavily on ingredient photographs on the front of the packet.",
      "While this is sometimes necessary because of food regulations, many brands still follow the same visual formula even when they have room to explore something more meaningful.",
      "Instead of making the packaging look purely ingredient-led, the focus was shifted towards the feeling the brand wants to create.",
      "The idea was to build a design that reflected calmness, care, wellness and relaxation, rather than only showing what the product contains.",
      "This helped the packaging connect more with the brand’s purpose and emotional promise, not just the product category."
    ],
    pointsMobile: [
      "The design language was intentionally created to feel different from usual wellness and food packaging.",
      "The focus shifted from only showing ingredients to expressing the feeling the brand wanted to create.",
      "The packaging connected with the brand’s purpose and emotional promise, not just the product category."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The design used flowers, leaves, and soft natural forms to create a gentle and wellness-driven look.",
      "The colour palette was chosen to feel calming, fresh and soothing.",
      "The overall visual tone avoided anything that felt too loud, harsh, or aggressive.",
      "Sharp shapes, heavy shadows and strong visual clutter were consciously avoided.",
      "The elements were kept soft and balanced, so the packaging felt peaceful, approachable and easy on the eyes.",
      "Overall, the design created a sense of relaxation and natural wellness, which aligned closely with what Serene Veda stands for."
    ],
    pointsMobile: [
      "Flowers, leaves and soft natural forms created a gentle wellness-driven look.",
      "The colour palette was chosen to feel calming, fresh and soothing.",
      "The final design created relaxation and natural wellness, matching what Serene Veda stands for."
    ]
  },

  gallerySections: [
    {
      id: "branding",
      title: "Branding",
      groups: [
        {
          key: "sereneBranding",
          title: "Branding",
          previewGroupName: "Serene Veda Branding",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Serene Veda/Branding-1-A.jpg", alt: "Serene Veda branding creative 01" }
          ]
        }
      ]
    },
    {
      id: "packaging",
      title: "Packaging",
      groups: [
        {
          key: "serenePackaging",
          title: "Packaging",
          previewGroupName: "Serene Veda Packaging",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Serene Veda/Packaging-1-A.jpg", alt: "Serene Veda packaging creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Serene Veda/Packaging-1-B.jpg", alt: "Serene Veda packaging creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Serene Veda/Packaging-1-C.jpg", alt: "Serene Veda packaging creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Serene Veda/Packaging-1-D.jpg", alt: "Serene Veda packaging creative 04" }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Sundar Sanskar",
      industry: "Education / Child Development",
      url: "./portfolio-detail.html?project=graphic-design-sundar-sanskar",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Sundar Sanskar.jpg",
        alt: "Sundar Sanskar thumbnail"
      },
      imageLabel: "Sundar Sanskar"
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

"graphic-design-kesariya-100": {
  title: "Kesariya@100",
  fullTitle: "Kesariya@100",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "OTT Series / Cultural",
  projectType: "",
  role: "Graphic Designer",
  deliverables: "Branding",

  tools: [
    {
      name: "Adobe Illustrator",
      icon: "./assets/images/software Icons/Adobe_Illustrator_CC_icon.svg"
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl: "./index.html?section=portfolio",
    categoryLabel: "Graphic Design",
    categoryUrl: "./index.html?section=portfolio&category=graphic-design",
    currentLabel: "Kesariya@100"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "branding", label: "Branding" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/Kesariya.jpg",
      alt: "Kesariya@100 portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/Kesariya.jpg",
      alt: "Kesariya@100 mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Kesariya@100",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "This project was developed in association with the ZEE5 OTT platform as a special commemorative initiative marking 100 years of the RSS organization. Conceived as an anniversary tribute, the web series was created to present the journey of the RSS from its early beginnings to its present-day stature. The narrative focused on the organization's history, its evolving vision, and the many layers of effort, discipline, and sacrifice that shaped its growth over the decades.",
        bodyMobile: "Kesariya@100 was developed in association with ZEE5 as a commemorative web series marking 100 years of the RSS organization."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present Kesariya@100 as meaningful, proud and culturally rooted. Since the project was connected to a milestone, the communication had to feel special, respectful and memorable, while still looking clean and strong for modern platforms.",
        bodyMobile: "The design needed to present Kesariya@100 as meaningful, proud and culturally rooted, while still looking clean and strong for modern platforms."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included families, cultural followers, local communities, supporters and individuals emotionally connected to RSS. The design needed to speak to people who value tradition, pride, legacy and shared celebration.",
        bodyMobile: "The audience included families, cultural followers, local communities, supporters and individuals emotionally connected to RSS."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of pride, warmth, nostalgia and celebration. It needed to make the audience feel connected to the journey, the milestone and the cultural emotion behind RSS.",
        bodyMobile: "The design had to create pride, warmth, nostalgia and celebration around the journey and milestone."
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
      "The logo unit was designed with the RSS trademark flag as the central visual anchor.",
      "The aim was to give the identity a modern yet vintage character, so it could feel rooted in history but still relevant for a contemporary web series.",
      "The overall direction brought together modern execution techniques, a fresher colour palette and the original Kesari tone associated with the RSS identity.",
      "The challenge was to respect the seriousness and legacy of the subject while making the logo feel cinematic, refined and visually memorable.",
      "The strategy was to create a mark that carried both heritage and screen presence."
    ],
    pointsMobile: [
      "The logo unit was designed with the RSS trademark flag as the central visual anchor.",
      "The aim was to give the identity a modern yet vintage character.",
      "The strategy was to create a mark that carried both heritage and screen presence."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The flag was brought forward with importance, making it the emotional and symbolic centre of the identity.",
      "The typography was explored in a way that could either support the flag or become a strong visual element on its own.",
      "Two clear creative routes were developed: one where the typography carried the main weight and another where the flag became the dominant visual focus.",
      "In some options, the flag was carefully integrated into the typography to create a stronger connection between symbol and title.",
      "The colour palette stayed close to the original RSS identity, while being refined enough to work for a modern OTT presentation."
    ],
    pointsMobile: [
      "The flag became the emotional and symbolic centre of the identity.",
      "The typography was explored as both a supporting and dominant visual element.",
      "The colour palette stayed close to the original RSS identity while feeling refined for OTT presentation."
    ]
  },

  gallerySections: [
    {
      id: "branding",
      title: "Branding",
      groups: [
        {
          key: "kesariyaBranding",
          title: "Branding",
          previewGroupName: "Kesariya@100 Branding",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Kesariya@100/Branding-1-A.jpg", alt: "Kesariya@100 branding creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Kesariya@100/Branding-1-B.jpg", alt: "Kesariya@100 branding creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Kesariya@100/Branding-1-C.jpg", alt: "Kesariya@100 branding creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Kesariya@100/Branding-1-D.jpg", alt: "Kesariya@100 branding creative 04" },
            { src: "./assets/images/Portfolio/Graphic Design/Kesariya@100/Branding-1-E.jpg", alt: "Kesariya@100 branding creative 05" }
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
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Preeti Garments.jpg",
        alt: "Preeti Garments thumbnail"
      },
      imageLabel: "Preeti Garments"
    },
    {
      title: "Aai Foods",
      industry: "Food / FMCG",
      url: "./portfolio-detail.html?project=graphic-design-aai-foods",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Aai Foods.jpg",
        alt: "Aai Foods thumbnail"
      },
      imageLabel: "Aai Foods"
    },
    {
      title: "Serene Veda",
      industry: "Ayurveda / Wellness",
      url: "./portfolio-detail.html?project=graphic-design-serene-veda",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Serene Veda.jpg",
        alt: "Serene Veda thumbnail"
      },
      imageLabel: "Serene Veda"
    }
  ]
},

"graphic-design-beyond-bandish": {
  title: "Beyond Bandish",
  fullTitle: "Beyond Bandish",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Music / Performing Arts",
  projectType: "",
  role: "Graphic Designer",
  deliverables: "Branding, Stage Backdrops",

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
    currentLabel: "Beyond Bandish"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "branding", label: "Branding" },
    { id: "stage-backdrops", label: "Stage Backdrops" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/BB.jpg",
      alt: "Beyond Bandish portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/BB.jpg",
      alt: "Beyond Bandish mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Beyond Bandish",
    sections: [
      {
        heading: "Who is the client?",
        bodyDesktop: "This concert marked the launch event of Viraj Joshi, grandson of the legendary Pandit Bhimsen Joshi. The idea behind the event was to introduce him not just as the next generation of a celebrated musical legacy, but as an artist with his own contemporary voice. The concert moved beyond the boundaries of traditional bandish presentation and explored a fresh fusion of Indian classical music with pop, hip-hop, jazz and other modern genres.",
        bodyMobile: "Beyond Bandish marked the launch event of Viraj Joshi, grandson of Pandit Bhimsen Joshi, blending Indian classical music with contemporary genres."
      },
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present Beyond Bandish as a rich, artistic and culturally refined music-focused brand. Since the name itself suggests going beyond traditional boundaries, the communication had to feel rooted in classical music, but also fresh, expressive and engaging for a modern audience.",
        bodyMobile: "The design needed to present Beyond Bandish as rich, artistic and culturally refined while still feeling fresh and expressive."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included music lovers, classical music listeners, artists, students, cultural audiences and people who appreciate Indian performing arts. The design needed to connect with those who respect tradition, while also appealing to people who enjoy fresh and contemporary cultural experiences.",
        bodyMobile: "The audience included music lovers, classical music listeners, artists, students and cultural audiences."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of depth, elegance, curiosity and cultural pride. It needed to make Beyond Bandish feel soulful and artistic, while also suggesting that classical music can be experienced in a more open, expressive and contemporary way.",
        bodyMobile: "The design had to create depth, elegance, curiosity and cultural pride while making the event feel soulful and contemporary."
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
      "The design strategy was built around a blend of royalty, legacy and artistic expression.",
      "Since Pandit Bhimsen Joshi is often regarded as one of the greatest voices in Indian classical music, the communication had to carry a sense of grandeur and respect.",
      "At the same time, the design needed to introduce Virat Joshi as a young artist with his own identity, while still acknowledging the powerful legacy he comes from.",
      "The visual direction focused on showing this balance: a legendary musical heritage meeting a fresh, contemporary performer.",
      "The overall strategy was to make the event feel premium, rooted, expressive and emotionally significant."
    ],
    pointsMobile: [
      "The design strategy was built around royalty, legacy and artistic expression.",
      "The design introduced Virat Joshi as a young artist while acknowledging his musical legacy.",
      "The overall strategy was to make the event feel premium, rooted and expressive."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The design elements were chosen to reflect Virat Joshi’s personality, musical style and inherited connection with his grandfather’s legacy.",
      "Visual cues were used to suggest classical music, performance, lineage and artistic depth without making the design feel overly traditional.",
      "The graphics carried a sense of royalty and stage presence, helping the concert feel important and memorable.",
      "Elements connected to singing and musical expression were used to bring out the emotional side of the event.",
      "The final design language created a balance of heritage, youth, artistry and modern appeal."
    ],
    pointsMobile: [
      "The design elements reflected Virat Joshi’s personality, musical style and legacy.",
      "The graphics carried a sense of royalty and stage presence.",
      "The final design language balanced heritage, youth, artistry and modern appeal."
    ]
  },

  gallerySections: [
    {
      id: "branding",
      title: "Branding",
      groups: [
        {
          key: "beyondBranding",
          title: "Branding",
          previewGroupName: "Beyond Bandish Branding",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/BB/Branding-1-A.jpg", alt: "Beyond Bandish branding creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/BB/Branding-1-B.jpg", alt: "Beyond Bandish branding creative 02" }
          ]
        }
      ]
    },
    {
      id: "stage-backdrops",
      title: "Stage Backdrops",
      groups: [
        {
          key: "beyondBackdrops",
          title: "Stage Backdrops",
          previewGroupName: "Beyond Bandish Stage Backdrops",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/BB/Backdrops-1-A.jpg", alt: "Beyond Bandish stage backdrop 01" },
            { src: "./assets/images/Portfolio/Graphic Design/BB/Backdrops-1-B.jpg", alt: "Beyond Bandish stage backdrop 02" },
            { src: "./assets/images/Portfolio/Graphic Design/BB/Backdrops-1-C.jpg", alt: "Beyond Bandish stage backdrop 03" }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Kesariya@100",
      industry: "Cultural / Community Event",
      url: "./portfolio-detail.html?project=graphic-design-kesariya-100",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Kesariya.jpg",
        alt: "Kesariya@100 thumbnail"
      },
      imageLabel: "Kesariya@100"
    },
    {
      title: "Nupur Kathak Dance School",
      industry: "Dance / Performing Arts",
      url: "./portfolio-detail.html?project=graphic-design-nupur-kathak",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Nupur.jpg",
        alt: "Nupur Kathak Dance School thumbnail"
      },
      imageLabel: "Nupur Kathak Dance School"
    },
    {
      title: "Rainbow Umbrella",
      industry: "Social / CSR",
      url: "./portfolio-detail.html?project=graphic-design-rainbow-umbrella",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/RU.jpg",
        alt: "Rainbow Umbrella thumbnail"
      },
      imageLabel: "Rainbow Umbrella"
    }
  ]
},

"graphic-design-rainbow-umbrella": {
  title: "Rainbow Umbrella",
  fullTitle: "Rainbow Umbrella",
  category: "Graphic Design",
  categorySlug: "graphic-design",
  industry: "Social / CSR",
  projectType: "",
  role: "Graphic Designer",
  deliverables: "Social Media Posts",

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
    currentLabel: "Rainbow Umbrella"
  },

  tabs: [
    { id: "project-info", label: "Project Info" },
    { id: "design-thinking", label: "Design Thinking" },
    { id: "visual-system", label: "Visual System" },
    { id: "social-posts", label: "Social Media Posts" }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Graphic Design/RU.jpg",
      alt: "Rainbow Umbrella portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Graphic Design/Mobile/RU.jpg",
      alt: "Rainbow Umbrella mobile portfolio cover image"
    }
  },

  projectOverview: {
    title: "Rainbow Umbrella",
    sections: [
      {
        heading: "What was the design need?",
        bodyDesktop: "The design needed to present Rainbow Umbrella as a bright, friendly and memorable brand. Since the name itself has a colourful and positive feel, the communication had to look fresh, playful and easy to connect with, while still staying clear and professional.",
        bodyMobile: "The design needed to present Rainbow Umbrella as a bright, friendly and memorable brand with a fresh, playful and colourful feel."
      },
      {
        heading: "What kind of audience was this for?",
        bodyDesktop: "The audience included families, children, parents, young buyers and everyday consumers who are drawn to brands that feel cheerful, useful and approachable. The design needed to speak to people who value trust, simplicity, colour and positivity.",
        bodyMobile: "The audience included families, children, parents, young buyers and everyday consumers who value trust, simplicity, colour and positivity."
      },
      {
        heading: "What emotion should the design create?",
        bodyDesktop: "The design had to create a feeling of joy, freshness, safety and trust. It needed to make Rainbow Umbrella feel warm and approachable, while giving the brand a colourful and optimistic personality.",
        bodyMobile: "The design had to create joy, freshness, safety and trust while giving the brand a colourful and optimistic personality."
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
      "The strategy was to create communication that felt playful, inviting and instantly appealing to children.",
      "Child-like elements and cartoon characters were used to catch the attention of both children and parents.",
      "The main goal was to make the place feel like a space specially created for children: fun, safe, colorful and worth visiting.",
      "The communication had to work on two levels: it needed to excite children visually and reassure parents through clear information.",
      "Overall, the approach was to make the final output feel joyful, approachable and emotionally engaging for families."
    ],
    pointsMobile: [
      "The strategy was to create communication that felt playful, inviting and appealing to children.",
      "Cartoon characters and child-like elements helped catch attention.",
      "The output needed to feel joyful, approachable and emotionally engaging for families."
    ]
  },

  visualSystem: {
    heading: "Visual System",
    points: [
      "The design used cute, friendly illustrations that children could easily connect with.",
      "Cartoon-style characters helped make the communication feel more fun, warm and memorable.",
      "The color palette was kept bright and cheerful to match the energy of a child-focused space.",
      "The layouts were planned so that parents could easily read the information, while children could enjoy the colors, characters and artwork.",
      "Every visual element was chosen to create a sense of wonder, comfort and excitement.",
      "The final design language felt child-friendly, parent-friendly, colorful and inviting."
    ],
    pointsMobile: [
      "Cute, friendly illustrations helped children connect with the communication.",
      "The colour palette was bright and cheerful.",
      "The final design language felt child-friendly, parent-friendly, colourful and inviting."
    ]
  },

  gallerySections: [
    {
      id: "social-posts",
      title: "Social Media Posts",
      groups: [
        {
          key: "rainbowSocialPosts",
          title: "Social Media Posts",
          previewGroupName: "Rainbow Umbrella Social Media Posts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/RU/Social-Media-Post-1-A.jpg", alt: "Rainbow Umbrella social media post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/RU/Social-Media-Post-1-B.jpg", alt: "Rainbow Umbrella social media post 02" },
            { src: "./assets/images/Portfolio/Graphic Design/RU/Social-Media-Post-1-C.jpg", alt: "Rainbow Umbrella social media post 03" },
            { src: "./assets/images/Portfolio/Graphic Design/RU/Social-Media-Post-1-D.jpg", alt: "Rainbow Umbrella social media post 04" },
            { src: "./assets/images/Portfolio/Graphic Design/RU/Social-Media-Post-1-E.jpg", alt: "Rainbow Umbrella social media post 05" },
            { src: "./assets/images/Portfolio/Graphic Design/RU/Social-Media-Post-1-F.jpg", alt: "Rainbow Umbrella social media post 06" }
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
      title: "Samartha Seva Mandal",
      industry: "Religious / Spiritual Organisation",
      url: "./portfolio-detail.html?project=graphic-design-samartha-seva-mandal",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/SSMS.jpg",
        alt: "Samartha Seva Mandal thumbnail"
      },
      imageLabel: "Samartha Seva Mandal"
    }
  ]
 }
}