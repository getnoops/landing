import {
  Bridge,
  CTA,
  FAQ,
  Features,
  Hero,
  Pricing,
  Skeptic,
  Steps,
} from "../components";
import HomeContent from "../content/Home";

function App() {
  const { hero, bridge, steps, features, pricing, skeptic, faqs, cta } =
    HomeContent;

  return (
    <div className="relative">
      <main className="relative">
        {/* Hero */}
        {/* animation idea cycle between different products e.g. focus on your... app, website, tooling then land on product */}
        <Hero description={hero.description} />

        {/* change images */}
        <Bridge title={bridge.title} description={bridge.description} />

        {/* Relevant Page */}
        {/* <RoleSelect /> */}
        <Steps
          title={steps.title}
          description={steps.description}
          steps={steps.steps}
        />

        <Features
          title={features.title}
          subtitle={features.subtitle}
          description={features.description}
          features={features.features}
        />

        {/* Testimonials */}

        {/* Heard enough? CTA in the middle of the flow? */}

        <Pricing title={pricing.title} subtitle={pricing.subtitle} />

        <Skeptic
          title={skeptic.title}
          description={skeptic.description}
          prompt={skeptic.prompt}
          cta={skeptic.cta}
        />

        {/* FAQ? */}
        <FAQ
          title={faqs.title}
          description={faqs.description}
          faqs={faqs.faqs}
        />

        {/* CTA */}
        <CTA line1={cta.line1} line2={cta.line2} cta={cta.cta} />

        {/* Need a footer? */}
      </main>
    </div>
  );
}

export default App;
