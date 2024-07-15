import React from "react";
import FoodPng from "../../assets/images/food.png"
import Spoon from "../../assets/images/spoon.png"
import Banana from "../../assets/images/banana2.png"
import Leaf from "../../assets/images/leaf.png"
import { IoCartOutline } from "react-icons/io5";
import {motion} from 'framer-motion';


export const SlideUp = (delay)=>{
  return {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay
      },
    },
  };
};

const Hero = () => {
  return (
  
    <main>
    <div className="container min-h-[600px] flex 
    justify-center relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 
      gap-12 lg:gap-24 place-items-center 
      justify-between">

    <div className="space-y-3 mt-14 text-center md:text-left md:mt-0">
      <motion.h1 variants={SlideUp(0.5)} 
        initial="hidden"
        whileInView="show"
        className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent">
        Yummy

        <img 
      src={Leaf} 
      alt=""  
      className="absolute w-[50px] top-0 
      right-0 md:right-[100px]"
      />
        </motion.h1>
        <motion.h1 
         variants={SlideUp(1)} 
          initial="hidden"
        whileInView="show"
        className="text-5xl lg:text-7xl
        xl:text-8xl font-bold uppercase">
          BREAKFAST
        </motion.h1>

        <motion.p 
        variants={SlideUp(1.5)} 
         initial="hidden"
        whileInView="show"
        className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </motion.p>
     <motion.button 
     variants={SlideUp(2)} 
      initial="hidden"
        whileInView="show"
     className="btn-primary inline-block !mt-10">
      <IoCartOutline className="inline mr-2"/>
      Order Now
     </motion.button>
    </div>
    <div className="relative">
    <motion.img initial={{opacity: 0, rotate: 20, x:200, y:100 }}
      whileInView={{opacity: 1, rotate: 0, x:0, y: 0}}
      transition={{duration:0.8 }}
     src={FoodPng} alt="" className="w-[450px] img-shadow" />
    <motion.img 
    initial={{opacity: 0, rotate: 120, x:200, y:100 }}
    whileInView={{opacity: 1, rotate: 0, x:0, y: 0}}
    transition={{duration:0.8 }}

    src={Spoon} alt="" className="w-[350px] absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow"/>
    <motion.img 
    initial={{opacity: 0, rotate: 20, x:200, y:100 }}
    whileInView={{opacity: 1, rotate: 0, x:0, y: 0}}
    transition={{duration:0.8 }}
    src={Banana} alt="" className="w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px] img-shadow"/>
    </div>

    
    
      </div>
    </div>

    <motion.div 
    initial={{opacity: 0, rotate: 60, x: 200, y: 100 }}
    whileInView={{opacity: 1, rotate: 40, x: 0, y: 0}}
    className="w-[2500px] h-[2500px] rounded-3xl bg-lightYellow absolute top-[-30%] left-[70%] z-0"></motion.div>


    
  </main>

  )
};

export default Hero;