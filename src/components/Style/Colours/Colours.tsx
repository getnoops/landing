import { SparklesIcon } from "@heroicons/react/20/solid";
import React from "react";

const Colours = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-4 rounded-lg bg-white p-4 shadow-lg sm:p-6 lg:p-8">
      <div className="">
        <h1 className="mb-3 text-3xl font-bold text-slate-800">Colours</h1>
        <h2 className="mb-2 text-2xl font-bold text-slate-800">Brand</h2>

        <div className="mb-4">
          <div className="grid grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-5">
            <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-600 p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-white">
                  Purple
                </h2>
                <p className="text-sm font-medium text-white opacity-90">
                  Primary
                </p>
              </div>
              <div>
                <h2 className="text-md select-all uppercase text-white opacity-80">
                  #8335e9
                </h2>
              </div>
            </div>

            <div className="flex h-36 flex-col justify-between rounded-lg bg-accent p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-white">
                  Light Purple
                </h2>
                <p className="text-sm font-medium text-white opacity-90">
                  Accent
                </p>
              </div>
              <div>
                <h2 className="text-md select-all uppercase text-white opacity-80">
                  #b980fa
                </h2>
              </div>
            </div>

            <div className="flex h-36 flex-col justify-between rounded-lg bg-white p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-slate-800">
                  White
                </h2>
                <p className="text-sm font-medium text-slate-800 opacity-90">
                  Alternative
                </p>
              </div>
              <div>
                <h2 className="text-md select-all uppercase text-slate-800 opacity-80">
                  #ffffff
                </h2>
              </div>
            </div>
          </div>
          <p className="text-sm"></p>

          <div className="my-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
            <h2 className="text-lg font-semibold text-slate-800">Comment</h2>
            <p className="text-base text-slate-600">
              The color purple was chosen for NoOps as it sparks a sense of
              Innovation and Creativity, symbolizing our forward-thinking
              approach to technology. Simultaneously, it conveys an idea of
              Sophistication, reflecting the intricacy of IT operations and the
              high quality of our solutions. The essence of 'Magic,' often
              symbolized by purple, is as a metaphor for how our seamless
              solutions transform complex tasks into seemingly effortless
              processes as if its... magic{" "}
              <SparklesIcon className="-mt-0.5 inline-block h-6 w-6" />
            </p>
          </div>
        </div>

        <h2 className="mb-2 text-2xl font-bold text-slate-800">Application</h2>

        <h2 className="mb-2 text-xl font-semibold text-slate-800">
          Main Colours
        </h2>

        <div>
          <div className="grid grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-6">
            <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-50 p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-slate-800">
                  Slate White
                </h2>
                <p className="text-sm font-medium text-slate-800 opacity-90">
                  Background
                </p>
              </div>
              <div>
                <h4 className="text-md text-slate-800 opacity-80">slate-50</h4>
                <h4 className="text-md select-all uppercase text-slate-800 opacity-80">
                  #f8fafc
                </h4>
              </div>
            </div>

            <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-600 p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-white">
                  NoOps Purple
                </h2>
                <p className="text-sm font-medium text-white opacity-90">
                  Primary
                </p>
              </div>
              <div>
                <h4 className="text-md text-white opacity-80">noops-600</h4>
                <h4 className="text-md select-all uppercase text-white opacity-80">
                  #8335e9
                </h4>
              </div>
            </div>

            <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-100 p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-slate-800">
                  Slate White
                </h2>
                <p className="text-sm font-medium text-slate-800 opacity-90">
                  Secondary
                </p>
              </div>
              <div>
                <h4 className="text-md text-slate-800 opacity-80">slate-100</h4>
                <h4 className="text-md select-all uppercase text-slate-800 opacity-80">
                  #f1f5f9
                </h4>
              </div>
            </div>

            <div className="flex h-36 flex-col justify-between rounded-lg bg-accent p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-white">
                  Light Purple
                </h2>
                <p className="text-sm font-medium text-white opacity-90">
                  Accent
                </p>
              </div>
              <div>
                <h4 className="text-md text-white opacity-80">accent</h4>
                <h4 className="text-md select-all uppercase text-white opacity-80">
                  #b980fa
                </h4>
              </div>
            </div>

            <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-800 p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-white">
                  Slate Gray
                </h2>
                <p className="text-sm font-medium text-white opacity-90">
                  Primary Text
                </p>
              </div>
              <div>
                <h4 className="text-md text-white opacity-80">slate-800</h4>
                <h4 className="text-md select-all uppercase text-white opacity-80">
                  #1e293b
                </h4>
              </div>
            </div>

            <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-600 p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-white">
                  Slate Gray
                </h2>
                <p className="text-sm font-medium text-white opacity-90">
                  Secondary Text
                </p>
              </div>
              <div>
                <h4 className="text-md text-white opacity-80">slate-600</h4>
                <h4 className="text-md select-all uppercase text-white opacity-80">
                  #475569
                </h4>
              </div>
            </div>
          </div>

          <div className="my-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
            <h2 className="text-lg font-semibold text-slate-800">Comment</h2>
            <p className="text-base text-slate-600">
              You can view these colours in action in here:{" "}
              <a
                href="https://realtimecolors.com/?colors=1e293b-f8fafc-8335e9-f1f5f9-b980fa"
                className="font-medium text-noops-500 transition hover:text-noops-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://realtimecolors.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <h2 className="mb-2 text-xl font-semibold text-slate-800">Purples</h2>
      {/* // NoOps Colours
// 50 f8f5ff hsl(260 100% 98%)
// 100 eee6ff hsl(260 100% 95%)
// 200 e4d6ff hsl(260 99% 92%)
// 300 caaefe hsl(261 98% 84%)
// 400 af84fb hsl(262 93% 75%)
// 500 9655f6 hsl(264 90% 65%)
// 600 8335e9 hsl(266 80% 56%)
// 700 6f22ce hsl(267 72% 47%)
// 800 5821a6 hsl(265 67% 39%)
// 900 471c87 hsl(264 66% 32%)
// 950 2a075f hsl(264 87% 20%) */}
      <div>
        <div className="grid grid-cols-3 gap-2  md:grid-cols-5 lg:grid-cols-8">
          <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-50 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-noops-600">
                50
              </h2>
              <p className="text-sm font-medium text-noops-600 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-noops-600 opacity-80">noops-50</h4>
              <h4 className="text-md select-all uppercase text-noops-600 opacity-80">
                #f8f5ff
              </h4>
            </div>
          </div>
          <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-100 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-noops-600">
                100
              </h2>
              <p className="text-sm font-medium text-noops-600 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-noops-600 opacity-80">noops-100</h4>
              <h4 className="text-md select-all uppercase text-noops-600 opacity-80">
                #eee6ff
              </h4>
            </div>
          </div>
          <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-200 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-noops-600">
                200
              </h2>
              <p className="text-sm font-medium text-noops-600 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-noops-600 opacity-80">noops-200</h4>
              <h4 className="text-md select-all uppercase text-noops-600 opacity-80">
                #e4d6ff
              </h4>
            </div>
          </div>
          <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-300 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-noops-700">
                300
              </h2>
              <p className="text-sm font-medium text-noops-700 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-noops-700 opacity-80">noops-300</h4>
              <h4 className="text-md select-all uppercase text-noops-700 opacity-80">
                #caaefe
              </h4>
            </div>
          </div>
          <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-400 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-noops-100">
                400
              </h2>
              <p className="text-sm font-medium text-noops-100 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-noops-100 opacity-80">noops-400</h4>
              <h4 className="text-md select-all uppercase text-noops-100 opacity-80">
                #af84fb
              </h4>
            </div>
          </div>
          <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-500 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-noops-50">
                500
              </h2>
              <p className="text-sm font-medium text-noops-50 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-noops-50 opacity-80">noops-500</h4>
              <h4 className="text-md select-all uppercase text-noops-50 opacity-80">
                #9655f6
              </h4>
            </div>
          </div>
          <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-600 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-noops-50">
                600
              </h2>
              <p className="text-sm font-medium text-noops-50 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-noops-50 opacity-80">noops-600</h4>
              <h4 className="text-md select-all uppercase text-noops-50 opacity-80">
                #8335e9
              </h4>
            </div>
          </div>
          <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-700 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-noops-50">
                700
              </h2>
              <p className="text-sm font-medium text-noops-50 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-noops-50 opacity-80">noops-700</h4>
              <h4 className="text-md select-all uppercase text-noops-50 opacity-80">
                #6f22ce
              </h4>
            </div>
          </div>
          <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-800 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-noops-50">
                800
              </h2>
              <p className="text-sm font-medium text-noops-50 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-noops-50 opacity-80">noops-800</h4>
              <h4 className="text-md select-all uppercase text-noops-50 opacity-80">
                #5821a6
              </h4>
            </div>
          </div>
          <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-900 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-noops-50">
                900
              </h2>
              <p className="text-sm font-medium text-noops-50 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-noops-50 opacity-80">noops-900</h4>
              <h4 className="text-md select-all uppercase text-noops-50 opacity-80">
                #471c87
              </h4>
            </div>
          </div>
          <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-950 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-noops-50">
                950
              </h2>
              <p className="text-sm font-medium text-noops-50 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-noops-50 opacity-80">noops-950</h4>
              <h4 className="text-md select-all uppercase text-noops-50 opacity-80">
                #2a075f
              </h4>
            </div>
          </div>
          <div className="flex h-36 flex-col justify-between rounded-lg bg-noops-1000 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-noops-50">
                1000
              </h2>
              <p className="text-sm font-medium text-noops-50 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-noops-50 opacity-80">noops-1000</h4>
              <h4 className="text-md select-all uppercase text-noops-50 opacity-80">
                #0b0217
              </h4>
            </div>
          </div>
        </div>

        <div className="my-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
          <h2 className="text-lg font-semibold text-slate-800">Comment</h2>
          <p className="text-base text-slate-600">
            This purple colour palette is a custom colour palette for the Noops
            brand simply named, "noops". It is not a default TailwindCSS colour
            palette, but is in-between the default Tailwind violet and purple
            palettes.
          </p>
        </div>
      </div>

      <h2 className="mb-2 text-xl font-semibold text-slate-800">Grays</h2>

      <div>
        <div className="grid grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-5">
          <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-950 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Black Gray
              </h2>
              <p className="text-sm font-medium text-white opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-white opacity-80">slate-950</h4>
              <h4 className="text-md select-all uppercase text-white opacity-80">
                #020617
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-900 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Dark Gray
              </h2>
              <p className="text-sm font-medium text-white opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-white opacity-80">slate-900</h4>
              <h4 className="text-md select-all uppercase text-white opacity-80">
                #0f172a
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-800 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Gray
              </h2>
              <p className="text-sm font-medium text-white opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-white opacity-80">slate-800</h4>
              <h4 className="text-md select-all uppercase text-white opacity-80">
                #1e293b
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-700 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Gray
              </h2>
              <p className="text-sm font-medium text-white opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-white opacity-80">slate-700</h4>
              <h4 className="text-md select-all uppercase text-white opacity-80">
                #334155
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-600 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Gray
              </h2>
              <p className="text-sm font-medium text-white opacity-90">
                Primary Text
              </p>
            </div>
            <div>
              <h4 className="text-md text-white opacity-80">slate-600</h4>
              <h4 className="text-md select-all uppercase text-white opacity-80">
                #475569
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-500 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Gray
              </h2>
              <p className="text-sm font-medium text-white opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-white opacity-80">slate-500</h4>
              <h4 className="text-md select-all uppercase text-white opacity-80">
                #64748b
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-400 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Light Gray
              </h2>
              <p className="text-sm font-medium text-white opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-white opacity-80">slate-400</h4>
              <h4 className="text-md select-all uppercase text-white opacity-80">
                #94a3b8
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-300 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-slate-800">
                Lighter Gray
              </h2>
              <p className="text-sm font-medium text-slate-800 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-slate-800 opacity-80">slate-300</h4>
              <h4 className="text-md select-all uppercase text-slate-800 opacity-80">
                #cbd5e1
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-50 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-slate-800">
                Lightest Gray
              </h2>
              <p className="text-sm font-medium text-slate-800 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-slate-800 opacity-80">slate-50</h4>
              <h4 className="text-md select-all uppercase text-slate-800 opacity-80">
                #f8fafc
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
        <h2 className="text-lg font-semibold text-slate-800">Comment</h2>
        <p className="text-base text-slate-600">
          Most of the NoOps Application theme consists of a purple foreground
          with a white/light-gray background.
          <br />
          The purple is used for the primary buttons, links, and other
          interactive elements.
          <br />
          Gray is used for text, backgrounds, and borders. More important text
          gets darker gray and a larger font size. Less important text gets a
          lighter gray and a smaller font size.
          <br />
          <br />
          Sometimes, you might need to stray from the purple/gray theme, e.g.
          alert and error states. For this you should choose one of the colours
          from Tailwind's default colour palette.
          <br />
          They can be found here:{" "}
          <a
            href="https://tailwindcss.com/docs/customizing-colors"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-noops-500 transition hover:text-noops-600"
          >
            https://tailwindcss.com/docs/customizing-colors
          </a>
        </p>
      </div>

      <div className="">
        <h1 className="mb-16 mt-6 text-3xl font-bold text-slate-800">
          Gradients
        </h1>
        <div className="space-y-16">
          {/* <div className="relative h-36 w-full rounded-lg bg-gradient-to-r from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3">
            <div className="absolute inset-x-0 bottom-full mb-3 flex">
              <div className="relative flex flex-1 items-center justify-start">
                <div className="absolute -bottom-1 left-1 z-50 h-1 w-1 bg-cloud-text-gradient-1">
                  <div className="absolute inset-0 z-50 rounded-tl-sm bg-white"></div>
                </div>
                <div className="absolute -bottom-2 h-6 w-1 overflow-x-clip bg-cloud-text-gradient-1">
                  <div className="absolute inset-x-0 -bottom-0.5 h-1 w-1 rotate-45 bg-cloud-text-gradient-1"></div>
                </div>
                <div className="relative inline-flex h-full items-center justify-start rounded-full rounded-bl-none bg-cloud-text-gradient-1 px-4 py-2 text-white/90">
                  <span className="relative select-all uppercase">#2081B8</span>
                </div>
              </div>

              <div className="relative flex flex-1 items-center justify-center">
                <div className="absolute -bottom-1 h-8 w-8 rotate-45 bg-cloud-text-gradient-2" />
                <div className="relative inline-flex h-full items-center justify-center rounded-full bg-cloud-text-gradient-2 px-4 py-2 text-white/90">
                  <span className="relative select-all uppercase">#379AE9</span>
                </div>
              </div>

              <div className="relative flex flex-1 items-center justify-end">
                <div className="absolute -bottom-1 right-1 z-50 h-1 w-1 bg-cloud-text-gradient-3">
                  <div className="absolute inset-0 z-50 rounded-tr-sm bg-white"></div>
                </div>
                <div className="absolute -bottom-2 h-6 w-1 overflow-x-clip bg-cloud-text-gradient-3">
                  <div className="absolute inset-x-0 -bottom-0.5 z-50 h-1 w-1 rotate-45 bg-cloud-text-gradient-3"></div>
                </div>
                <div className="relative inline-flex h-full items-center justify-end rounded-full rounded-br-none bg-cloud-text-gradient-3 px-4 py-2 text-white/90">
                  <span className="relative select-all uppercase">#3DBDFF</span>
                </div>
              </div>
            </div>
          </div> */}

          <div className="relative h-36 w-full rounded-lg bg-gradient-to-r from-[#8335e9]  to-[#b980fa]">
            <div className="absolute inset-x-0 bottom-full mb-3 flex">
              <div className="relative flex flex-1 items-center justify-start">
                <div className="absolute -bottom-1 left-1 z-50 h-1 w-1 bg-[#8335e9]">
                  <div className="absolute inset-0 z-50 rounded-tl-sm bg-white"></div>
                </div>
                <div className="absolute -bottom-2 h-6 w-1 overflow-x-clip bg-[#8335e9]">
                  <div className="absolute inset-x-0 -bottom-0.5 h-1 w-1 rotate-45 bg-[#8335e9]"></div>
                </div>
                <div className="relative inline-flex h-full items-center justify-start rounded-full rounded-bl-none bg-[#8335e9] px-4 py-2 text-white/90">
                  <span className="relative select-all uppercase">#8335e9</span>
                </div>
              </div>

              <div className="relative flex flex-1 items-center justify-end">
                <div className="absolute -bottom-1 right-1 z-50 h-1 w-1 bg-[#b980fa]">
                  <div className="absolute inset-0 z-50 rounded-tr-sm bg-white"></div>
                </div>
                <div className="absolute -bottom-2 h-6 w-1 overflow-x-clip bg-[#b980fa]">
                  <div className="absolute inset-x-0 -bottom-0.5 z-50 h-1 w-1 rotate-45 bg-[#b980fa]"></div>
                </div>
                <div className="relative inline-flex h-full items-center justify-end rounded-full rounded-br-none bg-[#b980fa] px-4 py-2 text-white/90">
                  <span className="relative select-all uppercase">#b980fa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colours;
