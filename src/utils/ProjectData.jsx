import Img1 from "../assets/HolidayBooking.png";
import Img2 from "../assets/pgmangement.png";
import Img3 from "../assets/cardClash.png";
import Img4 from "../assets/bookpeida.png";

export const projectsData = [
  {
    // 1
    name: "PG Mangement",
    description:
      "Featuring dual-layered authentication for admins and users. Implemented real-time updates and advanced search functionalities for efficient tenant management, alongside comprehensive history pages facilitating data-driven decision-making.",
    skills: ["ReactJs", "TailwindCSS", "NodeJS", "ExpressJS", "Mongodb"],
    imageUrl: Img2,
    githubLink: "https://github.com/codewithnadeem14502/pgmanagement",
    liveSiteLink: "https://pgmanagement-seven.vercel.app/",
  },
  {
    // 2
    name: "Card Clash",
    description:
      "Card Clash brings competitive card-matching to life as two players face off to see who can score the most matches. The player with the best memory and fastest matches wins, making every turn crucial in this ultimate card battle!",
    skills: [
      "ReactJs",
      "Typescript",
      "TailwindCSS",
      "Frame-motion",
      "NodeJS",
      "ExpressJS",
      "Mongodb",
    ],
    imageUrl: Img3,
    githubLink: "https://github.com/codewithnadeem14502/MatchGame",
    liveSiteLink: "https://card-clash-livid.vercel.app/",
  },
  {
    // 3
    name: "Holiday",
    description:
      "Holiday: Transforming travel with seamless booking, advanced search, and secure payments for effortless exploration and peace of mind.      ",
    skills: [
      "ReactJs",
      "NodeJS",
      "ExpressJS",
      "Mongodb",
      "TailwindCSS",
      "TypeScript",
      "Stripe",
    ],
    imageUrl: Img1,
    githubLink: "https://github.com/codewithnadeem14502/Holiday.com",
    liveSiteLink: "https://hoilday-app.vercel.app/",
  },

  {
    name: "Bookpeida",
    description:
      "Bookpedia merges tech and literature, offering an extensive book collection. With personal libraries and smooth navigation, it's a haven for book lovers with payment Integration.",
    skills: ["HTML", "CSS", "ReactJs", "TailwindCSS", "Redux", "RazorPay"],
    imageUrl: Img4,
    githubLink: "https://github.com/codewithnadeem14502/Bookpedia",
    liveSiteLink: "https://bookpedia-bay.vercel.app/",
  },
  // Add more project objects as needed
];
