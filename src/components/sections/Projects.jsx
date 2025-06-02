import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        {/* projects setion container */}
        <div className="max-w-4xl px-4 mx-auto">
          <h1 className="text-3xl font-bold md:text-5xl bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent text-center">
            Featured Projects
          </h1>
          {/* project showcase grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-9 ">
            {/* item1 grid */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[1px_2px_8px_rgba(59,130,246,0.2)] transition-all ">
              <h3 className="text-xl font-bold mb-2 ">Personal Portfolio </h3>

              <p className="text-gray-400 mb-4">
                A responsive and interactive portfolio built with React for
                dynamic rendering and component-based architecture to showcase
                my skills, projects, and experience with smooth navigation and a
                clean UI.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Html", "CSS", "Javascript", "ReactJS", "tailwindCss"].map(
                  (skill, key) => {
                    return (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 text-sm py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[2px_3px_8px_rgba(59,130,246,0.2)] transition-all "
                      >
                        {skill}
                      </span>
                    );
                  }
                )}
              </div>
              {/* view project */}
              <div className="flex justify-between items-center my-2">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-300 transition-colors"
                >
                  View Project ➨{" "}
                </a>
                {/* add image of project in future */}
                <img
                  src="/images/PersonalPortfolio.png"
                  alt="Portfolio preview"
                  className="h-10 w-auto rounded shadow-md"
                />
              </div>
            </div>
            {/* item2 grid */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[1px_2px_8px_rgba(59,130,246,0.2)] transition-all ">
              <h3 className="text-xl font-bold mb-4">Khatabook Solution</h3>

              <p className="text-gray-400 mb-4">
                A simple and efficient ledger management app built with Node.js
                backend and React frontend. It helps users track transactions
                and manage transactions in user friendly and responsive design.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Html",
                  "CSS",
                  "Javascript",
                  "Node.js",
                  "Express.js",
                  "ReactJS",
                  "tailwindCss",
                ].map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 text-sm py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[2px_3px_8px_rgba(59,130,246,0.2)] transition-all "
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
              {/* view project */}
              <div className="flex justify-between items-center my-2">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-300 transition-colors"
                >
                  View Project ➨{" "}
                </a>
                {/* add image of project in future */}
                <img
                  src="/images/khatabook.png"
                  alt="Khatabook preview"
                  className="h-10 w-auto rounded shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
