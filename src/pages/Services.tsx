import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Heart, Users, Camera, Home, Briefcase, Check } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const services = [
  {
    id: 1,
    title: "Events & Weddings Shooting",
    icon: Heart,
    image: "/images/couples.png",
    description: "Candid, cinematic, and emotional storytelling of your big day. Capture cinematic moments with creative lighting and motion.",
    features: [
      "Full event coverage",
      "Cinematic storytelling",
      "Creative lighting",
      "Professional editing",
      "Online gallery access",
    ],
  },
  {
    id: 2,
    title: "Product Photography",
    icon: Camera,
    image: "/images/ear rings.png",
    description: "High-quality shots to elevate your brand and marketing visuals.",
    features: [
      "Studio or location shoots",
      "Professional lighting setup",
      "Brand-focused imagery",
      "High-resolution files",
      "Quick turnaround",
    ],
  },
  {
    id: 3,
    title: "Maternity & Newborn Shoots",
    icon: Heart,
    image: "/images/_DSC1014.jpg",
    description: "Celebrate the joy of new beginnings with warm, emotional, and timeless imagery.",
    features: [
      "Gentle, comfortable sessions",
      "Natural and posed options",
      "Family inclusion welcome",
      "Timeless editing style",
      "Digital gallery included",
    ],
  },
  {
    id: 5,
    title: "Instant Photo Download",
    icon: Users,
    image: "/images/couples3.png",
    description: "Let guests view and download photos instantly during the event.",
    features: [
      "Real-time photo upload",
      "Instant sharing platform",
      "Guest access portal",
      "Social media ready",
      "High-resolution downloads",
    ],
  },
  {
    id: 6,
    title: "Live Streaming of Events",
    icon: Briefcase,
    image: "/images/mehindi.png",
    description: "Broadcast your special moments in real time with professional quality.",
    features: [
      "HD quality streaming",
      "Multi-platform support",
      "Professional audio setup",
      "Real-time engagement",
      "Recording included",
    ],
  },
  {
    id: 7,
    title: "Web Design",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    description: "Build modern, responsive websites that reflect your brand.",
    features: [
      "Responsive design",
      "SEO optimized",
      "Fast loading times",
      "Mobile-friendly",
      "Custom branding",
    ],
  },
];


export function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-6 lg:px-8 bg-[#0D0D0D] border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Our Studio Services</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Your vision deserves to be seen. We specialize in modern photography that blends creativity, technology, and style to deliver stunning visuals.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover"
                    loading="lazy"
                    fetchPriority="low"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#F2C94C]/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-[#F2C94C]" />
                  </div>
                  <h2 className="text-4xl text-white">{service.title}</h2>
                </div>
                <p className="text-xl text-white/60 mb-8">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/80">
                      <div className="w-6 h-6 rounded-full bg-[#F2C94C]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#F2C94C]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0D0D0D]">
                    Book This Service
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">Ready to Capture Your Perfect Moment?</h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact us today to discuss your photography and creative needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0D0D0D] px-8 py-6">
              Book a Photoshoot
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
