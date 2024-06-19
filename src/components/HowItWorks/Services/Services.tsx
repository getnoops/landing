import Link from "@docusaurus/Link";
import { cn } from "@site/src/lib/utils";
import { motion } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";

const Services = () => {
	const [closed, setClosed] = useState(false);

	// generic yaml file for a server
	const configString = `code: landing
class: compute
name: Landing
access: null
resources:
  - code: landing
    type: container
    data:
      cpu: 256
      desired: 2
      edge:
        edges:
          - edge: www.example.com
            environment: prod
        health:
          healthy_threshold: 5
          interval: 30
          path: /
          port: 8080
          timeout: 25
          unhealthy_threshold: 5
        rules:
          - path: "*"
            priority: 1000
      image: XXX.dkr.ecr.us-east-1.amazonaws.com/XXX
      memory: 512
      port: 8080`;

	return (
		<div className="relative flex flex-1 flex-col gap-x-[2%] gap-y-8 lg:flex-row lg:items-center">
			<div className="overflow-clip  rounded-[16px] bg-noops-100/40 p-2  leading-[0] ring-1   ring-noops-100 sm:col-span-3">
				<div className="overflow-clip rounded-lg border border-noops-200 shadow-lg shadow-noops-200">
					{!closed && (
						<motion.div
							animate={{ opacity: 1, filter: "blur(0px)" }}
							initial={{ opacity: 0, filter: "blur(10px)" }}
							transition={{
								ease: "easeOut",
							}}
							className="max-h-112 overflow-y-auto bg-white scrollbar-thin scrollbar-track-transparent scrollbar-thumb-noops-200 scrollbar-thumb-rounded-full"
						>
							<div className="flex">
								<Highlight
									code={configString}
									language="yaml"
									theme={{
										...themes.github,
										plain: {
											...themes.github.plain,
											backgroundColor: "transparent",
										},
									}}
								>
									{({
										className,
										style,
										tokens,
										getLineProps,
										getTokenProps,
									}) => (
										<pre
											className={cn("m-0 flex overflow-x-auto", className)}
											style={style}
										>
											<code className="">
												{tokens.map((line, lineIndex) => (
													<div key={lineIndex} {...getLineProps({ line })}>
														{line.map((token, tokenIndex) => (
															<span
																key={tokenIndex}
																{...getTokenProps({ token })}
															/>
														))}
													</div>
												))}
											</code>
										</pre>
									)}
								</Highlight>
							</div>
						</motion.div>
					)}
				</div>
			</div>

			<div className="">
				<h2 className="text-noops-700">Need more control?</h2>

				<p className="m-0  text-slate-500">
					We also support custom configurations for your deployments.
					<br /> <br />
					Control your application's environment, dependencies, and settings
					using a simple YAML file. Easily define variables, set up network
					configurations, manage secrets, and adjust resource allocations.
					<br /> <br />
					You can read more about customising your deployments in our docs.
				</p>

				<Link
					to="/docs"
					className="group relative mt-4 inline-block rounded-full border border-noops-600/50 border-t-noops-500 bg-noops-600 px-3 py-0.5 text-sm text-white shadow-md shadow-noops-1000/30 ring-1 ring-noops-700 transition hover:border-t-noops-400 hover:bg-noops-500 hover:text-white hover:no-underline hover:ring-noops-600"
				>
					View docs
				</Link>
			</div>
		</div>
	);
};

export default Services;
