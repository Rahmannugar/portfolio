import { motion } from "framer-motion";
import Experience from "../components/Experience";

const Services = () => {
  const technologies = [
    {
      alt: "HTML5",
      src: "https://res.cloudinary.com/thirtythree/image/upload/v1730682347/html_ffltyh.png",
    },
    {
      alt: "CSS3",
      src: "https://res.cloudinary.com/thirtythree/image/upload/v1730682347/css_weuoc7.png",
    },
    {
      alt: "JavaScript",
      src: "https://res.cloudinary.com/thirtythree/image/upload/v1730682347/javascript_dg4rqs.png",
    },
    {
      alt: "TypeScript",
      src: "https://res.cloudinary.com/thirtythree/image/upload/v1730682347/typescript_nnxwnx.png",
    },
    {
      alt: "React",
      src: "https://res.cloudinary.com/thirtythree/image/upload/v1730682346/react_gqzxeq.png",
    },
    {
      alt: "Next.js",
      src: "https://res.cloudinary.com/thirtythree/image/upload/v1730682345/nextjs_rn4obe.png",
    },
    {
      alt: "Node.js",
      src: "https://res.cloudinary.com/thirtythree/image/upload/v1730682346/nodejs_r0s4fp.png",
    },
    {
      alt: "Express.js",
      src: "https://res.cloudinary.com/thirtythree/image/upload/v1730682346/express_yqjbmb.png",
    },
    {
      alt: "MongoDB",
      src: "https://res.cloudinary.com/thirtythree/image/upload/v1730682345/mongodb_up658u.png",
    },
    {
      alt: "PostgreSQL",
      src: "https://res.cloudinary.com/thirtythree/image/upload/v1730682346/postgresql_zauul1.png",
    },
    {
      alt: "GIT",
      src: "https://res.cloudinary.com/thirtythree/image/upload/v1730682345/git_mlxkrr.png",
    },
  ];
  const getPosition = (index: number, total: number, radius: number) => {
    const angle = (index / total) * (2 * Math.PI);
    const x = radius * Math.cos(angle) + radius;
    const y = radius * Math.sin(angle) + radius;
    return { x, y };
  };

  return (
    <div className="flex flex-col justify-center items-center px-10 lg:px-16 mt-[100px]">
      <motion.div
        className="relative w-80 h-80 rounded-full border-dotted border-4 border-gray-300 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeIn" }}
          viewport={{ once: true }}
          className="absolute top-[-100px] text-2xl text-gray-300 font-bold"
        >
          TECH<span className="text-blue-200">NOLOGIES</span>
        </motion.h1>
        <h2 className="flex items-center text-xl font-semibold text-blue-200 bg-blue-900 px-[8px] py-[10px] rounded-[100px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_67)">
              <path
                d="M7.21202 2C6.73802 2 6.32102 2.314 6.19102 2.77L3.94102 10.644C3.89582 10.8021 3.88793 10.9685 3.91797 11.1301C3.94801 11.2917 4.01516 11.4441 4.11414 11.5754C4.21312 11.7067 4.34122 11.8132 4.48835 11.8865C4.63548 11.9598 4.79762 11.998 4.96202 11.998H6.23002L5.06002 16.678C4.79602 17.733 6.10002 18.455 6.85502 17.673L10.198 14.26C10.1477 14.2336 10.0951 14.2115 10.041 14.194L8.95002 13.839C8.67277 13.7406 8.4328 13.5588 8.26309 13.3185C8.09338 13.0782 8.00226 12.7912 8.00226 12.497C8.00226 12.2028 8.09338 11.9158 8.26309 11.6755C8.4328 11.4352 8.67277 11.2534 8.95002 11.155L8.95602 11.153L8.97402 11.147L10.035 10.803C10.2096 10.7422 10.3677 10.6419 10.4971 10.5099C10.6265 10.3778 10.7237 10.2177 10.781 10.042L11.136 8.949C11.2338 8.67087 11.4157 8.43007 11.6566 8.26002C11.8974 8.08997 12.1852 7.99909 12.48 8H12.501C12.7956 7.99958 13.0831 8.09079 13.3235 8.26101C13.564 8.43122 13.7455 8.67201 13.843 8.95L13.845 8.956L13.851 8.973L14.199 10.041C14.209 10.0717 14.2204 10.1017 14.233 10.131L14.236 10.139L15.533 8.815L15.536 8.811C16.177 8.144 15.716 7 14.77 7H12.206L13.467 3.406L13.47 3.398C13.5233 3.23823 13.5378 3.06808 13.5124 2.90159C13.4869 2.7351 13.4223 2.57705 13.3237 2.44048C13.2251 2.30391 13.0955 2.19275 12.9455 2.11616C12.7955 2.03957 12.6294 1.99975 12.461 2H7.21202ZM12.878 9.282L13.226 10.353C13.3339 10.6788 13.5166 10.9748 13.7593 11.2173C14.0021 11.4599 14.2982 11.6423 14.624 11.75L15.696 12.098L15.717 12.104C15.7996 12.1331 15.8712 12.1871 15.9218 12.2585C15.9724 12.33 15.9996 12.4154 15.9996 12.503C15.9996 12.5906 15.9724 12.676 15.9218 12.7475C15.8712 12.8189 15.7996 12.8729 15.717 12.902L14.646 13.25C14.32 13.3576 14.0237 13.5399 13.7807 13.7825C13.5378 14.0251 13.355 14.3211 13.247 14.647L12.899 15.717C12.8699 15.7996 12.8159 15.8711 12.7445 15.9218C12.673 15.9724 12.5876 15.9995 12.5 15.9995C12.4124 15.9995 12.327 15.9724 12.2556 15.9218C12.1841 15.8711 12.1301 15.7996 12.101 15.717L11.752 14.647C11.6278 14.2685 11.4031 13.9308 11.102 13.67C10.8832 13.4801 10.629 13.3354 10.354 13.244L9.28202 12.896C9.19941 12.8669 9.12787 12.8129 9.07726 12.7415C9.02665 12.67 8.99947 12.5846 8.99947 12.497C8.99947 12.4094 9.02665 12.324 9.07726 12.2525C9.12787 12.1811 9.19941 12.1271 9.28202 12.098L10.354 11.75C10.676 11.6395 10.9679 11.4559 11.2068 11.2135C11.4458 10.9711 11.6252 10.6765 11.731 10.353L12.079 9.283C12.1079 9.20005 12.1619 9.12814 12.2334 9.07726C12.305 9.02637 12.3907 8.99903 12.4785 8.99903C12.5663 8.99903 12.652 9.02637 12.7236 9.07726C12.7952 9.12814 12.8491 9.20005 12.878 9.283M17.783 17.214L17.017 16.966C16.7847 16.8884 16.5736 16.7578 16.4004 16.5846C16.2272 16.4114 16.0966 16.2003 16.019 15.968L15.769 15.203C15.7483 15.1439 15.7098 15.0928 15.6587 15.0566C15.6077 15.0203 15.5466 15.0009 15.484 15.0009C15.4214 15.0009 15.3604 15.0203 15.3093 15.0566C15.2583 15.0928 15.2197 15.1439 15.199 15.203L14.951 15.968C14.8748 16.1988 14.7464 16.409 14.5757 16.5821C14.4051 16.7552 14.1968 16.8866 13.967 16.966L13.202 17.214C13.1429 17.2347 13.0918 17.2733 13.0556 17.3243C13.0194 17.3754 12.9999 17.4364 12.9999 17.499C12.9999 17.5616 13.0194 17.6226 13.0556 17.6737C13.0918 17.7248 13.1429 17.7633 13.202 17.784L13.967 18.033C14.2001 18.1107 14.4119 18.2418 14.5855 18.4157C14.7591 18.5897 14.8897 18.8017 14.967 19.035L15.215 19.799C15.2357 19.8581 15.2743 19.9092 15.3253 19.9455C15.3764 19.9817 15.4374 20.0011 15.5 20.0011C15.5626 20.0011 15.6237 19.9817 15.6747 19.9455C15.7258 19.9092 15.7643 19.8581 15.785 19.799L16.034 19.035C16.1116 18.8024 16.2422 18.591 16.4156 18.4176C16.589 18.2442 16.8004 18.1136 17.033 18.036L17.798 17.788C17.8571 17.7673 17.9083 17.7288 17.9445 17.6777C17.9807 17.6266 18.0001 17.5656 18.0001 17.503C18.0001 17.4404 17.9807 17.3794 17.9445 17.3283C17.9083 17.2773 17.8571 17.2387 17.798 17.218L17.783 17.214Z"
                fill="#FFEB3B"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_67">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </h2>
        <motion.div
          className="absolute w-[100%] h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-full h-full">
            {technologies.map((tech, index) => {
              const { x, y } = getPosition(index, technologies.length, 140);
              return (
                <motion.img
                  key={tech.alt}
                  alt={tech.alt}
                  src={tech.src}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 1.3 }}
                  className="absolute w-10 h-10"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: "translate(-50%, -10%)",
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      <Experience />
    </div>
  );
};

export default Services;
