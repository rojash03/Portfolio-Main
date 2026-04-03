import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import usePageMeta from "../hooks/usePageMeta";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  usePageMeta(
    "Contact | Rojesh Portfolio",
    "Get in touch with Rojesh Thapa for collaboration, project work, and opportunities."
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setErrorMessage("");
    setValidationErrors({});

    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (formData.subject.trim().length < 4) {
      errors.subject = "Subject should be at least 4 characters.";
    }
    if (formData.message.trim().length < 20) {
      errors.message = "Message should be at least 20 characters.";
    }
    if (formData.company) {
      setErrorMessage("Spam detected. Submission blocked.");
      return;
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xeozzzke", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "", company: "" });
      } else {
        setErrorMessage("There was a problem sending your message. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row w-full p-4 md:p-10 gap-6">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-textColor shadow-lg rounded-md p-6">
          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-6">Contact Form</h1>

            <label className="block mb-1">Name:</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full max-w-md px-4 py-2 border rounded-md mb-4"
              required
            />
            {validationErrors.name && (
              <p className="text-red-600 text-sm -mt-2 mb-3">{validationErrors.name}</p>
            )}

            <label className="block mb-1">Email:</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full max-w-md px-4 py-2 border rounded-md mb-4"
              required
            />
            {validationErrors.email && (
              <p className="text-red-600 text-sm -mt-2 mb-3">{validationErrors.email}</p>
            )}

            <label className="block mb-1">Subject:</label>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="w-full max-w-md px-4 py-2 border rounded-md mb-4"
              required
            />
            {validationErrors.subject && (
              <p className="text-red-600 text-sm -mt-2 mb-3">{validationErrors.subject}</p>
            )}

            <label className="block mb-1">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full max-w-md px-4 py-2 border rounded-md mb-4"
              required
              rows="4"
            ></textarea>
            {validationErrors.message && (
              <p className="text-red-600 text-sm -mt-2 mb-3">{validationErrors.message}</p>
            )}

            <input
              type="text"
              name="company"
              value={formData.company || ""}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-textColor px-4 py-2 rounded-md hover:bg-secondary disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <p className="text-green-600 font-semibold mt-2">
                Message sent successfully!
              </p>
            )}

            {errorMessage && (
              <p className="text-red-600 font-semibold mt-2">{errorMessage}</p>
            )}

            <p className="text-xs text-gray-500 mt-3">
              Your details are only used to reply to your message.
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-start gap-4 p-4">
          <div>
            <h1 className="font-bold text-2xl mb-2">Contact Details</h1>
            <p className="text-base text-gray-700">
              I'm always interested in discussing cybersecurity, technology, and
              potential collaboration opportunities. Feel free to reach out!
            </p>
          </div>
          <div className="mt-4 space-y-4">
            <p className="flex items-center">
              <CiLocationOn className="text-2xl mr-2" />
              Aapgachi, Itahari, Nepal
            </p>
            <p className="flex items-center">
              <CiMail className="text-2xl mr-2" />
              thaparojash703@gmail.com
            </p>
            <p className="flex items-center">
              <CiPhone className="text-2xl mr-2" />
              +977 982-6085400
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
