import React from "react";
import Hero from "../components/Hero";
import profileImage from "../assets/me.jpg";
const Header = () => {
  return <Hero imageSrc={profileImage} altText="Alternate Text" />;
};

export default Header;
