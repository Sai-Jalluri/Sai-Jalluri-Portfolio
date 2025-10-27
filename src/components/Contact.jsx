import React, { useState } from 'react';
import { Mail, Phone, Send, Code, ExternalLink } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/sai_jalluri/',
      icon: Code,
      color: 'hover:text-amber-400'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Sai-Jalluri',
      icon: ExternalLink,
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#0f0f0f] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-emerald-500 font-mono text-sm mb-2">// Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-emerald-500">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-mono">Email</p>
                    <a href="mailto:saijalluri77@gmail.com" className="text-white hover:text-emerald-500 transition-colors">
                      saijalluri77@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-mono">Phone</p>
                    <a href="tel:8885550267" className="text-white hover:text-emerald-500 transition-colors">
                      +91 8885550267
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 bg-[#1a1a1a] border border-slate-800 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Find Me Online</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-slate-300 ${link.color} transition-all duration-200 hover:scale-105`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-mono text-sm">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Code Block Decoration */}
            <div className="p-6 bg-[#1a1a1a] border border-slate-800 rounded-lg font-mono text-sm">
              <p className="text-slate-500">// Available for opportunities</p>
              <p className="text-emerald-500">const <span className="text-white">status</span> = {'{'}</p>
              <p className="text-slate-400 pl-4">  available: <span className="text-emerald-400">true</span>,</p>
              <p className="text-slate-400 pl-4">  openTo: <span className="text-amber-400">["internships", "projects", "collaboration"]</span></p>
              <p className="text-emerald-500">{'}'};</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-[#1a1a1a] border border-slate-800 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-400 font-mono text-sm mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-slate-700 rounded text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-400 font-mono text-sm mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-slate-700 rounded text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-400 font-mono text-sm mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-slate-700 rounded text-white focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-emerald-500 text-black font-mono text-sm font-semibold rounded hover:bg-emerald-400 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
