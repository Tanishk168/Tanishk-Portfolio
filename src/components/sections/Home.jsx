import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center relative "
        
    >
      <RevealOnScroll>

        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-tl from-blue-400 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-20 ">
                Hi, I'm Tanishk Sharma
            </h1>
            <p className="text-gray-400 text-lg max-w-lg mx-auto">I'm a passionate web developer skilled in building responsive and dynamic websites using modern tools like React, Tailwind CSS, and JavaScript. I love turning ideas into real-world applications that solve problems and deliver great user experiences.
            </p>
            <div className="flex justify-center space-x-4 py-4">
              {/* projects button */}
                <a className="bg-blue-500 py-3 px-6 text-white rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" href="#Projects">View Projects</a>
                {/* Contact button */}
                <a className="border border-radius-200 border-blue-500/50 rounded px-6 py-3 text-blue-500 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10" href="#Contact">Contact</a>
            </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
