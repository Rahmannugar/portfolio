import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div>
      <motion.div
        className="px-10 h-[80px] w-full flex justify-between items-center"
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ ease: "easeIn", duration: 1.5 }}
      >
        <motion.a href="/" className="text-2xl">
          Nugar.dev
        </motion.a>

        {/* desktop menu */}
        <motion.div className="flex space-x-10 text-lg">
          <motion.a href="/">Home</motion.a>
          <motion.a href="#Services">Services</motion.a>
          <motion.a href="#Works">Works</motion.a>
          <motion.a href="#Contact">Contact</motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Navbar;
