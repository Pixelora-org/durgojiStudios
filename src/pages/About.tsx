import { Card } from "../components/ui/card";
import { Award, Camera, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const stats = [
  { icon: Camera, value: "10+", label: "Years Experience" },
  { icon: Heart, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Users, value: "1000+", label: "Events Covered" },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our heart into every shot, treating each project as a unique masterpiece.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality photography that exceeds expectations.",
  },
  {
    icon: Users,
    title: "Connection",
    description: "Building meaningful relationships with clients to capture authentic moments.",
  },
  {
    icon: Camera,
    title: "Creativity",
    description: "Innovative approaches and artistic vision in every photography session.",
  },
];

export function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-6 lg:px-8 bg-[#0D0D0D] border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">We Frame Life's Precious Moments</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Durgoji Studios blends art, technology, and emotion to craft visuals that speak louder than words.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-white">We Frame Life's Precious Moments</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Durgoji Studios blends art, technology, and emotion to craft visuals that speak louder than words.
                </p>
                <p>
                  With years of creative experience in photography and cinematography, we specialize in bringing your story to life — one frame at a time.
                </p>
                <p>
                  We go beyond the lens — understanding your personality, event, or brand to deliver visuals that truly connect.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <ImageWithFallback
                  src="/images/_DSC9169.jpg"
                  alt="Behind the scenes"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  fetchPriority="low"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl mt-12">
                <ImageWithFallback
                  src="/images/_DSC9201.jpg"
                  alt="Studio equipment"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  fetchPriority="low"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-8 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-[#F2C94C]/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#F2C94C]" />
                </div>
                <div className="text-4xl text-[#F2C94C] mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Photographer */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src="/images/_DSC9572.jpg"
                alt="Professional Photographer"
                className="w-full h-[600px] object-cover"
                loading="lazy"
                fetchPriority="low"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl mb-4 text-white">Professional Photographer</h2>
              <p className="text-xl text-[#F2C94C] mb-6">Creative Studio Services</p>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Our creative professionals bring years of experience to every project. We understand that every moment is unique, and we approach each shoot with fresh eyes and creative vision.
                </p>
                <p>
                  We use modern equipment and cutting-edge editing tools to ensure fast turnaround with top-quality results. Our commitment to excellence means we don't just take pictures — we craft visual experiences.
                </p>
                <p>
                  Whether you're an individual looking to capture special moments or a business needing professional visuals, we offer tailored packages designed to meet your specific needs and exceed your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Why Choose Us</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Creative professionals with years of experience. Modern equipment & cutting-edge editing tools. Fast turnaround with top-quality results. Tailored packages for individuals & businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-[#1A1A1A] border-white/10 rounded-2xl p-8 text-center hover:border-[#F2C94C]/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl bg-[#F2C94C]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#F2C94C]" />
                </div>
                <h3 className="text-2xl text-white mb-3">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Behind the Scenes</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A glimpse into our creative process and studio environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <ImageWithFallback
                src="/images/insta post 2.jpg"
                alt="Studio setup"
                className="w-full h-80 object-cover"
                loading="lazy"
                fetchPriority="low"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <ImageWithFallback
                src="/images/_DSC0461.jpg"
                alt="On location shoot"
                className="w-full h-80 object-cover"
                loading="lazy"
                fetchPriority="low"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <ImageWithFallback
                src="/images/_DSC0520.jpg"
                alt="Equipment and gear"
                className="w-full h-80 object-cover"
                loading="lazy"
                fetchPriority="low"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
