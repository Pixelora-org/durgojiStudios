import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
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
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0D0D0D] py-6"
                >
                  Send Message
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
                      <h3 className="text-xl text-white mb-2">Address</h3>
                      <p className="text-white/60">
                        123 Photography Lane<br />
                        New York, NY 10001<br />
                        United States
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
                      <p className="text-white/60">(555) 123-4567</p>
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
                      <p className="text-white/60">info@luxestudio.com</p>
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

      {/* Map Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-white text-center">Visit Our Studio</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] bg-[#1A1A1A] flex items-center justify-center border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185492346067!3d40.742054571427615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sMadison%20Square%20Garden!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">Schedule Your Shoot</h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Ready to create stunning photographs? Book your session today and let us capture your special moments.
          </p>
          <Button size="lg" className="bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0D0D0D] px-8 py-6">
            Book Your Session Now
          </Button>
        </div>
      </section>
    </div>
  );
}
