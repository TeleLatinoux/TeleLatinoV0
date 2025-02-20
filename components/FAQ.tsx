"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "¿Qué es Tele Latino?",
    answer:
      "Tele Latino es una plataforma de streaming que ofrece más de 1300 canales en vivo y 330,000+ horas de contenido VOD en español e internacional.",
  },
  {
    question: "¿Cómo puedo ver Tele Latino?",
    answer:
      "Puedes ver Tele Latino en tu smart TV, smartphone, tablet o computadora. Simplemente descarga nuestra aplicación o accede a través de nuestro sitio web.",
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Sí, puedes cancelar tu suscripción en cualquier momento sin penalizaciones. Tu servicio continuará hasta el final del período de facturación actual.",
  },
  {
    question: "¿Cuántos dispositivos puedo usar simultáneamente?",
    answer: "Con tu suscripción, puedes usar hasta 3 TVs y 3 dispositivos móviles simultáneamente.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-black via-red-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Preguntas Frecuentes
        </motion.h2>
        <div className="max-w-3xl mx-auto px-4">
          {faqItems.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        className="w-full flex items-center justify-between p-3 sm:p-4 bg-red-800 hover:bg-red-700 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-left text-white text-sm sm:text-base">{item.question}</span>
        <ChevronDown className={`w-5 h-5 text-white transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-red-900/50 rounded-b-lg text-gray-200">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

