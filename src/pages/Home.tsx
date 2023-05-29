import { motion } from "framer-motion";
import { useState } from "react";
import {
  Bridge,
  CTA,
  FAQ,
  Features,
  Hero,
  Navbar,
  Pricing,
  RoleSelect,
  Skeptic,
  Steps,
} from "../components";

function App() {
  return (
    <div className="relative">
      {/* solutions animation scuffed */}
      <Navbar />

      <main className="relative">
        {/* Hero */}
        {/* animation idea cycle between different products e.g. focus on your... app, website, tooling then land on product */}
        <Hero />

        {/* change images */}
        <Bridge />

        {/* Relevant Page */}
        {/* <RoleSelect /> */}

        <Steps />

        <Features />

        {/* Testimonials */}

        {/* Heard enough? CTA in the middle of the flow? */}

        {/* Pricing: need to add a */}
        <Pricing />

        <Skeptic />

        {/* FAQ? */}
        <FAQ />

        {/* CTA */}
        <CTA />

        {/* Need a footer */}
      </main>
    </div>
  );
}

export default App;
