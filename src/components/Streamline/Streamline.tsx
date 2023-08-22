import {
  CircleStackIcon,
  Cog6ToothIcon,
  CogIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  Square3Stack3DIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  CpuChipIcon,
  ArchiveBoxIcon,
  CloudIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/20/solid";
import { CloudArrowUpIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { DevBar, InfraBar, NoOpsBar, OnPremBar } from "../Bars";
import DualBars from "../Bars/DualBars";

interface StreamlineProps {
  title?: string;
  description?: string;
}

const codeWeight = 5;

const ModernK8 = {
  infra: [
    {
      name: "Setup UPC",
      Icon: CloudIcon,
      weight: 3,
    },
    {
      name: "Create DBs",
      Icon: CircleStackIcon,
      weight: 3,
    },
    {
      name: "Create Kubernetes Cluster",
      Icon: Square3Stack3DIcon,
      weight: 3,
    },
    {
      name: "Configure Kubernetes",
      Icon: CogIcon,
      weight: 1,
    },
  ],
  dev: [
    {
      name: "Write Code",
      Icon: CommandLineIcon,
      weight: codeWeight,
    },
    {
      name: "Build Container",
      Icon: CubeTransparentIcon,
      weight: 2,
    },
    {
      name: "Create Manifest",
      Icon: DocumentTextIcon,
      weight: 1,
    },
    {
      name: "Apply Manifest",
      Icon: ClipboardDocumentCheckIcon,
      weight: 1,
    },
  ],
};

const ModernASG = {
  infra: [
    {
      name: "Setup UPC",
      Icon: CloudIcon,
      weight: 3,
    },
    {
      name: "Create DBs",
      Icon: CircleStackIcon,
      weight: 3,
    },
    {
      name: "Create Auto Scaling Group",
      Icon: Square3Stack3DIcon,
      weight: 4,
    },
    {
      name: "Create Startup Script",
      Icon: DocumentTextIcon,
      weight: 4,
    },
  ],
  dev: [
    {
      name: "Write Code",
      Icon: CommandLineIcon,
      weight: codeWeight,
    },
    {
      name: "Package Code",
      Icon: ArchiveBoxIcon,
      weight: 2,
    },
    {
      name: "Publish",
      Icon: RocketLaunchIcon,
      weight: 3,
    },
  ],
};

const OldSchool = {
  infra: [
    {
      name: "Setup UPC",
      Icon: CloudIcon,
      weight: 3,
    },
    {
      name: "Create DBs",
      Icon: CircleStackIcon,
      weight: 3,
    },
    {
      name: "Create Servers",
      Icon: ServerStackIcon,
      weight: 10,
    },
  ],
  dev: [
    {
      name: "Write Code",
      Icon: CommandLineIcon,
      weight: codeWeight,
    },
    {
      name: "Package Code",
      Icon: ArchiveBoxIcon,
      weight: 2,
    },
    {
      name: "Upload to Sender",
      Icon: CloudArrowUpIcon,
      weight: 2,
    },
    {
      name: "Configure",
      Icon: CogIcon,
      weight: 4,
    },
  ],
};

const OnPrem = {
  infra: [],
  dev: [
    {
      name: "Buy Parts",
      Icon: CurrencyDollarIcon,
      weight: 3,
    },
    {
      name: "Build Server",
      Icon: ServerStackIcon,
      weight: 1,
    },
    {
      name: "RMA Broken Parts",
      Icon: CpuChipIcon,
      weight: 2,
    },
    {
      name: "Rebuild Server",
      Icon: ServerStackIcon,
      weight: 1,
    },
    {
      name: "Requirements Change",
      Icon: RocketLaunchIcon,
      weight: 1,
    },
    {
      name: "Give Up",
      Icon: RocketLaunchIcon,
      weight: 10,
    },
  ],
};

const Streamline = ({ title, description }: StreamlineProps) => {
  const [codeWeight, setCodeWeight] = useState(5);

  return (
    <section className="relative -mt-[40rem] px-6 py-24 sm:py-32 md:-mt-144 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <span className="bg-gradient-to-r from-noops-600 to-accent bg-clip-text text-transparent">
            Streamline{" "}
          </span>
          <span className="bg-gradient-to-t from-slate-600 to-slate-900 bg-clip-text text-transparent">
            your pipeline
          </span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl ">
        <div className="absolute -inset-4  rounded-[32px] border border-noops-200 bg-noops-600 bg-opacity-5"></div>
        {/* maybe */}
        {/* <div className="absolute inset-x-0 top-1/2 h-1/2 bg-gradient-to-r from-noops-600 to-accent blur-3xl"></div> */}

        <div className="relative w-full overflow-clip rounded-2xl border border-noops-100 bg-noops-1000 p-6 opacity-100  shadow-lg shadow-noops-200">
          <div className=" absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20"></div>

          <div className="relative grid grid-cols-7 items-center gap-4">
            <div className="relative flex justify-end">
              <img src="/logo_smile.svg" draggable={false} className="h-8" />
              <img
                src="/logo_smile.svg"
                draggable={false}
                className="absolute h-8 opacity-90 blur-sm"
              />
            </div>
            <div className="col-span-6">
              <NoOpsBar
                steps={[
                  {
                    name: "Write Code",
                    Icon: CommandLineIcon,
                    weight: codeWeight,
                  },
                  {
                    name: "Create Stack",
                    Icon: Cog6ToothIcon,
                    weight: 2,
                  },
                  {
                    name: "Deploy",
                    Icon: RocketLaunchIcon,
                    weight: 1,
                  },
                ]}
              />
            </div>

            <h5 className="text-right font-mono text-xl font-medium tracking-tight text-noops-300">
              Modern K8
            </h5>
            <DualBars infraSteps={ModernK8.infra} devSteps={ModernK8.dev} />

            <h5 className="text-right font-mono text-xl font-medium tracking-tight text-noops-300">
              Modern ASG
            </h5>

            <div className="col-span-6 space-y-1">
              <DualBars infraSteps={ModernASG.infra} devSteps={ModernASG.dev} />
            </div>

            <h5 className="text-right font-mono text-xl font-medium tracking-tight text-noops-300">
              Old School
            </h5>
            <DualBars infraSteps={OldSchool.infra} devSteps={OldSchool.dev} />

            <h5 className="text-right font-mono text-xl font-medium tracking-tight text-noops-300">
              On Prem
            </h5>
            <div className="col-span-6">
              <OnPremBar steps={OnPrem.dev} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Streamline;
