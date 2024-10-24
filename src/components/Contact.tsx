import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="Contact" className="px-10">
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
        CON<span className="text-blue-200">TACT</span>
      </motion.h1>
      <div>
        <h1 className="text-gray-400">
          PHONE: <span>+2349019273836</span>
        </h1>
        <h1 className="text-gray-400">
          Email: <span>Cladeadenugar@gmail.com</span>
        </h1>
      </div>
      <h1 className="text-center text-2xl 2xl:text-3xl text-blue-200 py-10">
        How can I help you?
      </h1>

      <form>
        <input type="text" />
      </form>
    </div>
  );
};
export default Contact;
