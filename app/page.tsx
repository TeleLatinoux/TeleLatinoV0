"use client";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PricingPlans from "@/components/PricingPlans";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tele Latino - Streaming de TV en vivo</title>
        <meta
          name="description"
          content="Disfruta de más de 1300 canales en vivo y 330,000+ horas de contenido VOD"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Header />
        <Hero />
        <PricingPlans />
        <Features />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
