import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Camera, Heart, Users, Briefcase } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categories = [
  {
    id: "wedding",
    title: "Events & Weddings",
    icon: Heart,
    image: "/images/couples.png",
    description: "Candid, cinematic, and emotional storytelling of your big day",
  },
  {
    id: "product",
    title: "Product Photography",
    icon: Camera,
    image: "/images/ear rings.png",
    description: "High-quality shots to elevate your brand and marketing visuals",
  },
  {
    id: "maternity",
    title: "Maternity & Newborn",
    icon: Heart,
    image: "/images/_DSC1014.jpg",
    description: "Celebrate the joy of new beginnings with warm, emotional, and timeless imagery",
  },
  {
    id: "web",
    title: "Web Design",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    description: "Build modern, responsive websites that reflect your brand",
  },
  {
    id: "instant",
    title: "Instant Photo Download",
    icon: Users,
    image: "/images/couples3.png",
    description: "Let guests view and download photos instantly during the event",
  },
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <ImageWithFallback
              src="/images/_DSC1142.jpg"
              alt="Professional Photography Studio"
              className="w-full h-full object-cover object-center object-[center_top]"
              loading="eager"
              fetchPriority="high"
              style={{ 
                width: '100%', 
                height: '100%', 
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center top',
                maxWidth: '100vw',
                maxHeight: '100vh'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/80 via-[#0D0D0D]/50 to-[#0D0D0D]" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            Capture Your Perfect Moment
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
            Every photograph tells a story — your story. From weddings and portraits to creative commercial shoots, we capture every smile, every detail, and every emotion with artistic precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0D0D0D] px-8 py-6">
                Book Now
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Our Studio Services</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Your vision deserves to be seen. We specialize in modern photography that blends creativity, technology, and style to deliver stunning visuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((category) => (
              <Link to="/portfolio" key={category.id} className="h-full">
                <Card className="group relative overflow-hidden rounded-2xl border-white/10 bg-[#1A1A1A] hover:border-[#F2C94C]/50 transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      fetchPriority="low"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-[#F2C94C]/10 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-[#F2C94C]" />
                      </div>
                      <h3 className="text-2xl text-white">{category.title}</h3>
                    </div>
                    <p className="text-white/60 flex-1">{category.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:w-[calc(66.666%-1rem)]">
              {categories.slice(3, 5).map((category) => (
                <Link to="/portfolio" key={category.id} className="h-full">
                  <Card className="group relative overflow-hidden rounded-2xl border-white/10 bg-[#1A1A1A] hover:border-[#F2C94C]/50 transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        fetchPriority="low"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-[#F2C94C]/10 flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-[#F2C94C]" />
                        </div>
                        <h3 className="text-2xl text-white">{category.title}</h3>
                      </div>
                      <p className="text-white/60 flex-1">{category.description}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Why Choose Us</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Creative professionals with years of experience. Modern equipment & cutting-edge editing tools. Fast turnaround with top-quality results. Tailored packages for individuals & businesses.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#1A1A1A] border-white/10 rounded-2xl p-12 text-center">
              <p className="text-3xl md:text-4xl text-white/90 mb-6 leading-relaxed italic">
                "We don't just take pictures — we craft visual experiences."
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

