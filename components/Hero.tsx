"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-900 to-black pt-20"
    >
      <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wide"
          >
            BIENVENIDOS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-200 font-light">
              Tele Latino es una plataforma de visualización para usuarios de dispositivos Android en América Latina y
              en todo el mundo que te da acceso a más de{" "}
              <span className="font-semibold text-red-400">1.300 canales</span> de televisión en español e
              internacionales en vivo en cualquier momento y en cualquier lugar.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-200 font-light">
              Además, Tele Latino ofrece más de <span className="font-semibold text-red-400">330.000 horas</span> de
              series y películas seleccionadas en español para su disfrute.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-red-500 to-red-800"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-tl from-red-800 to-black"
        />
      </div>
    </section>
  )
}

