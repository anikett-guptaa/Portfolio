import { motion } from "motion/react"
import tailwind from '../assets/icons/tailwindcss.svg';
import css3Icon from '../assets/icons/css3.svg';
import expressIcon from '../assets/icons/express.svg';
import githubIcon from '../assets/icons/github.svg';
import mongodbIcon from '../assets/icons/mongodb.svg';
import nodeIcon from '../assets/icons/node.svg';
import pythonIcon from '../assets/icons/python.svg';
import mysql from '../assets/icons/mysql.svg';

export function Tech() {

    const upper = [
        { src: tailwind, name: "TailwindCss" },
        { src: css3Icon, name: "CSS" },
        { src: expressIcon, name: "Express" },
        { src: githubIcon, name: "GitHub" },
        { src: mongodbIcon, name: "MongoDB" },
        { src: nodeIcon, name: "Node.js" },
        { src: pythonIcon, name: "Python" },
        { src: mysql, name: "MySql" }
    ];
    
   return (
    <>
    <div className="  flex-col justify-around items-center shadow-[0_0_30px_5px_#6b46c1] p-3 gap-6">

    <h2 className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-400 via-purple-600 to-purple-900 sm:border-b-2 border-purple-500 rounded-lg shadow-xl shadow-purple-500/50">
     Technologies
    </h2>
        
        <div className="flex overflow-x-hidden my-5 mt-8">
        <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
        >
            {upper.map((item, index) => (
                <div key={index} className="flex pr-20">

                    <div  className="text-white inline-flex items-center border-2 shadow-[0_0_30px_5px_#6b46c1] border-purple-500 rounded-xl p-2 w-36 h-16 justify-around">
                   <span> <img className="w-8 h-8 mr-2" src={item.src} alt={item.name} /></span>
                    <span >{item.name}</span>
                     </div>
                </div>
            ))}
        </motion.div>


        <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration:25, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
        >
            {upper.map((item, index) => (
                <div key={index} className="flex pr-20">
                    <div className="text-white inline-flex items-center border-2 shadow-[0_0_30px_5px_#6b46c1] border-purple-500 rounded-xl p-2 w-36 h-16 justify-around">
                   <span> <img className="w-8 h-8 mr-2" src={item.src} alt={item.name} /></span>
                    <span >{item.name}</span> </div>
                </div>
            ))}
        </motion.div>

        
    </div>
    
    <div className="flex overflow-x-hidden my-5 mt-8">

    <motion.div
            initial={{ x: "-100%"}}
            animate={{ x: 0 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
        >
            {upper.map((item, index) => (
                <div key={index} className="flex pr-20">

                    <div  className="text-white inline-flex items-center border-2 shadow-[0_0_30px_5px_#6b46c1] border-purple-500 rounded-xl p-2 w-36 h-16 justify-around">
                   <span> <img className="w-8 h-8 mr-2" src={item.src} alt={item.name} /></span>
                    <span >{item.name}</span>
                     </div>
                </div>
            ))}
        </motion.div>

        <motion.div
            initial={{ x: "-100%"}}
            animate={{ x: 0 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0"
        >
            {upper.map((item, index) => (
                <div key={index} className="flex pr-20">

                    <div  className="text-white inline-flex items-center border-2 shadow-[0_0_30px_5px_#6b46c1] border-purple-500 rounded-xl p-2 w-36 h-16 justify-around">
                   <span> <img className="w-8 h-8 mr-2" src={item.src} alt={item.name} /></span>
                    <span >{item.name}</span>
                     </div>
                </div>
            ))}
        </motion.div>


    </div>
    
    </div>
       </>
  );
}