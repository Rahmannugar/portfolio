import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 15,
  };

  return (
    <div className="lg:h-screen md:flex mt-16 lg:mt-[-50px] justify-between 2xl:justify-center 2xl:space-x-48 items-center rounded-[40px] px-10 space-y-20 md:space-y-0">
      <div className="space-y-7">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeIn", delay: 0.3 }}
        >
          <h1 className="text-3xl lg:text-5xl font-bold">
            Hello, I'm
            <span className="text-blue-200">
              <Typewriter
                options={{
                  strings: ["Rahman Nugar!"],
                  autoStart: true,
                  loop: true,
                  delay: 180,
                }}
              />
            </span>
          </h1>
          <h3 className="text-xs lg:text-base italic">Software Engineer</h3>
        </motion.div>
        <div className="space-y-4">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn", delay: 0.6 }}
            className="text-justify lg:text-xl w-full md:max-w-[45vw] lg:max-w-[700px] hover:text-[#bfdbfe] cursor-pointer"
          >
            Computer Science graduate and a dynamic web development specialist with three years of hands-on
            experience in crafting scalable solutions. Proﬁcient in front-end
            and back-end technologies. Collaborative and innovative problem
            solver.
          </motion.p>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn", delay: 0.9 }}
            className="flex items-center space-x-3"
          >
            <motion.a
              whileHover={{ scale: 1.5 }}
              href="https://www.linkedin.com/in/Rahmannugar"
              target="_blank"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.5 }}
              href="https://www.github.com/Rahmannugar"
              target="_blank"
            >
              <GitHubIcon />
            </motion.a>
            <motion.a
              href="/files/student-handbook.pdf"
              download
              whileHover={{ scale: 0.8 }}
              className="bg-white hover:bg-[#bfdbfe] text-black font-bold flex items-center py-2 px-3 space-x-2 rounded-[100px]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00004 10.3333L2.83337 6.16658L4.00004 4.95825L6.16671 7.12492V0.333252H7.83337V7.12492L10 4.95825L11.1667 6.16658L7.00004 10.3333ZM0.333374 13.6666V9.49992H2.00004V11.9999H12V9.49992H13.6667V13.6666H0.333374Z"
                  fill="#111111"
                />
              </svg>
              <h1> Resume</h1>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        whileHover={{
          scale: 0.8,
          transition: spring,
        }}
        className="flex justify-center items-center"
      >
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ...spring,
            duration: 1.2,
            ease: "easeIn",
            delay: 1.2,
          }}
          src="https://res.cloudinary.com/thirtythree/image/upload/v1729702513/nugar-dev_mgid4s.jpg"
          className="rounded-full h-[300px] w-[300px] 2xl:h-[400px] 2xl:w-[400px] border-4 border-[#bfdbfe] cursor-pointer object-cover"
        ></motion.img>
      </motion.div>
    </div>
  );
};
export default Hero;
