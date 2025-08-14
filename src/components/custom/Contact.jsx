import React, { useState, useRef } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "", // digunakan untuk isian email user
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const formRef = useRef();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name === "reply_to" ? "email" : e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirm = window.confirm(
      "Are you sure you want to send this message?"
    );
    if (!confirm) return;

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_nbmeji9", // Ganti dengan service ID kamu
        "template_l183cdb", // Ganti dengan template ID kamu
        formRef.current,
        "AxdvY_73s4G2KpLzj" // Ganti dengan public key kamu
      );

      console.log(result.text);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen flex flex-col">
      {/* Heading */}
      <div className="w-full flex">
        <div className="pt-12 lg:pt-48 pb-12 px-6 max-w-7xl w-full">
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight font-semibold text-balance">
            I’m a Software Developer based in East Borneo turning bold ideas
            into elegant code and intuitive digital experiences
          </h1>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center w-full px-6 py-4">
        <span className="text-lg font-medium mr-6">CONTACT ME</span>
        <hr className="flex-1 border-t border-gray-500 opacity-60" />
      </div>

      {/* Contact + Form */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-6 py-16 md:py-24 gap-12">
        {/* Contact Info */}
        <div className="flex-1 text-white space-y-8">
          <div>
            <h3 className="text-sm font-semibold mb-2 tracking-widest">
              SEND AN E-MAIL
            </h3>
            <p className="text-base">syaukaniakbar2019@gmail.com</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2 tracking-widest">
              AKHMAD SYAUKANI AKBAR
            </h3>
            <p className="text-base leading-relaxed">
              Perumahan Dosen,
              <br />
              Politani, Jln. Samratulangi,
              <br />
              75131
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-2">
            <a
              href="https://www.instagram.com/syaukaniabr/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 text-sm font-medium flex items-center gap-2 transition"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://wa.me/6285219594240"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 text-sm font-medium flex items-center gap-2 transition"
            >
              <FaWhatsapp /> Whatsapp
            </a>
            <a
              href="#"
              className="text-white hover:text-green-400 text-sm font-medium flex items-center gap-2 transition"
            >
              LinkedIn <span aria-hidden>↗</span>
            </a>
            <a
              href="#"
              className="text-white hover:text-green-400 text-sm font-medium flex items-center gap-2 transition"
            >
              Github <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex-1 space-y-6"
        >
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 bg-neutral-900 text-white placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Your Email
            </label>
            <input
              name="reply_to"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@domain.com"
              required
              className="w-full px-4 py-2 bg-neutral-900 text-white placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              required
              className="w-full px-4 py-2 bg-neutral-900 text-white placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 resize-y"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full sm:w-auto px-6 py-3 rounded-md font-semibold transition duration-300 ${
              loading
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-[#3B82F6] text-white hover:bg-green-400 text-black cursor-pointer"
            }`}
          >
            {loading ? "Sending..." : "Submit Message"}
          </button>

          {/* Status Feedback */}
          {status && <p className="text-sm text-green-300 mt-2">{status}</p>}
        </form>
      </div>

      {/* Back Link */}
      <div className="mb-16 text-center">
        <Link
          to="/"
          className="text-sm text-green-300 hover:text-green-200 transition duration-300 underline underline-offset-4"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ContactSection;
