import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "emailjs-com";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_j29ee2j", // Replace with your EmailJS service ID
        "template_5pac2mj", // Replace with your EmailJS template ID
        formData,
        "vIiMCG_wQY4eZSVCk" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "We'll get back to you as soon as possible.",
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast({
            title: "Error",
            description: "Failed to send your message. Please try again later.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t("contactTitle")}</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-6">
            {t("contactSub")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-wolf-beige/30 p-8 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("name")} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("email")} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="wolfagroservices@gmail.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("message")} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-wolf-brown hover:bg-wolf-brown/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : t("send")}
                </Button>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-wolf-brown mb-6">
                Wolf Agro Services
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-wolf-green/10 rounded-full flex items-center justify-center mr-3">
                    <MdOutlineLocalPhone />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-wolf-brown">
                      {t("phone")}
                    </h4>
                    <p className="text-gray-600">+227 98 08 35 77</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-wolf-yellow/10 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-wolf-yellow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-wolf-brown">
                      Email
                    </h4>
                    <p className="text-gray-600">wolfagroservices@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-wolf-purple/10 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-wolf-purple"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-wolf-brown">
                      {t("address")}
                    </h4>
                    <p className="text-gray-600">
                      334 Avenue du Mounio, Niamey, Niger
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <h4 className="text-lg font-semibold text-wolf-brown mb-3">
                {t("followUs")}
              </h4>
              <div className="flex space-x-4">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/+221763082932"
                  className="w-10 h-10 bg-wolf-green/10 rounded-full flex items-center justify-center hover:bg-wolf-green hover:text-white transition-colors"
                >
                  <FaWhatsapp />
                </a>

                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn profile URL
                  className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-wolf-blue hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H3.127v7.225h1.816zm-.91-8.212c.837 0 1.358-.554 1.358-1.248-.015-.71-.521-1.248-1.342-1.248-.821 0-1.358.538-1.358 1.248 0 .694.52 1.248 1.327 1.248h.015zm4.91 8.212V9.359c0-.216.016-.432.08-.586.176-.432.577-.88 1.25-.88.881 0 1.233.663 1.233 1.634v3.867h1.816V9.25c0-2.22-1.184-3.252-2.764-3.252-1.276 0-1.845.7-2.165 1.19v.026h-.015a5.58 5.58 0 0 1 .015-.026V6.169H6.989c.024.38 0 7.225 0 7.225h1.816z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
