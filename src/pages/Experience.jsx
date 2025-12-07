import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaBriefcase, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { LuConstruction } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { useTheme } from "../utils/ThemeContext";

const Experience = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`pt-10 md:pt-20  px-3 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-white"
      }`}
      id="experience"
    >
      <h1
        className={`mb-16 text-center text-5xl font-semibold ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {" "}
        My Experience
      </h1>
      <VerticalTimeline className="">
        <style>
          {`
        .vertical-timeline::before {
          background-color: ${isDarkMode ? "gray" : "#f3f4f6"};  
        }
      `}
        </style>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#f3f4f6",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.05)"
              : "1px solid rgba(0, 0, 0, 0.05)",
            color: isDarkMode ? "#fff" : "#000",
            fontWeight: "bold",
          }}
          date="Jun 2025 - Present"
          contentArrowStyle={{ borderRight: "20px solid  rgb(226 232 240)" }}
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<LuConstruction />}
        >
          <h3 className="vertical-timeline-element-title  text-xl">
            Product Developer
          </h3>
          <div className="flex  items-center">
            <HiBuildingOffice2 className="mr-2 text-slate-500" />
            <h4 className="vertical-timeline-element-subtitle font-semibold">
              Inncircles · Full-Time (onsite - HYD)
            </h4>
          </div>

          <p>
            At Inncircles, I work as a Product Developer, building scalable
            features across web and mobile. I implemented real-time alerting
            with AWS CloudWatch and Slack, reducing issue response time by 60%,
            and enhanced the lead lifecycle with post-engagement tracking and
            smart filtering. I also upgraded the payment module to support
            multi-transaction flows and optimized queries on 800K+ records,
            achieving 3x faster performance, while improving authentication with
            secure multi-session support across platforms.{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#f3f4f6",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.05)"
              : "1px solid rgba(0, 0, 0, 0.05)",
            color: isDarkMode ? "#fff" : "#000",
            fontWeight: "bold",
          }}
          contentArrowStyle={{ borderRight: "20px solid  rgb(226 232 240)" }}
          date="Jul 2024 - Jun 2025"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<IoPersonSharp />}
        >
          <h3 className="vertical-timeline-element-title  text-xl">
            Founding Software Developer
          </h3>
          <div className="flex  items-center">
            <HiBuildingOffice2 className="mr-2 text-slate-500" />
            <h4 className="vertical-timeline-element-subtitle font-semibold">
              Airia · Full-Time (Remote)
            </h4>
          </div>

          <p>
            Spearheaded developing front-end interfaces for three different
            applications using JavaScript, Go, and Python, ensuring seamless
            integration with back-end services and enhancing user engagement by
            20% through improved interactivity and deploying the applications on
            Docker and AWS. • Architected and implemented front-end solutions
            across three applications, focusing on pixel-perfect designs, which
            streamlined the application process, leading to a resulting in a
            robust, scalable applications.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#f3f4f6",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.05)"
              : "1px solid rgba(0, 0, 0, 0.05)",
            color: isDarkMode ? "#fff" : "#000",
            fontWeight: "bold",
          }}
          contentArrowStyle={{ borderRight: "20px solid  rgb(226 232 240)" }}
          date="Feb 2024 - Jun 2024"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<FaGlobe />}
        >
          <h3 className="vertical-timeline-element-title  text-xl">
            Founding SDE Full Stack Developer
          </h3>
          <div className="flex  items-center">
            <HiBuildingOffice2 className="mr-2 text-slate-500" />
            <h4 className="vertical-timeline-element-subtitle font-semibold">
              Textr AI · Internship (Remote)
            </h4>
          </div>

          <p>
            As a pivotal member of the Textr AI team, I specialize in refining
            both backend algorithms and frontend interfaces. With a blend of
            technical prowess and user-centric design, I am dedicated to
            ensuring Textr AI stands out as a top choice for SEO optimization.
            My role involves imporove user interface for precision and crafting
            intuitive interfaces for seamless user experiences. Together, we're
            eliminating guesswork and empowering creators to rank their websites
            at the top with confidence.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#f3f4f6",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.05)"
              : "1px solid rgba(0, 0, 0, 0.05)",
            color: isDarkMode ? "#fff" : "#000",
            fontWeight: "bold",
          }}
          contentArrowStyle={{ borderRight: "20px solid  rgb(226 232 240)" }}
          date="Jan 2024 - Feb 2024"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<MdCastForEducation />}
        >
          <h3 className="vertical-timeline-element-title text-xl">
            Software Developer
          </h3>
          <div className="flex  items-center">
            <HiBuildingOffice2 className="mr-2 text-slate-500" />
            <h4 className="vertical-timeline-element-subtitle font-semibold">
              Sun E-Learning · Internship (Remote)
            </h4>
          </div>

          <p>
            Worked on developing educational software solutions to enhance the
            learning experience of students. Collaborated with a
            cross-functional team to design and implement features, ensuring
            high-quality code standards and optimal performance.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#f3f4f6",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.05)"
              : "1px solid rgba(0, 0, 0, 0.05)",
            color: isDarkMode ? "#fff" : "#000",
            fontWeight: "bold",
          }}
          contentArrowStyle={{ borderRight: "20px solid  rgb(226 232 240)" }}
          date="Mar 2023 - Jul 2023"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<FaChalkboardTeacher />}
        >
          <h3 className="vertical-timeline-element-title text-xl">
            Teaching Assistant
          </h3>
          <div className="flex  items-center">
            <HiBuildingOffice2 className="mr-2 text-slate-500" />
            <h4 className="vertical-timeline-element-subtitle font-semibold">
              Coding Ninjas · Internship (Remote)
            </h4>
          </div>

          <p>
            As a teaching assistant in data structures and algorithms (DSA) for
            C++, I prioritize ensuring students’ strong conceptual
            understanding. Mentored over 120 students in DSA and
            problem-solving, successfully resolving 350+ doubts with an average
            rating of 4.9, showcasing my effective teaching abilities.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "#f3f4f6",
            border: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.05)"
              : "1px solid rgba(0, 0, 0, 0.05)",
            color: isDarkMode ? "#fff" : "#000",
            fontWeight: "bold",
          }}
          contentArrowStyle={{ borderRight: "20px solid  rgb(226 232 240)" }}
          date="Jan 2023 - Mar 2023"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title text-xl">
            Frontend Developer
          </h3>
          <div className="flex  items-center">
            <HiBuildingOffice2 className="mr-2 text-slate-500" />
            <h4 className="vertical-timeline-element-subtitle font-semibold">
              Codelinear · Internship (Remote)
            </h4>
          </div>

          <p>
            Design visually appealing and intuitive web interfaces using HTML,
            CSS, JavaScript, and React. Collaborate with designers and
            developers to optimize performance and deliver seamless user
            experiences. Implement captivating web interfaces with a focus on
            responsiveness, accessibility, and optimal performance. Drive
            cross-functional collaboration to exceed expectations and deliver
            user-centric websites.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Experience;
