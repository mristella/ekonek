"use client";
import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    "/assets/partner1.png",
    "/assets/partner2.png",
    "/assets/partner3.png",
    "/assets/partner4.png",
  ]; // Replace with real partner logos

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Partners & Supporters
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((logo, idx) => (
            <motion.div
              key={idx}
              className="flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={logo} alt={`Partner ${idx + 1}`} className="h-12 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
