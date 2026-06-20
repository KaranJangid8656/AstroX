import { Particles } from "../components/Particles";

const Contact = () => {
  return (
    <section className="relative flex items-center c-space mb-20">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Direct Contact</h2>
          <p className="font-normal text-neutral-400">
            Let's connect directly! Feel free to reach out to me on any of these platforms for collaboration or discussion.
          </p>
        </div>
        <div className="flex gap-4">
          <a 
            href="https://www.linkedin.com/in/karansuthar9565" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/KaranJangid8656" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            GitHub
          </a>
          <a 
            href="https://www.instagram.com/_karan__suthar_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
