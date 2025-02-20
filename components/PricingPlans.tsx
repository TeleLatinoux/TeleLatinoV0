"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

const plans = [
  {
    title: "Anual",
    price: 70,
    originalPrice: 160,
    popular: true,
    paypalClass: "pp-UGZUAUAKWT68G",
    paypalAction: "https://www.paypal.com/ncp/payment/UGZUAUAKWT68G",
  },
  {
    title: "Mensual",
    price: 8,
    originalPrice: 15,
    popular: true,
    paypalClass: "pp-V6VU6N54F64WC",
    paypalAction: "https://www.paypal.com/ncp/payment/V6VU6N54F64WC",
  },
  {
    title: "3 Meses",
    price: 23,
    originalPrice: 45,
    popular: false,
    paypalClass: "pp-8ZVJU5JED5PK2",
    paypalAction: "https://www.paypal.com/ncp/payment/8ZVJU5JED5PK2",
  },
  {
    title: "6 Meses",
    price: 40,
    originalPrice: 85,
    popular: false,
    paypalClass: "pp-LTYEFLD3WB9T2",
    paypalAction: "https://www.paypal.com/ncp/payment/LTYEFLD3WB9T2",
  },
]

export default function PricingPlans() {
  return (
    <section id="planes" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nuestros Planes
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-lg bg-red-900 text-white p-4 sm:p-6 h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {plan.popular && (
                  <div className="absolute -right-12 top-6 rotate-45 bg-yellow-400 px-12 py-1 text-sm font-semibold text-black">
                    Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="flex items-baseline">
                    <span className="text-lg">US$</span>
                    <span className="text-5xl font-bold">{plan.price}</span>
                  </div>
                  <div className="text-sm text-gray-300 line-through">US ${plan.originalPrice}</div>
                </div>
                <div className="space-y-4 flex-grow">
                  <FeatureList />
                </div>
                <PayPalButton paypalClass={plan.paypalClass} paypalAction={plan.paypalAction} />
                <div className="mt-4 text-center text-sm text-black font-semibold">Pago seguro SSL</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureList() {
  const features = [
    "Dispositivos simultáneos: 3 TV y 3 celulares",
    "Canales en vivo: 1300+",
    "Contenido VOD: 330,000+ horas",
    "Definición: 480p, 720p, 1080p",
    "Hot: Canales + VOD",
  ]

  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Check className="h-5 w-5 flex-shrink-0 text-green-400" />
          <span className="text-sm">{feature}</span>
        </motion.li>
      ))}
    </ul>
  )
}

function PayPalButton({ paypalClass, paypalAction }) {
  return (
    <div className="mt-6">
      <style jsx>{`
        .${paypalClass} {
          text-align: center;
          border: none;
          border-radius: 0.25rem;
          min-width: 11.625rem;
          padding: 0 2rem;
          height: 2.625rem;
          font-weight: bold;
          background-color: #FFD140;
          color: #000000;
          font-family: "Helvetica Neue", Arial, sans-serif;
          font-size: 1rem;
          line-height: 1.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .${paypalClass}:hover {
          background-color: #FFE180;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(255, 209, 64, 0.25);
        }
      `}</style>
      <form action={paypalAction} method="post" target="_blank" className="flex flex-col items-center gap-2">
        <input className={`${paypalClass} w-full`} type="submit" value="Comprar ahora" />
        <img src="https://www.paypalobjects.com/images/Debit_Credit.svg" alt="cards" className="h-6" />
        <div className="text-xs text-gray-300 flex items-center gap-1">
          Con la tecnología de
          <img
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
            alt="paypal"
            className="h-3.5 inline-block ml-1"
          />
        </div>
      </form>
    </div>
  )
}

