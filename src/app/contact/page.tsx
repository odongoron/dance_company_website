"use client";

import React, { useState } from "react";
import { Mail, MapPin, CheckCircle } from "lucide-react";
import { sendEmail } from "./actions"; 

// form status structure
interface FormStatus {
  submitted: boolean;
  sending: boolean;
}

// structure of form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ArtisticContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    sending: false,
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: false, sending: true });

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setFormStatus({ submitted: true, sending: false });
      } else {
        setFormStatus({ submitted: false, sending: false });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({ submitted: false, sending: false });
    }
  };

  return (
    <div className="min-h-screen bg-[#d5d8dd] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1a3264"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,245.3C384,267,480,277,576,261.3C672,245,768,203,864,181.3C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1a3264] mb-4 flex items-center justify-center">
            Reach Out
          </h1>
          <p className="text-xl text-gray-600">
            And make every movement tell a story
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:-translate-y-2">
              <Mail className="w-12 h-12 text-[#c4a01c] mx-auto mb-4" />
              <h3 className="text-center text-xl font-semibold text-[#1a3264]">
                Email Us
              </h3>
              <p className="text-center text-gray-600">
                info@dancecompany.com
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:-translate-y-2">
              <MapPin className="w-12 h-12 text-[#c4a01c] mx-auto mb-4" />
              <h3 className="text-center text-xl font-semibold text-[#1a3264]">
                Our Location
              </h3>
              <p className="text-center text-gray-600">
                Nairobi, Kenya
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {formStatus.submitted && (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#1a3264]">
                  Message Received!
                </h3>
                <p className="text-gray-600">We will be in touch soon.</p>
              </div>
            )}

            {!formStatus.submitted && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 border-b-2 border-[#c4a01c] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 border-b-2 border-[#c4a01c] focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-3 border-b-2 border-[#c4a01c] focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={formStatus.sending}
                  className="w-full bg-[#1a3264] text-white py-3 rounded-full hover:bg-[#c4a01c] transition-colors"
                >
                  {formStatus.sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
