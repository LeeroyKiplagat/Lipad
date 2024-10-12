import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#363f66] to-[#25a759] text-white py-12 rounded-2xl mb-4">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Call to action */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-0">
            I’m interested to simplify <br /> my business today!
          </h2>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md md:w-76 lg:w-96 w-44 text-black"
            />
            <button className="bg-orange-500 text-white px-2 md:px-6 py-2 rounded-r-md">
              Submit Now
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t pt-8">
          <div>
            <img src={Logo} alt="Lipad Logo" className="w-32 mx-auto sm:mx-0" />
          </div>
          <div className="space-y-4">
            <p className="font-bold">Our Location</p>
            <p>Kunde Rd</p>
            <p>Nairobi, Kenya</p>
            <p>info@lipad.io</p>
            <p>+254112495342</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#">Collect</a>
              </li>
              <li>
                <a href="#">Payout</a>
              </li>
              <li>
                <a href="#">Engage</a>
              </li>
              <li>
                <a href="#">ERP Solutions</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t pt-6 text-center sm:text-left">
          <p>© 2024 All rights reserved</p>
          <div className="mt-4 sm:mt-0 flex space-x-6 justify-center">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-4 justify-center">
            <a
              href="#"
              className="text-white p-2 border-2 border-white rounded-full"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-white p-2 border-2 border-white rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white p-2 border-2 border-white rounded-full"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
