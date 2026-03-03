'use client'
import emailjs from 'emailjs-com';
import { useState } from 'react';


export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ji1de1l",
        "template_u1yzk57",
        e.target,
        "NSwcs1l_iN3ZChMvX"
      )
      .then((result) => {
        setFormData({ email: "", subject: "", message: "" });
        setSent(true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error sending email: ", error);
      });
  };

  return (
    <div className="page-bg min-h-screen text-white">
      <main className="max-w-5xl mx-auto px-6 py-64">
        <div className="max-w-lg mx-auto glass hover-glass rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[var(--tertiary-color)] text-center">Contact Me</h2>
          {sent && (
            <div className="mb-4 text-green-400 text-center font-semibold">Message sent! I'll get back to you soon.</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/80">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md glass-input text-white focus:outline-none focus:border-[var(--tertiary-color)] transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white/80">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md glass-input text-white focus:outline-none focus:border-[var(--tertiary-color)] transition"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white/80">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md glass-input text-white focus:outline-none focus:border-[var(--tertiary-color)] transition"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-md glass-button text-white font-semibold shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
