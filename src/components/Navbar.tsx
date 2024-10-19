import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const items = ["Home", "Services", "Works", "Portfolio", "Contact"];

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
        <motion.a
          href="/"
          whileHover={{
            scale: 1.2,
            color: "lightblue",
            rotate: 180,
          }}
          className="text-2xl"
        >
          Nugar.dev
        </motion.a>
        {/* mobile toggleButton */}
        <motion.button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          whileHover={{ scale: 1.5 }}
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

        {/* animated sidebar with circle effect */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed top-0 left-0 h-screen w-[80vw] bg-white z-50 text-black space-y-10 flex flex-col md:hidden justify-center items-center"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
            >
              {items.map((item) => (
                <motion.a
                  href={`${item == "Home" ? "/" : `#${item}`}`}
                  key={item}
                  className="text-xl cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.5, color: "lightblue" }}
                  whileTap={{ scale: 0.95, color: "lightblue" }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* desktop menu */}
        <motion.div className="md:flex space-x-10 text-lg hidden">
          <motion.a href="/" whileHover={{ scale: 1.2, color: "lightblue" }}>
            Home
          </motion.a>
          <motion.a
            href="#Services"
            whileHover={{ scale: 1.2, color: "lightblue" }}
          >
            Services
          </motion.a>
          <motion.a
            href="#Works"
            whileHover={{ scale: 1.2, color: "lightblue" }}
          >
            Works
          </motion.a>
          <motion.a
            href="#Contact"
            whileHover={{ scale: 1.2, color: "lightblue" }}
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
