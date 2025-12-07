import Img1 from "../assets/HolidayBooking.png";
import Img2 from "../assets/pgmangement.png";
import Img3 from "../assets/cardClash.png";
import Img4 from "../assets/bookpeida.png";
import Img5 from "../assets/NexiumTracker.png";
export const projectsData = [
  // 1
  {
    name: "Holiday",
    description:
      "Transforming travel with seamless booking, advanced search, and secure payments for effortless exploration and peace of mind.",
    skills: [
      "TypeScript",
      "ReactJs",
      "NodeJS",
      "ExpressJS",
      "Mongodb",
      // "TailwindCSS",
      "Stripe",
    ],
    imageUrl: Img1,
    githubLink: "https://github.com/codewithnadeem14502/Holiday.com",
    liveSiteLink: "https://hoilday-app.vercel.app/",
  },
  // 2
  {
    name: "Bookpeida",
    description:
      "Bookpedia merges tech and literature, offering an extensive book collection. With personal libraries and smooth navigation, it's a haven for book lovers with payment Integration.",
    skills: ["HTML", "CSS", "ReactJs", "TailwindCSS", "Redux", "RazorPay"],
    imageUrl: Img4,
    githubLink: "https://github.com/codewithnadeem14502/Bookpedia",
    liveSiteLink: "https://bookpedia-bay.vercel.app/",
  },
  // 3
  {
    name: "Card Clash",
    description:
      "Two players face off in a smooth card-matching game with a visually appealing UI, wrong-move tracking for a strategic twist, and unique card designs.",
    skills: [
      "ReactJs",
      "Typescript",
      "NodeJS",
      // "ExpressJS",
      "Mongodb",
      "Frame-motion",
    ],
    imageUrl: Img3,
    githubLink: "https://github.com/codewithnadeem14502/MatchGame",
    liveSiteLink: "https://card-clash-livid.vercel.app/",
  },
  // 4
  {
    name: "PG Mate",
    description:
      "Featuring dual-layered authentication for admins and users. Implemented real-time updates and advanced search functionalities for efficient tenant management,with  history page",
    skills: ["ReactJs", "TailwindCSS", "NodeJS", "ExpressJS", "Mongodb"],
    imageUrl: Img2,
    githubLink: "https://github.com/codewithnadeem14502/pgmanagement",
    liveSiteLink: "https://pgmanagement-seven.vercel.app/",
  },
  // 5
  {
    name: "Nexium Tracker",
    description:
      "A scalable inventory management system, with SOLID principles & maintainable backend architecture. Integrated features like order processing, user management, and advanced validation for data integrity.",
    skills: ["ReactJs", "ExpressJs", "MongoDB", "TailwindCSS", "RazorPay"],
    imageUrl: Img5,
    githubLink: "https://github.com/codewithnadeem14502/NexiumTracker",
    liveSiteLink: "https://nexium-tracker.vercel.app/",
  },
  // Add more project objects as needed
];
