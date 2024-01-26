import {
	ArchiveBoxIcon,
	CircleStackIcon,
	ClipboardDocumentCheckIcon,
	CloudArrowUpIcon,
	Cog6ToothIcon,
	CogIcon,
	CommandLineIcon,
	CubeTransparentIcon,
	DocumentTextIcon,
	RocketLaunchIcon,
	ServerStackIcon,
	Square3Stack3DIcon,
} from "@heroicons/react/20/solid";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { NoOpsBar } from "../Bars";
import DualBars from "../Bars/DualBars";

const codeWeight = 5;

const ModernK8 = {
	infra: [
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

const StreamlineGraphic = () => {
	const divRef = useRef<HTMLDivElement>(null);
	const inView = useInView(divRef, { once: true });

	return (
		<div ref={divRef} className="relative mx-auto mt-12 max-w-6xl">
			<div className="absolute -inset-4 rounded-[32px] border border-noops-200 bg-noops-600 bg-opacity-5"></div>

			<div className="relative w-full overflow-clip rounded-2xl  border border-noops-100 bg-noops-1000 p-6 opacity-100 shadow-lg shadow-noops-200">
				<div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20"></div>
				<div className="relative grid items-center gap-4 md:grid-cols-7">
					<div className="relative flex md:justify-end">
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
							inView={inView}
						/>
					</div>

					<h5 className="font-mono text-xl font-medium tracking-tight text-noops-300 md:text-right">
						Modern K8
					</h5>
					<DualBars
						infraSteps={ModernK8.infra}
						devSteps={ModernK8.dev}
						inView={inView}
					/>

					<h5 className="font-mono text-xl font-medium tracking-tight text-noops-300 md:text-right">
						Modern ASG
					</h5>

					<div className="col-span-6 space-y-1">
						<DualBars
							infraSteps={ModernASG.infra}
							devSteps={ModernASG.dev}
							inView={inView}
						/>
					</div>

					<h5 className="font-mono text-xl font-medium tracking-tight text-noops-300 md:text-right">
						Old School
					</h5>
					<DualBars
						infraSteps={OldSchool.infra}
						devSteps={OldSchool.dev}
						inView={inView}
					/>
				</div>
			</div>
		</div>
	);
};

export default StreamlineGraphic;
