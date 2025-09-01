import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fawas Saka - Software Developer",
  initials: "FS",
  url: "https://xprogrammer.vercel.app",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/Lagos,+Nigeria",
  description:
    "Full-Stack Developer passionate about building dynamic, user-friendly applications. Skilled in modern web technologies and frameworks.",
  summary:
    "Hi, Im Fawas Saka a driven Full-Stack Developer .I have professional experience building responsive, high-performing websites and applications using React.js, Next.js, Tailwind CSS, Supabase, Firebase, Clerk and Stripe.Ive developed  websites that work in real-time. I thrive in collaborative environments, focusing on creating seamless UI/UX experiences.",
  avatarUrl: "/profile.jpg",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "TailwindCSS",
    "React.js",
    "Next.js",
    "Git",
    "GitHub",
    "REST API",
    "Vercel",
    "Netlify",
    "Supabase",
    "Firebase",
    "Clerk",
    "AI",
    "Team Collaboration",
    "Time Management",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fawassaka862@gmail.com",
    tel: "09138983178",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Xprogrammer123/",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fawas-saka-924b50305/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Sudo_Programmer",
        icon: Icons.x,
        navbar: true,
      },
      Portfolio: {
        name: "Portfolio",
        url: "https://xprogrammer.vercel.app",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:fawassaka862@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Studee Team Startup",
      href: "#",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Front-End Developer",
      logoUrl: "/studee.png",
      start: "Jun 2025",
      end: "Current",
      description: "Building seamless user interfaces for the startup.",
    },
    {
      company: "LeadForge Startup",
      href: "#",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Founder & Full Stack Developer",
      logoUrl: "/uptime.png",
      start: "Jan 2025",
      end: "Current",
      description:
        "Founded and still building LeadForge, a real-time Next gen Leads Fetching platform using Next.js, Tailwind CSS, TypeScript, Supabase, Apollo api, and Stripe. Provides instant Leads fetched freshly from Linkedin and also follows with an automated message sending to those leads fetched and books a meeting in a matter of days .",
    },
    {
      company: "FreshTech Innovation",
      href: "#",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Front-End Developer (Contract)",
      logoUrl: "/freshtech.png",
      start: "Apr 2025",
      end: "May 2025",
      description:
        "Built and optimized a responsive, high-performing website ensuring seamless user experiences.",
    },
    {
      company: "New Techies",
      href: "#",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Front-End Developer",
      logoUrl: "/newtechies.png",
      start: "Mar 2024",
      end: "Current",
      description:
        "Designed and developed custom websites for businesses, integrated APIs, enhanced UI/UX, and optimized performance using React.js and Next.js.",
    },
  ],

  education: [
    {
      school: "Lagos State University",
      href: "https://lasu.edu.ng",
      degree: "Project Management Technology (Undergraduate)",
      logoUrl: "/lasu.png",
      start: "2024",
      end: "2028",
    },
    {
      school: "King-Emmanuel Progressive College",
      href: "#",
      degree: "High School Diploma in Science",
      logoUrl: "/kingemmanuel.png",
      start: "2018",
      end: "2023",
    },
  ],

projects: [

  {
    id:"11",
    title: "LeadForge AI",
    href: "/projects/edulearn",
    dates: "Jan 2023 - Mar 2023",
    active: false,
    description: "A Next gen Leads fetching platform for enterpreneurs [SAAS]",
    technologies: ["React", "Firebase", "TailwindCSS"],
    links: [
      { icon: "💻", type: "link", href: "https://leadforge-ai.vercel.app/" },
    ],
    image: "/leadforge.png",
  },


  {
    id:"13",
    title: "Xprogrammer Portfolio",
    href: "/projects/streamly",
    dates: "Sep 2022 - Nov 2022",
    active: false,
    description: "A Personal portfolio of mine to showcase my work through out the past years ",
    technologies: ["Next js ", "Magic ui", "Tailwindcss" ,"Aceternity ui"],
    links: [
      { icon: "💻", type: "link", href: "https://xprogrammer.vercel.app/" },
    ],
    image: "/portfolio.png",
  },

  {
    id:"1",
    title: "UptimeText",
    href: "/projects/uptimetext",
    dates: "Jan 2025 – Current",
    active: true,
    description:
      "A real-time website and API monitoring platform that provides instant SMS alerts during downtime.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Socket.IO",
      "Firebase",
      "Stripe",
    ],
    links: [
      { icon: "🌐", type: "Website", href: "https://uptimetext.vercel.app" },
    ],
    image: "/uptime.png",
  },
  {
    id:"2",
    title: "New Techies",
    href: "/projects/newtech",
    dates: "Jul 2024 - Dec 2024",
    active: false,
    description: "A Website for a Team of builders ",
    technologies: ["React js","Tailwindcss" ],
    links: [
      { icon: "🌐", type: "Website", href: "https://new-techies.vercel.app" },
    ],
    image: "/newtech.png",
  },
  {
    id:"3",
    title: "Portfolio",
    href: "/projects/portfolio",
    dates: "Mar 2024 - Jun 2024",
    active: false,
    description: "A personal portfolio website showcasing my skills and projects in my earlier times",
    technologies: ["React.js", "TailwindCSS"],
    links: [
      { icon: "🌐", type: "Website", href: "https://x-portfolio-bice.vercel.app" },
    ],
    image: "/oldport.png",
  },
  {
    id:"4",
    title: "NovaStack",
    href: "/projects/novastack",
    dates: "Mar 2024 - Jun 2024",
    active: false,
    description: "An SEO boosting platform to help entrepreneurs grow their online presence.",
    technologies: ["Next.js", "TailwindCSS"],
    links: [
      { icon: "🌐", type: "Website", href: "https://v0-novastack.vercel.app" },
    ],
    image: "/novastack.png",
  },
  {
    id:"5",
    title: "Trace-it-together",
    href: "/projects/trace",
    dates: "Jan 2024 - Mar 2024",
    active: false,
    description: "A Personal brand Parcel tracker  [Client]",
    technologies: ["React", "Node.js", "supabase"],
    links: [
      { icon: "💻", type: "Website", href: "https://trace-it-together.vercel.app" },
    ],
    image: "/trace.png",
  },
  {
    id:"6",
    title: "USPS express",
    href: "/projects/usps",
    dates: "Nov 2023 - Jan 2024",
    active: false,
    description: "A Personal brand Parcel tracker  [Client]",
    technologies: ["React.js", "Supabase", "TailwindCSS"],
    links: [
      { icon: "💻", type: "GitHub", href: "https://usps-express.vercel.app" },
    ],
    image: "/usps.png",
  },
  {
    id:"7",
    title: "Fresh Tech Innovations [landing page]",
    href: "/projects/cryptotracker",
    dates: "Sep 2023 - Nov 2023",
    active: false,
    description: "A Landing page for a Tech innovation team [Client]",
    technologies: ["React js", "Tailwindcss"],
    links: [
      { icon: "💻", type: "GitHub", href: "https://freshtech-innovation.vercel.app" },
    ],
    image: "/freshtech.png",
  },
  {
    id:"8",
    title: "Dapp Web3 ",
    href: "/projects/fittrack",
    dates: "Jul 2023 - Sep 2023",
    active: false,
    description: "A Web3 based platform for collecting data from users ",
    technologies: ["React js ", "supabase"],
    links: [
      { icon: "💻", type: "GitHub", href: "https://dapp-web3-app.vercel.app" },
    ],
    image: "/dapp.png",
  },
  {
    id:"9",
    title: "Rextaurant Landing",
    href: "/projects/chatify",
    dates: "May 2023 - Jul 2023",
    active: false,
    description: "An Hero section for a Restaurant [personal]",
    technologies: ["React", "Tailwindcss"],
    links: [
      { icon: "💻", type: "GitHub", href: "https://food-landing-hero.vercel.app" },
    ],
    image: "/food.png",
  },
  {
    id:"10",
    title: "Kaliedo",
    href: "/projects/Kaliedo",
    dates: "Mar 2023 - May 2023",
    active: false,
    description: "A Children/students learning platform landing page [Client]",
    technologies: ["Next.js", "TailwindCSS",],
    links: [
      { icon: "💻", type: "GitHub", href: "https://kaliedo-landing-waitlist.vercel.app" },
    ],
    image: "/kaliedo.png",
  },
  
  {
    id:"12",
    title: "Tpadride",
    href: "/projects/eventify",
    dates: "Nov 2022 - Jan 2023",
    active: false,
    description: "A Car renting service plstform",
    technologies: ["Reactjs", "Prisma", "Express js ", "Node js" ,"Tailwindcss"],
    links: [
      { icon: "💻", type: "GitHub", href: "https://tpadride-service.vercel.app" },
    ],
    image: "/tpadride.png",
  },

],



  quote:
    '"The only way to do great work is to love what you do." — Steve Jobs',
} as const;
