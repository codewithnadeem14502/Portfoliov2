import { useTheme } from "../utils/ThemeContext";
import ShowCase from "./ShowCase";
import { products } from "../utils/Details";

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="about"
      className={`w-full pt-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div
        className={`flex flex-col justify-center text-center items-center w-full mx-auto px-5 lg:px-56 mb-10 md:mb-28 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <div className="mb-8">
          <h1 className="text-5xl font-bold my-5 ">About me</h1>
          <p className="text-lg md:text-2xl mt-10">
            I started my journey into the world of programming during my
            academic years. What kick-started as a curious exploration
            eventually led me to dive deep into frontend development, especially
            with React. I've crafted a bunch of cool and dynamic applications,
            refining my skills and developing a genuine passion for coding.
          </p>
        </div>
        <div className="mb-8">
          <p className="text-lg md:text-2xl mt-5">
            Gradually, I transitioned from a frontend developer to a full-stack
            enthusiast, exploring the intricacies of the MERN stack (MongoDB,
            Express.js, React, Node.js). When I'm not coding, you might find me
            spending time with my family or trying to squeeze in some gaming
            sessions when time permits (although that's a rarity these days!).
          </p>
        </div>
        <div>
          <p className="text-lg md:text-2xl mt-5">
            Currently, I'm enthusiastically exploring the fascinating world of
            animations and diving deeper into mastering TypeScript. This aligns
            perfectly with my commitment to continuous learning and staying
            up-to-date in the ever-evolving programming landscape.
          </p>
        </div>
      </div>
      <ShowCase products={products} />
    </section>
  );
};

export default About;
