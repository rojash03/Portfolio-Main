import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-textColor">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl font-semibold display-title">Stay Connected</h1>
            <p className="text-sm text-gray-200 mt-1">Follow along for new projects and updates.</p>
          </div>
          <div className="flex gap-x-6">
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
      <div className="flex justify-center items-center mt-6 text-sm text-gray-200">
        <span>© {currentYear} Rojash. All rights reserved.</span>
      </div>
      </div>
    </footer>
  );
}
export default Footer;
