"use client";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8">
      <p className="text-6xl font-bold mb-8 md:mb-16 lg:mb-20">PARTNERS - IN - GROWTH</p>

      {/* Responsive grid container for all profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full max-w-7xl mx-auto mb-8 px-4 md:px-8">
        {/* Profile 1 - Pravash Dey */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: "0 30% 0 30%" }}
            whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <motion.img
              src="/Pravash-hover.png"
              alt="Pravash Dey Hover"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
            />
            <a href="https://www.linkedin.com/in/consultingleaders/" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                <span className="text-white text-sm text-center hidden group-hover:block">
                Led formation of the USIndia Blockchain Council and UKIndia Blockchain Council, a consortium of entrepreneurs, innovators, academia researchers, investors, financial institutions and trade & investment organisations. Currently I am also building multimillion dollar worth Blockchain as a Service (BaaS) - Fintech, DefTech & MediaTech Network for Content Distribution.
                </span>
              </motion.div>
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Pravash Dey</h2>
          <p className="text-gray-500 text-center">Curator At US India Blockchain Council</p>
        </div>
        {/* Profile 2 - Navdeep Chobhiyal */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: "0 30% 0 30%" }}
            whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <motion.img
              src="/navdeep-hover.png"
              alt="Navdeep Chobhiyal Hover"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
            />
            <a href="https://www.linkedin.com/in/navdeep54g3/" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                <span className="text-white text-sm text-center hidden group-hover:block">
                Building VALUE generating systems & Consulting Firms @HansHills | Co-Founder & CBO @GydeXP
                </span>
              </motion.div>
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Navdeep Chobhiyal</h2>
          <p className="text-gray-500 text-center">Co-Founder & CBO @GydeXP</p>
        </div>
        {/* Profile 3 - Krishika Aggarwal */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: "0 30% 0 30%" }}
            whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <motion.img
              src="/Krishika.jpg"
              alt="Krishika"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
            />
            <a href="https://www.linkedin.com/in/krishika-aggarwal-923900294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                <span className="text-white text-sm text-center hidden group-hover:block">
                I&apos;m Krishika Aggarwal, a purpose-driven human and a Fashion Communication student at the National Institute of Fashion Technology, Mumbai. I focus on creating impactful, human-centered designs and am passionate about solving real-world problems by applying my skills in innovative ways to make a meaningful&nbsp;difference.
                </span>
              </motion.div>
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Krishika Aggarwal</h2>
          <p className="text-gray-500 text-center">Fashion Communication</p>
        </div>
        {/* Profile 4 - Adarsh Gautam */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 lg:w-72 lg:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: "0 30% 0 30%" }}
            whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <motion.img
              src="/Adarsh-hover.png"
              alt="Adarsh Gautam Hover"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
            />
            <a href="https://www.linkedin.com/in/connect-adarsh/" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                <span className="text-white text-sm text-center hidden group-hover:block">
                Co-Curator At US India Blockchain Council
                </span>
              </motion.div>
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Adarsh Gautam</h2>
          <p className="text-gray-500 text-center">Founder @Shardz</p>
        </div>
        {/* Profile - Col. Prem Rajpurohit */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: "0 30% 0 30%" }}
            whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <motion.img
              src="/prem.png"
              alt="Col. Prem Rajpurohit"
              className="absolute inset-0 w-full h-full object-cover object-top"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
            />
            <a href="https://www.linkedin.com/in/col-prem-rajpurohit-pmp-lssbb-mba-b04585192/" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                <span className="text-white text-sm text-center hidden group-hover:block">
                Col. Prem Rajpurohit is the CEO of Nebula Accelerator, leveraging his extensive experience to foster innovation.
                </span>
              </motion.div>
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Col. Prem Rajpurohit</h2>
          <p className="text-gray-500 text-center">Founder @GSL</p>
        </div>
        {/* Profile - Sanchit Kathpalia */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: "0 30% 0 30%" }}
            whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <motion.img
              src="/SANCHIT_CNCG_FINAL.jpg"
              alt="Sanchit Kathpalia"
              className="absolute inset-0 w-full h-full object-cover object-top"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
            />
            <a href="https://www.linkedin.com/in/sanchit-kathpalia-a841b5252/" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                <span className="text-white text-sm text-center hidden group-hover:block">
                Sanchit is a Full Stack Developer at Nebula Accelerator, passionate about building scalable web and mobile solutions, and driving innovation in tech teams.
                </span>
              </motion.div>
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Sanchit Kathpalia</h2>
          <p className="text-gray-500 text-center">Full Stack Developer @Nebula Accelerator</p>
        </div>
        {/* Profile - Kusum Kharayat */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: "0 30% 0 30%" }}
            whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <motion.img
              src="/Kusum image new.jpg"
              alt="Kusum Kharayat"
              className="absolute inset-0 w-full h-full object-cover object-top"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
            />
            <a href="https://www.linkedin.com/in/kusumkharayat/" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                <span className="text-white text-sm text-center hidden group-hover:block">
                Kusum is a Full Stack Developer at Nebula Accelerator, skilled in both frontend and backend technologies, and dedicated to delivering seamless user experiences.
                </span>
              </motion.div>
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Kusum Kharayat</h2>
          <p className="text-gray-500 text-center">Full Stack Developer @Nebula Accelerator</p>
        </div>
        {/* Profile - Pawan Badoni */}
        <div className="group rounded-lg p-6 flex flex-col justify-around items-center relative">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 mb-4 overflow-hidden"
            initial={{ borderRadius: "0 30% 0 30%" }}
            whileHover={{ borderRadius: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <motion.img
              src="/Pawan Badoni image.jpg"
              alt="Pawan Badoni"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 1.5, ease: "easeInOut" } }}
            />
            <a href="https://www.linkedin.com/in/pawan-badoni-3930242a3/" target="_blank" rel="noopener noreferrer">
              <motion.div className="absolute inset-0 flex items-center justify-center bg-[#007F40] opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out">
                <span className="text-white text-sm text-center hidden group-hover:block">
                Pawan is responsible for Events & Cybersecurity at Nebula Accelerator, ensuring secure digital operations and organizing impactful tech events.
                </span>
              </motion.div>
              <motion.div className="absolute bottom-0 right-0 bg-[#007F40] p-2 rounded-tr-2xl rounded-bl-2xl group-hover:scale-0 transition-all duration-500 ease-in-out">
                <FaLinkedin className="w-6 h-6 text-white" />
              </motion.div>
            </a>
          </motion.div>
          <h2 className="text-lg font-semibold text-center">Pawan Badoni</h2>
          <p className="text-gray-500 text-center">Events & Cybersecurity @Nebula Accelerator</p>
        </div>
      </div>
    </div>
  );
}
