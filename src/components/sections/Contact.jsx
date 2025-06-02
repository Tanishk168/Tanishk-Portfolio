import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll.jsx";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPELATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent Successfully");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Oops! something went wrong.");
      });
  };

  return (
    <section
      id="Contact"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="px-4 md:w-md max-w-3xl mx-auto ">
          <h2 className="text-3xl mb-8 font-bold md:text-5xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Contact Me
          </h2>
          <form action="submit" onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Good Name..."
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-white/5 border border-white/10 transition rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none transition focus:border-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none transition focus:border-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />
            </div>
            <div>
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />
            </div>
            <button
              type="submit"
              className="text-white w-full bg-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
