import { motion } from "framer-motion";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const items = ["Home", "Services", "Portfolio", "Contact"];
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },

    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },

    closed: {
      y: 50,
      opacity: 0,
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
          onClick={() => setOpen((prev: any) => !prev)}
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

        {/* sidebar menu */}
        <motion.div className="hidden" variants={variants}>
          {items.map((item) => (
            <motion.a
              href={`#${item}`}
              key={item}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>

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
