"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactForm() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState({
    email: false,
    required: false,
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    checkRequired();
    
    if (field === 'email') {
      setError({ ...error, email: input.email ? !isValidEmail(input.email) : false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    const name = input.name.trim();
    const email = input.email.trim();
    const message = input.message.trim();

    if (!email || !message || !name) {
      setError({ ...error, required: true });
      toast.error('Please fill in all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      setError({ ...error, email: true });
      toast.error('Please enter a valid email address.');
      return;
    }

    if (isSending) {
      return;
    }

    setError({ email: false, required: false });

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast.error('Contact form is not configured. Please set EmailJS environment variables.');
      return;
    }

    const templateParams = {
      name,
      email,
      message,
      from_name: name,
      from_email: email,
      reply_to: email,
    };

    try {
      setIsSending(true);
      const res = await emailjs.send(serviceID, templateID, templateParams, { publicKey });

      if (res.status === 200) {
        toast.success(
          <>
            Message sent successfully!
            <br />
            I will get back to you soon.
          </>
        );
        setInput({
          name: '',
          email: '',
          message: '',
        });
        setTouched({
          name: false,
          email: false,
          message: false,
        });
      }
    } catch (error) {
      toast.error(error?.text || 'Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="">
      <h2 className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </h2>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
        </p>
        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSendMail} noValidate>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-base font-medium">
              Your Name: <span className="text-red-500" aria-label="required">*</span>
            </label>
            <input
              id="name"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] focus:ring-2 focus:ring-[#16f2b3] focus:ring-opacity-30 ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required
              placeholder="Enter your full name"
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={() => handleBlur('name')}
              value={input.name}
              aria-invalid={touched.name && !input.name}
              aria-describedby={touched.name && !input.name ? "name-error" : undefined}
            />
            {touched.name && !input.name && (
              <p id="name-error" className="text-sm text-red-400">Name is required!</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-base font-medium">
              Your Email: <span className="text-red-500" aria-label="required">*</span>
            </label>
            <input
              id="email"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] focus:ring-2 focus:ring-[#16f2b3] focus:ring-opacity-30 ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required
              placeholder="your.email@example.com"
              value={input.email}
              onChange={(e) => {
                const value = e.target.value;
                setInput({ ...input, email: value });
                if (touched.email) {
                  setError({ ...error, email: value ? !isValidEmail(value) : false });
                }
              }}
              onBlur={() => handleBlur('email')}
              aria-invalid={error.email || (touched.email && !input.email)}
              aria-describedby={error.email ? "email-error" : touched.email && !input.email ? "email-required-error" : undefined}
            />
            {error.email && (
              <p id="email-error" className="text-sm text-red-400">Please provide a valid email address!</p>
            )}
            {touched.email && !input.email && (
              <p id="email-required-error" className="text-sm text-red-400">Email is required!</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-base font-medium">
              Your Message: <span className="text-red-500" aria-label="required">*</span>
            </label>
            <textarea
              id="message"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] focus:ring-2 focus:ring-[#16f2b3] focus:ring-opacity-30 ring-0 outline-0 transition-all duration-300 px-3 py-2 resize-vertical"
              maxLength="500"
              required
              placeholder="Your message here... (max 500 characters)"
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={() => handleBlur('message')}
              rows="4"
              value={input.message}
              aria-invalid={touched.message && !input.message}
              aria-describedby={touched.message && !input.message ? "message-error" : "character-count"}
            />
            <div id="character-count" className="text-xs text-[#16f2b3]">
              {input.message.length}/500 characters
            </div>
            {touched.message && !input.message && (
              <p id="message-error" className="text-sm text-red-400">Message is required!</p>
            )}
          </div>
          <div className="flex flex-col items-center gap-2">
            {error.required && (
              <p className="text-sm text-red-400" role="alert">
                Please fill in all required fields!
              </p>
            )}
            <button
              type="submit"
              disabled={isSending}
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600"
            >
              <span>{isSending ? 'Sending...' : 'Send Message'}</span>
              <TbMailForward className="mt-1" size={18} aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;