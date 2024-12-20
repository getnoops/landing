import Layout from "@theme/Layout";
import { NoOpsSymbol } from "../components";
import { Colours, Logo, Typography } from "../components/Style";

export default () => {
	return (
		<Layout
			title="Style guide"
			description="The official guidelines for No_Ops."
		>
			<div className="min-h-screen bg-slate-50 p-4">
				<div className="mx-auto max-w-7xl py-24">
					<div className="flex">
						<div className="flex-1">
							<h2 className="text-5xl font-black uppercase text-noops-600">
								Style Guide
							</h2>
							<p className="text-lg text-slate-600">
								This is a style guide for the NoOps website. It is a work in
								progress.
							</p>
						</div>
						<div className="flex flex-1 items-center justify-center">
							<NoOpsSymbol className="text-noops-600" />
						</div>
					</div>
				</div>

				<div className="space-y-12">
					<Logo />

					<Colours />

					<Typography />
				</div>
			</div>
		</Layout>
	);
};
