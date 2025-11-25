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
    img: "./icons/wifi.svg",
  },
  {
    id: 2,
    img: "./icons/search.svg",
  },
  {
    id: 3,
    img: "./icons/user.svg",
  },
  {
    id: 4,
    img: "./icons/mode.svg",
    type: "settings",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
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

const techStack = [
  {
    category: "Frontend",
    items: ["React.js"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Swift"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: [".NET Core", "C#", "Python"],
  },
  {
    category: "Database",
    items: ["SQLServer Express", "MySql"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Jenkins", "Ansible", "Github Actions"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "./icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/gambashM",
  },
  {
    id: 2,
    text: "Twitter/X",
    icon: "./icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/matan30255",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "./icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/matan-gambash-958002367/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "./icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "./icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "./icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "./icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "./icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "./images/veniceRiver.jpg",
  },
  {
    id: 2,
    img: "./images/Father.jpg",
  },
  {
    id: 3,
    img: "./images/ferrariF1.jpg",
  },
  {
    id: 4,
    img: "./images/Italy.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "./icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Full Stack Finance Tracking App",
      icon: "./images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] right-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Frontend Finance Tracking.txt",
          icon: "./images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This finance app is a sleek, modern dashboard designed to track your money and investments in one place.",
            "Instead of a basic balance viewer, it gives you an immersive overview of your net worth, portfolio performance, and daily changes with rich, interactive charts.",
            "Think of it like having a personal wealth command center in your pocket—built for long-term tracking, not just quick peeks at your account.",
            "It’s built with SwiftUI and native iOS frameworks, delivering smooth animations, real-time updates, and a clean, premium Apple-style experience.",
          ],
        },
        {
          id: 2,
          name: "Backend Finance Tracking.txt",
          icon: "./images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-50 left-70",
          description: [
            "Behind the scenes, this finance app is powered by a .NET Core Web API that acts as a real-time engine for all your portfolio and account data.",
            "A dedicated Python microservice continuously pulls live ticker prices and news, pushes them into Redis for ultra-fast access, and keeps everything in sync with the main API.",
            "SignalR is used to stream live updates straight to the client, so charts, balances can refresh in real time without constant polling.",
            "All core data—users, portfolios, transactions, and history—is stored safely in SQL Server, giving the backend a solid, scalable foundation that’s built for long-term growth, not just a quick prototype.",
          ],
        },
        {
          id: 3,
          name: "Auth & Security.txt",
          icon: "./images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-50",
          description: [
            "Authentication is handled by a dedicated auth layer built on top of the .NET Core Web API, designed to feel simple for the user but strict under the hood.",
            "Users can sign in with Apple or Google, or use classic email-based accounts, with everything funneled through a single, consistent identity system.",
            "Two-factor authentication can be enabled to lock accounts behind an extra verification step, adding a serious security layer on top of normal logins.",
            "Sessions and tokens are managed server-side, so only trusted clients stay logged in, and the rest of the backend (portfolio, tickers, dashboards) can rely on a clean, secure user identity.",
          ],
        },
        {
          id: 4,
          name: "frontendDesign.png",
          icon: "./images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-50 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Backend Design.png",
          icon: "./images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-20 right-10",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Python Web Scraper",
      icon: "./images/folder.png",
      kind: "folder",
      position: "top-5 right-7",
      windowPosition: "top-[20vh] right-7",
      children: [
        {
          id: 1,
          name: "Python Web Scraper.txt",
          icon: "./images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "This project is an automated content engine that scrapes the web and sends curated results straight to Telegram.",
            "Instead of manually searching, downloading, and forwarding links, it continuously scans target sites, filters what matters, and prepares clean posts for your channel or group.",
            "Think of it like having a personal assistant that works 24/7—finding new content, organizing it, and auto-posting it to keep your audience engaged.",
            "It’s built with Python, web scraping tools, and the Telegram API, combining schedulers and smart logic for reliable, hands-free automation.",
          ],
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "./icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "./images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/venice.jpg",
    },
    {
      id: 2,
      name: "ferrari.png",
      icon: "./images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/ferrari.jpg",
    },
    {
      id: 3,
      name: "hiking.png",
      icon: "./images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/hiking.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "./images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-50 left-5",
      subtitle: "Get to Know the Person Behind the Screens",
      image: "./images/me.jpg",
      description: [
        "Hey, I’m Matan 👋 — a full-stack dev who enjoys turning ideas into actual working stuff, whether it’s a finance app, an automation script, or a custom dashboard.",
        "I spend most of my time jumping between Python, C#, SwiftUI, and React, plus all the backend/devops glue that keeps everything running smoothly.",
        "I’m obsessed with clean interfaces, smooth user flows, and backend code that can handle real traffic without falling apart.",
        "When I’m not coding, I’m probably at the gym, tinkering with some server setup way too late, or starting yet another side project I swore I wasn’t going to build 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "./icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "./images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "./icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.jpg",
      icon: "./images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash1.jpg",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "./images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-40",
      imageUrl: "/images/trash2.png",
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

const WINDOW_CONFIG = {
  finder:   { isOpen:false, zIndex:1000, data:null, defaultW: "48rem", defaultH: null },
  terminal: { isOpen:false, zIndex:1000, data:null, defaultW: "36rem", defaultH: null },
  safari:   { isOpen:false, zIndex:1000, data:null, defaultW: "56rem", defaultH: null },
  contact:  { isOpen:false, zIndex:1000, data:null, defaultW: "42rem", defaultH: null },
  photos:   { isOpen:false, zIndex:1000, data:null, defaultW: "48rem", defaultH: null },
  resume:   { isOpen:false, zIndex:1000, data:null, defaultW: "fit-content", defaultH: "fit-content" },
  txtfile:  { isOpen:false, zIndex:1000, data:null, defaultW: "28rem", defaultH: null },
  imgfile:  { isOpen:false, zIndex:1000, data:null, defaultW: "36rem", defaultH: null },
};

const NAV_CONFIG = {
  settings: {isOpen:false, zIndex:1000, data:null, anchorRect: null},
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG, NAV_CONFIG};