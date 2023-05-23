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
      <Navbar />

      <main className="relative">
        {/* Hero */}
        {/* animation idea cycle between different products e.g. focus on your... app, website, tooling then land on product */}
        <Hero />

        {/* We need some devops tooling logos behind the noops logo. */}
        <Bridge />

        {/* Relevant Page */}
        {/* <RoleSelect /> */}

        {/* TODO: Add a clickable link to learn more about Bond */}
        <Steps />

        <Features />

        {/* Testimonials */}

        {/* Heard enough? CTA in the middle of the flow? */}

        {/* Pricing */}
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
