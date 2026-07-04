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
  title: "Dagdusheth Ganpati",
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
    src: "./assets/images/Thumbnails/Graphic Design/Mobile/DG.jpg",
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
        key: "ganeshUtsav",
        title: "Ganesh Utsav",
        previewGroupName: "Ganesh Utsav",
        items: [
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/GU 2024 Image 1.jpg",
            alt: "Ganesh Utsav 2024 creative 01"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/GU-2025-Image-1.jpg",
            alt: "Ganesh Utsav 2025 creative 01"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/GU-2026-Image-3.jpg",
            alt: "Ganesh Utsav 2026 creative 03"
          }
        ]
      },

      {
        key: "festivals",
        title: "Festivals",
        previewGroupName: "Festivals",
        items: [
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Ganesh-Janma-1.jpg",
            alt: "Ganesh Janma Sohola 2025 creative 01"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Atirudra-1.jpg",
            alt: "Atirudra Mahayadnya 2025 creative 01"
          },
          {
            src: "./assets/images/Portfolio/Graphic Design/DG/Shahale-1.jpg",
            alt: "Shahale Mohotsav 2025 creative 01"
          }
        ]
      }, 
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
        src: "./assets/images/Thumbnails/Graphic Design/Raptech.jpg",
        alt: "Raptech Engineering thumbnail"
      },
      imageLabel: "Raptech Engineering"
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
          key: "allvictoryPostStyles",
          title: "Post Styles: Image, Product and Image with Product Based Layouts",
          previewGroupName: "All Post Styles",
          items: [
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-1-A.jpg",
              alt: "Victory Polychem image based post style 01"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-2-B.jpg",
              alt: "Victory Polychem image and product based post style 02"
            },
            {
              src: "./assets/images/Portfolio/Graphic Design/Victory Polychem/Post-style-4-B.jpg",
              alt: "Victory Polychem text and product based post style 02"
            }
          ]
        },
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "COEPian's Academy",
      industry: "Education / Coaching",
      url: "./portfolio-detail.html?project=graphic-design-coepians-academy",
      image: { src: "./assets/images/Thumbnails/Graphic Design/COEP.jpg", alt: "COEPian's Academy thumbnail" },
      imageLabel: "COEPian's Academy"
    },
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
          title: "Post Style 1: Image Based Layouts Hiring Posts",
          previewGroupName: "Raptech Post Style 1",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-1-A.jpg", alt: "Raptech image based hiring post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-1-B.jpg", alt: "Raptech image based hiring post 02" }
          ]
        },
        {
          key: "raptechPostStyle2",
          title: "Post Style 2: Product Based Layouts",
          previewGroupName: "Raptech Post Style 2",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-3-A.jpg", alt: "Raptech product based post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-3-B.jpg", alt: "Raptech product based post 02" }
          ]
        },
        {
          key: "raptechPostStyle3",
          title: "Post Style 3: Text & Product Based Layouts",
          previewGroupName: "Raptech Post Style 3",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-4-A.jpg", alt: "Raptech text and product based post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Raptech/Post-style-4-B.jpg", alt: "Raptech text and product based post 02" },
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Samartha Seva Mandal",
      industry: "Religious / Spiritual Organisation",
      url: "./portfolio-detail.html?project=graphic-design-samartha-seva-mandal",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/SSMS.jpg",
        alt: "Samartha Seva Mandal thumbnail"
      },
      imageLabel: "Samartha Seva Mandal"
    },
    {
      title: "Yogalaya",
      industry: "Wellness / Yoga",
      url: "./portfolio-detail.html?project=graphic-design-yogalaya",
      image: { src: "./assets/images/Thumbnails/Graphic Design/Yogalaya.jpg", alt: "Yogalaya thumbnail" },
      imageLabel: "Yogalaya"
    },
    {
      title: "Preeti Garments",
      industry: "Fashion / Apparel",
      url: "./portfolio-detail.html?project=graphic-design-preeti-garments",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Preeti Garments.jpg",
        alt: "Preeti Garments thumbnail"
      },
      imageLabel: "Preeti Garments"
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
          title: "Post Style 1: Infographic Based Layouts",
          previewGroupName: "Celestial Infographic Posts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-1-A.jpg", alt: "Celestial infographic post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-1-B.jpg", alt: "Celestial infographic post 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Celestial/Post-Style-1-C.jpg", alt: "Celestial infographic post 03" }
          ]
        },
        {
          key: "celestialPostStyle2",
          title: "Post Style 2: Image and Text Based Layouts",
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
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
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
    },
    {
      title: "Kesariya@100",
      industry: "Cultural / Community Event",
      url: "./portfolio-detail.html?project=graphic-design-kesariya-100",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Kesariya.jpg",
        alt: "Kesariya@100 thumbnail"
      },
      imageLabel: "Kesariya@100"
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
          key: "coepPosttemplatelayouts",
          title: "Post Template Layouts",
          previewGroupName: "Post Template Layouts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-1-A.jpg", alt: "COEP post style 1 creative 01" },
			{ src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-2-B.jpg", alt: "COEP post style 2 creative 02" },
			{ src: "./assets/images/Portfolio/Graphic Design/COEP/Post-Style-4-E.jpg", alt: "COEP post style 4 creative 05" }
          ]
        },
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Beyond Bandish",
      industry: "Music / Performing Arts",
      url: "./portfolio-detail.html?project=graphic-design-beyond-bandish",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Serene Veda.jpg",
        alt: "Beyond Bandish thumbnail"
      },
      imageLabel: "Beyond Bandish"
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
    },
    {
      title: "Dagdushet Ganpati",
      industry: "Religious / Devotional Organisation",
      url: "./portfolio-detail.html?project=graphic-design-dagdushet-ganpati",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/DG.jpg",
        alt: "Dagdushet Ganpati thumbnail"
      },
      imageLabel: "Dagdushet Ganpati"
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
          key: "lmmPostcolourtemplatelayouts",
          title: "Post Colour Template Layouts",
          previewGroupName: "Post Colour Template Layouts",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-1-A.jpg", alt: "La Mom & Miiracle post style 1 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-2-A.jpg", alt: "La Mom & Miiracle post style 2 creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/LMM/Post-Style-3-B.jpg", alt: "La Mom & Miiracle post style 3 creative 02" }
          ]
        },
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
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
        src: "./assets/images/Thumbnails/Graphic Design/Raptech.jpg",
        alt: "Raptech Engineering thumbnail"
      },
      imageLabel: "Raptech Engineering"
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
          key: "wiloPostTemplateStyles",
          title: "Post Template Styles",
          previewGroupName: "Post Template Styles",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-1-A.jpg", alt: "Wilo Amazon post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-4-A.jpg", alt: "Wilo image based post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-5-A.jpg", alt: "Wilo image and content post 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Wilo/Post-Style-3-A.jpg", alt: "Wilo hiring post 01" }
          ]
        },
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
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
      title: "Branding",
      groups: [
        {
          key: "ssmsLogoModernisation",
          title: "Logo Modernisation",
          previewGroupName: "Logo Modernisation",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Logo-1.jpg", alt: "Samartha Seva Mandal logo 01" },
			{ src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-B.png", alt: "Samartha Seva Mandal symbol B" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-E.png", alt: "Samartha Seva Mandal symbol E" },
            { src: "./assets/images/Portfolio/Graphic Design/SSMS/Symbol-F.png", alt: "Samartha Seva Mandal symbol F" }
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
          title: "Post Templates for Various Workshops/Activities",
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
      title: "Yogalaya",
      industry: "Wellness / Yoga",
      url: "./portfolio-detail.html?project=graphic-design-yogalaya",
      image: { src: "./assets/images/Thumbnails/Graphic Design/Yogalaya.jpg", alt: "Yogalaya thumbnail" },
      imageLabel: "Yogalaya"
    },
    {
     title: "Preeti Garments",
      industry: "Fashion / Apparel",
      url: "./portfolio-detail.html?project=graphic-design-preeti-garments",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Preeti Garments.jpg",
        alt: "Preeti Garments thumbnail"
      },
      imageLabel: "Preeti Garments"
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
          title: "Chakra Info Posts",
          previewGroupName: "Yogalaya Post Templates",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-A.jpg", alt: "Yogalaya post template 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-B.jpg", alt: "Yogalaya post template 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-G.jpg", alt: "Yogalaya post template 07" },
            { src: "./assets/images/Portfolio/Graphic Design/Yogalaya/Post-Style-2-H.jpg", alt: "Yogalaya post template 08" }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
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
    },
    {
      title: "Kesariya@100",
      industry: "Cultural / Community Event",
      url: "./portfolio-detail.html?project=graphic-design-kesariya-100",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Kesariya.jpg",
        alt: "Kesariya@100 thumbnail"
      },
      imageLabel: "Kesariya@100"
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
            { src: "./assets/images/Portfolio/Graphic Design/Preeti Garments/Post-Style-2-C.jpg", alt: "Preeti Garments post template 03" }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "Beyond Bandish",
      industry: "Music / Performing Arts",
      url: "./portfolio-detail.html?project=graphic-design-beyond-bandish",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Serene Veda.jpg",
        alt: "Beyond Bandish thumbnail"
      },
      imageLabel: "Beyond Bandish"
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
    },
    {
      title: "Dagdushet Ganpati",
      industry: "Religious / Devotional Organisation",
      url: "./portfolio-detail.html?project=graphic-design-dagdushet-ganpati",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/DG.jpg",
        alt: "Dagdushet Ganpati thumbnail"
      },
      imageLabel: "Dagdushet Ganpati"
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
          title: "Logo",
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
          title: "Layout Options",
          previewGroupName: "Aai Foods Packaging",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Packaging-1-A.jpg", alt: "Aai Foods packaging creative 01" },
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Packaging-1-B.jpg", alt: "Aai Foods packaging creative 02" },
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Packaging-1-C.jpg", alt: "Aai Foods packaging creative 03" },
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Packaging-1-D.jpg", alt: "Aai Foods packaging creative 04" },
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Packaging-1-E.jpg", alt: "Aai Foods packaging creative 05" },
            { src: "./assets/images/Portfolio/Graphic Design/Aai Foods/Packaging-1-F.jpg", alt: "Aai Foods packaging creative 06" }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
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
        src: "./assets/images/Thumbnails/Graphic Design/Raptech.jpg",
        alt: "Raptech Engineering thumbnail"
      },
      imageLabel: "Raptech Engineering"
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
          title: "Logo",
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
          title: "Labels",
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
      title: "COEPian's Academy",
      industry: "Education / Coaching",
      url: "./portfolio-detail.html?project=graphic-design-coepians-academy",
      image: { src: "./assets/images/Thumbnails/Graphic Design/COEP.jpg", alt: "COEPian's Academy thumbnail" },
      imageLabel: "COEPian's Academy"
    },
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
          key: "kesariyaProposedLogoOptions",
          title: "Proposed Logo Options",
          previewGroupName: "Proposed Logo Options",
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
      title: "Samartha Seva Mandal",
      industry: "Religious / Spiritual Organisation",
      url: "./portfolio-detail.html?project=graphic-design-samartha-seva-mandal",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/SSMS.jpg",
        alt: "Samartha Seva Mandal thumbnail"
      },
      imageLabel: "Samartha Seva Mandal"
    },
    {
      title: "Yogalaya",
      industry: "Wellness / Yoga",
      url: "./portfolio-detail.html?project=graphic-design-yogalaya",
      image: { src: "./assets/images/Thumbnails/Graphic Design/Yogalaya.jpg", alt: "Yogalaya thumbnail" },
      imageLabel: "Yogalaya"
    },
    {
      title: "Preeti Garments",
      industry: "Fashion / Apparel",
      url: "./portfolio-detail.html?project=graphic-design-preeti-garments",
      image: {
        src: "./assets/images/Thumbnails/Graphic Design/Preeti Garments.jpg",
        alt: "Preeti Garments thumbnail"
      },
      imageLabel: "Preeti Garments"
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
          title: "Logo",
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
          title: "Backdrop Styles",
          previewGroupName: "Beyond Bandish Stage Backdrops",
          items: [
            { src: "./assets/images/Portfolio/Graphic Design/BB/Backdrops-1-A.jpg", alt: "Beyond Bandish stage backdrop 01" },
            { src: "./assets/images/Portfolio/Graphic Design/BB/Backdrops-1-B.jpg", alt: "Beyond Bandish stage backdrop 02" }
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
          title: "Topical Day Posts",
          previewGroupName: "Rainbow Umbrella Topical Day Posts",
          items: [
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
        src: "./assets/images/Thumbnails/Graphic Design/Raptech.jpg",
        alt: "Raptech Engineering thumbnail"
      },
      imageLabel: "Raptech Engineering"
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
	
"ui-ux-ola-scooty-app": {
  title: "UX - OLA Scooty App",
  fullTitle: "UX - OLA Scooty App",

  category: "UI/UX",
  categorySlug: "ui%2Fux",

  industry: "Mobility / Electric Vehicles",
  projectType: "UI/UX Case Study",

  layout: "ux-case-study",

  role: "UI/UX Designer",

  deliverables:
    "User Research, App Interface Design, App Style Guide",

tools: [
    {
      name: "Figma",
      icon: "./assets/images/software Icons/Figma-logo.svg"
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl: "./index.html?section=portfolio",

    categoryLabel: "UI/UX",
    categoryUrl:
      "./index.html?section=portfolio&category=ui%2Fux",

    currentLabel: "UX - OLA Scooty App"
  },

tabs: [
  {
    id: "about-project",
    label: "About the Project",
    desktopLabel: "About the<br>Project"
  },
  {
    id: "unique-selling-proposition",
    label: "Unique Selling Proposition",
    desktopLabel: "Unique Selling<br>Proposition"
  },
  {
    id: "target-audience",
    label: "Target Audience",
    desktopLabel: "Target<br>Audience"
  },
  {
    id: "user-problems-identified",
    label: "User Problems Identified",
    desktopLabel: "User Problems<br>Identified"
  },
  {
    id: "user-personas",
    label: "User Personas",
    desktopLabel: "User<br>Personas"
  },
  {
    id: "key-user-needs",
    label: "Key User Needs",
    desktopLabel: "Key<br>User Needs"
  },
  {
    id: "feature-prioritization",
    label: "Feature Prioritization",
    desktopLabel: "Feature<br>Prioritization"
  },
  {
    id: "design-system",
    label: "Design System",
    desktopLabel: "Design<br>System"
  },
  {
    id: "final-ui-screens",
    label: "Final UI Screens",
    desktopLabel: "Final<br>UI Screens"
  }
  
],
	
  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Uiux/OLA.jpg",
      alt: "UX OLA Scooty App portfolio cover"
    },

    mobile: {
      src: "./assets/images/Thumbnails/Uiux/OLA.jpg",
      alt: "UX OLA Scooty App mobile portfolio cover"
    }
  },

  uxCaseStudy: {
    about: {
      heading: "About the Project",

      primaryText: [
        "This was a hypothetical UI/UX college project based on the launch of the OLA electric scooter. The app was designed as a mobile dashboard for users when they are not actively riding — for example, when they are at home, in the office, planning a ride, checking vehicle status or managing service tasks.",

        "Since the scooter already has its own display while riding, the app focuses on off-scooter use cases like checking battery, range, vehicle health, charging points, service reminders and remote controls."
      ],

      goalText: [
        "The goal was to help OLA scooter users manage their vehicle better through a simple and clear interface."
      ],

      contextHighlight:
        "A key context I considered was that the app would be used mainly before or after riding, not during the ride, because the scooter’s own display already supports the rider while driving."
    },

    research: {
      heading: "Research & Context",

      contextText: [
        "The main context was simple: the app would be used mostly when the user is not actively riding the scooter.",

        "While riding, the scooter’s own display is already in front of the user. So the mobile app is more useful at home, in the office, before leaving for a ride, after parking, or while managing service and charging tasks."
      ],

      purposeLabel:
        "This gave the app a clear purpose:",

      purposeStatement:
        "It works as a remote scooter dashboard for checking battery, range, vehicle health, charging points, service updates and controls.",

      pointsHeading: "Key Research Points",

      points: [
        "The app is mainly useful when the user is away from the scooter or preparing for a ride.",

        "While riding, the scooter display already handles immediate ride information.",

        "Users need to check battery percentage and distance left before starting a trip.",

        "Battery temperature and tyre pressure help users understand vehicle health before use.",

        "Nearby charging points help users plan routes and avoid range anxiety.",

        "Service reminders and appointment booking help users maintain the scooter on time."
      ],

      remoteControlPoint:
        "A remote kill switch gives users control when the scooter is parked, stolen or accidentally left on.",

      takeaway:
        "The app was planned as an off-scooter control dashboard — useful before a ride, after parking, or when the user needs to check and manage the scooter remotely."
    },

    usp: {
  heading: "USP",

  statement:
    "A remote EV dashboard for OLA scooter users to check battery, range, vehicle health, charging, service and remote controls when they are not actively riding."
},

targetAudience: {
  heading: "Target Audience",

  description:
    "The app is designed for OLA electric scooter users who want to manage their scooter easily through their phone.",

  groups: [
    {
      title: "Primary Audience",

      description:
        "Existing OLA scooter owners who need quick access to battery, range, vehicle health, charging, service updates and remote controls."
    },
    {
      title: "Secondary Audience",

      description:
        "First-time EV users and urban commuters who need simple information about battery usage, charging, service and vehicle readiness."
    },
    {
      title: "Tertiary Audience",

      description:
        "Brand-conscious and environmentally conscious users who value smart mobility, cleaner travel and a polished ownership experience."
    }
  ]
},

userProblems: {
  heading: "User Problems Identified",

  description:
    "EV users need quick and clear information while managing their scooter. The main challenge was to fit important features without making the app feel crowded.",

  items: [
    "Unclear Battery & Range Information",
    "Limited Visibility of Battery Temperature & Tyre Pressure",
    "Difficulty Finding Nearby Charging Points Quickly",
    "Missed Service Schedules & Delayed Maintenance",
    "Too Many Features Without Clear Grouping",
    "Need for Quick Access to Important Vehicle Controls"
  ],

  takeaway:
    "The main UX challenge was to turn EV-related features into a simple, useful and easy-to-understand dashboard."
},

personas: {
  heading: "User Personas",

  introduction:
    "I created four personas to understand how different OLA scooter users may use the app when they are not riding. The app is mainly useful at home, in the office, before a ride, after parking, or while managing charging, service and vehicle status. Each persona helped define a different off-scooter use case: checking readiness, planning a ride, understanding EV information, booking service or using remote controls.",

  items: [
    {
      name: "Rohan Mehta",
      type: "Urban Commuter",

      image:
        "./assets/images/Portfolio/Uiux/OLA/Persona-1.jpg",

      background:
        "Uses the scooter daily for work and needs to check battery, range and route before leaving.",

      mainNeed:
        "Know if the scooter is ready for the next trip."
    },
    {
      name: "Neha Patil",
      type: "First-Time EV User",

      image:
        "./assets/images/Portfolio/Uiux/OLA/Persona-2.jpg",

      background:
        "Recently shifted from a petrol scooter to an EV and needs simple updates about battery, charging and vehicle health.",

      mainNeed:
        "Understand the scooter clearly without feeling confused."
    },
    {
      name: "Priya Sharma",
      type: "Brand-Conscious Urban User",

      image:
        "./assets/images/Portfolio/Uiux/OLA/Persona-3.jpg",

      background:
        "Values smart technology, convenience and a polished ownership experience.",

      mainNeed:
        "A clean app that makes scooter ownership feel smart and effortless."
    },
    {
      name: "Akhil Deshmukh",
      type: "Environmentally Conscious User",

      image:
        "./assets/images/Portfolio/Uiux/OLA/Persona-4.jpg",

      background:
        "Uses the scooter as a practical and eco-friendly travel choice.",

      mainNeed:
        "Simple information that helps him manage the scooter confidently every day."
    }
  ]
},

keyUserNeeds: {
  heading: "Key User Needs",

  description:
    "The main user needs were based on everyday EV ownership problems.",

  items: [
    {
      title: "Battery Confidence",
      description:
        "Clear view of battery percentage and distance left."
    },
    {
      title: "Vehicle Health",
      description:
        "Simple status for battery temperature and tyre pressure."
    },
    {
      title: "Charging Support",
      description:
        "Quick access to nearby charging points."
    },
    {
      title: "Service Clarity",
      description:
        "Timely service reminders and easy appointment booking."
    },
    {
      title: "Vehicle Control",
      description:
        "Easy access to power mode and remote kill switch."
    }
  ]
},

featurePrioritization: {
  heading: "Feature Prioritization",

  description:
    "I prioritized features based on what a user would need most during daily use.",

  groups: [
    {
      level: "high",
      title: "High Priority",

      items: [
        "Battery Percentage & Distance Left",
        "Battery Temperature Monitor",
        "Tyre Pressure Status",
        "Power Mode Control",
        "Nearby Charging Points",
        "Service Reminder & Appointment Booking",
        "Remote Kill Switch"
      ]
    },
    {
      level: "medium",
      title: "Medium Priority",

      items: [
        "Route Navigation",
        "Service Status Check"
      ]
    },
    {
      level: "low",
      title: "Low Priority",

      items: [
        "Profile and Account Screens"
      ]
    }
  ],

  takeaway:
    "The main priority was to make essential EV information and controls easy to find before the user feels confused or stuck."
},

designSystem: {
  heading: "UI Visual System",

  description:
    "The design system was planned to make the app feel modern, clean and dashboard-like. Since the app shows important scooter data, the focus was on clear layouts, simple icons, easy-to-read cards and status-based colours.",

  colors: [
    {
      title: "Main",
      values: [
        "#7DDC00",
        "#FFFFFF",
        "#000000"
      ]
    },
    {
      title: "Background",
      values: [
        "#F2F2F2",
        "#FFFFFF"
      ]
    },
    {
      title: "Text",
      values: [
        "#080808",
        "#C9C9CF",
        "#7DDC00"
      ]
    },
    {
      title: "Other",
      values: [
        "#7DDC00",
        "#FFE600",
        "#FF9600",
        "#FF0B55",
        "#FF8700",
        "#F2294A",
        "#5A5CEB",
        "#68B7E7",
        "#00CF86"
      ]
    }
  ],

  typography: [
    {
      label: "H1",
      sample: "Outfit 37px Bold",
      className: "h1"
    },
    {
      label: "H2",
      sample: "Outfit 28px Bold",
      className: "h2"
    },
    {
      label: "H3",
      sample: "Outfit 18px Bold",
      className: "h3"
    },
    {
      label: "Body Copy",
      sample: "Menu Option Text 12px Regular",
      className: "body"
    }
  ]
},

finalUIScreens: {
  heading: "Final UI Screens",

  introduction:
    "The final screens were planned as one connected EV ownership system. The user enters through login/register, reaches the home dashboard, checks the scooter’s condition, and then takes action through pages for battery, vehicle health, charging, navigation, servicing and remote control.",

  groups: [
    {
      number: "01",
      title: "Entry Screens",
      subtitle: "Login & Registration",
      layout: "half",

      items: [
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-01.jpg",
          alt: "OLA app welcome and entry screen"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-02.jpg",
          alt: "OLA app login screen"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-03.jpg",
          alt: "OLA app registration screen"
        }
      ]
    },

    {
      number: "02",
      title: "Main Control Centre & Vehicle Health Screens",
      subtitle: "Home Dashboard",
      layout: "half",

      items: [
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-04.jpg",
          alt: "OLA app battery dashboard"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-05.jpg",
          alt: "OLA app battery temperature dashboard"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-06.jpg",
          alt: "OLA app tyre pressure dashboard"
        }
      ]
    },

    {
      number: "03",
      title: "Travel Support Screens",
      subtitle: "Route Navigation & Nearby Charging Points",
      layout: "full",

      items: [
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-07.jpg",
          alt: "OLA app route navigation screen"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-08.jpg",
          alt: "OLA app nearby charging point screen"
        }
      ]
    },

    {
      number: "04",
      title: "Service Support Screens",
      subtitle: "Service Reminder, Service Status & Appointment Booking",
      layout: "full",

      items: [
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-09.jpg",
          alt: "OLA app service notifications screen"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-10.jpg",
          alt: "OLA app servicing status check screen"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-11.jpg",
          alt: "OLA app vehicle service up-to-date screen"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-12.jpg",
          alt: "OLA app missed service reminder screen"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-13.jpg",
          alt: "OLA app appointment booking screen"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-14.jpg",
          alt: "OLA app appointment confirmation screen"
        }
      ]
    },

    {
      number: "05",
      title: "Safety & Utility Screens",
      subtitle: "Remote Kill Switch, Notifications & Other Controls",
      layout: "full",

      items: [
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-15.jpg",
          alt: "OLA app remote power control screen"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-16.jpg",
          alt: "OLA app settings screen"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-17.jpg",
          alt: "OLA app ride history screen"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-18.jpg",
          alt: "OLA app account screen"
        },
        {
          src: "./assets/images/Portfolio/Uiux/OLA/Final-UI-19.jpg",
          alt: "OLA app documents screen"
        }
      ]
    }
  ]
}	  

},

relatedProjectsTitle: "View Other Projects",

relatedProjects: [
  {
    title: "Dagdusheth Ganpati",
    industry: "Religious / Devotional Organisation",

    url:
      "./portfolio-detail.html?project=ui-ux-dagdusheth-website",

    image: {
      src:
        "./assets/images/Thumbnails/Uiux/DG.jpg",

      alt:
        "Dagdusheth Ganpati UI UX project thumbnail"
    },

    imageLabel:
      "Dagdusheth Ganpati UI UX"
  },

  {
    title: "La Mom & Miiracle",
    industry: "Healthcare / Fertility Clinic",

    url:
      "./portfolio-detail.html?project=ui-ux-la-mom-miiracle",

    image: {
      src:
        "./assets/images/Thumbnails/Uiux/LMM.jpg",

      alt:
        "La Mom and Miiracle UI UX project thumbnail"
    },

    imageLabel:
      "La Mom & Miiracle UI UX"
  },

  {
    title:
        "UX - Samartha Seva Mandal Sajjangad",

      industry:
        "Religious / Spiritual Organisation",

      url:
        "./portfolio-detail.html?project=ui-ux-ssms-website",

      image: {
        src:
          "./assets/images/Thumbnails/Uiux/SSMS.jpg",

        alt:
          "Samartha Seva Mandal Sajjangad UI UX project thumbnail"
      },

      imageLabel:
        "UX - Samartha Seva Mandal Sajjangad"
   }
  ]
 },
	
"ui-ux-dagdusheth-website": {
  title: "UX - Dagdusheth Ganpati Website",
  fullTitle: "Shrimant Dagdusheth Halwai Ganpati Website Redesign",

  category: "UI/UX",
  categorySlug: "ui%2Fux",

  industry: "Religious / Devotional Organisation",
  projectType: "UI/UX Website Case Study",

  layout: "ux-case-study",

  role: "UI/UX Designer",

  deliverables:
    "User Research, Website Interface Design, Website Style Guide",

tools: [
    {
      name: "Figma",
      icon: "./assets/images/software Icons/Figma-logo.svg"
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl: "./index.html?section=portfolio",

    categoryLabel: "UI/UX",
    categoryUrl:
      "./index.html?section=portfolio&category=ui%2Fux",

    currentLabel: "UX - Dagdusheth Ganpati Website"
  },

  tabs: [
    {
      id: "about-project",
      label: "About the Project",
      desktopLabel: "About the<br>Project"
    },
    {
      id: "unique-selling-proposition",
      label: "Unique Selling Proposition",
      desktopLabel: "Unique Selling<br>Proposition"
    },
    {
      id: "target-audience",
      label: "Target Audience",
      desktopLabel: "Target<br>Audience"
    },
    {
      id: "user-problems-identified",
      label: "User Problems Identified",
      desktopLabel: "User Problems<br>Identified"
    },
    {
      id: "user-personas",
      label: "User Personas",
      desktopLabel: "User<br>Personas"
    },
    {
      id: "key-user-needs",
      label: "Key User Needs",
      desktopLabel: "Key<br>User Needs"
    },
    {
      id: "feature-prioritization",
      label: "Feature Prioritization",
      desktopLabel: "Feature<br>Prioritization"
    },
{
  id: "design-system",
  label: "Design System",
  desktopLabel: "Design<br>System"
},
{
  id: "final-ui-screens",
  label: "Final UI Screens",
  desktopLabel: "Final<br>UI Screens"
}
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Uiux/DG.jpg",
      alt: "Shrimant Dagdusheth Halwai Ganpati website redesign cover"
    },

    mobile: {
      src: "./assets/images/Thumbnails/Uiux/DG.jpg",
      alt: "Shrimant Dagdusheth Halwai Ganpati mobile website redesign cover"
    }
  },

  uxCaseStudy: {
    about: {
      heading: "About the Project",

      primaryText: [
        "This was a <strong>website redesign project</strong> of the official Shrimant Dagdusheth Halwai Ganpati website. The platform serves devotees who visit the temple physically, participate remotely, book religious services, explore festivals, donate to social causes and learn about the Trust’s cultural legacy.",

        "The goal was to <strong>organize</strong> these different experiences into a <strong>clear, trustworthy and task-focused digital journey.</strong> The redesign prioritizes <strong>temple timings, festival information, Live Darshan, E-Seva, donations and practical visitor guidance</strong> while preserving the temple’s <strong>devotional identity and emotional significance.</strong>"
      ],

      goalText: [],

      contextHighlight:
        "A key context I considered was that most visitors arrive with a specific intention—to plan a visit, seek darshan, perform a seva or support a cause—rather than casually browse the website."
    },

    research: {
      heading: "Research & Context",

      contextText: [
        "The primary context was simple: users visit the website with <strong>time-sensitive and emotionally important tasks.</strong>",

        "They need to check an <strong>aarti time before leaving home, plan a festival visit, watch Darshan Live, book a ritual remotely or donate towards a cause online.</strong>"
      ],

      purposeLabel:
        "This gave the website a clear purpose:",

      purposeStatement:
        "The website should work as a trusted digital extension of the temple—helping devotees plan, participate, connect and contribute from anywhere.",

      pointsHeading: "Key Research Points",

      points: [
        "Devotees need <strong>today’s timings and aarti schedule</strong> before planning their temple visit.",

        "Festival visitors require <strong>event dates, programs and practical planning information</strong> in one place.",

        "Remote devotees depend on <strong>Live Darshan</strong> to maintain an <strong>emotional connection with Bappa.</strong>",

        "E-Seva must clearly explain the <strong>ritual, price, duration and remote fulfilment process.</strong>",

        "Visitors need fast access to <strong>directions, restrictions, contact details and darshan information.</strong>",

        "Donors want to understand the Trust’s <strong>social initiatives and their impact</strong> before contributing."
      ],

      remoteControlPoint:
        "Separate informational and transactional platforms can make the experience feel all over the place and less consistent.",

      takeaway:
        "The website needed to transform a large collection of temple information and services into a simple, intention-led devotional experience."
    },

    usp: {
      heading: "USP",

      statement:
        "One trusted digital gateway to experience Dagdusheth Ganpati—plan darshan, participate remotely, book authentic sevas and support meaningful social causes."
    },

    targetAudience: {
      heading: "Target Audience",

      description:
        "The website serves devotees with different levels of familiarity, proximity and intent, from regular Pune visitors to remote worshippers and social-impact donors.",

      groups: [
        {
          title: "Primary Audience",

          description:
            "<strong>Local and recurring devotees</strong> who need quick access to <strong>temple timings, aarti schedules, special-day updates and Tatkal Darshan options.</strong>"
        },
        {
          title: "Secondary Audience",

          description:
            "<strong>First-time and remote devotees</strong> who need festival information, visit-planning support, Live Darshan and the ability to book rituals online."
        },
        {
          title: "Tertiary Audience",

          description:
            "<strong>Cause-led donors and cultural visitors</strong> interested in the temple’s <strong>history, festivals, galleries and social initiatives.</strong>"
        }
      ]
    },

    userProblems: {
      heading: "User Problems Identified",

      description:
        "Devotees need <strong>reliable and quickly accessible information</strong> while planning visits, participating remotely or completing religious and donation-related tasks.",

      items: [
        "Critical Information Is Thrown Across Multiple Sections",
        "Information Can Feel Outdated Or Inconsistent",
        "Visitor Planning Details Not Presented In One Journey",
        "E-Seva & Donations Redirect Users To A New Website",
        "Generic CTAs Do Not Clearly Explain The Next Step"
      ],

      takeaway:
        "The main UX challenge was to bring devotion, information and transactions together without making the website feel overwhelming or commercial."
    },

    personas: {
      heading: "User Personas",

      introduction:
        "Four personas were created to understand how different devotees interact with the temple digitally. Each persona represents a distinct journey: planning a regular visit, attending a major festival, participating remotely or contributing to social impact.",

      items: [
        {
          name: "Vilas Kulkarni",
          type: "Local Regular Devotee",

          image:
            "./assets/images/Portfolio/Uiux/Dagdusheth Website/Persona-1.jpg",

          background:
            "Lives near Pune and regularly plans visits around aarti timings, Sankashti Chaturthi and other important temple days.",

          mainNeed:
            "Know the correct time and reach the temple without uncertainty."
        },
        {
          name: "Pallavi Kumbhar",
          type: "First-Time Festival Pilgrim",

          image:
            "./assets/images/Portfolio/Uiux/Dagdusheth Website/Persona-2.jpg",

          background:
            "Knows Dagdusheth Ganpati by reputation but needs help choosing an event, date and practical travel plan.",

          mainNeed:
            "Plan a crowded festival visit confidently and quickly."
        },
        {
          name: "Nikhil Deshpande",
          type: "Remote Devotee",

          image:
            "./assets/images/Portfolio/Uiux/Dagdusheth Website/Persona-3.jpg",

          background:
            "Lives outside Pune and uses Live Darshan and E-Seva to remain spiritually connected to Bappa.",

          mainNeed:
            "Experience darshan and perform rituals without travelling."
        },
        {
          name: "Sanjay Shah",
          type: "Cause-Led Donor",

          image:
            "./assets/images/Portfolio/Uiux/Dagdusheth Website/Persona-4.jpg",

          background:
            "Wants his religious contribution to support a credible social initiative.",

          mainNeed:
            "Understand the cause and donate through an official channel."
        }
      ]
    },

    keyUserNeeds: {
      heading: "Key User Needs",

      description:
        "The key needs were based on the practical, emotional and transactional expectations of temple website users.",

      items: [
        {
          title: "Visit Confidence",

          description:
            "Clear access to <strong>today’s timings, aarti windows and special-day updates.</strong>"
        },
        {
          title: "Remote Participation",

          description:
            "Access to <strong>Live Darshan and rituals performed on the devotee’s behalf.</strong>"
        },
        {
          title: "Seva Transparency",

          description:
            "Simple explanations of the <strong>ritual process, eligibility, price and duration.</strong>"
        },
        {
          title: "Donation Trust",

          description:
            "Information showing how their <strong>initiatives create real social impact.</strong>"
        },
        {
          title: "Practical Assistance",

          description:
            "Quick access to <strong>directions, restrictions, contact details and darshan rules.</strong>"
        }
      ]
    },

    featurePrioritization: {
      heading: "Feature Prioritization",

      description:
        "Features were prioritized according to task urgency, devotional importance, frequency of use and potential user confusion.",

      groups: [
        {
          level: "high",
          title: "High Priority",

          items: [
            "Today’s Temple Schedule And Aarti Timings",
            "Live Darshan",
            "E-Seva Booking",
            "Festival And Event Information",
            "Visit Planning And Tatkal Darshan"
          ]
        },
        {
          level: "medium",
          title: "Medium Priority",

          items: [
            "Cause-Based Layouts Donations",
            "Social-Initiative Types",
            "Multilingual Content",
            "Contact & Directions"
          ]
        },
        {
          level: "low",
          title: "Low Priority",

          items: [
            "Photo, Video And Audio Galleries",
            "Wallpapers And Downloadable Media",
            "Historical And Archival Content"
          ]
        }
      ],

      takeaway:
        "The main priority was to make high-intent devotional tasks easy to find before users encountered secondary institutional and media content."
    },

    designSystem: {
      variant: "simple",

      heading: "UI Visual System",

      description:
        "The visual system should feel devotional, dignified and contemporary rather than decorative or commercially promotional. The design should use clear typography, culturally appropriate colors, authentic temple imagery, consistent cards, recognizable icons and strong visual hierarchy to guide users through information and transactions.",

      colors: [
        {
          title: "Main",
          values: [
            "#26006F",
            "#FFFFFF"
          ]
        },
        {
          title: "Text",
          values: [
            "#050505",
            "#C7C7CC"
          ]
        },
        {
          title: "Background",
          values: [
            "#FFFFFF"
          ]
        },
        {
          title: "Other",
          values: [
            "#B90008",
            "#27A944",
            "#F99A17",
            "#D74400",
            "#506FF4",
            "#B5B5B5",
            "#5A5A5A"
          ]
        }
      ],

      buttons: [
        {
          label: "Button Static",
          color: "#F99A17"
        },
        {
          label: "Button Hover",
          color: "#D74400"
        }
      ],

      typography: [
        {
          label: "H1",
          sample: "Poppins 33px Bold",
          className: "h1"
        },
        {
          label: "H2",
          sample: "Poppins 18px Bold",
          className: "h2"
        },
        {
          label: "Body Copy",
          sample: "Poppins 18px Bold",
          className: "body"
        }
      ]
    },
finalUIScreens: {
  variant: "live-website",

  heading: "Final UI Screens",

  introduction:
    "This is a Live Project. To see the full Live Website, visit:",

  liveUrl:
    "https://www.dagdushethganpati.com/",

  liveLabel:
    "https://www.dagdushethganpati.com/",

  image: {
        src:
          "./assets/images/Portfolio/Uiux/Dagdusheth Website/Final-UI-Screens.jpg",
    alt:
      "Shrimant Dagdusheth Halwai Ganpati live website homepage design"
  }
}

},

relatedProjectsTitle: "View Other Projects",

relatedProjects: [
  {
    title:
        "UX - OLA Scooty App",

      industry:
        "Mobility / Electric Vehicles",

      url:
        "./portfolio-detail.html?project=ui-ux-ola-scooty-app",

      image: {
        src:
          "./assets/images/Thumbnails/Uiux/OLA.jpg",

        alt:
          "OLA Scooty App UI UX project thumbnail"
      },

      imageLabel:
        "UX - OLA Scooty App"
  },

  {
    title: "La Mom & Miiracle",
    industry: "Healthcare / Fertility Clinic",

    url:
      "./portfolio-detail.html?project=ui-ux-la-mom-miiracle",

    image: {
      src:
        "./assets/images/Thumbnails/Uiux/LMM.jpg",

      alt:
        "La Mom and Miiracle UI UX project thumbnail"
    },

    imageLabel:
      "La Mom & Miiracle UI UX"
  },

  {
    title:
        "UX - Samartha Seva Mandal Sajjangad",

      industry:
        "Religious / Spiritual Organisation",

      url:
        "./portfolio-detail.html?project=ui-ux-ssms-website",

      image: {
        src:
          "./assets/images/Thumbnails/Uiux/SSMS.jpg",

        alt:
          "Samartha Seva Mandal Sajjangad UI UX project thumbnail"
      },

      imageLabel:
        "UX - Samartha Seva Mandal Sajjangad"
    }
  ]
 },

"ui-ux-ssms-website": {
  title: "Shri Samartha Seva Mandal, Sajjangad Website",
  fullTitle: "Shri Samartha Seva Mandal, Sajjangad Website",

  category: "UI/UX",
  categorySlug: "ui%2Fux",

  industry: "Religious / Spiritual Organisation",
  projectType: "UI/UX Website Case Study",

  layout: "ux-case-study",

  role: "UI/UX Designer",

  deliverables:
    "User Research, Website Interface Design, Website Style Guide",

  tools: [
    {
      name: "Figma",
      icon: "./assets/images/software Icons/Figma-logo.svg"
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl: "./index.html?section=portfolio",
    categoryLabel: "UI/UX",
    categoryUrl: "./index.html?section=portfolio&category=ui-ux",
    currentLabel: "Shri Samartha Seva Mandal, Sajjangad Website"
  },

  tabs: [
    {
      id: "about-project",
      label: "About the Project",
      desktopLabel: "About the<br>Project"
    },
    {
      id: "unique-selling-proposition",
      label: "Unique Selling Proposition",
      desktopLabel: "Unique Selling<br>Proposition"
    },
    {
      id: "target-audience",
      label: "Target Audience",
      desktopLabel: "Target<br>Audience"
    },
    {
      id: "user-problems-identified",
      label: "User Problems Identified",
      desktopLabel: "User Problems<br>Identified"
    },
    {
      id: "user-personas",
      label: "User Personas",
      desktopLabel: "User<br>Personas"
    },
    {
      id: "key-user-needs",
      label: "Key User Needs",
      desktopLabel: "Key<br>User Needs"
    },
    {
      id: "feature-prioritization",
      label: "Feature Prioritization",
      desktopLabel: "Feature<br>Prioritization"
    },
    {
      id: "design-system",
      label: "Design System",
      desktopLabel: "Design<br>System"
    },
    {
      id: "final-ui-screens",
      label: "Final UI Screens",
      desktopLabel: "Final<br>UI Screens"
    }
  ],

  hero: {
    desktop: {
      src: "./assets/images/Thumbnails/Uiux/SSMS.jpg",
      alt: "Shri Samartha Seva Mandal Sajjangad website portfolio cover image"
    },
    mobile: {
      src: "./assets/images/Thumbnails/Uiux/Mobile/SSMS.jpg",
      alt: "Shri Samartha Seva Mandal Sajjangad website mobile portfolio cover image"
    }
  },

  summaryBlock: {
    roleHeading: "My Role",
    deliverablesHeading: "Deliverables",
    toolsHeading: "Tools Used"
  },

uxCaseStudy: {
  about: {
    heading: "About the Project",

    primaryText: [
      "This was a <strong>website design project</strong> of the official <strong>Shree Samarth Seva Mandal, Sajjangad</strong> website. The website brings together the Mandal’s <strong>history, life and philosophy of Shri Samarth Ramdas Swami</strong>, information about <strong>sacred places, initiatives, workshops and projects</strong>. It serves both <strong>committed devotees</strong> and people discovering the <strong>tradition for the first time</strong>, while making authoritative information available through one trusted source.",

      "Alongside spiritual and historical content, the website supports practical tasks such as <strong>planning a visit, understanding available facilities, following programmes, exploring publications and study initiatives</strong> and <strong>contacting the Mandal directly</strong>."
    ],

    goalText: [],

    contextHighlight:
      "A key context we considered was that users arrive with different intentions—some are planning a pilgrimage, following programmes or studying the tradition, while others want to connect with or support the institution."
  },

  research: {
    heading: "Research & Context",

    contextText: [
      "The main context was that this is <strong>not only a religious information website</strong>. Users may visit before travelling to Sajjangad, while looking for a nearby programme, when researching Samarth philosophy, or while assessing the Mandal’s activities and legitimacy.",

      "The website therefore needed to <strong>connect spiritual depth, practical pilgrimage information and institutional communication</strong> without treating every visitor as the same kind of devotee."
    ],

    purposeLabel:
      "This gave the website a clear purpose:",

    purposeStatement:
      "It works as an official digital gateway for discovering, visiting, studying and connecting with the living Samarth tradition.",

    pointsHeading:
      "Key Research Points",

    points: [
      "Users need to recognize the website as the <strong>official source of information</strong> immediately.",

      "Pilgrims first look for <strong>stay arrangements, food, office timings and arrival guidance</strong>.",

      "Programme followers search by <strong>date, region and participation opportunity</strong>, rather than only reading history.",

      "Spiritual learners move between <strong>biographies, sacred places and educational initiatives</strong>.",

      "Users need to <strong>understand the Mandal as an institution</strong>, not only as a pilgrimage destination.",

      "Long-form devotional content requires a <strong>clear structure and strong information hierarchy</strong>."
    ],

    remoteControlPoint:
      "Contact and social channels help turn interest into <strong>enquiry, participation, connection and support</strong>.",

    takeaway:
      "The website was planned as one connected knowledge and service hub—bringing together devotion, pilgrimage, learning, programmes and institutional information."
  },

  usp: {
    heading: "USP",

    statement:
      "The Official Digital Gateway To Samarth Ramdas Swami’s Living Tradition—Connecting Devotion, Pilgrimage, Knowledge, Programmes And Institutional Services In One Trusted Platform."
  },

  targetAudience: {
    heading: "Target Audience",

    description:
      "The website is designed for people who want to visit, follow, understand or support the Samarth tradition through an official digital source.",

    groups: [
      {
        title: "Primary Audience",

        description:
          "<strong>Existing devotees and pilgrims</strong> who need information about <strong>Sajjangad, stay, meals, timings, programmes and contact details</strong> before travelling."
      },

      {
        title: "Secondary Audience",

        description:
          "<strong>Programme followers, students and spiritual learners</strong> looking for <strong>festival information, biographies and sacred-place histories</strong>."
      },

      {
        title: "Tertiary Audience",

        description:
          "<strong>Community members, volunteers and supporters</strong> who want to <strong>understand the Mandal’s work</strong> and find a route to <strong>enquire, connect or contribute</strong>."
      }
    ]
  },

  userProblems: {
    heading: "User Problems Identified",

    description:
      "The main challenge was to <strong>organize a large heritage and institutional ecosystem</strong> without making essential information difficult to locate.",

    items: [
      "Uncertainty Around Stay, Food & Arrival Arrangements",

      "Difficulty Finding Programme Dates & Regions Quickly",

      "Information Spread Across Multiple Sections",

      "Need To Verify Identity & Organisation Legitimacy",

      "No Journey For Enquiry, Participation Or Support"
    ],

    takeaway:
      "The Main UX Challenge Was To Turn A Deep Spiritual And Institutional Ecosystem Into A Clear, Trustworthy And Purposeful Digital Journey."
  },

  personas: {
    heading: "User Personas",

    introduction:
      "I created <strong>four personas</strong> to understand how <strong>people may use the website with completely different intentions</strong>. Each person represents a distinct journey: <strong>planning a pilgrimage, following programmes, studying the tradition or supporting the institution</strong>.",

    items: [
      {
        name: "Madhav Kulkarni",
        type: "Pilgrimage Planner",

        image:
          "./assets/images/Portfolio/Uiux/SSMS Website/Persona-1.jpg",

        background:
          "Travels to important pilgrimage destinations with his spouse or family and prefers to confirm practical arrangements before leaving.",

        mainNeed:
          "Reach Sajjangad confidently with clear information about <strong>stay, meals, office timings and arrival procedures</strong>."
      },

      {
        name: "Radhika Ranade",
        type: "Programme Follower",

        image:
          "./assets/images/Portfolio/Uiux/SSMS Website/Persona-2.jpg",

        background:
          "Grew up around Samarth devotion and follows the Mandal’s touring programmes through her mobile phone and local devotional network.",

        mainNeed:
          "Quickly find <strong>programme dates, regions, routes and participation details</strong>."
      },

      {
        name: "Ashwini Joshi",
        type: "Spiritual Learner",

        image:
          "./assets/images/Portfolio/Uiux/SSMS Website/Persona-3.jpg",

        background:
          "A postgraduate student interested in Samarth Ramdas Swami, Dasbodh, spiritual history and saint traditions.",

        mainNeed:
          "Access authoritative <strong>biographies, place histories, publications, libraries and study-related resources</strong>."
      },

      {
        name: "Nikhil Rao",
        type: "Institutional Supporter",

        image:
          "./assets/images/Portfolio/Uiux/SSMS Website/Persona-4.jpg",

        background:
          "An IT professional and community volunteer connected to the tradition through family and devotional networks.",

        mainNeed:
          "Understand the Mandal’s initiatives and find a clear route to <strong>enquire, connect or support</strong>."
      }
    ]
  },

  keyUserNeeds: {
    heading: "Key User Needs",

    description:
      "The primary user needs were based on the different ways people engage with the Samarth tradition and the Mandal.",

    items: [
      {
        title: "Visit Confidence",

        description:
          "Clear information about <strong>stay, meals, timings</strong> and where to go <strong>after arrival</strong>."
      },

      {
        title: "Programme Discovery",

        description:
          "Access to <strong>festival dates, touring regions, activity details and participation information</strong>."
      },

      {
        title: "Authoritative Spiritual Knowledge",

        description:
          "Reliable biographies and historical information about <strong>Samarth Ramdas Swami, Shridhar Swami and associated sacred places</strong>."
      },

      {
        title: "Study And Resource Access",

        description:
          "Visibility of <strong>publications, Dasbodh study initiatives, libraries, educational activities and cultural resources</strong>."
      },

      {
        title: "Institutional Trust & Connection",

        description:
          "Clear official identity, organisational history, contact channels and ways to <strong>enquire, participate or offer support</strong>."
      }
    ]
  },

  featurePrioritization: {
    heading: "Feature Prioritization",

    description:
      "Features were prioritized according to the urgency of the user’s task and the role each feature plays in building trust and supporting meaningful engagement.",

    groups: [
      {
        title: "High Priority",
        level: "high",

        items: [
          "Visit Information And Accommodation",
          "Programme Dates And Regional Details",
          "Biographies And Sacred-Place Information",
          "Festivals, Workshops And Projects Information",
          "Contact, Enquiry And Support Routes"
        ]
      },

      {
        title: "Medium Priority",
        level: "medium",

        items: [
          "Detailed Institutional History",
          "Programme Participation Information",
          "Social Media & Video Channels"
        ]
      },

      {
        title: "Low Priority",
        level: "low",

        items: [
          "Legal And Policy Information",
          "Secondary Archives And Supporting Content"
        ]
      }
    ],

    takeaway:
      "The Main Priority Was To Keep Urgent Pilgrimage And Programme Tasks Easy To Find While Preserving The Depth Of The Mandal’s Spiritual And Institutional Legacy."
  },

  designSystem: {
    heading: "UI Visual System",

    description:
      "The visual system should feel <strong>devotional, dignified and contemporary</strong> rather than decorative or commercially promotional. The design should use <strong>clear typography, culturally appropriate colours, authentic temple imagery, consistent cards, recognizable icons and strong visual hierarchy</strong> to guide users through information and transactions.",

    colors: [
      {
        title: "Main",

        values: [
          "#E8DBB2",
          "#FFFFFF"
        ]
      },

      {
        title: "Text",

        values: [
          "#000000",
          "#C8C5CC"
        ]
      },

      {
        title: "Background",

        values: [
          "#FFFFFF"
        ]
      },

      {
        title: "Other",

        values: [
          "#0B6D9C",
          "#456B4C",
          "#6A382F",
          "#A41458",
          "#EDC74D"
        ]
      }
    ],

    buttons: [
      {
        label: "Learn More",

        color:
          "linear-gradient(135deg, #F3D46A 0%, #F5AD4D 100%)"
      },

      {
        label: "Plan a Visit",

        color:
          "linear-gradient(135deg, #F2D15F 0%, #EFBF4D 100%)"
      },

      {
        label: "Become a Volunteer",

        color:
          "linear-gradient(135deg, #FFB04A 0%, #FF672D 100%)"
      }
    ],

    typography: [
      {
        label: "H1",
        sample: "Mukta 33px Bold",
        className: "h1"
      },

      {
        label: "H2",
        sample: "Mukta 18px Bold",
        className: "h2"
      },

      {
        label: "Body Copy",
        sample: "Mukta 18px Bold",
        className: "body"
      }
    ]
  },

  finalUIScreens: {
    variant: "live-website",

    heading: "Final UI Screens",

    introduction:
      "To see the full Live Website, visit:",

    liveUrl:
      "https://ramdasswami.com/",

    liveLabel:
      "https://ramdasswami.com/",

    image: {
      src:
        "./assets/images/Portfolio/Uiux/SSMS Website/Final-UI-Screens.jpg",

      alt:
        "Shri Samartha Seva Mandal Sajjangad website final UI screen"
    }
  }
},

  relatedProjectsTitle: "View Other Projects",

  relatedProjects: [
    {
      title: "UX - OLA Scooty App",
      industry: "Mobility / Electric Vehicles",
      url: "./portfolio-detail.html?project=ui-ux-ola-scooty-app",
      image: {
        src: "./assets/images/Thumbnails/Uiux/OLA.jpg",
        alt: "OLA Scooty App UI UX project thumbnail"
      },
      imageLabel: "UX - OLA Scooty App"
    },
    {
      title: "UX - Shrimant Dagdusheth Halwai Ganpati Website",
      industry: "Religious / Devotional Organisation",
      url: "./portfolio-detail.html?project=ui-ux-dagdusheth-website",
      image: {
        src: "./assets/images/Thumbnails/Uiux/DG.jpg",
        alt: "Shrimant Dagdusheth Halwai Ganpati Website UI UX project thumbnail"
      },
      imageLabel: "UX - Dagdusheth Ganpati Website"
    },
    {
      title: "UX - La Mom & Miiracle",
      industry: "Healthcare / Fertility Clinic",
      url: "./portfolio-detail.html?project=ui-ux-la-mom-miiracle",
      image: {
        src: "./assets/images/Thumbnails/Uiux/LMM.jpg",
        alt: "La Mom and Miiracle UI UX project thumbnail"
      },
      imageLabel: "UX - La Mom & Miiracle"
    }
  ]
},
	
"ui-ux-la-mom-miiracle": {
  title: "UX - La Mom & Miiracle Website",
  fullTitle: "La Mom & Miiracle Website Redesign",

  category: "UI/UX",
  categorySlug: "ui%2Fux",

  industry: "Healthcare / Fertility Clinic",
  projectType: "UI/UX Website Case Study",

  layout: "ux-case-study",

  role: "UI/UX Designer",

  deliverables:
    "User Research, Website Interface Design, Website Style Guide",

  tools: [
    {
      name: "Figma",
      icon: "./assets/images/software Icons/Figma-logo.svg"
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl:
      "./index.html?section=portfolio",

    categoryLabel: "UI/UX",
    categoryUrl:
      "./index.html?section=portfolio&category=ui%2Fux",

    currentLabel:
      "UX - La Mom & Miiracle Website"
  },

  tabs: [
    {
      id: "about-project",
      label: "About the Project",
      desktopLabel: "About the<br>Project"
    },
    {
      id: "unique-selling-proposition",
      label: "Unique Selling Proposition",
      desktopLabel: "Unique Selling<br>Proposition"
    },
    {
      id: "target-audience",
      label: "Target Audience",
      desktopLabel: "Target<br>Audience"
    },
    {
      id: "user-problems-identified",
      label: "User Problems Identified",
      desktopLabel: "User Problems<br>Identified"
    },
    {
      id: "user-personas",
      label: "User Personas",
      desktopLabel: "User<br>Personas"
    },
    {
      id: "key-user-needs",
      label: "Key User Needs",
      desktopLabel: "Key<br>User Needs"
    },
    {
      id: "feature-prioritization",
      label: "Feature Prioritization",
      desktopLabel: "Feature<br>Prioritization"
    },
    {
      id: "design-system",
      label: "Design System",
      desktopLabel: "Design<br>System"
    },
    {
      id: "final-ui-screens",
      label: "Final UI Screens",
      desktopLabel: "Final<br>UI Screens"
    }
  ],

  hero: {
    desktop: {
      src:
        "./assets/images/Thumbnails/Uiux/LMM.jpg",

      alt:
        "La Mom and Miiracle website UI UX portfolio cover"
    },

    mobile: {
      src:
        "./assets/images/Thumbnails/Uiux/LMM.jpg",

      alt:
        "La Mom and Miiracle website mobile UI UX portfolio cover"
    }
  },

  uxCaseStudy: {
    about: {
      heading: "About the Project",

      primaryText: [
        "This project focused on analyzing and restructuring the <strong>La Mom & Miiracle website</strong>, a Pune-based fertility and pregnancy-care clinic. The website supports users exploring <strong>IVF, infertility treatment, PCOS care, fertility counselling, pregnancy monitoring and high-risk pregnancy management</strong> under specialist-led care.",

        "The goal was to make the experience feel <strong>clearer, more reassuring and action-oriented</strong> for users who may already feel anxious or overwhelmed. The redesigned journey helps patients identify the right service, <strong>understand their next steps, assess the clinic’s credibility, select a convenient branch and move confidently towards a consultation</strong>."
      ],

      goalText: [],

      contextHighlight:
        "A key context I considered was that most users would visit the website during an emotionally sensitive healthcare decision and would need reassurance, clarity and trust before they were ready to book a consultation."
    },

    research: {
      heading: "Research & Context",

      contextText: [
        "The website serves users at <strong>different stages of the reproductive-health journey</strong>—from investigating fertility concerns and PCOS to considering IVF or managing a high-risk pregnancy.",

        "Although the clinic provides a <strong>broad range of services</strong>, users need <strong>clearer pathways based on their immediate concern instead of navigating one general information journey</strong>."
      ],

      purposeLabel:
        "This gave the website a clear purpose:",

      purposeStatement:
        "It works as a patient decision-support platform that helps users understand their concern, find relevant care, build trust in the doctor and take the next step.",

      pointsHeading:
        "Key Research Points",

      points: [
        "Fertility and pregnancy visitors arrive feeling <strong>anxious, uncertain and information-heavy</strong>.",

        "Users enter with different needs: <strong>IVF, PCOS, male infertility and high-risk pregnancy care</strong>.",

        "The doctor’s <strong>qualifications, experience and approach</strong> are factors in building patient trust.",

        "Multiple services are available, but <strong>users need clearer paths for each treatment</strong>.",

        "IVF users want clarity regarding <strong>candidacy, treatment steps, preparation and possible costs</strong>.",

        "<strong>Branch location and timings matter</strong> because treatment may require frequent clinic visits."
      ],

      remoteControlPoint:
        "The navigation relies on scrolling, “Learn More” links and manual phone or email contact.",

      takeaway:
        "The website needed to move beyond being a general clinic brochure and become a clear, reassuring journey from concern to consultation."
    },

    usp: {
      heading: "USP",

      statement:
        "A Specialist-Led Fertility And Pregnancy-Care Platform That Combines IVF Expertise, Personalised Guidance And Continued Support From Preconception Through Pregnancy And Delivery."
    },

    targetAudience: {
      heading: "Target Audience",

      description:
        "The website is designed for <strong>women, couples and families seeking reliable fertility, reproductive-health and pregnancy care in Pune</strong>.",

      groups: [
        {
          title: "Primary Audience",

          description:
            "Women and couples <strong>actively exploring infertility diagnosis, IVF, IUI, PCOS treatment or assisted-reproduction options</strong>."
        },
        {
          title: "Secondary Audience",

          description:
            "Pregnant women seeking <strong>routine monitoring, high-risk pregnancy management, delivery care or post-IVF pregnancy support</strong>."
        },
        {
          title: "Tertiary Audience",

          description:
            "Partners and family members who help evaluate <strong>treatments, finances, clinic credibility, location and long-term care decisions</strong>."
        }
      ]
    },

    userProblems: {
      heading: "User Problems Identified",

      description:
        "Users need <strong>clear and reassuring information</strong> while making sensitive healthcare decisions.",

      items: [
        "Unclear Start For Fertility & Pregnancy Concerns",

        "Treatments & Services Grouped Without Clear Paths",

        "No Visibility Of Appointment Booking & Immediate Next Steps",

        "No Clarity Around Costs, Financing & Preparation",

        "Trust & Successes Need Stronger Supporting Evidence"
      ],

      takeaway:
        "The Main UX Challenge Was To Transform A Content-Heavy Clinic Website Into A Simple, Trustworthy And Action-Oriented Patient Journey."
    },

    personas: {
      heading: "User Personas",

      introduction:
        "We created <strong>four personas</strong> to understand how different users may approach the website. Each shows a distinct journey—<strong>first-time IVF research, PCOS-led fertility concerns, high-risk pregnancy monitoring and male-factor infertility</strong>. These personas helped define the <strong>information, trust and actions for different decision stages</strong>.",

      items: [
        {
          name: "Aditi Kulkarni",
          type: "First-Time IVF Seeker",

          image:
            "./assets/images/Portfolio/Uiux/LMM Website/Persona-1.jpg",

          background:
            "Has been trying to conceive and may have <strong>experienced unexplained infertility or an unsuccessful IUI cycle.</strong>",

          mainNeed:
            "Understand <strong>IVF candidacy, treatment stages and costs before confidently booking her first consultation.</strong>"
        },
        {
          name: "Sneha Joshi",
          type: "PCOS-Led Fertility Seeker",

          image:
            "./assets/images/Portfolio/Uiux/LMM Website/Persona-2.jpg",

          background:
            "A working professional <strong>experiencing irregular cycles and concerned about how PCOS may affect her fertility.</strong>",

          mainNeed:
            "Understand the <strong>connection between PCOS and fertility and find a clear treatment pathway.</strong>"
        },
        {
          name: "Meera Deshpande",
          type: "High-Risk Pregnancy Patient",

          image:
            "./assets/images/Portfolio/Uiux/LMM Website/Persona-3.jpg",

          background:
            "Already pregnant and <strong>concerned about gestational diabetes, hypertension, pre-eclampsia, twins or pregnancy after IVF.</strong>",

          mainNeed:
            "Secure <strong>specialist monitoring</strong> and choose the most convenient <strong>clinic for pregnancy care.</strong>"
        },
        {
          name: "Rohan Patil",
          type: "Male-Factor Infertility",

          image:
            "./assets/images/Portfolio/Uiux/LMM Website/Persona-4.jpg",

          background:
            "Part of a couple <strong>experiencing difficulty conceiving and researching possible sperm-related fertility concerns.</strong>",

          mainNeed:
            "Confirm that male infertility is <strong>treated discreetly</strong> and understand the <strong>available tests and procedures.</strong>"
        }
      ]
    },

    keyUserNeeds: {
      heading: "Key User Needs",

      description:
        "The main user needs were based on the emotional, informational and practical challenges involved in seeking fertility and pregnancy care.",

      items: [
        {
          title: "Treatment Clarity",

          description:
            "Simple explanations of available treatments, who they are suitable for and what each process involves."
        },
        {
          title: "Specialist Trust",

          description:
            "Clear visibility of the doctor’s qualifications, experience, approach and supporting evidence behind clinic claims."
        },
        {
          title: "Emotional Reassurance",

          description:
            "Compassionate language and guidance that make users feel supported rather than judged, pressured or overwhelmed."
        },
        {
          title: "Appointment Confidence",

          description:
            "A straightforward process for choosing a concern, selecting a clinic and requesting a consultation."
        },
        {
          title: "Cost And Preparation Visibility",

          description:
            "Early guidance regarding possible expenses, payment support and what patients should bring to their first visit."
        }
      ]
    },

    featurePrioritization: {
      heading: "Feature Prioritization",

      description:
        "Features were prioritised according to what users need most to move from initial concern to informed consultation without becoming confused.",

      groups: [
        {
          level: "high",
          title: "High Priority",

          items: [
            "Patient-Intent Selector",
            "Dedicated Treatment And Service Pages",
            "Consultation Booking And Callback Flow",
            "Doctor Credentials, Testimonials And Trust Evidence",
            "Branch Selection, Timings And Direct Contact"
          ]
        },
        {
          level: "medium",
          title: "Medium Priority",

          items: [
            "Searchable FAQs And Preparation Guides",
            "Cost And Financing Information",
            "Patient Stories And Clinic-Facility Content"
          ]
        },
        {
          level: "low",
          title: "Low Priority",

          items: [
            "Advanced Media-Gallery Filtering",
            "Blog Categories And Content Discovery",
            "Non-Essential Social Or Community Features"
          ]
        }
      ],

      takeaway:
        "The Main Priority Was To Make Relevant Care, Trust Information And Consultation Actions Easy To Find Before The User Feels Confused Or Emotionally Overwhelmed."
    },

    designSystem: {
      heading: "UI Visual System",

      description:
        "The visual system was planned to make the website feel <strong>warm, calm and medically trustworthy</strong>. The focus was on a <strong>soft colour palette, reassuring photography, generous spacing, accessible contrast, readable typography, consistent information cards and highly visible consultation actions</strong>.",

      colors: [
        {
          title: "Main",

          values: [
            "#FFFFFF",
            "#F5F0FF"
          ]
        },
        {
          title: "Text",

          values: [
            "#333333",
            "#777777"
          ]
        }
      ],

      buttons: [
        {
          label: "Button",
          color: "#FFCC00"
        }
      ],

      typography: [
        {
          label: "H1",
          sample: "Mukta 33px Bold",
          className: "h1"
        },
        {
          label: "H2",
          sample: "Mukta 18px Bold",
          className: "h2"
        },
        {
          label: "Body Copy",
          sample: "Mukta 18px Bold",
          className: "body"
        }
      ]
    },

    finalUIScreens: {
      variant: "live-website",

      heading: "Final UI Screens",

      introduction:
        "To see the full Live Website, visit:",

      liveUrl:
        "https://lmmivf.com/",

      liveLabel:
        "https://lmmivf.com/",

      image: {
        src:
          "./assets/images/Portfolio/Uiux/LMM Website/Final-UI-Screens.jpg",

        alt:
          "La Mom and Miiracle fertility clinic website final UI screen"
      }
    }
  },

  relatedProjectsTitle:
    "View Other Projects",

  relatedProjects: [
    {
      title:
        "UX - Shrimant Dagdusheth Halwai Ganpati Website",

      industry:
        "Religious / Devotional Organisation",

      url:
        "./portfolio-detail.html?project=ui-ux-dagdusheth-website",

      image: {
        src:
          "./assets/images/Thumbnails/Uiux/DG.jpg",

        alt:
          "Dagdusheth Ganpati UI UX project thumbnail"
      },

      imageLabel:
        "UX - Dagdusheth Ganpati Website"
    },
    {
      title:
        "UX - Samartha Seva Mandal Sajjangad",

      industry:
        "Religious / Spiritual Organisation",

      url:
        "./portfolio-detail.html?project=ui-ux-ssms-website",

      image: {
        src:
          "./assets/images/Thumbnails/Uiux/SSMS.jpg",

        alt:
          "Samartha Seva Mandal Sajjangad UI UX project thumbnail"
      },

      imageLabel:
        "UX - Samartha Seva Mandal Sajjangad"
    },
    {
      title:
        "UX - OLA Scooty App",

      industry:
        "Mobility / Electric Vehicles",

      url:
        "./portfolio-detail.html?project=ui-ux-ola-scooty-app",

      image: {
        src:
          "./assets/images/Thumbnails/Uiux/OLA.jpg",

        alt:
          "OLA Scooty App UI UX project thumbnail"
      },

      imageLabel:
        "UX - OLA Scooty App"
    }
  ]
},

"print-design-dagdusheth-ganpati": {
  title: "Dagdusheth Ganpati",
  fullTitle: "Shrimant Dagdusheth Halwai Ganpati",

  category: "Print Design",
  categorySlug: "print-design",

  industry: "Religious / Devotional Organisation",
  projectType: "Print Design",

  role: "Print Designer",
  deliverables: "Hoardings, Magazine & Booklet",

  tools: [
    {
      name: "Adobe Illustrator",
      icon:
        "./assets/images/software Icons/Adobe_Illustrator_CC_icon.svg"
    },
    {
      name: "Adobe Photoshop",
      icon:
        "./assets/images/software Icons/Adobe_Photoshop_CC_icon.svg"
    },
    {
      name: "Corel Draw",
      icon:
        "./assets/images/software Icons/corel-draw.png"
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl:
      "./index.html?section=portfolio",

    categoryLabel: "Print Design",
    categoryUrl:
      "./index.html?section=portfolio&category=print-design",

    currentLabel:
      "Dagdusheth Ganpati"
  },

  tabs: [
    {
      id: "project-info",
      label: "Project Info"
    },
    {
      id: "design-thinking",
      label: "Design Thinking"
    },
    {
      id: "visual-system",
      label: "Visual System"
    },
    {
      id: "festival-hoardings",
      label: "Festival Hoardings"
    },
    {
      id: "hirabagh-rugna-seva-booth",
      label: "Rugna Seva Booth"
    },
    {
      id: "dagdusheth-ahwal",
      label: "Dagdusheth Ahwal"
    },
    {
      id: "social-initiatives-booklet",
      label: "Social Initiatives Booklet"
    }
  ],

  hero: {
    desktop: {
      src:
        "./assets/images/Thumbnails/Print Design/DG.jpg",

      alt:
        "Shrimant Dagdusheth Halwai Ganpati Print Design cover image"
    },

    mobile: {
      src:
        "./assets/images/Thumbnails/Print Design/Mobile/DG.jpg",

      alt:
        "Shrimant Dagdusheth Halwai Ganpati mobile Print Design cover image"
    }
  },

  projectOverview: {
    title:
      "Shrimant Dagdusheth Halwai Ganpati",

    sections: [
      {
        heading:
          "Who is the client?",

        body:
          "Shrimant Dagdusheth Halwai Ganpati – the most endearing deity to the devotees. Shrimant Dagdusheth Halwai Ganpati is the epitome of pride and honor to the city of Pune. Devotees from every part of India and the world come here to pray to Lord Ganesha every year. Today, Shrimant Dagdusheth Halwai Temple is not only one of the most highly revered places of worship in India but an institution that is actively engaged in social welfare and cultural development through Shrimant Dagdusheth Halwai Sarvajanik Ganpati Trust. Every year, the Ganpati festival was celebrated with deep faith and enthusiasm, not only by Dagdusheth’s family but the entire neighborhood."
      }
    ]
  },

  summaryBlock: {
    roleHeading: "My Role",
    deliverablesHeading: "Deliverables",
    toolsHeading: "Tools Used"
  },

  designThinking: {
    heading:
      "Design Thinking",

    points: [
      "This client was a unique case because their needs work across various formats, occasions & daily requirements.",

      "With a very high volume of social media posts going out every day, the biggest challenge was to bring structure to the chaos.",

      "The demand was not only about designing individual posts, but about creating a system that could manage speed, variety & consistency at the same time.",

      "The goal was to make every post feel different enough to stay engaging, but still connected enough to look like it belonged to one larger visual family.",

      "Overall, we focused on creating a visual system that could handle scale, repetition & daily updates without losing clarity."
    ],

    pointsMobile: [
      "This client was a unique case because their requirements worked across different formats, occasions and daily communication needs.",

      "The biggest challenge was to bring structure, speed and consistency to a large volume of communication.",

      "The goal was to create a visual system that could handle scale, repetition and frequent updates without losing clarity."
    ]
  },

  visualSystem: {
    heading:
      "Visual System",

    points: [
      "The design language was challenging because the brand needed to publish multiple posts every day while still maintaining a consistent visual identity.",

      "Each post had to feel fresh, but also connected to the larger Dagdusheth communication style.",

      "Colors were kept more flexible instead of fixed brand colors. A palette inspired by the Paithani saree was chosen because it was contextually appropriate for the brand.",

      "For major occasions, a separate design language was created to make those festivals feel more grand, special & emotionally elevated.",

      "The final system balanced daily consistency with festive distinction, making the brand feel organized, devotional & visually rich."
    ],

    pointsMobile: [
      "The design language needed to support frequent communication while maintaining a consistent visual identity.",

      "Colors were kept flexible, using a palette inspired by the Paithani saree because it felt culturally appropriate for the brand.",

      "The final system balanced daily consistency with festive distinction."
    ]
  },

  gallerySections: [
    {
      id:
        "festival-hoardings",

      title:
        "Festival Hoardings",

      groups: [
        {
          key:
            "printDGFestivalHoardings",

          title:
            "",

          previewGroupName:
            "Festival Hoardings",

          items: [
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-1-A.jpg",

              alt:
                "Dagdusheth Ganpati festival hoarding design 01"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-1-B.jpg",

              alt:
                "Dagdusheth Ganpati festival hoarding design 02"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-1-C.jpg",

              alt:
                "Dagdusheth Ganpati festival hoarding design 03"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-1-D.jpg",

              alt:
                "Dagdusheth Ganpati festival hoarding design 04"
            }
          ]
        }
      ]
    },

    {
      id:
        "hirabagh-rugna-seva-booth",

      title:
        "Hirabagh Koti Rugna Seva Booth — 109 ft × 25.5 ft",

      groups: [
        {
          key:
            "printDGRugnaSevaBooth",

          title:
            "",

          previewGroupName:
            "Hirabagh Koti Rugna Seva Booth",

          items: [
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-2-A.jpg",

              alt:
                "Hirabagh Koti Rugna Seva Booth design"
            }
          ]
        }
      ]
    },

    {
      id:
        "dagdusheth-ahwal",

      title:
        "Dagdusheth Ahwal — Magazine, A4 Horizontal",

      groups: [
        {
          key:
            "printDGAhwal",

          title:
            "",

          previewGroupName:
            "Dagdusheth Ahwal Magazine",

          items: [
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-A.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 01"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-B.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 02"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-C.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 03"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-D.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 04"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-E.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 05"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-F.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 06"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-G.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 07"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-H.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 08"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-I.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 09"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-J.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 10"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-K.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 11"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-L.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 12"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-M.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 13"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-N.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 14"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-O.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 15"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-P.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 16"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-Q.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 17"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-R.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 18"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-3-S.jpg",

              alt:
                "Dagdusheth Ahwal magazine design 19"
            }
          ]
        }
      ]
    },

    {
      id:
        "social-initiatives-booklet",

      title:
        "Social Initiatives Booklet",

      groups: [
        {
          key:
            "printDGSocialInitiativesBooklet",

          title:
            "",

          previewGroupName:
            "Social Initiatives Booklet",

          items: [
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-4-A.jpg",

              alt:
                "Dagdusheth Social Initiatives Booklet design 01"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-4-B.jpg",

              alt:
                "Dagdusheth Social Initiatives Booklet design 02"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-4-C.jpg",

              alt:
                "Dagdusheth Social Initiatives Booklet design 03"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-4-D.jpg",

              alt:
                "Dagdusheth Social Initiatives Booklet design 04"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-4-E.jpg",

              alt:
                "Dagdusheth Social Initiatives Booklet design 05"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-4-F.jpg",

              alt:
                "Dagdusheth Social Initiatives Booklet design 06"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-4-G.jpg",

              alt:
                "Dagdusheth Social Initiatives Booklet design 07"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-4-H.jpg",

              alt:
                "Dagdusheth Social Initiatives Booklet design 08"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-4-I.jpg",

              alt:
                "Dagdusheth Social Initiatives Booklet design 09"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-4-J.jpg",

              alt:
                "Dagdusheth Social Initiatives Booklet design 10"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-4-K.jpg",

              alt:
                "Dagdusheth Social Initiatives Booklet design 11"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/DG/Design-4-L.jpg",

              alt:
                "Dagdusheth Social Initiatives Booklet design 12"
            }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle:
    "View Other Projects",

  relatedProjects: [
    {
      title:
        "Kumbh 2027 - Book Jacket",

      industry:
        "Publishing / Spiritual Event",

      url:
        "./portfolio-detail.html?project=print-design-kumbh-2027",

      image: {
        src:
          "./assets/images/Thumbnails/Print Design/Kumbh 2027.jpg",

        alt:
          "Kumbh 2027 Book Jacket thumbnail"
      },

      imageLabel:
        "Kumbh 2027 - Book Jacket"
    },

    {
      title:
        "Autobiography Book Cover",

      industry:
        "Publishing / Biography",

      url:
        "./portfolio-detail.html?project=print-design-autobiography-book-cover",

      image: {
        src:
          "./assets/images/Thumbnails/Print Design/Mahesh Bhau.jpg",

        alt:
          "Autobiography Book Cover thumbnail"
      },

      imageLabel:
        "Autobiography Book Cover"
    },

    {
      title:
        "Core Essence - Tarot Cards",

      industry:
        "Wellness / Tarot",

      url:
        "./portfolio-detail.html?project=print-design-core-essence-tarot-cards",

      image: {
        src:
          "./assets/images/Thumbnails/Print Design/Core essence.jpg",

        alt:
          "Core Essence Tarot Cards thumbnail"
      },

      imageLabel:
        "Core Essence - Tarot Cards"
    }
  ]
},
	
"print-design-kumbh-2027": {
  title: "Kumbh 2027",
  fullTitle: "Kumbh 2027",

  category: "Print Design",
  categorySlug: "print-design",

  industry: "Publishing / Spiritual Event",
  projectType: "Print Design",

  role: "Print Designer",
  deliverables: "Book Jacket, Inner Page Template",

  tools: [
    {
      name: "Adobe Illustrator",
      icon:
        "./assets/images/software Icons/Adobe_Illustrator_CC_icon.svg"
    },
    {
      name: "Adobe Photoshop",
      icon:
        "./assets/images/software Icons/Adobe_Photoshop_CC_icon.svg"
    },
    {
      name: "Corel Draw",
      icon:
        "./assets/images/software Icons/corel-draw.png"
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl:
      "./index.html?section=portfolio",

    categoryLabel: "Print Design",
    categoryUrl:
      "./index.html?section=portfolio&category=print-design",

    currentLabel:
      "Kumbh 2027"
  },

  tabs: [
    {
      id: "project-info",
      label: "Project Info"
    },
    {
      id: "design-thinking",
      label: "Design Thinking"
    },
    {
      id: "visual-system",
      label: "Visual System"
    },
    {
      id: "book-jacket",
      label: "Book Jacket"
    },
    {
      id: "inner-page-template",
      label: "Inner Page Template"
    }
  ],

  hero: {
    desktop: {
      src:
        "./assets/images/Thumbnails/Print Design/Kumbh 2027.jpg",

      alt:
        "Kumbh 2027 Book Jacket Print Design cover image"
    },

    mobile: {
      src:
        "./assets/images/Thumbnails/Print Design/Mobile/Kumbh 2027.jpg",

      alt:
        "Kumbh 2027 Book Jacket mobile Print Design cover image"
    }
  },

  projectOverview: {
    title:
      "Kumbh 2027 - Book Jacket",

    sections: [
      {
        heading:
          "About the Project",

        body:
          "This was a pitching project for Kumbh 2027, created for the authorities of Trimbakeshwar Temple. The project carried a much larger context, as the Kumbh Mela is one of India’s most significant spiritual gatherings, bringing together faith, culture, administration & mass public participation on an extraordinary scale. Because of the sheer size and importance of the festival, the planning and pitching process had to begin well in advance. The objective was to present a thoughtful and organized approach that could support an event of this magnitude — one that demanded not only creative thinking, but also sensitivity towards tradition, crowd experience & the spiritual importance of Trimbakeshwar."
      }
    ]
  },

  summaryBlock: {
    roleHeading: "My Role",
    deliverablesHeading: "Deliverables",
    toolsHeading: "Tools Used"
  },

  designThinking: {
    heading:
      "Design Thinking",

    points: [
      "The overall design language was planned to feel simple, elegant, monochrome & spacious.",

      "The inspiration came from a coffee-table book, where every element has room to breathe.",

      "The aim was to create a design that felt premium & calm, rather than crowded or overly decorative.",

      "A minimal approach was chosen so the subject could feel more important & visually dignified."
    ],

    pointsMobile: [
      "The overall design language was planned to feel simple, elegant, monochrome and spacious.",

      "The inspiration came from a coffee-table book, where every element has room to breathe.",

      "A minimal approach allowed the subject to feel more important, calm and visually dignified."
    ]
  },

  visualSystem: {
    heading:
      "Visual System",

    points: [
      "The typography, colour scheme & imagery were all selected to stay relevant to the subject.",

      "AI-generated images were used to create visuals that matched the concept.",

      "The execution followed a contrasting monochrome style, giving the design a strong yet elegant appearance.",

      "The layouts were kept spacious so the cover could feel more premium, composed & editorial."
    ],

    pointsMobile: [
      "The typography, colour scheme and imagery were selected to remain relevant to the subject.",

      "AI-generated images were used to create visuals that matched the concept.",

      "A contrasting monochrome style and spacious layouts gave the design a premium editorial quality."
    ]
  },

  gallerySections: [
    {
      id:
        "book-jacket",

      title:
        "Book Jacket",

      groups: [
        {
          key:
            "printKumbhBookJacket",

          title:
            "",

          previewGroupName:
            "Kumbh 2027 Book Jacket",

          items: [
            {
              src:
                "./assets/images/Portfolio/Print Design/Kumbh 2027/Design-1-A.jpg",

              alt:
                "Kumbh 2027 Book Jacket design"
            }
          ]
        }
      ]
    },

    {
      id:
        "inner-page-template",

      title:
        "Inner Page Template",

      groups: [
        {
          key:
            "printKumbhInnerPageTemplate",

          title:
            "",

          previewGroupName:
            "Kumbh 2027 Inner Page Template",

          items: [
            {
              src:
                "./assets/images/Portfolio/Print Design/Kumbh 2027/Design-2-A.jpg",

              alt:
                "Kumbh 2027 inner page template design"
            }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle:
    "View Other Projects",

  relatedProjects: [
    {
      title:
        "Dagdusheth Ganpati",

      industry:
        "Religious / Devotional Organisation",

      url:
        "./portfolio-detail.html?project=print-design-dagdusheth-ganpati",

      image: {
        src:
          "./assets/images/Thumbnails/Print Design/DG.jpg",

        alt:
          "Dagdusheth Ganpati Print Design thumbnail"
      },

      imageLabel:
        "Dagdusheth Ganpati"
    },

    {
      title:
        "Autobiography Book Cover",

      industry:
        "Publishing / Biography",

      url:
        "./portfolio-detail.html?project=print-design-autobiography-book-cover",

      image: {
        src:
          "./assets/images/Thumbnails/Print Design/Mahesh Bhau.jpg",

        alt:
          "Autobiography Book Cover thumbnail"
      },

      imageLabel:
        "Autobiography Book Cover"
    },

    {
      title:
        "Core Essence - Tarot Cards",

      industry:
        "Wellness / Tarot",

      url:
        "./portfolio-detail.html?project=print-design-core-essence-tarot-cards",

      image: {
        src:
          "./assets/images/Thumbnails/Print Design/Core essence.jpg",

        alt:
          "Core Essence Tarot Cards thumbnail"
      },

      imageLabel:
        "Core Essence - Tarot Cards"
    }
  ]
},


"print-design-autobiography-book-cover": {
  title: "Autobiography Book Cover",
  fullTitle: "Autobiography Book Cover",

  category: "Print Design",
  categorySlug: "print-design",

  industry: "Publishing / Biography",
  projectType: "Print Design",

  role: "Print Designer",
  deliverables: "Book Cover",

  tools: [
    {
      name: "Adobe Illustrator",
      icon:
        "./assets/images/software Icons/Adobe_Illustrator_CC_icon.svg"
    },
    {
      name: "Adobe Photoshop",
      icon:
        "./assets/images/software Icons/Adobe_Photoshop_CC_icon.svg"
    },
    {
      name: "Corel Draw",
      icon:
        "./assets/images/software Icons/corel-draw.png"
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl:
      "./index.html?section=portfolio",

    categoryLabel: "Print Design",
    categoryUrl:
      "./index.html?section=portfolio&category=print-design",

    currentLabel:
      "Autobiography Book Cover"
  },

  tabs: [
    {
      id: "project-info",
      label: "Project Info"
    },
    {
      id: "design-thinking",
      label: "Design Thinking"
    },
    {
      id: "visual-system",
      label: "Visual System"
    },
    {
      id: "book-cover",
      label: "Book Cover"
    }
  ],

  hero: {
    desktop: {
      src:
        "./assets/images/Thumbnails/Print Design/Mahesh Bhau.jpg",

      alt:
        "Autobiography Book Cover Print Design cover image"
    },

    mobile: {
      src:
        "./assets/images/Thumbnails/Print Design/Mobile/Mahesh Bhau.jpg",

      alt:
        "Autobiography Book Cover mobile Print Design cover image"
    }
  },

  projectOverview: {
    title:
      "Autobiography Book Cover",

    sections: [
      {
        heading:
          "About the Project",

        body:
          "This project was created as a memoir-style autobiography based on the life of Mahesh Bhau’s father, who was closely associated with Dagdusheth Ganpati as one of its trustees. The book was designed to present his life journey through separate chapters, with each section capturing an important phase, memory or turning point from his personal & public life. The visual approach had to be deeply sensitive & story-driven. Every image & design element needed to support the emotion of that particular chapter — whether it reflected family, devotion, responsibility, service, struggle or legacy. At its heart, the project was not just about designing a book. It was about giving visual form to a life lived with purpose, faith & contribution."
      }
    ]
  },

  summaryBlock: {
    roleHeading: "My Role",
    deliverablesHeading: "Deliverables",
    toolsHeading: "Tools Used"
  },

  designThinking: {
    heading:
      "Design Thinking",

    points: [
      "The cover was built around the idea of showing Mahesh Bhau’s father’s life as a complete journey.",

      "The focus was to show his transformation from a young boy to the person he eventually became.",

      "The cover had to feel personal, emotional & respectful, while still carrying a strong visual impact.",

      "Instead of showing just one moment from his life, we decided to bring together different phases, memories & milestones into one meaningful composition."
    ],

    pointsMobile: [
      "The cover was built around the idea of showing his life as a complete journey.",

      "The focus was to show his transformation from a young boy to the person he eventually became.",

      "Different phases, memories and milestones were brought together into one emotional and respectful composition."
    ]
  },

  visualSystem: {
    heading:
      "Visual System",

    points: [
      "AI-generated visuals were used to maintain one consistent art style.",

      "Every clothing detail was planned carefully to match the time period and context of each particular phase in his life.",

      "His journey was presented through a collage-style composition, allowing multiple moments to come together in one frame.",

      "The collage was inspired by movie-poster-style layouts, giving the cover a sense of drama, depth & storytelling.",

      "The layout was balanced carefully so that the cover felt cinematic and emotional, without becoming overcrowded."
    ],

    pointsMobile: [
      "AI-generated visuals were used to maintain one consistent art style.",

      "Clothing details were planned carefully to match the time period and context of each phase in his life.",

      "A movie-poster-inspired collage brought multiple moments together while keeping the cover cinematic, emotional and balanced."
    ]
  },

  gallerySections: [
    {
      id:
        "book-cover",

      title:
        "Book Cover",

      groups: [
        {
          key:
            "printMaheshBookCover",

          title:
            "",

          previewGroupName:
            "Autobiography Book Cover",

          items: [
            {
              src:
                "./assets/images/Portfolio/Print Design/Mahesh Bhau/Design-1-A.jpg",

              alt:
                "Autobiography Book Cover design"
            }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle:
    "View Other Projects",

  relatedProjects: [
    {
      title:
        "Dagdusheth Ganpati",

      industry:
        "Religious / Devotional Organisation",

      url:
        "./portfolio-detail.html?project=print-design-dagdusheth-ganpati",

      image: {
        src:
          "./assets/images/Thumbnails/Print Design/DG.jpg",

        alt:
          "Dagdusheth Ganpati Print Design thumbnail"
      },

      imageLabel:
        "Dagdusheth Ganpati"
    },

    {
      title:
        "Kumbh 2027 - Book Jacket",

      industry:
        "Publishing / Spiritual Event",

      url:
        "./portfolio-detail.html?project=print-design-kumbh-2027",

      image: {
        src:
          "./assets/images/Thumbnails/Print Design/Kumbh 2027.jpg",

        alt:
          "Kumbh 2027 Book Jacket thumbnail"
      },

      imageLabel:
        "Kumbh 2027 - Book Jacket"
    },

    {
      title:
        "Core Essence - Tarot Cards",

      industry:
        "Wellness / Tarot",

      url:
        "./portfolio-detail.html?project=print-design-core-essence-tarot-cards",

      image: {
        src:
          "./assets/images/Thumbnails/Print Design/Core essence.jpg",

        alt:
          "Core Essence Tarot Cards thumbnail"
      },

      imageLabel:
        "Core Essence - Tarot Cards"
    }
  ]
},


"print-design-core-essence-tarot-cards": {
  title: "Core Essence",
  fullTitle: "Core Essence",

  category: "Print Design",
  categorySlug: "print-design",

  industry: "Wellness / Tarot",
  projectType: "Print Design",

  role: "Print Designer",
  deliverables: "Tarot Cards",

  tools: [
    {
      name: "Adobe Illustrator",
      icon:
        "./assets/images/software Icons/Adobe_Illustrator_CC_icon.svg"
    },
    {
      name: "Adobe Photoshop",
      icon:
        "./assets/images/software Icons/Adobe_Photoshop_CC_icon.svg"
    },
    {
      name: "Corel Draw",
      icon:
        "./assets/images/software Icons/corel-draw.png"
    }
  ],

  breadcrumb: {
    rootLabel: "Portfolio",
    rootUrl:
      "./index.html?section=portfolio",

    categoryLabel: "Print Design",
    categoryUrl:
      "./index.html?section=portfolio&category=print-design",

    currentLabel:
      "Core Essence"
  },

  tabs: [
    {
      id: "project-info",
      label: "Project Info"
    },
    {
      id: "design-thinking",
      label: "Design Thinking"
    },
    {
      id: "visual-system",
      label: "Visual System"
    },
    {
      id: "emotion-sketches",
      label: "Emotion Sketches"
    },
    {
      id: "monochrome-front-and-back",
      label: "Monochrome Front & Back"
    },
    {
      id: "color-foldable-card",
      label: "Color Foldable Card"
    },
    {
      id: "color-and-monochrome",
      label: "Color & Monochrome"
    }
  ],

  hero: {
    desktop: {
      src:
        "./assets/images/Thumbnails/Print Design/Core essence.jpg",

      alt:
        "Core Essence Tarot Cards Print Design cover image"
    },

    mobile: {
      src:
        "./assets/images/Thumbnails/Print Design/Mobile/Core essence.jpg",

      alt:
        "Core Essence Tarot Cards mobile Print Design cover image"
    }
  },

  projectOverview: {
    title:
      "Core Essence - Tarot Cards",

    sections: [
      {
        heading:
          "About the Project",

        body:
          "Core Essence is a psychology & Bach flower remedy brand that helps people understand their emotions & receive gentle, personalized herbal support. This project was created as an emotional discovery card game for patients who may find it difficult to clearly express what they are feeling. Instead of expecting them to immediately explain their emotions in words, the cards give them a more visual & intuitive way to identify their inner state. A patient can go through the stack and choose the card that feels closest to their current emotion. This simple act helps open up conversation, making it easier for the therapist to understand the patient’s emotional condition & suggest a more suitable Bach flower remedy. At its heart, the card game is designed to make emotional expression feel less intimidating, more personal & easier to begin."
      }
    ]
  },

  summaryBlock: {
    roleHeading: "My Role",
    deliverablesHeading: "Deliverables",
    toolsHeading: "Tools Used"
  },

  designThinking: {
    heading:
      "Design Thinking",

    points: [
      "The strategy was to create a visual language that felt soft, sensitive & emotionally approachable.",

      "Since the cards were meant to help patients understand what they were feeling, the visuals had to be abstract, but still clear enough to interpret.",

      "The aim was not to show emotions in a literal way, but to create visuals that could gently help the patient recognize and connect with their inner state.",

      "The leaf form was chosen intentionally because it was already a part of the Core Essence logo, helping maintain brand consistency.",

      "At the same time, the leaf also worked beautifully for this subject because it feels natural, soothing & emotionally gentle."
    ],

    pointsMobile: [
      "The strategy was to create a visual language that felt soft, sensitive and emotionally approachable.",

      "The visuals needed to remain abstract while still being clear enough for patients to interpret.",

      "The leaf form connected the cards to the Core Essence identity while feeling natural, soothing and emotionally gentle."
    ]
  },

  visualSystem: {
    heading:
      "Visual System",

    points: [
      "The color palette was designed so that each emotion had its own visual mood and color combination.",

      "The design did not rely on color alone to express emotion.",

      "The line formations, shapes, flow & structure were also created to reflect the nature of each feeling.",

      "Some visuals were kept calm and open, while others carried more movement, tension or depth depending on the emotion.",

      "This helped each card express not only the emotion itself, but also the sensitivity, weight & feeling behind that emotion."
    ],

    pointsMobile: [
      "Each emotion was given its own visual mood and colour combination.",

      "The design also used line formations, shapes, flow and structure to reflect the nature of each feeling.",

      "Some visuals felt calm and open, while others carried movement, tension or emotional depth."
    ]
  },

  gallerySections: [
    {
      id:
        "emotion-sketches",

      title:
        "Emotion Sketches",

      groups: [
        {
          key:
            "printCoreEmotionSketches",

          title:
            "",

          previewGroupName:
            "Core Essence Emotion Sketches",

          items: [
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-1-A.jpg",

              alt:
                "Core Essence emotion sketch 01"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-1-B.jpg",

              alt:
                "Core Essence emotion sketch 02"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-1-C.jpg",

              alt:
                "Core Essence emotion sketch 03"
            }
          ]
        }
      ]
    },

    {
      id:
        "monochrome-front-and-back",

      title:
        "Monochrome Front and Back",

      groups: [
        {
          key:
            "printCoreMonochromeFrontBack",

          title:
            "",

          previewGroupName:
            "Core Essence Monochrome Front and Back",

          items: [
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-A.jpg",

              alt:
                "Core Essence monochrome card design 01"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-B.jpg",

              alt:
                "Core Essence monochrome card design 02"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-C.jpg",

              alt:
                "Core Essence monochrome card design 03"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-D.jpg",

              alt:
                "Core Essence monochrome card design 04"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-E.jpg",

              alt:
                "Core Essence monochrome card design 05"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-F.jpg",

              alt:
                "Core Essence monochrome card design 06"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-G.jpg",

              alt:
                "Core Essence monochrome card design 07"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-H.jpg",

              alt:
                "Core Essence monochrome card design 08"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-I.jpg",

              alt:
                "Core Essence monochrome card design 09"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-J.jpg",

              alt:
                "Core Essence monochrome card design 10"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-K.jpg",

              alt:
                "Core Essence monochrome card design 11"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-L.jpg",

              alt:
                "Core Essence monochrome card design 12"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-M.jpg",

              alt:
                "Core Essence monochrome card design 13"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-N.jpg",

              alt:
                "Core Essence monochrome card design 14"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-O.jpg",

              alt:
                "Core Essence monochrome card design 15"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-2-P.jpg",

              alt:
                "Core Essence monochrome card design 16"
            }
          ]
        }
      ]
    },

    {
      id:
        "color-foldable-card",

      title:
        "Color Foldable Card",

      groups: [
        {
          key:
            "printCoreColorFoldableCard",

          title:
            "",

          previewGroupName:
            "Core Essence Color Foldable Card",

          items: [
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-3-A.jpg",

              alt:
                "Core Essence color foldable card design 01"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-3-B.jpg",

              alt:
                "Core Essence color foldable card design 02"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-3-C.jpg",

              alt:
                "Core Essence color foldable card design 03"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-3-D.jpg",

              alt:
                "Core Essence color foldable card design 04"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-3-E.jpg",

              alt:
                "Core Essence color foldable card design 05"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-3-F.jpg",

              alt:
                "Core Essence color foldable card design 06"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-3-G.jpg",

              alt:
                "Core Essence color foldable card design 07"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-3-H.jpg",

              alt:
                "Core Essence color foldable card design 08"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-3-I.jpg",

              alt:
                "Core Essence color foldable card design 09"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-3-J.jpg",

              alt:
                "Core Essence color foldable card design 10"
            }
          ]
        }
      ]
    },

    {
      id:
        "color-and-monochrome",

      title:
        "Color and Monochrome",

      groups: [
        {
          key:
            "printCoreColorAndMonochrome",

          title:
            "",

          previewGroupName:
            "Core Essence Color and Monochrome Cards",

          items: [
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-4-A.jpg",

              alt:
                "Core Essence color and monochrome card design 01"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-4-B.jpg",

              alt:
                "Core Essence color and monochrome card design 02"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-4-C.jpg",

              alt:
                "Core Essence color and monochrome card design 03"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-4-D.jpg",

              alt:
                "Core Essence color and monochrome card design 04"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-4-E.jpg",

              alt:
                "Core Essence color and monochrome card design 05"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-4-F.jpg",

              alt:
                "Core Essence color and monochrome card design 06"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-4-G.jpg",

              alt:
                "Core Essence color and monochrome card design 07"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-4-H.jpg",

              alt:
                "Core Essence color and monochrome card design 08"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-4-I.jpg",

              alt:
                "Core Essence color and monochrome card design 09"
            },
            {
              src:
                "./assets/images/Portfolio/Print Design/Core/Design-4-J.jpg",

              alt:
                "Core Essence color and monochrome card design 10"
            }
          ]
        }
      ]
    }
  ],

  relatedProjectsTitle:
    "View Other Projects",

  relatedProjects: [
    {
      title:
        "Dagdusheth Ganpati",

      industry:
        "Religious / Devotional Organisation",

      url:
        "./portfolio-detail.html?project=print-design-dagdusheth-ganpati",

      image: {
        src:
          "./assets/images/Thumbnails/Print Design/DG.jpg",

        alt:
          "Dagdusheth Ganpati Print Design thumbnail"
      },

      imageLabel:
        "Dagdusheth Ganpati"
    },

    {
      title:
        "Kumbh 2027 - Book Jacket",

      industry:
        "Publishing / Spiritual Event",

      url:
        "./portfolio-detail.html?project=print-design-kumbh-2027",

      image: {
        src:
          "./assets/images/Thumbnails/Print Design/Kumbh 2027.jpg",

        alt:
          "Kumbh 2027 Book Jacket thumbnail"
      },

      imageLabel:
        "Kumbh 2027 - Book Jacket"
    },

    {
      title:
        "Autobiography Book Cover",

      industry:
        "Publishing / Biography",

      url:
        "./portfolio-detail.html?project=print-design-autobiography-book-cover",

      image: {
        src:
          "./assets/images/Thumbnails/Print Design/Mahesh Bhau.jpg",

        alt:
          "Autobiography Book Cover thumbnail"
      },

      imageLabel:
        "Autobiography Book Cover"
    }
  ]
}	
	
};

