"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="text-center py-36 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold"
        >
          Aman Agarwal
        </motion.h1>

        <p className="text-2xl mt-6 text-gray-400">
          Software Engineer • Android Developer • Full-Stack Builder
        </p>

        <p className="max-w-3xl mx-auto mt-8 text-gray-300 text-lg">
          I design and build production-grade mobile applications,
          scalable backend systems, and real-world technology solutions
          focused on performance, reliability, and impact.
        </p>

        <div className="flex justify-center gap-8 mt-10 text-3xl">
          <a href="https://github.com/Amanag43"><FaGithub /></a>
          <a href="https://linkedin.com/in/aman-agarwal-396921245"><FaLinkedin /></a>
          <a href="mailto:aman.04614802823@ece.mait.ac.in"><FaEnvelope /></a>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Engineering Projects
        </h2>

        <div className="space-y-16">

          {/* Project 1 */}
          <div className="bg-[#141414] p-8 rounded-2xl">
            <h3 className="text-3xl font-semibold">
              Emergency Response IoT System
            </h3>

            <p className="mt-4 text-gray-400">
              A production-grade safety platform integrating a smart wearable device
              with a mobile application and real-time backend infrastructure to detect
              emergencies, trigger automatic SOS alerts, and provide live GPS tracking.
            </p>

            <ul className="mt-6 space-y-2 text-gray-300">
              <li>• Wearable-triggered emergency detection</li>
              <li>• Real-time location tracking with map visualization</li>
              <li>• Secure authentication & event logging</li>
              <li>• Scalable backend using REST APIs</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="bg-[#141414] p-8 rounded-2xl">
            <h3 className="text-3xl font-semibold">
              Ryde — Ride Booking Application
            </h3>

            <p className="mt-4 text-gray-400">
              A cross-platform ride-hailing mobile application inspired by real-world
              systems like Uber, featuring modular architecture, onboarding flow,
              and authentication-ready routing.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-[#111] py-24 px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Technical Skills
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-gray-300">

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Programming
            </h3>
            <p>Java, Kotlin, Python, C, C++, SQL</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Mobile & Web
            </h3>
            <p>Android, React Native, React JS</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Backend & Databases
            </h3>
            <p>REST APIs, MySQL, Firebase, FastAPI</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Tools & Cloud
            </h3>
            <p>Git, Linux, AWS</p>
          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Achievements & Leadership
        </h2>

        <ul className="space-y-4 text-gray-300 text-lg">
          <li>🏆 Smart India Hackathon — National Level Participant</li>
          <li>💻 CodeX 2.0 Inter-College Hackathon Participant</li>
          <li>🎯 Coordinator — Indian Society for Technical Education</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="text-center py-28 bg-[#111]">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Impactful
        </h2>

        <p className="text-gray-400 mb-8 text-lg">
          Open to Software Engineering Internships and collaboration opportunities.
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