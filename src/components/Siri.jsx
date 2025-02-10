import { delay, transform } from "motion";
import { motion } from "motion/react"
import Sirivid from "../assets/Siri.mp4"
import python from "../assets/python.png";
import ai from "../assets/ai.png";
import atom from "../assets/atom.png";
import binary from "../assets/binary.png";
import gpt from "../assets/gpt.png";
import neuro from "../assets/neuro.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";


import { Typewrite } from "../components/Typewrite"

const move = {
    hidden: {  },
    visible: {
     
      y: ["0px", "-8px", "0px"],  
      transition: {
        delay: 0.5,
        duration: 2,    
        repeat: Infinity,  
        repeatType: "loop",  
        ease: "easeInOut"   
      }
    }
  };

export function Siri(){
    return(
        <div className="flex  justify-center mb-14 items-center w-full relative">
            <video className="w-10/12  object-cover "autoPlay loop muted src={Sirivid}></video>
<motion.img variants={move} initial="hidden" animate="visible" src={python} alt="Python" className=" absolute top-[10%] left-[8%] w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 " />
<motion.img variants={move} initial="hidden" animate="visible"  src={ai} alt="AI" className=" absolute top-[20%] left-[70%] w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14" />
<motion.img variants={move} initial="hidden" animate="visible"  src={mysql} alt="Mysql" className="absolute top-[15%] right-[6%] w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14" />
<motion.img variants={move} initial="hidden" animate="visible"  src={atom} alt="Atom" className="absolute top-[42%] left-[18%] w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14" />
<motion.img variants={move} initial="hidden" animate="visible"  src={binary} alt="Binary" className="absolute top-[48%] right-[11%] w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14" />
<motion.img variants={move} initial="hidden" animate="visible"  src={gpt} alt="GPT" className="absolute bottom-[10%] left-[12%] w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14" />
<motion.img variants={move} initial="hidden" animate="visible"  src={neuro} alt="Neuro" className="absolute top-[8%] left-[36%] w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14" />
<motion.img variants={move} initial="hidden" animate="visible"  src={java} alt="Java" className="absolute bottom-[8%] right-[16%] w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14" />

<div className=" flex justify-center md:mb-12 mb-2 absolute bottom-0 filter drop-shadow-[0_4px_20px_#6b46c1] "><Typewrite/></div> 

        </div>
        
    );
}