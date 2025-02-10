import portfolio from "../assets/mactest.webp"
import netflix from "../assets/ipadtest.webp"

export function Works() {
  return (
    <>
      <section id="LatestWorks" className="max-w-screen-xl  mx-auto px-4 relative pb-8 sm:pb-16 text-white">
      <div className="relative z-10 w-full">
  
  <div className="absolute top-0 bottom-0 left-0 right-0 bg-black z-0">
    
  </div>

  
  <h2 className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-400 via-purple-600 to-purple-900 sm:border-b-2 border-purple-500 rounded-lg shadow-xl shadow-purple-500/50">
  Latest Works
</h2>
</div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <div className="h-[1px] left-1/4 right-1/2 bg-[#459bd5] shadow-[0_0_30px_5px_#459bd5] absolute top-1/2 hidden sm:block"></div>
          <a href="#" className="flex w-full relative justify-center sm:justify-start">
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img className="max-w-[450px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(69,155,213,0.6)]" 
                src={portfolio} alt="img" />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Portfolio
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
          <div className="w-full">
            <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">Portfolio</h3>
            <span className="text-[#459bd5] text-base md:text-lg">(Personal Portfolio Website)</span>
            <p className="text-justify text-sm md:text-base mt-2">
            Developed my personal portfolio using React and Tailwind CSS. The site is fully responsive, with interactive components and smooth animations, showcasing my skills, projects, and experience.
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#react.js</li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#tailwind</li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#css</li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#javascript</li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#html</li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#figma</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">Netflix Clone</h3>
            <span className="text-[#ffe578] text-base md:text-lg">(Streaming Platform)</span>
            <p className="text-justify text-sm md:text-base mt-2">
            Built a Netflix clone using HTML, CSS, and JavaScript. The platform offers a responsive design, dynamic content display, and smooth interactions, mimicking the layout and features of a popular streaming service for both movies and web series.
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#html</li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#css</li>
              <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#javascript</li>
              
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4  bg-[#ffe578] shadow-[0_0_40px_5px_#ffe578] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a href="#" className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start">
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img className="max-w-[500px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(255,229,120,0.6)]"
                src={netflix} alt="" />
              <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Netflix
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>
        <div className="w-[2px] hidden sm:block bg-purple-600 shadow-[0_0_30px_5px_#6b46c1] z-0 absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
      </section>
      
    </>
  );
}