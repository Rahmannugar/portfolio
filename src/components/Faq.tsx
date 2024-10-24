import { motion } from "framer-motion";
import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do we start a project with you?",
      answer:
        "We’ll begin with a discussion, either on Zoom or your preferred platform, about your needs and vision for your business website, including design preferences. After that, I’ll send you a detailed proposal. If it meets your expectations, we’ll move forward by signing a contract.",
    },
    {
      question: "Do you offer support after the project is completed?",
      answer:
        "Yes, I offer free support for a period after the project is completed to ensure everything runs smoothly. When certain period is over, support will be charged based on our agreement. I also offer website maintenance services for existing websites, which you can find in the services section. These services are also charged accordingly.",
    },
    {
      question: "How do you handle project deadlines?",
      answer:
        "I make sure to set clear deadlines for every part of the project. I use Notion to keep track of my progress and ensure I stay on schedule. I’ll keep you updated regularly on how the project is going. If any changes are needed, I’ll adjust the deadlines accordingly to avoid delays.",
    },
    {
      question: "Do you require a deposit before starting work?",
      answer:
        "Depending on the project’s size, we can adjust the payment structure, but usually, I prefer a 50/50 payment plan for projects: 50% paid upfront and the remaining 50% after the launch. I’ll help you choose the payment method that works best for both of us.",
    },
  ];

  const handleToggle = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
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
        FREQUENTLY ASKED <span className="text-blue-200">QUESTIONS</span>
      </motion.h1>

      <motion.div
        className="mt-5 border border-gray-500"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 200 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeIn" }}
              onClick={() => handleToggle(index)}
              className="cursor-pointer flex items-center justify-between px-5 h-16"
            >
              <h1>{faq.question}</h1>
              <div className={`relative`}>
                <input
                  type="radio"
                  checked={activeIndex === index}
                  readOnly
                  className={`appearance-none w-4 h-4 border border-gray-400 rounded-full cursor-pointer`}
                />
              </div>
            </motion.div>

            <div className="h-[1px] w-full bg-gray-400"></div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <p className={`text-justify py-3 px-5`}>{faq.answer}</p>
            </motion.div>
            <div
              className={` w-full bg-gray-400 ${
                activeIndex === index ? "h-[1px]" : ""
              }`}
            ></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Faq;
