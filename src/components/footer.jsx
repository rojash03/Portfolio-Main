import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-textColor p-4">
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-serif">Follow Me</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-x-6 p-2">
          <a
            href="https://github.com/rojash03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl cursor-pointer transition-transform duration-200 hover:scale-125" />
          </a>
          <a
            href="https://www.linkedin.com/in/rojash-thapa-b10a192b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl cursor-pointer transition-transform duration-200 hover:scale-125" />
          </a>
          <a
            href="https://www.facebook.com/rojash.thapa.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-xl cursor-pointer transition-transform duration-200 hover:scale-125" />
          </a>
          <a
            href="https://www.instagram.com/theyhaterojash/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-xl cursor-pointer transition-transform duration-200 hover:scale-125"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
        <span className="text-sm">© {currentYear} Rojash. All rights reserved.</span>
      </div>
    </footer>
  );
}
export default Footer;
