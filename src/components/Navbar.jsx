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
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
    </div>
  </nav>
  );
};

export default Navbar 