import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="md:flex md:justify-between md:items-center 2xl:justify-center md:space-x-16 lg:space-x-48 mt-40 flex-wrap">
      <div className="space-y-3 w-full md:max-w-[45vw] lg:max-w-[500px]">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeIn" }}
          whileHover={{
            backgroundColor: "white",
            color: "black",
          }}
          className="text-3xl cursor-pointer 2xl:text-5xl hover:px-3 text-blue-200 font-bold"
        >
          MY SERVICES
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeIn" }}
          className="text-justify text-sm 2xl:text-lg hover:text-[#bfdbfe] cursor-pointer"
        >
          As a web development professional with three years of practical
          experience, I specialize in creating efficient, scalable websites and
          applications. From user-friendly front-end designs to robust back-end
          architecture, I deliver customized solutions that adapt to client
          needs. My approach is collaborative, focused on finding creative and
          effective answers to any challenge, ensuring each project achieves the
          highest standards of quality and performance.
        </motion.p>
        <motion.a
          initial={{ scale: 0.5, y: -300 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeIn" }}
          href="#Contact"
        >
          <motion.button
            whileHover={{
              scale: 0.8,
              backgroundColor: "white",
              color: "black",
            }}
            className="bg-blue-900 p-3 font-bold rounded-md mt-5"
          >
            Contact Me
          </motion.button>
        </motion.a>
      </div>

      <div className="space-y-6 mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: 250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeIn" }}
          whileHover={{
            scale: 0.8,
            backgroundColor: "white",
            color: "black",
          }}
          className="bg-blue-900 py-3 px-5 2xl:text-xl rounded-2xl cursor-pointer"
        >
          <h1>Web Development</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeIn" }}
          whileHover={{
            scale: 0.8,
            backgroundColor: "white",
            color: "black",
          }}
          className="bg-blue-900 py-3 px-5 2xl:text-xl rounded-2xl cursor-pointer"
        >
          <h1>Web Design</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeIn" }}
          whileHover={{
            scale: 0.8,
            backgroundColor: "white",
            color: "black",
          }}
          className="bg-blue-900 py-3 px-5 2xl:text-xl rounded-2xl cursor-pointer"
        >
          <h1>SEO Optimization</h1>
        </motion.div>
      </div>
    </div>
  );
};
export default Experience;
