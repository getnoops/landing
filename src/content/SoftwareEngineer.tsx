import { ClockIcon, TruckIcon, SparklesIcon } from "@heroicons/react/20/solid";

const SEContent = {
  hero: {
    subtitle: "SOFTWARE ENGINEERS",
    title: (
      <>
        <span className="bg-gradient-to-t from-noops-50 to-noops-100 bg-clip-text text-transparent ">
          Write{" "}
        </span>
        <span className="bg-gradient-to-br from-noops-400  to-noops-700 bg-clip-text text-transparent">
          <i>your code, your way. </i>
        </span>
      </>
    ),
    description:
      "NoOps is a platform for developers and engineers to deploy their applications without having to stress about the underlying infrastructure. We provide the infrastructure and tools to build and monitor your applications, so you can focus on what matters most.",
  },

  features: {
    title: "Why NoOps?",
    description:
      "Stop wasting time on DevOps and prioritize what sets your product apart. Leave the complexity of operations management to us, so you can focus on what you do best.",
    subtitle: "The NoOps Platform ",

    features: [
      {
        name: "Stop Delays",
        description:
          "Eliminate Delays and hit your deadlines with our streamlined solutions.",
        href: "#",
        icon: ClockIcon,
      },
      {
        name: "Focus on Core Delivery",
        description:
          "Don't waste time perfecting your deployment process, perfect your code instead. We'll handle it.",
        href: "#",
        icon: TruckIcon,
      },
      {
        name: "Simple & Intuitive",
        description:
          "Inefficiency can hinder productivity. We've crafted our platform to be remarkably simple and intuitive, maximising your output.",
        href: "#",
        icon: SparklesIcon,
      },
    ],
  },

  section3: {
    title: "No Catches\nBuild Whatever, However",
    description:
      "NoOps will fit into your workflow. Use our CLI or our Portal to deploy your application. We'll take care of the rest.",
    cta: "Get Started",
    ctaHref: "Get Started",
    href: "#",
  },

  section4: {
    title: (
      <>
        But... How? <br />
        Introducing{" "}
        <span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text text-transparent">
          Stack Files
        </span>
      </>
    ),
    description:
      "Stack files are the core of NoOps. They allow you to define your application's infrastructure in a single file.",
    href: "#",
  },
};

export default SEContent;
