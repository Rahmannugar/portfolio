import { motion } from "framer-motion";
import Projects from "../components/Projects";

const Works = () => {
  return (
    <div className="px-10 mt-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        whileHover={{
          backgroundColor: "white",
          color: "black",
        }}
        className="text-3xl cursor-pointer 2xl:text-5xl text-gray-300 hover:px-3 font-bold"
      >
        WORK <span className="text-blue-200">EXPERIENCE</span>
      </motion.h1>

      <div className="mt-16 grid gap-10 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Frontend Developer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="max-w-[767px] rounded-md px-5 h-[500px] bg-gray-700 py-7 flex flex-col items-center space-y-7"
        >
          <div className="space-y-3 text-center">
            <h1 className="text-xl font-bold text-blue-200">
              FRONTEND DEVELOPER
            </h1>
            <h2>June 2022 - September 2023</h2>
            <motion.img
              whileHover={{ scale: 1.3 }}
              src="https://res.cloudinary.com/thirtythree/image/upload/v1729702409/bloom-work_nn5ekx.jpg"
              alt="bloom-media"
              className="w-[73px] h-[73px] object-cover mx-auto"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-blue-200">Description</h2>
            <p className="text-justify text-sm">
              During my role at Bloom Digital Media as a frontend developer, I
              played a pivotal role in constructing and managing the company's
              platform digital media services. My responsibilities included
              designing and implementing key features with a keen eye on SEO
              optimization, ensuring our offerings achieved a prominent and
              discoverable online presence.
            </p>
          </div>
        </motion.div>

        {/* Fullstack Web Developer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="max-w-[767px] cursor-pointer rounded-md px-5 h-[500px] bg-gray-700 py-7 flex flex-col items-center space-y-7"
        >
          <div className="space-y-3 text-center">
            <h1 className="text-xl font-bold text-blue-200">
              FULLSTACK WEB DEVELOPER
            </h1>
            <h2>October 2022 - June 2023</h2>

            <motion.div
              whileHover={{ scale: 1.3 }}
              className="w-[73px] bg-blue-900 flex justify-center items-center h-[73px] mx-auto object-cover"
            >
              <h1 className="text-xs">RapidSwap</h1>
            </motion.div>
          </div>
          <div className="space-y-2">
            <h2 className="text-blue-200">Description</h2>
            <p className="text-justify text-sm">
              As a remote web developer at RapidSwap, my responsibilities
              included designing and developing both frontend and backend
              components for cryptocurrency-related applications. I implemented
              features, ensured system functionality, and collaborated with
              cross-functional teams to enhance the overall performance of
              web-based tools in the crypto domain.
            </p>
          </div>
        </motion.div>

        {/* Software Engineer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="max-w-[767px] rounded-md px-5 h-[500px] bg-gray-700 py-7 flex flex-col items-center space-y-7"
        >
          <div className="space-y-3 text-center">
            <h1 className="text-xl font-bold text-blue-200">
              SOFTWARE ENGINEER
            </h1>
            <h2>July 2023 - November 2023</h2>
            <motion.img
              whileHover={{ scale: 1.3 }}
              src="https://res.cloudinary.com/thirtythree/image/upload/v1729702434/lagos-ministry-work_kc1ous.jpg"
              alt="bloom-media"
              className="w-[73px] h-[73px] mx-auto object-cover"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-blue-200">Description</h2>
            <p className="text-justify text-sm">
              As a software engineering intern at the Ministry of Science and
              Technology, Lagos State, my responsibilities included assisting in
              the development and maintenance of software solutions,
              participating in coding and debugging activities, and
              collaborating with the team to contribute to technological
              advancements in support of the ministry's initiatives.
            </p>
          </div>
        </motion.div>
      </div>

      <Projects />
    </div>
  );
};
export default Works;
