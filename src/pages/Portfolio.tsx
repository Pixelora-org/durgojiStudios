import { useState } from "react";
import Masonry from "react-responsive-masonry";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const portfolioImages = [
  {
    id: 1,
    src: "/images/card 001.jpg",
    category: "Wedding",
    title: "Elegant Wedding Ceremony",
  },
  {
    id: 2,
    src: "/images/_DSC1014.jpg",
    category: "Wedding",
    title: "Romantic Couple Portrait",
  },
  {
    id: 3,
    src: "/images/card 021.jpg",
    category: "Portrait",
    title: "Professional Headshot",
  },
  {
    id: 4,
    src: "/images/_DSC1142.jpg",
    category: "Portrait",
    title: "Creative Portrait Session",
  },
  {
    id: 5,
    src: "/images/_DSC5811.jpg",
    category: "Fashion",
    title: "Fashion Editorial",
  },
  {
    id: 6,
    src: "/images/_DSC7999.jpg",
    category: "Fashion",
    title: "High Fashion Shoot",
  },
  {
    id: 7,
    src: "/images/card 023.jpg",
    category: "Family",
    title: "Happy Family Moments",
  },
  {
    id: 8,
    src: "/images/_DSC8145.jpg",
    category: "Family",
    title: "Outdoor Family Session",
  },
  {
    id: 9,
    src: "/images/_DSC8211.jpg",
    category: "Corporate",
    title: "Corporate Team Photo",
  },
  {
    id: 10,
    src: "/images/_DSC8234.jpg",
    category: "Portrait",
    title: "Studio Portrait",
  },
  {
    id: 11,
    src: "/images/_DSC9134.jpg",
    category: "Corporate",
    title: "Professional Shoot",
  },
  {
    id: 12,
    src: "/images/_DSC9169.jpg",
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
                  loading="lazy"
                  fetchPriority="low"
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
                loading="eager"
                fetchPriority="high"
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
