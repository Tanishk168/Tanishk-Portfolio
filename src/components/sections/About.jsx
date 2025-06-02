import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const [frontendSkills, setFrontendSkills] = useState([
    "Html",
    "CSS",
    "Javascript",
    "ReactJS",
    "tailwindCss",
  ]);

  const [backendSkills, setBackendSkills] = useState([
    "Node.js",
    "Express.js",
    "API",
    "SQL",
  ]);

  return (
    <section
      id="About" 
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl mb-8 font-bold md:text-5xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h1>
        <div className="rounded-xl border border-white/20 p-8 text-center hover:-translate-y-1 hover:shadow-[1px_2px_8px_rgba(59,130,246,0.2)] transition-all">
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            ipsam asperiores cupiditate quidem esse a! Optio exercitationem
            ducimus iusto quasi?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* frontend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-start">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, key) => {
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
            </div>
            {/* backend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-start">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, key) => {
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
            </div>
          </div>
        </div>
        {/* education and work experience part */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* education or grid item1*/}
          <div className="rounded-xl border border-white/20 p-8  hover:-translate-y-1 hover:shadow-[1px_2px_8px_rgba(59,130,246,0.2)] transition-all mt-8">
            <h3 className="text-xl font-bold mb-4 ">🏫 Education</h3>
            <ul className="list-disc space-y-2 text-gray-300">
               <li>
                <strong>Secondary (X) education</strong>
                --SGRR Public School (2018)
              </li>
               <li>
                <strong>Senior Secondary (XII)</strong>
                --SGRR Public School(2020)
              </li>
              <li>
                <strong>Bachelor Of Computer Application</strong>
                --SGRR University (2020-2023)
              </li>
              <li>
                <strong>Master Of Computer Application</strong>
                -- SGRR University (2023-2025)
              </li>
            </ul>
          </div>
          {/* work experience or grid item2*/}
          <div className="rounded-xl border border-white/20 p-8  hover:-translate-y-1 hover:shadow-[1px_2px_8px_rgba(59,130,246,0.2)] transition-all mt-8">
            <h3 className="text-xl font-bold mb-4 ">👨🏻‍💻 Work Experience</h3>
            <div>
              {/* first experience */}
              <div className="text-gray-300 space-y-1">
                <h4 className="font-semibold">
                  Web developer Intern at Sheris India pvt ltd (6 months)
                </h4>
                <p>Assisted in frontend development and catelogue management with team .</p>
              </div>
               {/* second experience */}
              <div className="text-gray-300 space-y-1 mt-4 ">
                <h4 className="font-semibold">
                  Javascript Experience on self made projects
                </h4>
                <p>Developed javascript projects and enhanced skills by practicing .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
