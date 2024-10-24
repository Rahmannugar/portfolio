import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="mt-28">
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
        PRO<span className="text-blue-200">JECTS</span>
      </motion.h1>

      <div className="mt-16 grid gap-10 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* bezal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          whileHover={{}}
          className="max-w-[767px] rounded-md px-5 bg-gray-700 py-5 h-[550px] flex flex-col space-y-3"
        >
          <motion.h1 className="text-blue-200 text-xl font-bold">
            BEZAL
          </motion.h1>
          <div
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/thirtythree/image/upload/v1729692909/bezal_rarwzh.png)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[200px] mx-auto"
          ></div>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-3 text-xs">
              <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
                React.js
              </h1>
              <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
                Firebase
              </h1>
              <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
                Tailwind CSS
              </h1>
            </div>
            <div className="flex space-x-3 text-xs">
              <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
                MongoDB
              </h1>
              <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
                Express.js
              </h1>
              <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
                Node.js
              </h1>
            </div>
          </div>
          <p className="text-justify">
            A web forum for digital creators to share their work, collaborate
            with other creators, and monetize their posts.
          </p>

          <motion.a
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            target="_blank"
            href="https://bezal.netlify.app/"
          >
            <motion.button
              whileHover={{
                scale: 0.8,
                backgroundColor: "white",
                color: "black",
              }}
              className="bg-black px-5 py-2 font-bold rounded-md mt-5"
            >
              View
            </motion.button>
          </motion.a>
        </motion.div>

        {/* super-rare */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          whileHover={{}}
          className="max-w-[767px] rounded-md px-5 bg-gray-700 py-5 h-[500px] flex flex-col space-y-3"
        >
          <motion.h1 className="text-blue-200 text-xl font-bold">
            SUPER RARE
          </motion.h1>
          <div
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/thirtythree/image/upload/v1729692909/super-rare_gjgga0.png)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[200px] mx-auto"
          ></div>
          <div className="flex items-center space-x-3 text-xs">
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              React.js
            </h1>
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              Tailwind CSS
            </h1>
          </div>
          <p className="text-justify">A landing page for an NFT project.</p>

          <motion.a
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            target="_blank"
            href="https://superrare.netlify.app/"
          >
            <motion.button
              whileHover={{
                scale: 0.8,
                backgroundColor: "white",
                color: "black",
              }}
              className="bg-black px-5 py-2 font-bold rounded-md mt-5"
            >
              View
            </motion.button>
          </motion.a>
        </motion.div>

        {/* bloom-digital-media */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          whileHover={{}}
          className="max-w-[767px] rounded-md px-5 bg-gray-700 py-5 h-[500px] flex flex-col space-y-3"
        >
          <motion.h1 className="text-blue-200 text-xl font-bold">
            BLOOM DIGITAL MEDIA
          </motion.h1>
          <div
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/thirtythree/image/upload/v1729692913/bloom-media_cvf2ss.png)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[200px] mx-auto"
          ></div>
          <div className="flex items-center space-x-3 text-xs">
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              React.js
            </h1>
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              CSS3
            </h1>
          </div>
          <p className="text-justify">A digital marketing platform.</p>

          <motion.a
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            target="_blank"
            href="https://bloomdigitmedia.com/"
          >
            <motion.button
              whileHover={{
                scale: 0.8,
                backgroundColor: "white",
                color: "black",
              }}
              className="bg-black px-5 py-2 font-bold rounded-md mt-5"
            >
              View
            </motion.button>
          </motion.a>
        </motion.div>

        {/* doshpay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          whileHover={{}}
          className="max-w-[767px] rounded-md px-5 bg-gray-700 py-5 h-[500px] flex flex-col space-y-3"
        >
          <motion.h1 className="text-blue-200 text-xl font-bold">
            DOSHPAY
          </motion.h1>
          <div
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/thirtythree/image/upload/v1729692922/doshpay_btd3oe.pngs)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[200px] mx-auto"
          ></div>
          <div className="flex items-center space-x-3 text-xs">
            <motion.h1
              whileHover={{
                color: "black",
                backgroundColor: "white",
              }}
              className="bg-black px-3 py-2 cursor-pointer rounded-md"
            >
              React.js
            </motion.h1>
            <motion.h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              Tailwind CSS
            </motion.h1>
          </div>
          <p className="text-justify">
            A web forum for digital creators to share their work, collaborate
            with other creators, and monetize their posts.
          </p>

          <motion.a
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            target="_blank"
            href="https://doshpay.netlify.app/"
          >
            <motion.button
              whileHover={{
                scale: 0.8,
                backgroundColor: "white",
                color: "black",
              }}
              className="bg-black px-5 py-2 font-bold rounded-md mt-5"
            >
              View
            </motion.button>
          </motion.a>
        </motion.div>

        {/* cryptracker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          whileHover={{}}
          className="max-w-[767px] rounded-md px-5 bg-gray-700 py-5 h-[500px] flex flex-col space-y-3"
        >
          <motion.h1 className="text-blue-200 text-xl font-bold">
            CRYPTRACKER
          </motion.h1>
          <div
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/thirtythree/image/upload/v1729692922/doshpay_btd3oe.pngs)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[200px] mx-auto"
          ></div>
          <div className="flex flex-wrap items-center space-x-3 space-y-2 text-xs">
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              React.js
            </h1>
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              TailwindCSS
            </h1>
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              Firebase
            </h1>
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              Coingecko API
            </h1>
          </div>
          <p className="text-justify">
            A dynamic cryptocurrency tracking platform that provides users with
            live updates on market prices.
          </p>

          <motion.a
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            target="_blank"
            href="https://cryptrackersite.netlify.app/"
          >
            <motion.button
              whileHover={{
                scale: 0.8,
                backgroundColor: "white",
                color: "black",
              }}
              className="bg-black px-5 py-2 font-bold rounded-md mt-5"
            >
              View
            </motion.button>
          </motion.a>
        </motion.div>

        {/* seraph-festival */}
        {/* cryptracker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          whileHover={{}}
          className="max-w-[767px] rounded-md px-5 bg-gray-700 py-5 h-[500px] flex flex-col space-y-3"
        >
          <motion.h1 className="text-blue-200 text-xl font-bold">
            SERAPH FESTIVAL
          </motion.h1>
          <div
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/thirtythree/image/upload/v1729692927/seraph-festival_hvtc2s.png)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[200px] mx-auto"
          ></div>
          <div className="flex flex-wrap items-center space-x-3 text-xs">
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              React.js
            </h1>
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              Tailwind CSS
            </h1>
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              MongoDB
            </h1>
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              Express.js
            </h1>
            <h1 className="bg-black px-3 py-2 cursor-pointer rounded-md">
              Node.js
            </h1>
          </div>
          <p className="text-justify">
            A platform catering to the Christian community, facilitating
            seamless registration for upcoming festivals.
          </p>

          <motion.a
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            target="_blank"
            href="https://seraphfestival.netlify.app/"
          >
            <motion.button
              whileHover={{
                scale: 0.8,
                backgroundColor: "white",
                color: "black",
              }}
              className="bg-black px-5 py-2 font-bold rounded-md mt-5"
            >
              View
            </motion.button>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
export default Projects;
