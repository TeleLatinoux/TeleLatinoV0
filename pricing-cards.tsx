import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PricingCards() {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold">Tele Latino</h1>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300">
            Tele Latino es una plataforma de visualización para usuarios de dispositivos Android en América Latina y en
            todo el mundo que te da acceso a más de 1.300 canales de televisión en español e internacionales en vivo en
            cualquier momento y en cualquier lugar. Además, Tele Latino ofrece más de 330.000 horas de series y
            películas seleccionadas en español para su disfrute.
          </p>
        </div>

        {/* Plans Section */}
        <h2 className="mb-8 text-center text-3xl font-bold text-white">Planes</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Annual Plan */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-red-700 to-red-900 text-white">
            <div className="absolute -right-12 top-6 rotate-45 bg-yellow-400 px-12 py-1 text-sm font-semibold text-black">
              Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Anual</CardTitle>
              <div className="flex items-baseline">
                <span className="text-lg">US$</span>
                <span className="text-6xl font-bold">70</span>
              </div>
              <div className="text-sm text-gray-300 line-through">US $160</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <FeatureList />
              <Button className="mt-6 w-full bg-white text-red-900 hover:bg-gray-200">Comprar</Button>
            </CardContent>
          </Card>

          {/* Monthly Plan */}
          <Card className="bg-gradient-to-br from-red-700 to-red-900 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Mensual</CardTitle>
              <div className="flex items-baseline">
                <span className="text-lg">US$</span>
                <span className="text-6xl font-bold">8</span>
              </div>
              <div className="text-sm text-gray-300 line-through">US $15</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <FeatureList />
              <Button className="mt-6 w-full bg-white text-red-900 hover:bg-gray-200">Comprar</Button>
            </CardContent>
          </Card>

          {/* 3 Months Plan */}
          <Card className="bg-gradient-to-br from-red-700 to-red-900 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">3 Meses</CardTitle>
              <div className="flex items-baseline">
                <span className="text-lg">US$</span>
                <span className="text-6xl font-bold">23</span>
              </div>
              <div className="text-sm text-gray-300 line-through">US $45</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <FeatureList />
              <Button className="mt-6 w-full bg-white text-red-900 hover:bg-gray-200">Comprar</Button>
            </CardContent>
          </Card>

          {/* 6 Months Plan */}
          <Card className="bg-gradient-to-br from-red-700 to-red-900 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">6 Meses</CardTitle>
              <div className="flex items-baseline">
                <span className="text-lg">US$</span>
                <span className="text-6xl font-bold">40</span>
              </div>
              <div className="text-sm text-gray-300 line-through">US $85</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <FeatureList />
              <Button className="mt-6 w-full bg-white text-red-900 hover:bg-gray-200">Comprar</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
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
        <li key={index} className="flex items-center gap-2">
          <Check className="h-5 w-5 flex-shrink-0" />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  )
}

