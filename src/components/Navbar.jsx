import logo from "../assets/websiteLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6 pl-6">
    <div className="left-paddingflex flex-shrink-0 items-center">
        <img src={logo} alt="Website Logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/yogya-agrawal/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://github.com/yogya2005" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-500 transition duration-300" />
        </a>
        <a href="https://www.instagram.com/yogya.agrawal/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition duration-300" />
        </a>
    </div>
  </nav>
  );
};

export default Navbar 