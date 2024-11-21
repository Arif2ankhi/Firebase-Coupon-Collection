// import React from "react";

// const Footer = () => {
//   return (
  
//     <footer className="footer bg-base-300 text-base-content p-10 mt-8">
//       <nav>
//         <h6 className="footer-title">Services</h6>
//         <a className="link link-hover" href="/branding">
//           Branding
//         </a>
//         <a className="link link-hover" href="/design">
//           Design
//         </a>
//         <a className="link link-hover" href="/marketing">
//           Marketing
//         </a>
//         <a className="link link-hover" href="/advertisement">
//           Advertisement
//         </a>
//       </nav>
//       <nav>
//         <h6 className="footer-title">Company</h6>
//         <a className="link link-hover" href="/about-us">
//           About us
//         </a>
//         <a className="link link-hover" href="/contact">
//           Contact
//         </a>
//         <a className="link link-hover" href="/jobs">
//           Jobs
//         </a>
//         <a className="link link-hover" href="/press-kit">
//           Press kit
//         </a>
//       </nav>
//       <nav>
//         <h6 className="footer-title">Social</h6>
//         <div className="grid grid-flow-col gap-4">
//           {/* Twitter */}
//           <a
//             href="https://twitter.com/yourhandle"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               className="fill-current"
//             >
//               <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//             </svg>
//           </a>
//           {/* YouTube */}
//           <a
//             href="https://youtube.com/yourchannel"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               className="fill-current"
//             >
//               <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//             </svg>
//           </a>
//           {/* Facebook */}
//           <a
//             href="https://facebook.com/yourhandle"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               className="fill-current"
//             >
//               <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//             </svg>
//           </a>
//         </div>
//       </nav>
//       <div>
//       <div className=''>
            
//             <hr />
    
                
//             <p className='text-center text-white font-semibold  p-8'
//             >@2024 Your Company All Rights Reserved</p>
//             </div>
       
//       </div>
//     </footer>
  
//   );
// };

// export default Footer;

import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-200 text-white py-12">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="flex flex-col items-start">
            <h3 className="text-black text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-black">Any Questions</p>
            <ul className="mt-4 text-black">
              <li>Email: Discount.coupon@com</li>
              <li>Phone: +448323421</li>
              <li>Address: East london, Uk</li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-semibold mb-4 text-red-950">Subscribe us</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-[#e4edd5] text-black py-2 rounded-md hover:bg-slate-500 hover:text-white transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex justify-center sm:justify-start items-center space-x-6 mt-4 sm:mt-0">
          <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-900 hover:text-red-600 transition duration-200"
            >
              <FaYoutube className="text-2xl" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-600 transition duration-200"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-600 transition duration-200"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-400 transition duration-200"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="text-center mt-08">
          <p className="text-black font-semibold mt-6">
             @Copyright Discount pro Coupon. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;