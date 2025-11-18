import { useState } from "react";
import Masonry from "react-responsive-masonry";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const portfolioImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1758905728020-a888617aecd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc2MzMyOTI0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Wedding",
    title: "Elegant Wedding Ceremony",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1762941744800-385b067dff21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNvdXBsZXxlbnwxfHx8fDE3NjMzNjY0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Wedding",
    title: "Romantic Couple Portrait",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzI2MzI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Portrait",
    title: "Professional Headshot",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MzMwNTIyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Portrait",
    title: "Creative Portrait Session",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1627661364735-eab249361d46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBtb2RlbHxlbnwxfHx8fDE3NjMzNTk0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Fashion",
    title: "Fashion Editorial",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1758613654186-6ce234bf94ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwc2hvb3R8ZW58MXx8fHwxNzYzMjY5OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Fashion",
    title: "High Fashion Shoot",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1526560244950-1a3c1ace48f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaG90b2dyYXBoeSUyMGhhcHB5fGVufDF8fHx8MTc2MzM3MTkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Family",
    title: "Happy Family Moments",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1601294281485-2b5a214689dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMG91dGRvb3J8ZW58MXx8fHwxNzYzMzcyMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Family",
    title: "Outdoor Family Session",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1603201667493-4c2696de0b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwaG90b2dyYXBoeSUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MzM3MTkzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Corporate",
    title: "Corporate Team Photo",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1706824253369-01f14db0466e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NjMzNzAwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Portrait",
    title: "Studio Portrait",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1553467140-9efb069c1140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBiZWhpbmQlMjBzY2VuZXN8ZW58MXx8fHwxNzYzMzcxOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Corporate",
    title: "Professional Shoot",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGVxdWlwbWVudCUyMHN0dWRpb3xlbnwxfHx8fDE3NjMzNzE5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Fashion",
    title: "Studio Fashion",
  },
];

const categories = ["All", "Wedding", "Portrait", "Fashion", "Family", "Corporate"];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof portfolioImages[0] | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-6 lg:px-8 bg-[#0D0D0D] border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-4 text-white">Portfolio</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Explore our collection of stunning photography work across various categories
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 lg:px-8 bg-[#0D0D0D] sticky top-20 z-40 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0D0D0D]"
                    : "border-white/20 text-white hover:bg-white/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-12 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <Masonry columnsCount={3} gutter="24px">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-[#F2C94C]/20 transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-[#F2C94C] mb-1">{image.category}</p>
                    <h3 className="text-xl text-white">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full bg-[#0D0D0D] border-white/10 p-0">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-[#0D0D0D]/80 hover:bg-[#F2C94C] flex items-center justify-center transition-colors group"
              >
                <X className="w-6 h-6 text-white group-hover:text-[#0D0D0D]" />
              </button>
              <ImageWithFallback
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <div className="p-6 bg-[#0D0D0D]">
                <p className="text-sm text-[#F2C94C] mb-1">{selectedImage.category}</p>
                <h3 className="text-2xl text-white">{selectedImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
