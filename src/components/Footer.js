import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <ul className="space-y-2">
              <li>
                <NavLink to="/aboutUs" className="hover:text-blue-500 transition duration-300">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-blue-500 transition duration-300">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy" className="hover:text-blue-500 transition duration-300">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className="hover:text-blue-500 transition duration-300">
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl hover:text-blue-500 transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-blue-500 transition duration-300" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul>
              <li>
                <p className="text-gray-400">Email: <a href="mailto:support@mybrand.com">support@mybrand.com</a></p>
              </li>
              <li>
                <p className="text-gray-400">Phone: +1 234 567 890</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Sign up to get the latest updates.</p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-lg text-gray-800 w-full mb-4"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className='hidden md:block'></div>
          <div className='hidden md:block'></div>
          <div className='hidden md:block'></div>
          <div className="text-right text-sm mt-8 place-items-end">
            <p>&copy; {new Date().getFullYear()} MyBrand. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
