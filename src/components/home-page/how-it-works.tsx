"use client";
import { motion } from "framer-motion";
import { Lightbulb, Share2, Activity } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { icon: Share2, title: "Share", desc: "Contribute resources, modules, and activities for the community." },
    { icon: Lightbulb, title: "Adapt", desc: "Educators and leaders adapt shared content to their local needs." },
    { icon: Activity, title: "Show Impact", desc: "Track and showcase how these initiatives create change." },
  ];

  return (
    <section className="py-16 bg-gray-50 text-black">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <step.icon className="w-10 h-10 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
