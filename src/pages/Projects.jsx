import { BiLogoMongodb } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";

export default function Projects() {
  return (
    <div 
      className="flex flex-col gap-10 w-[80vw] mx-auto min-h-[100vh] max-h-fit py-20"
      id="project"
    >
      <h1 
        className="bg-lime-600 text-white w-fit font-semibold sm:text-2xl text-center rounded-[30px] mx-auto py-3 px-6"
      >
        Sample of My Projects
      </h1>
      <div>
        <div
          className="relative block text-center w-[300px] h-[300px] sm:w-[500px] sm:h-[370px] mx-auto "
        >
          <img 
            src={'/images/Screenshot at 2024-04-03 00-02-32.png'} 
            alt="" 
            className="bg-white absolute w-full h-full rounded-3xl mx-auto p-2 left-1/2 transform translate-x-[-50%]"
          />
          <div
            className="
              bg-gradient-to-r from-[#eab30870] via-[#ef444470] to-[#84cc1670] absolute flex flex-col justify-between items-center w-full h-full rounded-3xl opacity-0 hover:opacity-100 left-1/2 transform translate-x-[-50%] py-5
            "
          >
            <h2 className="bg-lime-50 text-lime-800 text-2xl w-fit rounded-[30px] p-3 z-[2]" >
              Eyad-Store
            </h2>
            <div className="flex justify-around w-full mt-[-70px] sm:mt-[-130px]">
              <a 
                href="https://github.com/aboAliAhmed/eyad-store" 
                target="_blanck"
                className="bg-lime-50 text-lime-800 flex items-center gap-2 font-semibold rounded-[30px] w-fit p-4 z-[2]"
              >
                Code
                <FaGithub className="bg-black text-white rounded-full w-6 h-6"/>
              </a>
              <a 
                href="https://eyad-store.onrender.com/" 
                target="_blank" 
                className="bg-lime-50 text-lime-800 flex items-center gap-2 font-semibold rounded-[30px] w-fit p-4 z-[2]"
              >
                Demo
                <CiGlobe className="bg-lime-950 text-white rounded-full w-6 h-6"/>
              </a>
            </div>
            <p className="bg-lime-50 text-3xl flex justify-around w-[90%] rounded-3xl mx-5 py-2 z-[2]">
              <FaReact className="text-[#149eca]" />
              <SiExpress className="text-[#171918]"/>
              <FaNodeJs className="text-[#658d3b]"/>
              <BiLogoMongodb className="text-[#00dc63]"/>
              <SiTailwindcss className="text-[#36b8f1]"/>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}