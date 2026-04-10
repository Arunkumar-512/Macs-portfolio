const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const docsApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

  const blogPosts = [
    {
      id: 1,
      date: " Jan 18, 2026",
      title:
        "Understanding Async/Await in JavaScript with Practical Examples",
      image: "/images/blog1.png",
      link: "https://www.freecodecamp.org/news/async-await-javascript-tutorial/",
    },
    {
      id: 2,
      date: "Jan 10, 2026",
      title: "CSS Grid vs Flexbox: When to Use Which Layout System",
      image: "/images/blog2.png",
      link: "https://css-tricks.com/css-grid-vs-flexbox/",
    },
    {
      id: 3,
      date: "Dec 28, 2025",
      title: "A Complete Guide to Modern React Patterns and Best Practices",
      image: "/images/blog3.png",
    link: "https://www.smashingmagazine.com/2025/modern-react-patterns-best-practices/",
    },
    {
    id: 4,
    date: "Dec 15, 2025",
    title:
      "JavaScript ES6 Features You Should Know in 2025",
    image: "/images/blog4.png",
    link: "https://www.freecodecamp.org/news/es6-javascript-features/",
  },
  ];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript","JavaScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express",],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL","Supabase",],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Arunkumar-512",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/arun-dasari-78b330363/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  docsApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = { 
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "E-commerce website",
      icon: "/images/folder.png",
      kind: "folder",
      position: { top: "30px", left: "40px" },// icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A modern e-commerce website built with responsive design and secure checkout functionality, offering a seamless shopping experience. Designed with scalability in mind to handle product listings, cart management, and user authentication",
          ],
        },
        {
          id: 2,
          name: "nike.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nike.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Arunkumar-512/MERN-STACK-Ecommerce",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Hotel Management System",
      icon: "/images/folder.png",
      kind: "folder",
      position: { top: "150px", left: "30px" },// icon position inside Finder
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Hotel Management System",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "With modern frontend and backend technologies, it includes authentication, secure payments, and an admin dashboard for hotel management.",
          ],
        },
        {
          id: 2,
          name: "Hotel Management System",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Hotel Management System",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Arunkumar-512/Hotel-booking-mangement",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "3D Game Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: { top: "300px", left: "50px" },// icon position inside Finder
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "3D Game Website",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An interactive 3D Gaming website built with Three.js and React Three Fiber, featuring animated models and smooth camera transitions. Designed to create an immersive experience while showcasing projects, skills, and creativity.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "3D Game Website",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Arunkumar-512/3D-Game-website",
          position: "top-60 right-20",
        },
      ],
    },
     // ▶ Project 3
    {
      id: 8,
      name: "Ecommerce Bakery's point",
      icon: "/images/folder.png",
      kind: "folder",
      position: { top: "300px", right: "40px" },
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "3D Game Website",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An interactive 3D Gaming website built with Three.js and React Three Fiber, featuring animated models and smooth camera transitions. Designed to create an immersive experience while showcasing projects, skills, and creativity.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "3D Game Website",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Arunkumar-512/3D-Game-website",
          position: "top-60 right-20",
        },
      ],
    },
     // ▶ Project 3
    {
      id: 9,
      name: "AI thumbnail Generator ",
      icon: "/images/folder.png",
      kind: "folder",
      position: { top: "30px", right: "40px" },
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "3D Game Website",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An interactive 3D Gaming website built with Three.js and React Three Fiber, featuring animated models and smooth camera transitions. Designed to create an immersive experience while showcasing projects, skills, and creativity.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "3D Game Website",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Arunkumar-512/3D-Game-website",
          position: "top-60 right-20",
        },
      ],
    },
     // ▶ Project 3
    {
      id: 10,
      name: "Ecommerce website ",
      icon: "/images/folder.png",
      kind: "folder",
      position: { top: "130px", right: "50px" },
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "3D Game Website",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An interactive 3D Gaming website built with Three.js and React Three Fiber, featuring animated models and smooth camera transitions. Designed to create an immersive experience while showcasing projects, skills, and creativity.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "3D Game Website",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Arunkumar-512/3D-Game-website",
          position: "top-60 right-20",
        },
      ],
    },
     // ▶ Project 3
    {
      id: 11,
      name: "File vault ",
      icon: "/images/folder.png",
      kind: "folder",
      position: { top: "30px", left: "250px" },
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "3D Game Website",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An interactive 3D Gaming website built with Three.js and React Three Fiber, featuring animated models and smooth camera transitions. Designed to create an immersive experience while showcasing projects, skills, and creativity.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "3D Game Website",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Arunkumar-512/3D-Game-website",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/bunty.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Arun 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const createWindow = () => ({
  isOpen: false,
  isMinimized: false,
  isMaximized: false,
  zIndex: INITIAL_Z_INDEX,
  data: null,
});

const WINDOW_CONFIG = { 
  finder: createWindow(),
  contact: createWindow(),
  resume: createWindow(),
  safari: createWindow(),
  photos: createWindow(),
  terminal: createWindow(),
  txtfile: createWindow(),
  imgfile: createWindow(),
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };