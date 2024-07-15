import React from "react";
import Logo from '../../assets/images/logo.png';
import {motion} from 'framer-motion';


const Footer = () => {
  return (
 
    <motion.footer
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    className="bg-lightYellow rounded-t-3xl">
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-3 lg:max-w-[300px]">
          <img src={Logo} alt="" className="w-24" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolores laboriosam eum sit ab. At quas deleniti iste, 
            fugit nostrum accusantium non sunt sapiente ratione ducimus quasi laborum, officia atque nemo!
          </p>
          <a className="inline-block mt-6 text-sm" href="#">Contact@food.com</a>
        </div>
        <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <h1 className="text-xl font-semibold">Quick Links</h1>
          <ul className="space-y-3 mt-6">
            <li className="footer-link">Home</li>
            <li className="footer-link">About</li>
            <li className="footer-link">Contact</li>
            <li className="footer-link">Food</li>
          </ul>
        </div>
        <div>
          
        <h1 className="text-xl font-semibold">Quick Links</h1>
          <ul className="space-y-3 mt-6">
            <li className="footer-link">Home</li>
            <li className="footer-link">About</li>
            <li className="footer-link">Contact</li>
            <li className="footer-link">Food</li>
          </ul>
          
        </div>
        <div>
        <h1 className="text-xl font-semibold">Quick Links</h1>
          <ul className="space-y-3 mt-6">
            <li className="footer-link">Home</li>
            <li className="footer-link">About</li>
            <li className="footer-link">Contact</li>
            <li className="footer-link">Food</li>
          </ul>
        </div>
        </div>

      </div>
    </div>
    
    </motion.footer>

    )
};

export default Footer;