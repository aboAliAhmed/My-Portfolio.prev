import { FaGitAlt, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";

export default function Skills() {
  return (
    <div 
      className="flex flex-col items-center gap-10 w-full min-h-[100vh] max-h-fit pt-20" 
      id="skills"
    >
      <h2 className="bg-lime-600 text-white font-semibold sm:text-3xl capitalize rounded-[30px] py-3 px-5">
        skills
      </h2>
      <p 
        className="text-2xl bg-lime-200 text-lime-900 text-center w-[90vw] sm:w-[500px] h-fit *:m-10 p-3 border-2 border-lime-400"
        style={{
          borderStartStartRadius: '50px 20px', 
          borderEndEndRadius: '50px 20px'
        }}
      >
        {`I'm a MERN-Stack Developer, with good basis in javascript, c and python. I'm aquainted with OOP and SOLID principles.`}
      </p>
      <div className="flex flex-wrap justify-evenly items-center sm:w-[90vw] md:w-[80vw] gap-x-3 gap-y-10 w-full sm:p-4">
        <div className="bg-gradient-to-r from-[#d8d8d8] via-[#ffffff] to-[#d8d8d8] w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-around items-center rounded-full py-2">
          <img 
            src="/images/react.png" 
            alt="react" 
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <p>
            React
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#d8d8d8] via-[#ffffff] to-[#d8d8d8] w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-around items-center rounded-full py-2">
          <img 
            src="/images/Node.png" 
            alt="Node.js" 
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <p>
            Node.js
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#d8d8d8] via-[#ffffff] to-[#d8d8d8] w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-around items-center rounded-full py-2">
          <SiExpress className="w-12 h-12 sm:w-20 sm:h-20" />
          <p>
            Express
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#d8d8d8] via-[#ffffff] to-[#d8d8d8] w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-around items-center rounded-full py-2">
          <SiMongodb className="text-[#6bb23f] w-12 h-12 sm:w-20 sm:h-20" />
          <p className="text-sm">
            MongoDB
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#d8d8d8] via-[#ffffff] to-[#d8d8d8] w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-around items-center rounded-full py-2">
          <FaCss3Alt className="text-[#264de4] w-12 h-12 sm:w-20 sm:h-20" />
          <p>
            CSS3
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#d8d8d8] via-[#ffffff] to-[#d8d8d8] w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-around items-center rounded-full py-2">
          <img 
            src="/images/HML5.png" 
            alt="HTML5" 
            className="w-16 h-16 sm:w-20 sm:h-20 pt-1"
          />
          <p>
            HTML5
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#d8d8d8] via-[#ffffff] to-[#d8d8d8] w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-around items-center rounded-full py-2">
          <SiRedux className="text-[#7248b6] w-16 h-16 sm:w-20 sm:h-20"/>
          <p>
            Redux
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#d8d8d8] via-[#ffffff] to-[#d8d8d8] w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-around items-center rounded-full py-2">
          <img 
            src="/images/tailwind-css.png" 
            alt="Tailwind" 
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <p>
            Tailwind-css
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#d8d8d8] via-[#ffffff] to-[#d8d8d8] w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-around items-center rounded-full py-2">
          <FaGitAlt className="text-[#f05030] w-16 h-16 sm:w-20 sm:h-20" />
          <p>
            Git
          </p>
        </div>
      </div>
    </div>
  )
}
