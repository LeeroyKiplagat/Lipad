import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
import Logo from "../assets/logo2.png";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#363f66]  to-[#25a759] text-white py-12 rounded-2xl mb-10">
      <div className="container mx-auto px-8">
        {/* Call to action */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">
            I’m interested to simplify <br /> my business today!
          </h2>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md w-72 text-black"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-r-md">
              Submit Now
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t pt-8">
          <div>
            <img src={Logo} alt="Lipad Logo" className="w-32" />{" "}
          </div>
          <div className="space-y-4">
            <p>Our Location</p>
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
                <a href="#">Contact Us</a>
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

        <div className="mt-10 flex justify-between items-center border-t  pt-6">
          <p>© 2024 All rights reserved</p>
          <div className="flex space-x-6">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white p-2 border-2 border-white rounded-full"
            >
              <i className="fab fa-linkedin-in size-4">
                <FaLinkedin />
              </i>
            </a>
            <a
              href="#"
              className="text-white p-2 border-2 border-white rounded-full"
            >
              <i className="fab fa-facebook-f">
                <FaFacebookF />
              </i>
            </a>
            <a
              href="#"
              className="text-white p-2 border-2 border-white rounded-full"
            >
              <i className="">
                <FaTwitter />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
