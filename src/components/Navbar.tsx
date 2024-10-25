import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const items = ["Home", "Services", "Works", "Contact"];

  const sidebarVariants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
    closed: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="navbar">
      <motion.div
        className="px-10 lg:px-16 h-[80px] w-full flex justify-between items-center"
        initial={{
          opacity: 0,
          y: -50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ ease: "easeIn", duration: 0.7 }}
      >
        <motion.a
          href="/"
          whileHover={{
            scale: 1.2,
            color: " #bfdbfe",
            rotate: 180,
          }}
          whileTap={{
            scale: 1.2,
            color: " #bfdbfe",
            rotate: 180,
          }}
          className="text-2xl 2xl:text-4xl font-bold"
        >
          Nugar.dev
        </motion.a>
        {/* mobile toggleButton */}
        <motion.button
          className="md:hidden z-50"
          onClick={() => setOpen((prev) => !prev)}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1.5 }}
        >
          <motion.div
            key={open ? "closeIcon" : "menuIcon"}
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3 }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed top-0 left-0 h-screen w-screen bg-white z-50 text-black space-y-10 flex flex-col md:hidden justify-center items-center"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
            >
              <motion.button
                className="md:hidden z-60 absolute top-10 right-10"
                onClick={() => setOpen((prev) => !prev)}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1.5 }}
              >
                <motion.div
                  key={open ? "closeIcon" : "menuIcon"}
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  {open ? <CloseIcon /> : <MenuIcon />}
                </motion.div>
              </motion.button>

              {items.map((item) => (
                <motion.a
                  href={`${item == "Home" ? "/" : `#${item}`}`}
                  onClick={() => setOpen(false)}
                  key={item}
                  className="text-xl cursor-pointer font-bold"
                  variants={itemVariants}
                  whileHover={{ scale: 1.5, color: " #bfdbfe" }}
                  whileTap={{ scale: 0.95, color: " #bfdbfe" }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* desktop menu */}
        <motion.div className="md:flex space-x-10 text-lg 2xl:text-2xl hidden">
          <motion.a
            href="/"
            whileHover={{ scale: 1.2, color: " #bfdbfe" }}
            whileTap={{ scale: 1.2, color: " #bfdbfe" }}
          >
            Home
          </motion.a>
          <motion.a
            href="#Services"
            whileHover={{ scale: 1.2, color: " #bfdbfe" }}
            whileTap={{ scale: 1.2, color: " #bfdbfe" }}
          >
            Services
          </motion.a>
          <motion.a
            href="#Works"
            whileHover={{ scale: 1.2, color: " #bfdbfe" }}
            whileTap={{ scale: 1.2, color: " #bfdbfe" }}
          >
            Works
          </motion.a>
          <motion.a
            href="#Contact"
            whileHover={{ scale: 1.2, color: " #bfdbfe" }}
            whileTap={{ scale: 1.2, color: " #bfdbfe" }}
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
