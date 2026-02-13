import portfolio from "../assets/mactest.webp";
import netflix from "../assets/ipadtest.webp";
import prepmate from "../assets/prepmatepic.png";
import predictor from "../assets/predictor.png";
import inksphere from "../assets/inksphere.png";
import coreapi from "../assets/coreapi.png";
import aidoctor from "../assets/aidoctor.png";

export function Works() {
  return (
    <>
      <section
        id="LatestWorks"
        className="max-w-screen-xl  mx-auto px-4 relative pb-8 sm:pb-16 text-white"
      >
        <div className="relative z-10 w-full">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black z-0"></div>

          <h2 className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-400 via-purple-600 to-purple-900 sm:border-b-2 border-purple-500 rounded-lg shadow-xl shadow-purple-500/50">
            Latest Works
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#84cc16] font-bold text-2xl md:text-4xl">
              PrepMate
            </h3>
            <span className="text-[#84cc16] text-base md:text-lg">
              (Job Preparation & Interview Platform)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              PrepMate is a job preparation platform focused on helping
              candidates get interview-ready through real-world practice. The
              platform is designed to support AI-powered voice-based mock
              interviews, interview performance analytics, resume building, and
              skill-based quizzes. PrepMate aims to simulate real interview
              scenarios and provide actionable feedback to help users improve
              communication, confidence, and technical readiness.
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #nextjs
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #Vapi
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #voiceai
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #interviewprep
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #analytics
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #resume
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #quiz
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #careertechnology
              </li>
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4  bg-[#84cc16] shadow-[0_0_40px_5px_#84cc16] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#84cc16] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://prepmate-aniket.vercel.app/"
            target="_blank"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[500px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(132,204,22,0.6)]"
                src={prepmate}
                alt=""
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#84cc16] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                PrepMate
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="w-4 h-4 rounded-full border-[3px] border-[#f59e0b] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <div className="h-[1px] left-1/4 right-1/2 bg-[#f59e0b] shadow-[0_0_40px_5px_#f59e0b] absolute top-1/2 hidden sm:block"></div>
          <a
            href="#"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img
                className="max-w-[450px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(245,158,11,0.6)]"
                src={coreapi}
                alt="img"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#f59e0b] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                CoreAPI
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div className="w-full">
            <h3 className="text-[#f59e0b] font-bold text-2xl md:text-4xl">
              CoreAPI
            </h3>
            <span className="text-[#f59e0b] text-base md:text-lg">
              (Scalable REST API Backend)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              CoreAPI is a scalable REST API backend built using Node.js and
              Express, designed with a clean, modular architecture. The backend
              implements JWT-based authentication, role-ready middleware, and
              secure password hashing with bcrypt. MongoDB is used for
              persistent data storage, and the application is containerized
              using Docker to ensure consistency across environments. The
              backend is designed to support future frontend integration and
              production deployment.
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#f59e0b] px-[10px] py-[5px] text-sm md:text-base">
                #nodejs
              </li>
              <li className="border rounded-[50px] border-[#f59e0b] px-[10px] py-[5px] text-sm md:text-base">
                #express
              </li>
              <li className="border rounded-[50px] border-[#f59e0b] px-[10px] py-[5px] text-sm md:text-base">
                #restapi
              </li>
              <li className="border rounded-[50px] border-[#f59e0b] px-[10px] py-[5px] text-sm md:text-base">
                #mongodb
              </li>
              <li className="border rounded-[50px] border-[#f59e0b] px-[10px] py-[5px] text-sm md:text-base">
                #jwt
              </li>
              <li className="border rounded-[50px] border-[#f59e0b] px-[10px] py-[5px] text-sm md:text-base">
                #bcrypt
              </li>
              <li className="border rounded-[50px] border-[#f59e0b] px-[10px] py-[5px] text-sm md:text-base">
                #docker
              </li>
              <li className="border rounded-[50px] border-[#f59e0b] px-[10px] py-[5px] text-sm md:text-base">
                #cors
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#95f6fb] font-bold text-2xl md:text-4xl">
              AI-Doctor
            </h3>
            <span className="text-[#95f6fb] text-base md:text-lg">
              (AI-Powered Healthcare Assistant)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              AI-Doctor is an AI-powered healthcare platform designed to assist
              users with preliminary symptom analysis and medical guidance. The
              application focuses on clean user experience, scalable backend
              services, and AI-driven insights to improve accessibility to
              healthcare information.
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#95f6fb] px-[10px] py-[5px] text-sm md:text-base">
                #react
              </li>
              <li className="border rounded-[50px] border-[#95f6fb] px-[10px] py-[5px] text-sm md:text-base">
                #nodejs
              </li>
              <li className="border rounded-[50px] border-[#95f6fb] px-[10px] py-[5px] text-sm md:text-base">
                #express
              </li>
              <li className="border rounded-[50px] border-[#95f6fb] px-[10px] py-[5px] text-sm md:text-base">
                #mongodb
              </li>
              <li className="border rounded-[50px] border-[#95f6fb] px-[10px] py-[5px] text-sm md:text-base">
                #ai
              </li>
              <li className="border rounded-[50px] border-[#95f6fb] px-[10px] py-[5px] text-sm md:text-base">
                #healthtech
              </li>
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4  bg-[#95f6fb] shadow-[0_0_40px_5px_#95f6fb] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#95f6fb] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://your-ai-doctor.netlify.app/"
            target="_blank"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[500px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(149,246,251,0.6)]"
                src={aidoctor}
                alt=""
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#95f6fb] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                AI-Doctor{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="w-4 h-4 rounded-full border-[3px] border-[#f43f5e] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <div className="h-[1px] left-1/4 right-1/2 bg-[#f43f5e] shadow-[0_0_40px_5px_#f43f5e] absolute top-1/2 hidden sm:block"></div>
          <a
            href="#"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img
                className="max-w-[450px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(244,63,94,0.6)]"
                src={predictor}
                alt="img"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#f43f5e] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Predictor
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div className="w-full">
            <h3 className="text-[#f43f5e] font-bold text-2xl md:text-4xl">
              Student Performance Predictor
            </h3>
            <span className="text-[#f43f5e] text-base md:text-lg">
              (Machine Learning Web Application)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Student Performance Predictor is a machine learning-based web
              application that predicts a student’s math score based on
              demographic and academic features. Multiple regression models are
              trained and evaluated using R² score, and the best-performing
              model is automatically selected. The model is served through a
              Flask-based web interface for real-time predictions.
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#f43f5e] px-[10px] py-[5px] text-sm md:text-base">
                #python
              </li>
              <li className="border rounded-[50px] border-[#f43f5e] px-[10px] py-[5px] text-sm md:text-base">
                #machinelearning
              </li>
              <li className="border rounded-[50px] border-[#f43f5e] px-[10px] py-[5px] text-sm md:text-base">
                #flask
              </li>
              <li className="border rounded-[50px] border-[#f43f5e] px-[10px] py-[5px] text-sm md:text-base">
                #scikitlearn
              </li>
              <li className="border rounded-[50px] border-[#f43f5e] px-[10px] py-[5px] text-sm md:text-base">
                #pandas
              </li>
              <li className="border rounded-[50px] border-[#f43f5e] px-[10px] py-[5px] text-sm md:text-base">
                #numpy
              </li>
              <li className="border rounded-[50px] border-[#f43f5e] px-[10px] py-[5px] text-sm md:text-base">
                #regression
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#14b8a6] font-bold text-2xl md:text-4xl">
              InkSphere
            </h3>
            <span className="text-[#14b8a6] text-base md:text-lg">
              (Full-Stack Blogging Platform)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              InkSphere is a full-stack blogging platform that allows users to
              create, publish, and manage blogs with secure authentication. The
              application features a modern UI, seamless content handling, and
              robust backend APIs. The frontend is deployed on Vercel, while the
              backend runs on Render, handling authentication, blog storage, and
              API requests.
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#14b8a6] px-[10px] py-[5px] text-sm md:text-base">
                #react
              </li>
              <li className="border rounded-[50px] border-[#14b8a6] px-[10px] py-[5px] text-sm md:text-base">
                #nodejs
              </li>
              <li className="border rounded-[50px] border-[#14b8a6] px-[10px] py-[5px] text-sm md:text-base">
                #express
              </li>
              <li className="border rounded-[50px] border-[#14b8a6] px-[10px] py-[5px] text-sm md:text-base">
                #mongodb
              </li>
              <li className="border rounded-[50px] border-[#14b8a6] px-[10px] py-[5px] text-sm md:text-base">
                #jwt
              </li>
              <li className="border rounded-[50px] border-[#14b8a6] px-[10px] py-[5px] text-sm md:text-base">
                #bcrypt
              </li>
              <li className="border rounded-[50px] border-[#14b8a6] px-[10px] py-[5px] text-sm md:text-base">
                #cors
              </li>
              <li className="border rounded-[50px] border-[#14b8a6] px-[10px] py-[5px] text-sm md:text-base">
                #vercel
              </li>
              <li className="border rounded-[50px] border-[#14b8a6] px-[10px] py-[5px] text-sm md:text-base">
                #render
              </li>
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4  bg-[#14b8a6] shadow-[0_0_40px_5px_#14b8a6] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#14b8a6] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://inksphere-blog.vercel.app/"
            target="_blank"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[500px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(20,184,166,0.6)]"
                src={inksphere}
                alt=""
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#14b8a6] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                InkSphere
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <div className="h-[1px] left-1/4 right-1/2 bg-[#459bd5] shadow-[0_0_30px_5px_#459bd5] absolute top-1/2 hidden sm:block"></div>
          <a
            href="#"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img
                className="max-w-[450px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(69,155,213,0.6)]"
                src={portfolio}
                alt="img"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Portfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
          <div className="w-full">
            <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
              Portfolio
            </h3>
            <span className="text-[#459bd5] text-base md:text-lg">
              (Personal Portfolio Website)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Developed my personal portfolio using React and Tailwind CSS. The
              site is fully responsive, with interactive components and smooth
              animations, showcasing my skills, projects, and experience.
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#459bd5] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border rounded-[50px] border-[#459bd5] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind
              </li>
              <li className="border rounded-[50px] border-[#459bd5] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#459bd5] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border rounded-[50px] border-[#459bd5] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li className="border rounded-[50px] border-[#459bd5] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#84cc16] font-bold text-2xl md:text-4xl">
              PrepMate
            </h3>
            <span className="text-[#84cc16] text-base md:text-lg">
              (Job Preparation & Interview Platform)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              PrepMate is a job preparation platform focused on helping
              candidates get interview-ready through real-world practice. The
              platform is designed to support AI-powered voice-based mock
              interviews, interview performance analytics, resume building, and
              skill-based quizzes. PrepMate aims to simulate real interview
              scenarios and provide actionable feedback to help users improve
              communication, confidence, and technical readiness.
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #nextjs
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #Vapi
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #voiceai
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #interviewprep
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #analytics
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #resume
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #quiz
              </li>
              <li className="border rounded-[50px] border-[#84cc16] px-[10px] py-[5px] text-sm md:text-base">
                #careertechnology
              </li>
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4  bg-[#84cc16] shadow-[0_0_40px_5px_#84cc16] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#84cc16] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://prepmate-aniket.vercel.app/"
            target="_blank"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[500px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(132,204,22,0.6)]"
                src={prepmate}
                alt=""
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#84cc16] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                PrepMate
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="w-4 h-4 rounded-full border-[3px] border-[#3b82f6] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <div className="h-[1px] left-1/4 right-1/2 bg-[#3b82f6] shadow-[0_0_40px_5px_#3b82f6] absolute top-1/2 hidden sm:block"></div>
          <a
            href="#"
            className="flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img
                className="max-w-[450px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={portfolio}
                alt="img"
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#3b82f6] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Not Hosted
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
          <div className="w-full">
            <h3 className="text-[#3b82f6] font-bold text-2xl md:text-4xl">
              eSollect UI Clone
            </h3>
            <span className="text-[#3b82f6] text-base md:text-lg">
              (Loan & Portfolio Management System)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Recreated the eSollect dashboard interface as a frontend practice
              project to strengthen skills in building structured layouts,
              handling complex tables, and designing clean enterprise-style user
              interfaces. Focused on responsive design, reusable components, and
              accurate UI replication.
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#3b82f6] px-[10px] py-[5px] text-sm md:text-base">
                #react
              </li>
              <li className="border rounded-[50px] border-[#3b82f6] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind
              </li>
              <li className="border rounded-[50px] border-[#3b82f6] px-[10px] py-[5px] text-sm md:text-base">
                #ui-clone
              </li>
              <li className="border rounded-[50px] border-[#3b82f6] px-[10px] py-[5px] text-sm md:text-base">
                #responsive-design
              </li>
              <li className="border rounded-[50px] border-[#3b82f6] px-[10px] py-[5px] text-sm md:text-base">
                #component-based
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div className="order-2 sm:order-1 w-full">
            <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">
              Netflix Clone
            </h3>
            <span className="text-[#ffe578] text-base md:text-lg">
              (Streaming Platform)
            </span>
            <p className="text-justify text-sm md:text-base mt-2">
              Built a Netflix clone using HTML, CSS, and JavaScript. The
              platform offers a responsive design, dynamic content display, and
              smooth interactions, mimicking the layout and features of a
              popular streaming service for both movies and web series.
            </p>
            <ul className="flex flex-wrap gap-2 mt-2">
              <li className="border rounded-[50px] border-[#ffe578] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li className="border rounded-[50px] border-[#ffe578] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li className="border rounded-[50px] border-[#ffe578] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
            </ul>
          </div>
          <div className="h-[1px] left-1/2 right-1/4  bg-[#ffe578] shadow-[0_0_40px_5px_#ffe578] absolute top-1/2 hidden sm:block"></div>
          <div className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="#"
            className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                className="max-w-[500px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(255,229,120,0.6)]"
                src={netflix}
                alt=""
              />
              <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Netflix
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-external-link"
                >
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
