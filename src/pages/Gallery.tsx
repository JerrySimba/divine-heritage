import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import galleryAssessment from "@/assets/gallery-assessment.jpg";
import gallerySession from "@/assets/gallery-session.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";
import galleryTop100 from "@/assets/gallery-top100.jpg";
import galleryElimu from "@/assets/gallery-elimu.jpg";

const photos = [
  {
    src: gallerySession,
    alt: "Dr. Joan Mwende Kiema Ngunnzi during a working session",
    caption: "Leadership and institutional engagement",
  },
  {
    src: galleryAssessment,
    alt: "Workplace assessment and professional development session",
    caption: "Hands-on professional programmes",
  },
  {
    src: galleryCommunity,
    alt: "Closing the Leak book launch with Dr. Joan Mwende Kiema Ngunnzi",
    caption: "Closing the Leak book launch",
  },
  {
    src: galleryTop100,
    alt: "Dr. Joan Mwende Kiema Ngunnzi recognised among the Top 100 International Leaders 2026",
    caption: "Top 100 International Leaders 2026",
  },
  {
    src: galleryElimu,
    alt: "Dr. Joan Mwende Kiema Ngunnzi speaking at the Elimu Scholarship Programme",
    caption: "Elimu Scholarship Programme",
  },
];

const Gallery = () => {
  const [active, setActive] = useState<(typeof photos)[number] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="gold-accent mb-3">Moments</p>
          <h1 className="text-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Gallery
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            A look at our work across advisory sessions, professional programmes, and community engagements.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {photos.map((photo, i) => (
              <motion.button
                key={photo.src}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => setActive(photo)}
                className={`group relative overflow-hidden rounded-lg text-left shadow-heritage ${
                  i === photos.length - 1 && photos.length % 2 === 1 ? "sm:col-span-2 sm:max-w-xl sm:mx-auto" : ""
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-72 lg:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-lg text-primary-foreground">
                  {photo.caption}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden border-0 bg-transparent shadow-none">
          <DialogTitle className="sr-only">{active?.alt}</DialogTitle>
          {active && (
            <img src={active.src} alt={active.alt} className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
