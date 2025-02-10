import { Link, Element } from 'react-scroll';

export function Footer(){
    return(
        <footer className="relative bg-[#111] mt-32 text-white">
        <div className="absolute top-0 left-0 w-[100%] overflow-hidden bg-[#111]">
            <svg data-name="Layer 1"
             xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            >
                
            
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                    250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                    3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="relative block h-[600px] fill-black"></path>
            </svg>
        <div className="text-white bg-[#111]  flex flex-col items-center justify-between space-y-8  font-serif">
           
                <h1 className="text-xl sm:text-3xl">Connect With Me!</h1>
           
           
          <div className="flex flex-row justify-between items-center space-x-10 sm:space-x-16">
          <svg className="sm:w-9 w-6 hover:text-white hover:scale-110 ease-in-out duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
         <path
        fill="currentColor"
        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
           </svg>
           <svg className="sm:w-9 w-6 hover:text-white hover:scale-110 ease-in-out duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
    <path
    fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
     </svg>
     
     <svg className="sm:w-9 w-6 hover:text-white hover:scale-110 ease-in-out duration-200"  fill="currentColor" role="img" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path></svg>
          </div>
          <div className="flex flex-row sm:text-xl justify-between items-center space-x-8 sm:space-x-20">
          <Link to="Home" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">Home</Link>
          <Link to="LatestWorks" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">Latest Works</Link>
          <Link to="About" smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">About</Link>           
          </div>
          <div className="flex">
          @2025 Aniket Gupta. All rights reserved
          </div>        
        </div>
        </div>
        </footer>
    );
}