"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen font-sans overflow-hidden">

      {/* 🌌 ANIMATED BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-[180px] opacity-20 top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-[180px] opacity-20 bottom-[-100px] right-[-100px] animate-pulse"></div>
      </div>

      {/* 🍎 HERO */}
      <section className="text-center py-40 px-6">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold tracking-tight"
        >
          Aman Agarwal
        </motion.h1>

        <p className="text-2xl mt-6 text-gray-400">
          Software Engineer • Android Developer • Full-Stack Builder
        </p>

        <p className="max-w-3xl mx-auto mt-8 text-gray-300 text-lg">
          I build production-grade mobile systems, scalable backend
          infrastructure, and real-world technology solutions designed for
          performance, reliability, and impact.
        </p>

        <div className="flex justify-center gap-8 mt-10 text-3xl">
          <a href="https://github.com/Amanag43"><FaGithub /></a>
          <a href="https://linkedin.com/in/aman-agarwal-396921245"><FaLinkedin /></a>
          <a href="mailto:aman.04614802823@ece.mait.ac.in"><FaEnvelope /></a>
        </div>

      </section>

      {/* 🚀 FEATURED PROJECT */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <h2 className="text-4xl font-bold text-center mb-16">
          Flagship Engineering Work
        </h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#141414]/80 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl"
        >
          <h3 className="text-3xl font-semibold">
            Emergency Response IoT System
          </h3>

          <p className="mt-4 text-gray-400 text-lg">
            A production-grade safety platform integrating a smart wearable
            device with real-time emergency detection, automatic SOS triggering,
            and live GPS tracking backed by secure scalable infrastructure.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/Amanag43"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold"
            >
              View Code
            </a>
          </div>
        </motion.div>

      </section>

      {/* 🧠 ENGINEERING PHILOSOPHY (UNIQUE) */}
      <section className="py-28 px-8 text-center">

        <h2 className="text-4xl font-bold mb-10">
          Engineering Philosophy
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg">
          I believe great software is not just about writing code —
          it is about solving real problems, designing scalable systems,
          and delivering reliable user experiences under real-world constraints.
        </p>

      </section>

      {/* 📈 GROWTH TIMELINE (UNIQUE) */}
      <section className="py-28 px-8 bg-[#111]">

        <h2 className="text-4xl font-bold text-center mb-16">
          Growth Timeline
        </h2>

        <div className="max-w-3xl mx-auto space-y-8 text-gray-300">

          <div>2023 — Started BTech & core programming</div>
          <div>2024 — Data Structures & Full-Stack Development</div>
          <div>2025 — Android Development & Real Projects</div>
          <div>2026 — Building Production Systems & Preparing for FAANG Internships</div>

        </div>

      </section>

      {/* 🧩 CURRENTLY BUILDING */}
      <section className="py-28 px-8 text-center">

        <h2 className="text-4xl font-bold mb-10">
          Currently Building
        </h2>

        <p className="text-gray-400 text-lg">
          Cross-platform ride booking system inspired by real-world
          transportation platforms, focusing on scalable architecture
          and real-time features.
        </p>

      </section>

      {/* 📩 CONTACT */}
      <section className="text-center py-32 bg-[#111]">

        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Impactful
        </h2>

        <p className="text-gray-400 mb-8 text-lg">
          Open to Software Engineering Internships and collaborations.
        </p>

        <a
          href="mailto:aman.04614802823@ece.mait.ac.in"
          className="bg-white text-black px-10 py-4 rounded-full font-semibold"
        >
          Contact Me
        </a>

      </section>

    </main>
  );
}