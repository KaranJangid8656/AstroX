import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWorks } from "../components/FrameWorks";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaDiscord } from "react-icons/fa";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Karan Suthar</p>
            <p className="subtext">
              Data Science student and Co-founder of ScriptVerse.
              I actively participate in hackathons and innovation challenges to explore creative problem-solving.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-black-color grid-2" ref={grid2Container}>
          <div className="z-10 w-[90%] p-4">
            <p className="headtext">Hackathons & Coding</p>
            <p className="subtext">
              I'm passionate about building things from scratch and love participating in hackathons to solve real-world problems through tech. Coding is not just a skill, it's my creative outlet.
            </p>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="subtext">
              I'm based in Bengaluru and open to work and also contribute in open source projects.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        <div 
  className="grid-4 rounded-xl p-6 shadow-2xl border border-white/10"
  style={{
    backgroundImage: 'url("/assets/images/scriptverse-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative'
  }}
>
  {/* Removed overlay */}
  <div className="flex flex-col items-center justify-center gap-6 size-full text-center relative z-10">
    <p className="headtext text-white">CO-FOUNDER</p>
    <p className="subtext text-gray-300 max-w-md">
      
    </p>
    <a
      href="https://script-verse-mu.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors mt-10"
    >
      Visit ScriptVerse
    </a>
  </div>
</div>


        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
