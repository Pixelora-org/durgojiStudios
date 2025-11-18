import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Camera, Heart, Users, Briefcase, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categories = [
  {
    id: "wedding",
    title: "Wedding",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc2MzMyOTI0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Timeless wedding memories",
  },
  {
    id: "portrait",
    title: "Portrait",
    icon: Users,
    image: "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzI2MzI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Professional headshots",
  },
  {
    id: "fashion",
    title: "Fashion",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1627661364735-eab249361d46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NjMzNTk0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Editorial & commercial",
  },
  {
    id: "family",
    title: "Family",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1526560244950-1a3c1ace48f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaG90b2dyYXBoeSUyMGhhcHB5fGVufDF8fHx8MTc2MzM3MTkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Cherished family moments",
  },
  {
    id: "corporate",
    title: "Corporate",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1603201667493-4c2696de0b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwaG90b2dyYXBoeSUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MzM3MTkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Business events & teams",
  },
];

const featuredWork = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc2MzMyOTI0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Emma & James Wedding",
    category: "Wedding",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzI2MzI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Corporate Headshots",
    category: "Portrait",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1627661364735-eab249361d46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NjMzNTk0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Editorial Fashion",
    category: "Fashion",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1526560244950-1a3c1ace48f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaG90b2dyYXBoeSUyMGhhcHB5fGVufDF8fHx8MTc2MzM3MTkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "The Anderson Family",
    category: "Family",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content: "LuxeStudio captured our wedding day perfectly. Every moment was beautifully preserved. The team was professional, creative, and made us feel so comfortable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    content: "Outstanding corporate photography services. They understand business needs and deliver exceptional results every time. Highly recommend for professional shoots.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Model",
    content: "The best fashion photography experience I've had. The creative vision and attention to detail are unmatched. My portfolio has never looked better!",
    rating: 5,
  },
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1706824253369-01f14db0466e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NjMzNzAwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional Photography Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/80 via-[#0D0D0D]/50 to-[#0D0D0D]" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            Capturing Moments That Last Forever  
            
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
            Premium photography services for weddings, portraits, fashion, and more
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
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Our Services</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Specializing in various photography styles to meet your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((category) => (
              <Link to="/portfolio" key={category.id}>
                <Card className="group relative overflow-hidden rounded-2xl border-white/10 bg-[#1A1A1A] hover:border-[#F2C94C]/50 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-[#F2C94C]/10 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-[#F2C94C]" />
                      </div>
                      <h3 className="text-2xl text-white">{category.title}</h3>
                    </div>
                    <p className="text-white/60">{category.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {categories.slice(3, 5).map((category) => (
              <Link to="/portfolio" key={category.id}>
                <Card className="group relative overflow-hidden rounded-2xl border-white/10 bg-[#1A1A1A] hover:border-[#F2C94C]/50 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-[#F2C94C]/10 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-[#F2C94C]" />
                      </div>
                      <h3 className="text-2xl text-white">{category.title}</h3>
                    </div>
                    <p className="text-white/60">{category.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Featured Work</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A showcase of our recent photography projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWork.map((work) => (
              <Link to="/portfolio" key={work.id}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-[#F2C94C]/20 transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <ImageWithFallback
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-sm text-[#F2C94C] mb-1">{work.category}</p>
                      <h3 className="text-xl text-white">{work.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" className="bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0D0D0D]">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Client Testimonials</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-[#1A1A1A] border-white/10 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F2C94C] text-[#F2C94C]" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="text-white">{testimonial.name}</p>
                  <p className="text-white/60">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
