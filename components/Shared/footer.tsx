// components/Footer.js
import Link from 'next/link';
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <p className="text-gray-700 text-sm">
            © 2023 Your Company, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Use Link for internal navigation, and react-icons for the social icons */}
            <Link href="/facebook" passHref>
              <FaFacebookF className="text-gray-600 hover:text-gray-900 h-5 w-5 cursor-pointer" aria-label="Facebook" />
            </Link>
            <Link href="/instagram" passHref>
              <FaInstagram className="text-gray-600 hover:text-gray-900 h-5 w-5 cursor-pointer" aria-label="Instagram" />
            </Link>
            <Link href="/twitter" passHref>
              <FaTwitter className="text-gray-600 hover:text-gray-900 h-5 w-5 cursor-pointer" aria-label="Twitter" />
            </Link>
            <Link href="/youtube" passHref>
              <FaYoutube className="text-gray-600 hover:text-gray-900 h-5 w-5 cursor-pointer" aria-label="YouTube" />
            </Link>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;
