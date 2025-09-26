
import { motion } from "framer-motion";
import profile from "../assets/Aboutme.jpg"; // Use rectangle image

function About() {
  return (
    <section
      id="about"
      className="bg-hero-gradient text-white min-h-screen flex items-center px-6 py-16 scroll-mt-20 "
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Animated container for About section using Framer Motion */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Heading */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl sm:text-6xl font-bold text-cyan-400 animate-glow-heading">
              About Me
            </h2>
            <div className="mx-auto md:mx-0 mt-2 h-[3px] w-24 bg-cyan-400 rounded-full animate-pulse-left-glow"></div>
          </div>

          {/* About text */}
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I’m <span className="text-white font-semibold">Ambrish Rao</span>, a final-year
            <span className="text-cyan-300 font-medium"> B.Tech IT student</span> and
            <span className="text-cyan-300 font-medium"> Full-Stack Web Developer</span> skilled in
            <span className="text-cyan-300 font-medium"> MERN Stack, Python, and JavaScript</span>.
            I focus on building <span className="text-white font-medium">scalable, responsive, and high-performance web apps</span>. <br /> <br />
            During my internship at <span className="text-cyan-300 font-medium">TrainX</span>, I dove into <span className="text-cyan-300 font-medium">DSA and company-specific training</span>, I sharpened my problem-solving abilities and gained hands-on development experience.

          </p>

          {/* Key projects */}
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            <span className="text-cyan-400 font-medium">Key Projects:</span><br />

            <span className="text-white font-semibold">Image Search App –</span> Responsive web app using Unsplash API.
            <span className="text-gray-400"> (HTML, CSS, JS)</span><br />

            <span className="text-white font-semibold">Bank Application (GUI) –</span> Desktop banking system.
            <span className="text-gray-400"> (Python, CustomTkinter, OpenPyXL)</span><br />

            <span className="text-white font-semibold">Whiteboard App –</span> Collaborative online whiteboard.
            <span className="text-gray-400"> (HTML, CSS, JS)</span><br />

            <span className="text-white font-semibold">Fast Food Recipe App –</span> React-based recipe search app.
            <span className="text-gray-400"> (React.js, MealDB API)</span>
          </p>

          {/* Closing line */}
          <p className="text-gray-400 text-base sm:text-lg">
            I’m seeking opportunities in innovative, fast-paced teams where I can apply my skills, contribute to impactful projects, and grow as a versatile full-stack engineer.

          </p>
        </motion.div>



        {/* Right Side - Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group w-full sm:w-[340px] md:w-[400px] lg:w-[480px] transition-transform duration-300">
            <img
              src={profile}
              alt="Ambrish Rao"
              className="w-full rounded-4xl h-auto object-cover transform 
      group-hover:-translate-y-2 
      group-hover:-translate-x-3 
      group-hover:scale-105 
      transition-transform duration-500 ease-in-out"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
