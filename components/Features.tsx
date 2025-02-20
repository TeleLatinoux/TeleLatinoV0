"use client"

import { Tv, Smartphone, Film, Clock } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <Tv className="h-12 w-12" />,
    title: "Canales en vivo",
    description: "Más de 1300 canales de TV en vivo",
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Multiplataforma",
    description: "Disfruta en tu TV, smartphone o tablet",
  },
  {
    icon: <Film className="h-12 w-12" />,
    title: "Contenido VOD",
    description: "Más de 330,000 horas de contenido a demanda",
  },
  {
    icon: <Clock className="h-12 w-12" />,
    title: "Sin contratos",
    description: "Cancela en cualquier momento",
  },
]

export default function Features() {
  return (
    <section id="caracteristicas" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Características
        </motion.h2>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-4 sm:p-6 rounded-xl bg-[#1F2937] hover:bg-[#374151] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-red-600 text-white">{feature.icon}</div>
              </div>
              <h3 className="mb-2 text-lg sm:text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

