const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  
  {
    id: 2,
    name: "Contact",
    type: "contact",
  },
  {
    id: 3,
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
    id: "archive",
    name: "Archive", // was "Trash"
    icon: "trash.png", //we can change the icon later
    canOpen: true,
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
    items: ["React.js", "Next.js", "TypeScript", "JavaScript"],
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
    items: ["MongoDB", "PostgreSQL", "Supabase",],
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
    img: "/images/bunty.png",
  },
  {
    id: 2,
    img: "/images/casual.jpeg",
  },
  {
    id: 3,
    img: "/images/graduate.jpeg",
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
          name: "E-commerce project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description:
            `This full-stack e-commerce application was developed as a complete, production-ready solution designed to deliver a seamless and scalable online shopping experience. The project focuses on combining modern frontend technologies with a robust backend architecture, ensuring both performance and reliability while maintaining a clean and intuitive user interface.

On the frontend, the application was built using React.js with a strong emphasis on component-based architecture and reusability. The UI is structured into modular components such as product listings, navigation bars, cart interfaces, and checkout forms, making the codebase maintainable and scalable. Responsive design principles were applied to ensure the application works smoothly across all devices, including desktops, tablets, and mobile screens. Attention was given to user experience by implementing smooth transitions, loading states, and intuitive navigation patterns, allowing users to browse products, add items to the cart, and complete purchases without friction.

The backend was developed using Node.js and Express.js, providing a structured and efficient RESTful API. Express middleware was used to handle routing, authentication, and error handling, ensuring clean separation of concerns and maintainability. Secure authentication was implemented using token-based methods, enabling protected routes for user-specific actions such as viewing orders or managing account details. Input validation and proper error handling were applied throughout the API to ensure data integrity and application stability.

A key strength of this project is the integration of both MongoDB and PostgreSQL, demonstrating the ability to work with different database paradigms. MongoDB was used for handling flexible data such as product catalogs, where schema adaptability is important for managing product variations, images, and categories. PostgreSQL was used for structured data like user information, orders, and transactions, where relationships and consistency are critical. This hybrid approach reflects real-world system design decisions and highlights the ability to choose the right database for specific use cases.

The application includes core e-commerce functionalities such as product browsing, search and filtering, cart management, and a secure checkout system. Users can explore products, view detailed descriptions, and manage their cart with real-time updates. The checkout process includes proper validation to ensure accurate and secure transactions. Additionally, an admin dashboard was implemented to manage products, users, and orders, incorporating role-based access control to restrict sensitive operations to authorized users only.

Security and performance were key considerations throughout development. Sensitive data was handled using environment variables, and best practices were followed to prevent vulnerabilities such as injection attacks. On the performance side, optimized API calls, efficient database queries, and frontend rendering optimizations were implemented to ensure fast load times and a smooth user experience.

Version control was managed using Git and GitHub, ensuring proper tracking of changes and maintainability of the project. The overall architecture follows industry best practices, with clear separation between frontend and backend, making the application scalable and easy to extend.

\n**Skills & Technologies Used:**

* Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design
* Backend: Node.js, Express.js, REST API Development
* Databases: MongoDB (NoSQL), PostgreSQL (SQL)
* Authentication & Security: JWT Authentication, Input Validation, Secure API Handling
* Tools & Workflow: Git, GitHub, Environment Variables
* Concepts: Full-Stack Development, MVC Architecture, API Integration, State Management, Responsive UI/UX Design

Overall, this project demonstrates strong full-stack development skills, including the ability to design scalable systems, build responsive interfaces, manage complex data flows, and implement secure backend services. It reflects a practical understanding of real-world application development and modern web technologies.
`

          ,
        },
        {
          id: 2,
          name: "E-commerce.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "E-commerce.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Ecommerce1.png",
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
          description:
            `This full-stack hotel management and booking platform was developed to provide a seamless and efficient experience for both customers and administrators. The application combines modern frontend and backend technologies to deliver a scalable, secure, and user-friendly system for browsing hotels, managing bookings, and handling administrative operations.

On the frontend, the application was built using React.js, focusing on creating a clean, responsive, and intuitive user interface. The design emphasizes user experience, allowing customers to easily search for hotels, view detailed room information, check availability, and complete bookings with minimal effort. The interface is fully responsive, ensuring smooth performance across desktops, tablets, and mobile devices. Components were structured in a modular and reusable way, improving maintainability and scalability of the codebase. Features like dynamic filtering, real-time updates, and smooth navigation enhance the overall usability of the platform.

The backend was developed using Node.js and Express.js, providing a robust RESTful API to handle all business logic and data operations. The server efficiently manages user authentication, booking processes, and administrative tasks. Secure authentication was implemented using token-based methods (JWT), ensuring that user data and sessions are protected. Role-based access control was also integrated, allowing administrators to manage hotel listings, room availability, pricing, and bookings, while regular users can only access their own data and booking history.

For database management, a combination of MongoDB and PostgreSQL was used to handle different types of data effectively. MongoDB was utilized for flexible data structures such as hotel details, room types, amenities, and images, allowing easy updates and scalability. PostgreSQL was used for structured data such as user accounts, bookings, and transactions, ensuring data consistency, relationships, and reliability. This hybrid database approach demonstrates the ability to work with both NoSQL and relational databases based on the specific requirements of the system.

One of the key features of the platform is the booking system, which allows users to select rooms, choose dates, and confirm reservations with proper validation and availability checks. The system ensures that double bookings are prevented and that all transactions are handled securely. Additionally, secure payment integration (simulated or implemented) ensures safe and reliable transactions, enhancing user trust.

An advanced admin dashboard was built to give administrators full control over the platform. Admins can add or update hotel listings, manage room inventory, monitor bookings, and track user activity. This dashboard is designed with efficiency in mind, enabling quick decision-making and smooth management of the platform.

Security and performance were prioritized throughout development. Input validation, error handling, and secure API practices were implemented to protect against common vulnerabilities. Environment variables were used to store sensitive data such as API keys and database credentials. Performance optimizations such as efficient API calls, optimized database queries, and lazy loading techniques were applied to ensure fast load times and a smooth user experience.

Version control was managed using Git and GitHub, ensuring proper tracking of changes and maintainability of the project. The overall architecture follows best practices, with a clear separation between frontend and backend, making the application scalable and easy to extend.

**Skills & Technologies Used:**

* Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design
* Backend: Node.js, Express.js, REST API Development
* Databases: MongoDB (NoSQL), PostgreSQL (Relational Database)
* Authentication & Security: JWT Authentication, Role-Based Access Control, Input Validation
* Features: Booking System, Secure Payments Integration, Admin Dashboard
* Tools & Workflow: Git, GitHub, Environment Variables
* Concepts: Full-Stack Development, API Integration, Database Design, Scalable Architecture, UI/UX Design

Overall, this project demonstrates the ability to build a complete full-stack application that handles real-world scenarios such as user authentication, booking management, secure transactions, and administrative control, while maintaining performance, security, and scalability.
`
          ,
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
          imageUrl: "/images/hotel.png",
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
      windowPosition: "top-[33vh] left-40",
      children: [
        {
          id: 1,
          name: "3D Game Website",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-50 left-10",
          description: `
          This interactive 3D gaming website was developed to deliver a visually immersive and engaging web experience that goes beyond traditional UI design. The project focuses on combining modern frontend technologies with real-time 3D rendering to create a dynamic environment where users can explore content in a more interactive and visually appealing way. Instead of relying on static layouts, the website uses 3D scenes and animations to showcase projects, skills, and creativity in a unique and memorable format.

The core of the application is built using React.js along with React Three Fiber, which acts as a bridge between React and Three.js, enabling seamless integration of 3D graphics into a component-based architecture. This allows the developer to manage complex 3D scenes using familiar React patterns such as components, props, and state. Three.js powers the rendering engine, handling elements like lighting, shadows, textures, and 3D transformations, which together create a realistic and interactive visual experience.

One of the standout features of this project is the use of animated 3D models and smooth camera transitions. These animations are carefully designed to guide users through different sections of the website, making navigation feel intuitive and engaging. Camera movements are implemented to create a storytelling effect, where users are smoothly transitioned between scenes instead of abruptly switching pages. This significantly enhances user experience by making the interaction feel more natural and immersive.

Performance optimization was a key focus during development, as 3D applications can be resource-intensive. Techniques such as lazy loading of assets, efficient handling of textures, and minimizing unnecessary re-renders were applied to ensure smooth performance across different devices. The application is optimized to maintain a balance between visual quality and performance, ensuring that even users on mid-range devices can experience the website without lag or performance drops.

The user interface combines traditional web elements with interactive 3D components, creating a hybrid design approach. Users can interact with objects in the 3D environment, such as clicking on models to open project details or hovering over elements to trigger animations. This level of interactivity not only enhances engagement but also demonstrates advanced frontend development capabilities.

From a technical perspective, the project showcases a strong understanding of 3D concepts such as coordinate systems, object positioning, rotations, and animation loops. Managing the synchronization between React state and the Three.js rendering lifecycle required careful planning and implementation. This highlights the ability to work with complex systems and integrate multiple technologies effectively.

The application structure follows best practices, with a clear separation of components and reusable logic. Version control was handled using Git and GitHub, ensuring proper tracking of changes and maintainability of the project. The codebase is designed to be scalable, allowing future enhancements such as adding more scenes, advanced animations, or interactive features.

**Skills & Technologies Used:**

* Frontend: React.js, JavaScript (ES6+), HTML5, CSS3
* 3D Development: Three.js, React Three Fiber
* Graphics & Animation: 3D Models, Lighting, Shadows, Camera Transitions
* Performance Optimization: Lazy Loading, Asset Optimization, Efficient Rendering
* Tools & Workflow: Git, GitHub
* Concepts: Real-Time Rendering, 3D Transformations, Interactive UI/UX Design, Component-Based Architecture

Overall, this project demonstrates the ability to build advanced, interactive web applications using modern 3D technologies. It highlights strong frontend development skills, creative problem-solving, and a deep understanding of user experience design, resulting in a highly engaging and visually rich platform.

          `,
        },
        {
          id: 2,
          name: "3D-Game-website.com",
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
          imageUrl: "/images/game.jpg",
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
    // ▶ Project 4
    {
      id: 8,
      name: "Ecommerce Bakery's point",
      icon: "/images/folder.png",
      kind: "folder",
      position: { top: "300px", left: "190px" },
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Ecommerce Bakery's point",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: `
          This e-commerce platform, “Bakery’s Point,” was developed as a full-stack web application designed to provide a seamless and delightful online shopping experience specifically tailored for a bakery business. The project focuses on combining modern web technologies with an intuitive user interface to create a system where customers can easily browse, select, and purchase bakery products such as cakes, pastries, and custom orders. The goal was to replicate the warmth and appeal of a physical bakery store while delivering the convenience of online shopping.

On the frontend, the application was built using React.js, emphasizing a clean, responsive, and visually appealing design. The user interface is structured into reusable components such as product cards, category sections, navigation bars, and checkout forms. Special attention was given to UI/UX design to reflect the aesthetic of a bakery, using soft colors, appealing layouts, and smooth animations. The website is fully responsive, ensuring a consistent and smooth experience across desktops, tablets, and mobile devices. Features such as product filtering, search functionality, and dynamic cart updates enhance usability and allow users to find and purchase items effortlessly.

The backend was developed using Node.js and Express.js, providing a robust and scalable RESTful API to handle all business logic. The server manages product data, user authentication, order processing, and payment handling. Secure authentication was implemented using JWT (JSON Web Tokens), ensuring that user accounts and sessions are protected. The API is structured with proper routing, middleware, and error handling to maintain a clean and maintainable codebase.

For database management, the application uses MongoDB to store product-related data such as item details, categories, images, and pricing. Its flexible schema makes it ideal for handling dynamic product variations and custom orders. Additionally, PostgreSQL can be used for structured data such as user accounts, order history, and transactions, ensuring data consistency and reliability. This combination demonstrates the ability to work with both NoSQL and relational databases based on the requirements of the system.

One of the key features of Bakery’s Point is the ability to place customized orders. Users can select specific products, choose variations (such as size or flavor), and add personalized instructions. The cart system dynamically updates as users add or remove items, providing real-time feedback. The checkout process includes validation to ensure accurate order details and integrates secure payment handling (either simulated or real), ensuring a smooth and trustworthy transaction experience.

An admin dashboard was also implemented to allow business owners to manage the platform efficiently. Through this dashboard, administrators can add new products, update pricing, manage inventory, and track customer orders. This feature ensures that the platform is not only user-friendly for customers but also practical and efficient for business operations.

Security and performance were key priorities during development. Sensitive data such as API keys and database credentials are managed using environment variables. Input validation and error handling are implemented throughout the application to prevent vulnerabilities and ensure data integrity. Performance optimizations such as efficient API calls, optimized database queries, and lazy loading of images help maintain fast load times and a smooth user experience.

Version control was handled using Git and GitHub, ensuring proper tracking of development progress and collaboration. The overall architecture follows best practices in full-stack development, with a clear separation between frontend and backend, making the application scalable and easy to maintain.

**Skills & Technologies Used:**

* Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design
* Backend: Node.js, Express.js, REST API Development
* Databases: MongoDB (NoSQL), PostgreSQL (Relational Database)
* Authentication & Security: JWT Authentication, Input Validation, Secure API Handling
* Features: Product Management, Cart System, Custom Orders, Secure Checkout
* Tools & Workflow: Git, GitHub, Environment Variables
* Concepts: Full-Stack Development, API Integration, Database Design, UI/UX Design, Scalable Architecture

Overall, Bakery’s Point demonstrates the ability to build a complete, real-world e-commerce solution tailored to a specific domain. It highlights strong full-stack development skills, attention to user experience, and the ability to design systems that are both functional and visually engaging.

          `,
        },
        {
          id: 2,
          name: "Bakery's point.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Bakery's point",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Bakery's-point.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Arunkumar-512/bakery-point-Ecommerce",
          position: "top-60 right-20",
        },
      ],
    },
    // ▶ Project 5
    {
      id: 9,
      name: "AI thumbnail Generator ",
      icon: "/images/folder.png",
      kind: "folder",
      position: { top: "150px", left: "200px" },
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "AI thumbnail Generator",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: `
This AI Thumbnail Generator is a full-stack web application designed to help users quickly create high-quality, visually appealing thumbnails for videos, social media, and digital content. The project focuses on combining modern frontend technologies with AI-powered image generation to streamline the creative process, allowing users to generate professional thumbnails without requiring advanced design skills. The goal of the application is to save time, enhance creativity, and provide an intuitive platform for content creators.

On the frontend, the application was built using React.js, ensuring a dynamic and responsive user interface. The design is clean and user-friendly, allowing users to easily input prompts, upload images, and customize thumbnail styles. The interface includes features such as live preview, template selection, text overlays, and styling options like font size, color, and positioning. Responsive design principles were implemented to ensure smooth usability across desktops, tablets, and mobile devices. The UI focuses on simplicity and efficiency, enabling users to generate thumbnails in just a few steps.

The core functionality of the application revolves around AI integration for image generation. By leveraging AI models or APIs, users can input descriptive prompts, and the system generates relevant thumbnail images based on those inputs. The application can also support image enhancement features such as background removal, resizing, and color adjustments. This integration demonstrates the ability to work with AI-powered services and incorporate them into real-world applications.

On the backend, the application was developed using Node.js and Express.js, providing a robust and scalable RESTful API. The server handles user requests, communicates with AI services, processes images, and manages data efficiently. Authentication was implemented using JWT, ensuring secure access for users who want to save and manage their generated thumbnails. The backend also includes proper validation, error handling, and middleware to maintain a clean and reliable architecture.

For data storage, MongoDB was used to manage flexible data such as generated thumbnails, user preferences, and project history. PostgreSQL can be integrated for structured data such as user accounts, subscriptions, and usage tracking. This combination highlights the ability to work with both NoSQL and relational databases, depending on the requirements of the application.

One of the key features of this project is real-time preview and customization. Users can instantly see changes as they modify text, styles, or layouts, making the design process interactive and efficient. Additional features such as template-based generation, drag-and-drop positioning, and downloadable outputs enhance the overall user experience. The system is designed to handle multiple requests efficiently, ensuring smooth performance even with frequent AI processing tasks.

Performance optimization and scalability were important considerations during development. Techniques such as caching, optimized API calls, and efficient handling of image assets were implemented to reduce latency and improve responsiveness. Environment variables were used to securely manage API keys and sensitive configurations. The application is structured to allow future enhancements such as advanced AI editing tools, collaboration features, or cloud storage integration.

Version control was managed using Git and GitHub, ensuring proper tracking of changes and maintainability of the project. The overall architecture follows best practices, with a clear separation between frontend and backend, making the application easy to scale and extend.

**Skills & Technologies Used:**

* Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design
* Backend: Node.js, Express.js, REST API Development
* Databases: MongoDB (NoSQL), PostgreSQL (Relational Database)
* AI Integration: Image Generation APIs, Prompt-Based Design
* Features: Thumbnail Generation, Real-Time Preview, Customization Tools, Image Processing
* Authentication & Security: JWT Authentication, Input Validation, Secure API Handling
* Tools & Workflow: Git, GitHub, Environment Variables
* Concepts: Full-Stack Development, API Integration, AI-Based Applications, UI/UX Design, Scalable Architecture

Overall, this project demonstrates the ability to integrate AI capabilities into a full-stack application to solve real-world problems. It highlights strong development skills, creativity, and an understanding of modern web technologies, resulting in a powerful and user-friendly tool for generating professional thumbnails.
          `,
        },
        {
          id: 2,
          name: "AI thumbnail Generator.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "AI thumbnail Generator",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Ai-thumbnail.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Arunkumar-512/ForgeSnap",
          position: "top-60 right-20",
        },
      ],
    },
    // ▶ Project 6
    {
      id: 10,
      name: "E-commerce GreenCart ",
      icon: "/images/folder.png",
      kind: "folder",
      position: { top: "420px", left: "30px" },
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "E-commerce GreenCart",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: `
            This full-stack e-commerce application, “GreenCart,” was developed as a modern online platform for purchasing fresh vegetables and fruits. The project focuses on delivering a seamless and efficient shopping experience while emphasizing freshness, quality, and convenience for users. The platform is designed to replicate the experience of a local fresh market while leveraging the power of digital technology to provide easy access, fast ordering, and reliable delivery services.

On the frontend, the application was built using React.js with a strong focus on creating a clean, intuitive, and responsive user interface. The design highlights freshness and simplicity, using visually appealing layouts, product images, and categorized sections for fruits, vegetables, and organic products. The UI is structured using reusable components such as product cards, category filters, navigation bars, and cart systems, ensuring maintainability and scalability. Responsive design principles were applied to ensure that the platform works smoothly across all devices, including desktops, tablets, and smartphones. Features such as search functionality, filtering by category or price, and dynamic cart updates enhance the user experience and make browsing effortless.

The backend of the application was developed using Node.js and Express.js, providing a robust RESTful API to manage all business logic and operations. The server handles product data, user authentication, order processing, and inventory management. Secure authentication was implemented using JWT (JSON Web Tokens), ensuring that user sessions and data are protected. Middleware and structured routing were used to maintain clean and organized backend logic, along with proper error handling and validation to ensure system reliability.

For database management, MongoDB was used to handle flexible and dynamic data such as product listings, images, categories, and seasonal availability. Its schema flexibility allows easy updates as new products are added or existing ones change frequently. PostgreSQL was used for structured data such as user accounts, orders, transactions, and delivery details, ensuring data consistency and strong relational integrity. This hybrid database approach demonstrates the ability to choose the right database solution based on specific application needs.

One of the key features of GreenCart is its real-time cart and order management system. Users can add products to their cart, update quantities, and view total pricing instantly. The checkout process is designed to be smooth and secure, including proper validation and integration with payment systems (simulated or real). Users can also track their orders and view order history, enhancing transparency and trust.

An admin dashboard was implemented to allow efficient management of the platform. Administrators can add or update products, manage inventory levels, monitor customer orders, and handle delivery statuses. This ensures that the system remains organized and scalable as the number of users and products grows.

Performance and security were key priorities during development. Techniques such as optimized API calls, efficient database queries, and lazy loading of images were implemented to ensure fast load times and a smooth user experience. Sensitive information such as API keys and database credentials are managed securely using environment variables. Input validation and secure coding practices were followed to protect against common vulnerabilities.

Version control was managed using Git and GitHub, ensuring proper tracking of development progress and maintainability of the project. The application follows best practices in full-stack development, with a clear separation between frontend and backend, making it easy to extend and scale in the future.

**Skills & Technologies Used:**

* Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design
* Backend: Node.js, Express.js, REST API Development
* Databases: MongoDB (NoSQL), PostgreSQL (Relational Database)
* Authentication & Security: JWT Authentication, Input Validation, Secure API Handling
* Features: Product Listing, Cart System, Order Management, Secure Checkout
* Tools & Workflow: Git, GitHub, Environment Variables
* Concepts: Full-Stack Development, API Integration, Database Design, Scalable Architecture, UI/UX Design

Overall, the GreenCart project demonstrates the ability to build a real-world, domain-specific e-commerce platform that focuses on usability, performance, and scalability. It highlights strong full-stack development skills and showcases the ability to design systems that effectively handle dynamic data, secure transactions, and user-friendly interfaces.

          `,
        },
        {
          id: 2,
          name: "greencart.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "E-commerce GreenCart",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/greencart.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Arunkumar-512/Full-Stack-GreenCart",
          position: "top-60 right-20",
        },
      ],
    },
    // ▶ Project 7
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
          name: "FileVault",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: `
          This “File Vault” application is a full-stack web platform designed to provide users with a secure and efficient way to store, manage, and organize their personal files, including documents, images, and videos. The primary goal of the project is to create a digital storage solution that mimics a real-world file system while ensuring strong security, scalability, and ease of use. It allows users to upload, access, and manage their data from anywhere, offering a centralized and reliable storage experience.

On the frontend, the application was developed using React.js, focusing on building a clean, intuitive, and responsive user interface. The UI is designed to resemble a modern file explorer, enabling users to navigate through folders, open files, and organize content effortlessly. Features such as drag-and-drop uploads, file previews, folder creation, and search functionality enhance usability and make file management simple and efficient. The interface is fully responsive, ensuring smooth performance across desktops, tablets, and mobile devices. Special attention was given to user experience by implementing smooth transitions, loading indicators, and clear navigation structures.

The backend was built using Node.js and Express.js, providing a robust RESTful API to handle all file operations and business logic. The server manages file uploads, downloads, storage handling, and user authentication. Middleware was used to handle file processing and ensure efficient data flow between the client and server. Secure authentication was implemented using JWT (JSON Web Tokens), ensuring that only authorized users can access their files. Role-based access control can also be extended to allow shared access or collaborative features in future versions.

For storage and database management, MongoDB was used to store metadata such as file names, sizes, types, and folder structures. This allows flexible handling of hierarchical data, similar to a file system. PostgreSQL can be used for structured data such as user accounts, permissions, and activity logs, ensuring data consistency and reliability. File storage can be handled either locally on the server or through cloud storage services, depending on scalability requirements.

One of the key features of the File Vault is its ability to handle multiple file types efficiently. Users can upload images, videos, and documents, and preview them directly within the application without needing to download them. The system also supports folder-based organization, allowing users to create, rename, and delete folders to keep their data structured. Search and filtering features make it easy to locate files quickly, even when managing large amounts of data.

Security is a major focus of this project. Sensitive data such as user credentials and file access tokens are protected using encryption and secure authentication practices. Environment variables are used to manage API keys and database credentials safely. Input validation and proper error handling are implemented to prevent unauthorized access and ensure system stability.

Performance optimization was also considered during development. Efficient file handling, optimized API requests, and lazy loading techniques were used to ensure fast performance and minimal load times. The application is designed to scale, allowing future enhancements such as cloud integration, file sharing, real-time collaboration, and backup systems.

Version control was managed using Git and GitHub, ensuring proper tracking of development changes and maintainability. The overall architecture follows best practices in full-stack development, with a clear separation between frontend and backend, making the application easy to extend and maintain.

**Skills & Technologies Used:**

* Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design
* Backend: Node.js, Express.js, REST API Development
* Databases: MongoDB (NoSQL), PostgreSQL (Relational Database)
* File Handling: File Upload/Download, Media Preview, Folder Management
* Authentication & Security: JWT Authentication, Input Validation, Secure API Handling
* Tools & Workflow: Git, GitHub, Environment Variables
* Concepts: Full-Stack Development, File System Design, API Integration, Scalable Architecture, UI/UX Design

Overall, the File Vault project demonstrates the ability to build a secure and scalable file management system with real-world functionality. It highlights strong full-stack development skills, an understanding of data handling and security, and the ability to create user-friendly interfaces for managing complex operations efficiently.

          `,
        },
        {
          id: 2,
          name: "filevault.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "bottom-10 left-20",
        },
        {
          id: 4,
          name: "FileVault",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/fileVault.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "",
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
      imageUrl: "/images/casual.jpeg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/graduate.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      description: `
        Hi, I’m Arun 👋 — a passionate web developer focused on building modern, scalable, and high-performing web applications.

I specialize in JavaScript, React, and Next.js, with a strong emphasis on creating clean, responsive, and user-friendly interfaces. My approach to development centers around writing maintainable code, optimizing performance, and delivering seamless user experiences across all devices.

I value clean UI design, intuitive UX, and efficient problem-solving. I aim to build applications that are not only visually appealing but also reliable, scalable, and easy to maintain.

        
      `,
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
      imageUrl: "/images/trash1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash2.png",
    },
    {
      id: 3,
      name: "trash3.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-80 left-80",
      imageUrl: "/images/trash3.png",
    },
    {
      id: 4,
      name: "trash4.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-120 left-80",
      imageUrl: "/images/TripPlanner.png",
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
  archive: createWindow(),
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };