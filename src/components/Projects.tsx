import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<null | Number>(null);

  const projects = [
    {
      title: "BEZAL",
      img: "https://res.cloudinary.com/thirtythree/image/upload/v1729692909/bezal_rarwzh.png",
      techStack: [
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "MongoDB",
        "Express.js",
        "Node.js",
      ],
      description:
        "A web forum for digital creators to share their work, collaborate with other creators, and monetize their posts",
      link: "https://bezal.netlify.app/",
    },
    {
      title: "SUPER RARE",
      img: "https://res.cloudinary.com/thirtythree/image/upload/v1729692909/super-rare_gjgga0.png",
      techStack: ["React.js", "Tailwind CSS"],
      description:
        "A landing page for an NFT project designed to showcase digital artwork from rare and emerging artists.",
      link: "https://superrare.netlify.app/",
    },
    {
      title: "BLOOM DIGITAL MEDIA",
      img: "https://res.cloudinary.com/thirtythree/image/upload/v1729692913/bloom-media_cvf2ss.png",
      techStack: ["React.js", "CSS3"],
      description:
        "A digital marketing platform focused on helping businesses grow their online presence through targeted advertising, content marketing, and data-driven strategies.",
      link: "https://bloomdigitmedia.com/",
    },
    {
      title: "DOSHPAY",
      img: "https://res.cloudinary.com/thirtythree/image/upload/v1729692922/doshpay_btd3oe.png",
      techStack: ["React.js", "Tailwind CSS"],
      description:
        "A secure and user-friendly payment platform designed to simplify financial transactions for both consumers and businesses.",
      link: "https://doshpay.netlify.app/",
    },
    {
      title: "CRYPTRACKER",
      img: "https://res.cloudinary.com/thirtythree/image/upload/v1729692983/cryptracker_xap36k.png",
      techStack: ["React.js", "TailwindCSS", "Firebase", "Coingecko API"],
      description:
        "A dynamic cryptocurrency tracking platform that provides users with live updates on market prices.",
      link: "https://cryptrackersite.netlify.app/",
    },
    {
      title: "SERAPH FESTIVAL",
      img: "https://res.cloudinary.com/thirtythree/image/upload/v1729692927/seraph-festival_hvtc2s.png",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "MongoDB",
        "Express.js",
        "Node.js",
      ],
      description:
        "A platform catering to the Christian community, facilitating seamless registration for upcoming festivals.",
      link: "https://seraphfestival.netlify.app/",
    },
  ];

  return (
    <div className="mt-28">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
        whileHover={{
          backgroundColor: "white",
          color: "black",
        }}
        className="text-3xl cursor-pointer 2xl:text-5xl text-gray-300 hover:px-3 font-bold"
      >
        PRO<span className="text-blue-200">JECTS</span>
      </motion.h1>

      <div className="mt-16 grid gap-10 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: "easeIn" }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            className="relative overflow-hidden max-w-[767px] rounded-xl px-5 bg-gray-700 py-5 h-full flex flex-col justify-between space-y-3"
          >
            {/* Glass-like hover effect */}
            <motion.div
              className="absolute inset-0 bg-white/20 backdrop-blur-sm z-10 pointer-events-none"
              initial={{ opacity: 0, y: "100%" }}
              animate={
                hoveredProject === index
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: "100%" }
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <div className="flex-grow z-20">
              <motion.h1 className="text-blue-200 text-xl font-bold">
                {project.title}
              </motion.h1>
              <div
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-full h-[200px] cursor-pointer mx-auto"
              ></div>
              <div className="gap-2 grid grid-cols-2 md:grid-cols-3n text-xs mb-5">
                {project.techStack.map((tech, i) => (
                  <motion.h1
                    key={i}
                    whileHover={{ backgroundColor: "white", color: " black" }}
                    className="bg-black h-full w-full max-w-[100px] py-2 text-nowrap cursor-pointer rounded-sm text-center font-bold"
                  >
                    {tech}
                  </motion.h1>
                ))}
              </div>
              <p className="text-justify">{project.description}</p>
            </div>

            <motion.a
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              target="_blank"
              href={project.link}
              className="z-20 h-fit w-fit"
            >
              <motion.button
                whileHover={{
                  scale: 0.8,
                  backgroundColor: "white",
                  color: "black",
                }}
                className="bg-black px-5 py-2 font-bold rounded-xl mt-5"
              >
                View
              </motion.button>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
