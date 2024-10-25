import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import Faq from "../components/Faq";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const userId = import.meta.env.VITE_USER_ID;
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;

  // response logic
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [responseSeverity, setResponseSeverity] = useState<
    "success" | "error"
  >();
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        if (response.status == 200) {
          setOpenSnackbar(true);
          setResponseMessage("Message sent successfully!");
          setResponseSeverity("success");
          setName("");
          setEmail("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setOpenSnackbar(true);
        setResponseMessage("Failed to send message!");
        setResponseSeverity("error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div id="Contact" className="px-10">
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
        CON<span className="text-blue-200">TACT</span>
      </motion.h1>
      <div>
        <h1 className="text-gray-400">
          PHONE: <span>+2349019273836</span>
        </h1>
        <h1 className="text-gray-400">
          Message: <span>Cladeadenugar@gmail.com</span>
        </h1>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
        className="text-center text-2xl 2xl:text-3xl text-blue-200 py-7"
      >
        How can I help you?
      </motion.h1>

      <div className="md:flex justify-between items-start md:space-x-10 2xl:justify-center">
        <motion.form
          className="space-y-5 md:w-1/2 bg-gray-700 rounded-xl p-5 font-bold"
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.75, ease: "easeIn" }}
          onSubmit={sendMessage}
        >
          <input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            className="w-full h-full p-3 focus:outline-none rounded-md placeholder:text-black text-black"
          />
          <input
            required
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            className="w-full h-full p-3 focus:outline-none rounded-md placeholder:text-black text-black"
          />
          <textarea
            required
            name="message"
            id="message"
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
            className="w-full h-[100px] resize-none focus:outline-none text-black p-3 rounded-md placeholder:text-black"
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{
              backgroundColor: "#bfdbfe",
            }}
            className="w-full p-3 bg-black"
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "SEND MESSAGE"
            )}
          </motion.button>
        </motion.form>

        <div className="md:w-1/2 mt-16 md:mt-0">
          <Faq />
        </div>
      </div>

      {/* Alert logic */}
      {responseMessage && (
        <Snackbar open={openSnackbar} autoHideDuration={6000}>
          <Alert
            onClose={handleCloseSnackbar}
            variant="filled"
            severity={responseSeverity}
          >
            {responseMessage}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};
export default Contact;
