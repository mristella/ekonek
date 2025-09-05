"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-20 bg-green-600 text-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Be Part of the Change
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Sign up as an advocate, explore our growing library of resources, or partner with us to create real community impact.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button className="bg-orange-500 text-white hover:bg-orange-600 mr-4">
            Sign Up as an Advocate
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/20">
            Explore the Library
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
