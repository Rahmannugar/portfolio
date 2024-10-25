import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="lg:h-screen md:flex mt-16 lg:mt-[-50px] justify-between 2xl:justify-center 2xl:space-x-48 items-center rounded-[40px] px-10 lg:px-16 space-y-20 md:space-y-0">
      <div className="space-y-7">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.78, ease: "easeIn" }}
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
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.78, ease: "easeIn" }}
            className="text-justify lg:text-xl w-full md:max-w-[45vw] lg:max-w-[700px] hover:text-[#bfdbfe] cursor-pointer"
          >
            Computer Science graduate and a dynamic web development specialist
            with three years of hands-on experience in crafting scalable
            solutions. Proﬁcient in front-end and back-end technologies.
            Collaborative and innovative problem solver.
          </motion.p>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.78, ease: "easeIn" }}
            className="flex items-center space-x-3"
          >
            <motion.a
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.5 }}
              href="https://www.linkedin.com/in/Rahmannugar"
              target="_blank"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.5 }}
              href="https://www.github.com/Rahmannugar"
              target="_blank"
            >
              <GitHubIcon />
            </motion.a>
            <motion.a
              href="/files/Resume.pdf"
              download
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.8 }}
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
    </div>
  );
};
export default Hero;
