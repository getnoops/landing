import React from "react";

const Colours = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-4 rounded-lg bg-white p-4 shadow-lg sm:p-6 lg:p-8">
      <div className="">
        <h1 className="mb-3 text-3xl font-bold text-slate-800">Colours</h1>
        <h2 className="mb-2 text-2xl font-bold text-slate-800">Brand</h2>

        <div className="mb-4">
          <div className="grid grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-5">
            <div className="flex h-36 flex-col justify-between rounded-lg bg-cloud-blue p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-white">
                  Blue
                </h2>
                <p className="text-sm font-medium text-white opacity-90">
                  Primary
                </p>
              </div>
              <div>
                <h2 className="text-md select-all uppercase text-white opacity-80">
                  #379AE9
                </h2>
              </div>
            </div>

            <div className="flex h-36 flex-col justify-between rounded-lg bg-cloud-logo-1 p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-white">
                  Dark Blue
                </h2>
                <p className="text-sm font-medium text-white opacity-90">
                  Logo Gradient
                </p>
              </div>
              <div>
                <h2 className="text-md select-all uppercase text-white opacity-80">
                  #4F8DD9
                </h2>
              </div>
            </div>

            <div className="flex h-36 flex-col justify-between rounded-lg bg-cloud-logo-2 p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-white">
                  Light Blue
                </h2>
                <p className="text-sm font-medium text-white opacity-90">
                  Logo Gradient
                </p>
              </div>
              <div>
                <h2 className="text-md select-all uppercase text-white opacity-80">
                  #3BB3F9
                </h2>
              </div>
            </div>

            <div className="flex h-36 flex-col justify-between rounded-lg bg-[#81d4fa] p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-white">
                  Lighter Blue
                </h2>
                <p className="text-sm font-medium text-white opacity-90">
                  Alternative
                </p>
              </div>
              <div>
                <h2 className="text-md select-all uppercase text-white opacity-80">
                  #3BB3F9
                </h2>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mb-2 text-2xl font-bold text-slate-800">Application</h2>

        <h2 className="mb-2 text-xl font-semibold text-slate-800">
          Main Colours
        </h2>

        <div>
          <div className="grid grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-5">
            <div className="flex h-36 flex-col justify-between rounded-lg bg-blue-600 p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-white">
                  Blue
                </h2>
                <p className="text-sm font-medium text-white opacity-90">
                  Primary
                </p>
              </div>
              <div>
                <h4 className="text-md text-white opacity-80">blue-600</h4>
                <h4 className="text-md select-all uppercase text-white opacity-80">
                  #2563eb
                </h4>
              </div>
            </div>

            <div className="flex h-36 flex-col justify-between rounded-lg bg-white p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-slate-800">
                  White
                </h2>
                <p className="text-sm font-medium text-slate-800 opacity-90">
                  Secondary
                </p>
              </div>
              <div>
                <h4 className="text-md text-slate-800 opacity-80">white</h4>
                <h4 className="text-md select-all uppercase text-slate-800 opacity-80">
                  #ffffff
                </h4>
              </div>
            </div>

            <div className="flex h-36 flex-col justify-between rounded-lg bg-slate-600 p-4 shadow">
              <div>
                <h2 className="text-xl font-semibold tracking-wide text-white">
                  Blue Gray
                </h2>
                <p className="text-sm font-medium text-white opacity-90">
                  Text
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
        </div>
      </div>

      <h2 className="mb-2 text-xl font-semibold text-slate-800">Blues</h2>

      <div>
        <div className="grid grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-5">
          <div className="flex h-36 flex-col justify-between rounded-lg bg-blue-950 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Darkest Blue
              </h2>
              <p className="text-sm font-medium text-white opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-white opacity-80">blue-950</h4>
              <h4 className="text-md select-all uppercase text-white opacity-80">
                #020617
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-blue-900 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Dark Blue
              </h2>
              <p className="text-sm font-medium text-white opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-white opacity-80">blue-900</h4>
              <h4 className="text-md select-all uppercase text-white opacity-80">
                #0f172a
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-blue-700 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Blue
              </h2>
              <p className="text-sm font-medium text-white opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-white opacity-80">blue-700</h4>
              <h4 className="text-md select-all uppercase text-white opacity-80">
                #1d4ed8
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-blue-600 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Blue
              </h2>
              <p className="text-sm font-medium text-white opacity-90">
                Primary
              </p>
            </div>
            <div>
              <h4 className="text-md text-white opacity-80">blue-600</h4>
              <h4 className="text-md select-all uppercase text-white opacity-80">
                #2563eb
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-blue-500 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-white">
                Blue
              </h2>
              <p className="text-sm font-medium text-white opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-white opacity-80">blue-500</h4>
              <h4 className="text-md select-all uppercase text-white opacity-80">
                #3b82f6
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-blue-200 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-slate-800">
                Light Blue
              </h2>
              <p className="text-sm font-medium text-slate-800 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-slate-800 opacity-80">blue-200</h4>
              <h4 className="text-md select-all uppercase text-slate-800 opacity-80">
                #bfdbfe
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-blue-100 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-slate-800">
                Lighter Blue
              </h2>
              <p className="text-sm font-medium text-slate-800 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-slate-800 opacity-80">blue-100</h4>
              <h4 className="text-md select-all uppercase text-slate-800 opacity-80">
                #dbeafe
              </h4>
            </div>
          </div>

          <div className="flex h-36 flex-col justify-between rounded-lg bg-blue-50 p-4 shadow">
            <div>
              <h2 className="text-xl font-semibold tracking-wide text-slate-800">
                Lightest Blue
              </h2>
              <p className="text-sm font-medium text-slate-800 opacity-90"></p>
            </div>
            <div>
              <h4 className="text-md text-slate-800 opacity-80">blue-50</h4>
              <h4 className="text-md select-all uppercase text-slate-800 opacity-80">
                #eff6ff
              </h4>
            </div>
          </div>
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
          Most of the NoOps Application theme consists of a blue foreground with
          a white/light-gray background.
          <br />
          The blue is used for the primary buttons, links, and other interactive
          elements.
          <br />
          Gray is used for text, backgrounds, and borders. More important text
          gets darker gray and a larger font size. Less important text gets a
          lighter gray and a smaller font size.
          <br />
          <br />
          Sometimes, you will need to stray from the blue/gray theme. For this
          you should choose one of the colours from Tailwind's default colour
          palette.
          <br />
          They can be found here:{" "}
          <a
            href="https://tailwindcss.com/docs/customizing-colors"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-blue-500 transition hover:text-blue-600"
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
          <div className="relative h-36 w-full rounded-lg bg-gradient-to-r from-cloud-text-gradient-1 via-cloud-text-gradient-2 to-cloud-text-gradient-3">
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
          </div>

          <div className="relative h-36 w-full rounded-lg bg-gradient-to-r from-[#4F8DD9]  to-[#3BB3F9]">
            <div className="absolute inset-x-0 bottom-full mb-3 flex">
              <div className="relative flex flex-1 items-center justify-start">
                <div className="absolute -bottom-1 left-1 z-50 h-1 w-1 bg-[#4F8DD9]">
                  <div className="absolute inset-0 z-50 rounded-tl-sm bg-white"></div>
                </div>
                <div className="absolute -bottom-2 h-6 w-1 overflow-x-clip bg-[#4F8DD9]">
                  <div className="absolute inset-x-0 -bottom-0.5 h-1 w-1 rotate-45 bg-[#4F8DD9]"></div>
                </div>
                <div className="relative inline-flex h-full items-center justify-start rounded-full rounded-bl-none bg-[#4F8DD9] px-4 py-2 text-white/90">
                  <span className="relative select-all uppercase">#4F8DD9</span>
                </div>
              </div>

              <div className="relative flex flex-1 items-center justify-end">
                <div className="absolute -bottom-1 right-1 z-50 h-1 w-1 bg-[#3BB3F9]">
                  <div className="absolute inset-0 z-50 rounded-tr-sm bg-white"></div>
                </div>
                <div className="absolute -bottom-2 h-6 w-1 overflow-x-clip bg-[#3BB3F9]">
                  <div className="absolute inset-x-0 -bottom-0.5 z-50 h-1 w-1 rotate-45 bg-[#3BB3F9]"></div>
                </div>
                <div className="relative inline-flex h-full items-center justify-end rounded-full rounded-br-none bg-[#3BB3F9] px-4 py-2 text-white/90">
                  <span className="relative select-all uppercase">#3BB3F9</span>
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
