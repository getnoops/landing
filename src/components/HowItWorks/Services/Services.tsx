import { XMarkIcon } from "@heroicons/react/20/solid";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { FolderOpenIcon } from "@heroicons/react/24/solid";
import { cn } from "@site/src/lib/utils";
import { motion } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";
import { Fragment, useState } from "react";

const Services = () => {
	const [closed, setClosed] = useState(false);

	// generic yaml file for a server
	const configString = `# yaml document beginning
# comment syntax

# basic syntax - key and value separated by colon and space before the value
key: value

# Scalar data types
integerValue: 1                     # integer value
floatingValue: 1                     # floating vale

stringValue: "456"                   # string with double quotes
stringValue: 'abc'                  # string with single quotes
stringValue: wer                   # string without quotes

booleanValue:true                   # boolean values - true or false


# Multiline string with literal block syntax -preserved new lines
string1: |
   Line1
   line2
   "line3"
  line4

# Multiline strings with folded block syntax
  string1: >
   Line1
   line2
   "line3"
  line4
# Collection sequence data types
 # sequence arraylist example
 - One
 - two
 - Three

  # another way of sequence  syntax example
  [one, two , three]

### dictionary
  mysqldatabase:
    hostname: localhost
    port: 3012
    username: root
    password: root`;

	return (
		<div className="relative flex flex-1 justify-center  ">
			<div className="absolute inset-0 blur-3xl"></div>
			<div className="relative w-full overflow-clip rounded-2xl border-2 border-accent/80 bg-noops-1050">
				<div className="relative flex h-10 flex-row-reverse justify-between">
					<div className="flex h-full items-center gap-x-2 pr-4">
						<div className="h-3 w-3 rounded-full border border-noops-300/40"></div>
						<div className="h-3 w-3 rounded-full border border-noops-300/40"></div>
						<div className="h-3 w-3 rounded-full border border-noops-300/40"></div>
					</div>

					{!closed && (
						<motion.div
							animate={{ opacity: 1, filter: "blur(0px)" }}
							initial={{ opacity: 0, filter: "blur(10px)" }}
							transition={{
								ease: "easeOut",
							}}
							className="flex h-full"
						>
							<div className=" relative  inline-flex items-center gap-x-2  rounded-tl-xl bg-noops-400/10 py-2 pl-4 pr-0">
								<Square3Stack3DIcon className="h-6" /> application.stack{" "}
								<XMarkIcon
									className="h-5 cursor-pointer rounded-full transition hover:bg-red-600/20 hover:text-red-600/80"
									onClick={() => setClosed(true)}
								/>
							</div>
							<svg
								viewBox="0 0 20 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="text-noops-400/10"
							>
								<path d="M20 10C10 10 10 0 0 0V10H20Z" fill="currentColor" />
							</svg>
						</motion.div>
					)}
				</div>

				{!closed && (
					<motion.div
						animate={{ opacity: 1, filter: "blur(0px)" }}
						initial={{ opacity: 0, filter: "blur(10px)" }}
						transition={{
							ease: "easeOut",
						}}
						className="h-128 w-full  overflow-y-auto rounded-2xl rounded-t-none bg-noops-400/10 p-4  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent/80 scrollbar-thumb-rounded-full"
					>
						<div className="flex">
							<div
								aria-hidden="true"
								className="select-none border-r border-noops-300/5 pr-4 font-mono text-noops-300"
							>
								{Array.from({
									length: configString.split("\n").length,
								}).map((_, index) => (
									<Fragment key={index}>
										{(index + 1).toString().padStart(2, "0")}
										<br />
									</Fragment>
								))}
							</div>
							<div className="flex-1">
								<Highlight
									code={configString}
									language="yaml"
									theme={{
										...themes.shadesOfPurple,
										plain: {
											color: "#9CDCFE",
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
											className={cn("flex overflow-x-auto", className)}
											style={style}
										>
											<code className="px-4">
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
						</div>
					</motion.div>
				)}

				{closed && (
					<motion.div
						animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
						initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
						transition={{
							ease: "easeOut",
						}}
						className="flex h-128 flex-col items-center justify-center"
					>
						<FolderOpenIcon className="h-16 " />
						<h1 className="text-xl font-bold">No Files Open</h1>
						<p className="text-center text-sm">Open a file to get started</p>

						<button
							onClick={() => setClosed(false)}
							className="group relative mt-4 inline-block rounded-[10px] border-2 border-noops-700 bg-gradient-to-b from-noops-400 to-noops-600 px-4 py-1 font-medium text-white"
						>
							<div className="absolute inset-0.5 rounded-md bg-noops-600 transition group-hover:opacity-30" />

							<div className="relative inline-flex w-full items-center justify-center  gap-x-1 text-sm ">
								Open Stack
							</div>
						</button>
					</motion.div>
				)}

				<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10"></div>
			</div>
		</div>
	);
};

export default Services;
