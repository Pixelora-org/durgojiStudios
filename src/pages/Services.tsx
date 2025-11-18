import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Heart, Users, Camera, Home, Briefcase, Check } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const services = [
  {
    id: 1,
    title: "Wedding Photography",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc2MzMyOTI0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Capture every precious moment of your special day with our premium wedding photography services.",
    features: [
      "Full day coverage",
      "Engagement session included",
      "Professional editing",
      "Online gallery",
      "Print rights included",
    ],
  },
  {
    id: 2,
    title: "Portrait Photography",
    icon: Users,
    image: "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzI2MzI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Professional headshots and portrait sessions for individuals and professionals.",
    features: [
      "Studio or outdoor location",
      "Multiple outfit changes",
      "Professional retouching",
      "Digital files included",
      "Same-day turnaround available",
    ],
  },
  {
    id: 3,
    title: "Fashion Photography",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1627661364735-eab249361d46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NjMzNTk0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Editorial and commercial fashion photography for brands and models.",
    features: [
      "Creative direction",
      "Professional styling",
      "High-end retouching",
      "Portfolio development",
      "Commercial licensing",
    ],
  },
  {
    id: 4,
    title: "Family Photography",
    icon: Home,
    image: "https://images.unsplash.com/photo-1526560244950-1a3c1ace48f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaG90b2dyYXBoeSUyMGhhcHB5fGVufDF8fHx8MTc2MzM3MTkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Create lasting memories with beautiful family photography sessions.",
    features: [
      "Outdoor or studio sessions",
      "All ages welcome",
      "Multiple locations",
      "Prints & albums available",
      "Extended family sessions",
    ],
  },
  {
    id: 5,
    title: "Corporate Photography",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1603201667493-4c2696de0b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwaG90b2dyYXBoeSUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MzM3MTkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Professional photography for corporate events, headshots, and brand content.",
    features: [
      "Event coverage",
      "Team headshots",
      "Brand photography",
      "Quick turnaround",
      "Volume discounts",
    ],
  },
];

const pricingPlans = [
  {
    id: 1,
    name: "Essential",
    price: "$499",
    description: "Perfect for small sessions and individual portraits",
    features: [
      "1-hour session",
      "1 location",
      "20 edited photos",
      "Online gallery",
      "Digital download",
    ],
  },
  {
    id: 2,
    name: "Premium",
    price: "$999",
    popular: true,
    description: "Ideal for events and family sessions",
    features: [
      "3-hour session",
      "2 locations",
      "50 edited photos",
      "Online gallery",
      "Digital download",
      "10 prints included",
    ],
  },
  {
    id: 3,
    name: "Luxury",
    price: "$2,499",
    description: "Complete coverage for weddings and special events",
    features: [
      "Full day coverage",
      "Unlimited locations",
      "100+ edited photos",
      "Online gallery",
      "Digital download",
      "Premium photo album",
      "Engagement session",
    ],
  },
];

export function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-6 lg:px-8 bg-[#0D0D0D] border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Our Services</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Professional photography services tailored to your unique needs
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

      {/* Pricing */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Pricing Plans</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Choose the perfect package for your photography needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative bg-[#1A1A1A] border rounded-2xl p-8 ${
                  plan.popular
                    ? "border-[#F2C94C] ring-2 ring-[#F2C94C]/20 scale-105"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F2C94C] text-[#0D0D0D] px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
                  <div className="text-5xl text-[#F2C94C] mb-2">{plan.price}</div>
                  <p className="text-white/60">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/80">
                      <div className="w-5 h-5 rounded-full bg-[#F2C94C]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#F2C94C]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0D0D0D]"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">Ready to Book a Photoshoot?</h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact us today to discuss your photography needs.
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
