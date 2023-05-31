import React, { Fragment } from "react";
import { Highlight, themes } from "prism-react-renderer";
import classNames from "classnames";

const StarryBackground: React.FC = () => {
  const stars = Array.from({ length: 100 }, () => ({
    cx: `${Math.random() * 100}%`,
    cy: `${Math.random() * 100}%`,
    r: Math.random(),
  }));

  return (
    <svg
      className="h-full w-full object-cover"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="transparent" />
      <g fill="white">
        {stars.map((star, i) => (
          <circle
            className="animate-twinkle"
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            style={{
              animationDuration: `${Math.random() * 2 + 1}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </g>
    </svg>
  );
};

const SEHero = () => {
  const functionString = `function totallyRealFunction(input: string): string {
        // solves P versus NP
        let interimResult = input
            .split('')
            .map((char, idx) => String.fromCharCode(((char.charCodeAt(0) * (idx + 1)) % 123) + 65))
            .reduce((accumulatedString, char, idx) => idx % 2 === 0 ? char + accumulatedString : accumulatedString + char, '')
            .concat([...Array(10).keys()].map(num => String.fromCharCode((num * 13) % 90 + 33)).join(''))
            .replace(/[^a-zA-Z0-9]/g, '_')
            .concat(new Array(10).fill(input).join(''))
            .split('').reverse().join('')
            .substr(3, 50);
    
        // solves the halting problem
        let finalResult = [...Array(interimResult.length).keys()]
            .map((value, idx) => interimResult[(value * 7 + idx * 3) % interimResult.length])
            .join('');
    
        // what was i doing again? uh lets just return...
        return input;
    }`;

  return (
    <div className="relative  bg-noops-1000">
      <div className="relative py-36">
        <div className="absolute inset-0 z-10">
          <StarryBackground />
        </div>
        <div className="relative z-10 mx-auto max-w-9xl px-2 lg:px-8">
          <div className="items-center gap-8 xl:flex">
            <div className="mb-8 flex-1">
              <h3 className="mb-2 text-center text-sm font-medium uppercase text-noops-100 xl:text-left">
                SOFTWARE ENGINEERS
              </h3>
              <h1 className="text-center text-4xl font-semibold tracking-tight text-slate-800 sm:text-6xl md:leading-[4rem] xl:text-left">
                <span className="bg-gradient-to-t from-noops-50 to-noops-100 bg-clip-text text-transparent ">
                  Write{" "}
                </span>
                <span className="bg-gradient-to-br from-noops-400  to-noops-700 bg-clip-text text-transparent">
                  <i>your code, your way. </i>
                </span>{" "}
              </h1>
              <p className="my-4 text-center text-noops-200  xl:text-left">
                NoOps is a platform for developers and engineers to deploy their
                applications without having to stress about the underlying
                infrastructure. We provide the infrastructure and tools to build
                and monitor your applications, so you can focus on what matters
                most.
              </p>
            </div>

            <div className="max-w-1/2 relative flex flex-1 justify-center overflow-clip ">
              <div className="absolute inset-0 rounded-xl border-2 border-noops-500 bg-noops-600 bg-opacity-5 blur-3xl"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-noops-300/10 via-transparent to-noops-400/10  blur-2xl"></div>
              <div className="relative w-full overflow-clip rounded-xl border border-slate-600/10 bg-slate-900 bg-opacity-30 p-4 ">
                <div className="flex gap-x-2">
                  <div className="h-3 w-3 rounded-full border border-slate-700"></div>
                  <div className="h-3 w-3 rounded-full border border-slate-700"></div>
                  <div className="h-3 w-3 rounded-full border border-slate-700"></div>
                </div>
                {/* file name perhaps */}
                <div className="my-3 w-fit rounded-full border border-noops-500/50 bg-noops-900 bg-opacity-20 px-4 py-0.5 text-xs font-medium text-noops-500">
                  anotherDayInTheOffice.ts
                </div>
                <div className=" flex">
                  <div
                    aria-hidden="true"
                    className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600"
                  >
                    {Array.from({
                      length: functionString.split("\n").length,
                    }).map((_, index) => (
                      <Fragment key={index}>
                        {(index + 1).toString().padStart(2, "0")}
                        <br />
                      </Fragment>
                    ))}
                  </div>
                  <div className="flex-1">
                    <Highlight
                      code={functionString}
                      language="typescript"
                      theme={{
                        plain: {
                          color: "#9CDCFE",
                          backgroundColor: "transparent",
                        },
                        styles: [
                          {
                            types: ["comment"],
                            style: {
                              color: "#475569",
                            },
                          },
                          {
                            types: [
                              "changed",
                              "keyword",
                              "interpolation-punctuation",
                            ],
                            style: {
                              color: "#f472b6",
                            },
                          },
                          {
                            types: ["builtin"],
                            style: {
                              color: "#60a5fa",
                            },
                          },
                          {
                            types: ["number", "inserted"],
                            style: {
                              color: "#9bff9b",
                            },
                          },
                          {
                            types: ["selector"],
                            style: {
                              color: "rgb(215, 186, 125)",
                            },
                          },
                          {
                            types: ["punctuation", "operator"],
                            style: {
                              color: "rgb(212, 212, 212)",
                            },
                          },
                          {
                            types: ["function"],
                            style: {
                              color: "#af84fb",
                            },
                          },
                        ],
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
                          className={classNames(
                            className,
                            "flex overflow-x-auto"
                          )}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEHero;
