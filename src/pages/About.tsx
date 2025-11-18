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
          <h1 className="text-5xl md:text-6xl mb-4 text-white">About Us</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Passionate photographers dedicated to capturing your most precious moments
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-white">Our Story</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Founded in 2015, LuxeStudio emerged from a simple passion: to freeze time and preserve
                  life's most beautiful moments. What started as a small studio in New York has grown
                  into a premier photography service trusted by hundreds of clients.
                </p>
                <p>
                  Our journey has been defined by our commitment to excellence and innovation. We believe
                  that photography is more than just capturing images—it's about telling stories, evoking
                  emotions, and creating timeless art that will be cherished for generations.
                </p>
                <p>
                  Today, we're proud to offer a comprehensive range of photography services, from intimate
                  portrait sessions to grand wedding celebrations. Every project receives our full creative
                  attention and technical expertise.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1553467140-9efb069c1140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBiZWhpbmQlMjBzY2VuZXN8ZW58MXx8fHwxNzYzMzcxOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Behind the scenes"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl mt-12">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGVxdWlwbWVudCUyMHN0dWRpb3xlbnwxfHx8fDE3NjMzNzE5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Studio equipment"
                  className="w-full h-64 object-cover"
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

      {/* Lead Photographer */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719257751404-1dea075324bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjMzNzIxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sarah Williams - Lead Photographer"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl mb-4 text-white">Meet Sarah Williams</h2>
              <p className="text-xl text-[#F2C94C] mb-6">Lead Photographer & Founder</p>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  With over a decade of experience in professional photography, Sarah has developed a
                  unique style that blends classic elegance with modern creativity. Her work has been
                  featured in numerous publications and exhibitions across the country.
                </p>
                <p>
                  Sarah's approach to photography is deeply personal. She believes in building genuine
                  connections with her subjects, allowing their authentic personalities to shine through
                  every image. This philosophy has earned her a loyal client base and numerous industry
                  awards.
                </p>
                <p>
                  When she's not behind the camera, Sarah mentors aspiring photographers and contributes
                  to the local art community. Her passion for the craft is matched only by her dedication
                  to her clients' satisfaction.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-[#1A1A1A] rounded-xl px-4 py-2 text-white/80">
                  • Master of Fine Arts in Photography
                </div>
                <div className="bg-[#1A1A1A] rounded-xl px-4 py-2 text-white/80">
                  • Featured in Vogue
                </div>
                <div className="bg-[#1A1A1A] rounded-xl px-4 py-2 text-white/80">
                  • 50+ Industry Awards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Our Values</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we do
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
                src="https://images.unsplash.com/photo-1706824253369-01f14db0466e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NjMzNzAwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Studio setup"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1553467140-9efb069c1140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBiZWhpbmQlMjBzY2VuZXN8ZW58MXx8fHwxNzYzMzcxOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="On location shoot"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGVxdWlwbWVudCUyMHN0dWRpb3xlbnwxfHx8fDE3NjMzNzE5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Equipment and gear"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
