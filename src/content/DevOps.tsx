import {
  SparklesIcon,
  ClockIcon,
  TruckIcon,
  FaceSmileIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/20/solid";

const DevOpsContent = {
  hero: {
    subtitle: "DevOps Engineer",
    title: (
      <>
        <span className="bg-gradient-to-t from-noops-50 to-noops-100 bg-clip-text text-transparent ">
          Your Job...{" "}
        </span>
        <span className="inline-flex items-center gap-x-2 bg-gradient-to-br from-noops-400  to-noops-700 bg-clip-text text-transparent">
          Automated
          <SparklesIcon className=" h-12 w-12 items-center text-noops-600" />
        </span>
      </>
    ),
    description:
      "NoOps is a revolutionary platform that's redefining DevOps. Through its smart automation capabilities, it streamlines and manages key aspects of your role, allowing you to focus more on innovation and less on routine tasks. Let NoOps handle the operations while you build the future.",
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

  blocks: {
    title: "Automate Complexity",
    description:
      "We've built a platform that automates the complexity of operations management, so you can focus on what you do best.",
    image: "/images/complexity.png",

    items: [
      {
        title: "Developer Experience",
        description:
          "Have a great developer experience with our intuitive CLI and Portal. Deploy your application in seconds.",
        Icon: FaceSmileIcon,
      },
      {
        title: "Security & Compliance",
        description:
          "NoOps is built for security. Rest easy knowing your application is secure and compliant.",
        Icon: LockClosedIcon,
      },
      {
        title: "Cost Effective",
        description:
          "DevOps is expensive. Why have a team of engineers when you could have a platform that does it for you?",
        Icon: CurrencyDollarIcon,
      },
    ],
  },

  section4: {
    title: "Your Team Will Love It",
    description:
      "Your team will love the simplicity of NoOps. We've built a platform that is easy to use, easy to understand, and easy to deploy.",
    cta: "Get Started",
    ctaHref: "/contact",
    learnMore: "Learn More",
    learnMoreHref: "#",
  },

  section5: {
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

export default DevOpsContent;
