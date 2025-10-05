// ControlledContactPage.jsx
import React, { useState } from "react";

const ControlledContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Thank you, ${formData.name}! We received your message.`);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-12">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-purple-700">Get in Touch</h2>
            <p className="text-gray-600">
              Have any questions or queries? Reach out to us via phone, email, or WhatsApp. We are here to help!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700">Phone:</span>
                <a href="tel:+911234567890" className="text-purple-600 hover:underline">+91 12345 67890</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700">WhatsApp:</span>
                <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700">Email:</span>
                <a href="mailto:info@example.com" className="text-purple-600 hover:underline">info@example.com</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-gray-700">Address:</span>
                <p className="text-gray-600">123, Roshan Nagar, Faridabad, Haryana, India</p>
              </div>
            </div>
            {/* Google Map */}
            <div className="mt-6 rounded-lg overflow-hidden shadow">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.000000!2d77.0000!3d28.4333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d0e0a12345%3A0x123456789abcdef!2sRoshan%20Nagar%2C%20Faridabad!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                className="w-full h-44 border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Controlled Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              {/* Mobile Number */}
              {/* <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              /> */}

              {/* Subject */}
              {/* <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              /> */}

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ControlledContactPage;
