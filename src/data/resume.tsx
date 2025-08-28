import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fawas Saka",
  initials: "FS",
  url: "https://x-portfolio-bice.vercel.app",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/Lagos,+Nigeria",
  description:
    "Full-Stack Developer passionate about building dynamic, user-friendly applications. Skilled in modern web technologies and frameworks.",
  summary:
    "Fawas is a driven Full-Stack Developer from Lagos, Nigeria. He has professional experience building responsive, high-performing websites and applications using React.js, Next.js, Tailwind CSS, Supabase, and Stripe. As founder of UptimeText, he developed a real-time website monitoring platform with subscription billing. He thrives in collaborative environments, focusing on creating seamless UI/UX experiences.",
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
        url: "#",
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
        url: "https://x-portfolio-bice.vercel.app",
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
      company: "UptimeText Startup",
      href: "#",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Founder & Full Stack Developer",
      logoUrl: "/uptime.png",
      start: "Jan 2025",
      end: "Current",
      description:
        "Founded and built UptimeText, a real-time website monitoring platform using Next.js, Tailwind CSS, TypeScript, Supabase, Socket.IO, and Stripe. Provides instant SMS alerts on downtime and supports subscription billing.",
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
      id:"1",
      title: "UptimeText",
      href: "/projects/:[id]",
      dates: "Jan 2025 – Current",
      active: true,
      description:
        "A real-time website and API monitoring platform that provides instant SMS alerts during downtime, built with Next.js, TailwindCSS, Supabase, Socket.IO, and Stripe for subscription billing.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Socket.IO",
        "Supabase",
        "Stripe",
      ],
      links: [
        { icon: "🌐", type: "Website", href: "https://uptimetext.vercel.app" },
        { icon: "💻", type: "GitHub", href: "https://github.com/yourusername/uptimetext" },
      ],
      image: "/profile.jpg",
    },
    {
id:"2",
      title: "E-Shop",
      href: "/projects/eshop",
      dates: "Jul 2024 - Dec 2024",
      active: false,
      description: "An e-commerce platform with advanced search and filtering capabilities.",
      technologies: ["React", "Firebase", "Stripe"],
      links: [
        { icon: "🌐", type: "Website", href: "https://eshop.example.com" },
        { icon: "💻", type: "GitHub", href: "https://github.com/yourusername/eshop" },
      ],
      image: "/profile.jpg",
    },
    {
      id:"3",
      title: "Portfolio",
      href: "/projects/portfolio",
      dates: "Mar 2024 - Jun 2024",
      active: false,
      description: "A personal portfolio website showcasing developer projects.",
      technologies: ["Next.js", "TailwindCSS"],
      links: [
        { icon: "🌐", type: "Website", href: "https://portfolio.example.com" },
        { icon: "💻", type: "GitHub", href: "https://github.com/yourusername/portfolio" },
      ],
      image: "/profile.jpg",
    },
     {
      id:"4",
      title: "NovaStack",
      href: "/projects/Novastack",
      dates: "Mar 2024 - Jun 2024",
      active: false,
      description: "An SEO boosting website to help Enterpreneurs grow their prescence online.",
      technologies: ["Next.js", "TailwindCSS"],
      links: [
        { icon: "🌐", type: "Website", href: "https://portfolio.example.com" },
        { icon: "💻", type: "GitHub", href: "https://github.com/yourusername/portfolio" },
      ],
      image: "/profile.jpg",
    },
  ],



  quote:
    '"The only way to do great work is to love what you do." — Steve Jobs',
} as const;
