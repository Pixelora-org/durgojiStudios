import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { MapPin, Phone, Mail, Clock, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_ka7snfb";
const EMAILJS_TEMPLATE_ID = "template_diof797";
const EMAILJS_PUBLIC_KEY = "s28GDDSCwYC1fNEww";

export function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });


  useEffect(() => {
    // Handle scroll to anchor when page loads with hash
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Small delay to ensure page is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          // Adjust for fixed header offset
          window.scrollBy(0, -80);
        }, 100);
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if EmailJS credentials are configured
    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      setSubmitStatus({
        type: "error",
        message: "Email service is not configured. Please contact the website administrator.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Prepare template parameters - matching your EmailJS template exactly
      const templateParams = {
        title: "Contact Form Submission",
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      // Pass public key as 4th parameter (recommended for @emailjs/browser v4+)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Success
      setSubmitStatus({
        type: "success",
        message: "Thank you for contacting us! We'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      // Better error handling
      let errorMessage = "Sorry, there was an error sending your message. Please try again or contact us directly at durgojiraosofficial@gmail.com";
      
      if (error?.status === 412 || error?.statusText === "Precondition Failed") {
        errorMessage = "Email service configuration error. Please check: 1) Service is connected in EmailJS dashboard, 2) Template variables match exactly, 3) Service is active.";
      } else if (error?.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error?.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-6 lg:px-8 bg-[#0D0D0D] border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Let's discuss your photography needs and create something beautiful together
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-white">Send Us a Message</h2>
              <p className="text-white/60 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#1A1A1A] border-white/10 text-white focus:border-[#F2C94C] rounded-xl"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#1A1A1A] border-white/10 text-white focus:border-[#F2C94C] rounded-xl"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#1A1A1A] border-white/10 text-white focus:border-[#F2C94C] rounded-xl"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-[#1A1A1A] border-white/10 text-white focus:border-[#F2C94C] rounded-xl resize-none"
                    placeholder="Tell us about your photography needs..."
                  />
                </div>
                {submitStatus.type && (
                  <div
                    className={`p-5 rounded-2xl flex items-start gap-4 animate-in fade-in slide-in-from-top-2 duration-300 ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 text-green-300 border-2 border-green-500/40 shadow-lg shadow-green-500/10"
                        : "bg-red-500/10 text-red-300 border-2 border-red-500/40 shadow-lg shadow-red-500/10"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className={`font-semibold mb-1 ${
                        submitStatus.type === "success" ? "text-green-300" : "text-red-300"
                      }`}>
                        {submitStatus.type === "success" ? "Message Sent Successfully!" : "Error Sending Message"}
                      </p>
                      <p className="text-sm opacity-90">{submitStatus.message}</p>
                    </div>
                  </div>
                )}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0D0D0D] py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6 text-white">Get in Touch</h2>
                <p className="text-white/60 mb-8">
                  We'd love to hear from you. Reach out through any of these channels or visit our studio.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-[#1A1A1A] border-white/10 rounded-2xl p-6 hover:border-[#F2C94C]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F2C94C]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#F2C94C]" />
                    </div>
                    <div>
                      <h3 className="text-xl text-white mb-2">Website</h3>
                      <p className="text-white/60">
                        www.durgojistudios.com.au
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-[#1A1A1A] border-white/10 rounded-2xl p-6 hover:border-[#F2C94C]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F2C94C]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#F2C94C]" />
                    </div>
                    <div>
                      <h3 className="text-xl text-white mb-2">Phone</h3>
                      <p className="text-white/60">+61 469770248</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-[#1A1A1A] border-white/10 rounded-2xl p-6 hover:border-[#F2C94C]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F2C94C]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#F2C94C]" />
                    </div>
                    <div>
                      <h3 className="text-xl text-white mb-2">Email</h3>
                      <p className="text-white/60">durgojiraosofficial@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-[#1A1A1A] border-white/10 rounded-2xl p-6 hover:border-[#F2C94C]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F2C94C]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#F2C94C]" />
                    </div>
                    <div>
                      <h3 className="text-xl text-white mb-2">Business Hours</h3>
                      <p className="text-white/60">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: By appointment only
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
