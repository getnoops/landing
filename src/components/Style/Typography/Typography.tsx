import React from "react";

const SENTENCE = "Sphinx of black quartz, judge my vow";

const Typography = () => {
	return (
		<div className="mx-auto max-w-7xl space-y-4 rounded-lg bg-white p-4 shadow-lg sm:p-6 lg:p-8">
			<div className="">
				<h4 className="mb-3 text-3xl text-slate-800">
					<span
						className="inline-block transition-all hover:-translate-y-5"
						style={{ fontWeight: 200 }}
					>
						T
					</span>
					<span
						className="inline-block transition-all hover:-translate-y-5"
						style={{ fontWeight: 270 }}
					>
						y
					</span>
					<span
						className="inline-block transition-all hover:-translate-y-5"
						style={{ fontWeight: 340 }}
					>
						p
					</span>
					<span
						className="inline-block transition-all hover:-translate-y-5"
						style={{ fontWeight: 410 }}
					>
						o
					</span>
					<span
						className="inline-block transition-all hover:-translate-y-5"
						style={{ fontWeight: 580 }}
					>
						g
					</span>
					<span
						className="inline-block transition-all hover:-translate-y-5"
						style={{ fontWeight: 650 }}
					>
						r
					</span>
					<span
						className="inline-block transition-all hover:-translate-y-5"
						style={{ fontWeight: 720 }}
					>
						a
					</span>
					<span
						className="inline-block transition-all hover:-translate-y-5"
						style={{ fontWeight: 790 }}
					>
						p
					</span>
					<span
						className="inline-block transition-all hover:-translate-y-5"
						style={{ fontWeight: 860 }}
					>
						h
					</span>
					<span
						className="inline-block transition-all hover:-translate-y-5"
						style={{ fontWeight: 900 }}
					>
						y
					</span>
				</h4>
				<div className="sm:flex">
					<div className="flex w-fit items-center rounded-lg border border-slate-100 bg-slate-50 p-4">
						<h2 className="text-7xl sm:text-8xl">Aa</h2>
					</div>
					<div className="py-4 sm:p-4">
						<h2 className="text-6xl font-black tracking-tighter sm:text-7xl lg:text-8xl">
							MONA SANS
						</h2>
						<p className="text-slate-600">
							No_Ops is using the Mona Sans font from GitHub. It is a variable
							font, which allows you to use 1 font file and change the font
							weight and width to your liking.
							<br />
							<a
								href="https://github.com/mona-sans"
								target="_blank"
								rel="noreferrer noopener"
								className="font-medium text-blue-500 transition hover:text-blue-600"
							>
								Mona Sans Microsite
							</a>
						</p>
					</div>
				</div>

				<h6 className="mb-2 mt-6 text-xl font-medium">Sizes</h6>
				<div className="grid grid-cols-10 gap-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
					<div className="text-lg">
						<p className="font-semibold text-slate-800">H1</p>
						<p className="font-medium text-slate-600">text-6xl</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h1 className="overflow-ellipsis whitespace-nowrap break-words text-6xl font-black">
							{SENTENCE}
						</h1>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">H2</p>
						<p className="font-medium text-slate-600">text-5xl</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-5xl font-black">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">H3</p>
						<p className="font-medium text-slate-600">text-4xl</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-4xl font-black">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">H4</p>
						<p className="font-medium text-slate-600">text-3xl</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-3xl font-black">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">H5</p>
						<p className="font-medium text-slate-600">text-2xl</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-2xl font-black">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">H6</p>
						<p className="font-medium text-slate-600">text-xl</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-xl font-black">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">P</p>
						<p className="font-medium text-slate-600">text-base</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="font-black">{SENTENCE}</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">P</p>
						<p className="font-medium text-slate-600">text-sm</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="text-sm font-black">{SENTENCE}</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">P</p>
						<p className="font-medium text-slate-600">text-xs</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="text-xs font-black">{SENTENCE}</h2>
					</div>
				</div>

				<h6 className="mb-2 mt-6 text-xl font-medium">Weights</h6>
				<div className="grid grid-cols-10 gap-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
					<div className="text-lg">
						<p className="font-semibold text-slate-800">900</p>
						<p className="font-medium text-slate-600">font-black</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-5xl font-black">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">800</p>
						<p className="font-medium text-slate-600">font-extrabold</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-5xl font-extrabold">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">700</p>
						<p className="font-medium text-slate-600">font-bold</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-5xl font-bold">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">600</p>
						<p className="font-medium text-slate-600">font-semibold</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-5xl font-semibold">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">500</p>
						<p className="font-medium text-slate-600">font-medium</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-5xl font-medium">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">400</p>
						<p className="font-medium text-slate-600">font-normal</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-5xl font-normal">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">300</p>
						<p className="font-medium text-slate-600">font-light</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-5xl font-light">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">200</p>
						<p className="font-medium text-slate-600">font-extralight</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="overflow-ellipsis whitespace-nowrap break-words text-5xl font-extralight">
							{SENTENCE}
						</h2>
					</div>
				</div>

				<h6 className="mb-2 mt-6 text-xl font-medium">Variants</h6>
				<div className="grid grid-cols-10 gap-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
					<div className="text-lg">
						<p className="font-semibold text-slate-800">Italics</p>
						<p className="font-medium text-slate-600">italic</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="font-base overflow-ellipsis whitespace-nowrap break-words text-4xl italic">
							{SENTENCE}
						</h2>
					</div>

					<div className="text-lg">
						<p className="font-semibold text-slate-800">No Italics</p>
						<p className="font-medium text-slate-600">not-italic</p>
					</div>
					<div className="col-span-9 overflow-clip">
						<h2 className="font-base overflow-ellipsis whitespace-nowrap break-words text-4xl not-italic">
							{SENTENCE}
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Typography;
