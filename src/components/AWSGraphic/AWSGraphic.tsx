import { motion, Variants } from "framer-motion";
import * as React from "react";

const shimmer = {
  hidden: { pathLength: 0.1, pathOffset: 0, opacity: 0 },
  visible: ([pathLength, id]: [number, string]) => {
    var myPath: any = document.getElementById(id);
    var length = myPath.getTotalLength();
    // calculate the pathlength to make it 20px
    pathLength = 25 / length;

    return {
      pathLength: pathLength,
      pathOffset: [-pathLength, 1],
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1.5,
        ease: "easeInOut",
        opacity: { duration: 0.01 },
        pathLength: { duration: 0 },
      },
    };
  },
};

const chipBlur: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: [0, 1, 1, 0],
    filter: [
      "blur(20px)",
      "blur(20px)",
      "blur(10px)",
      "blur(5px)",
      "blur(0px)",
    ],
    transition: {
      duration: 2.5,
      delay: 1,
      opacity: {
        duration: 3,
      },
    },
  },
};

const chipShimmer: Variants = {
  hidden: { translateX: "-50px", opacity: 0 },
  visible: {
    translateX: "50px",
    opacity: 1,
    transition: {
      translateX: {
        duration: 2,
        delay: 1.5,
        ease: "easeInOut",
      },
      ease: "easeInOut",
      opacity: {
        duration: 0,
      },
    },
  },
};

const noopsBlur: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: [0, 1, 1],
    filter: ["blur(20px)", "blur(20px)", "blur(10px)", "blur(5px)"],
    transition: {
      duration: 2.5,
      delay: 3,
      opacity: {
        duration: 3,
      },
    },
  },
};
const noopsLogo: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const noopsLogoBlur: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.25,
    transition: {
      delay: 3,
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const noopsShimmer: Variants = {
  hidden: { translateX: "-100px", opacity: 0 },
  visible: {
    translateX: "100px",
    opacity: 1,
    transition: {
      translateX: {
        duration: 2,
        delay: 3.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2,
      },
      ease: "easeInOut",
      opacity: {
        duration: 0,
      },
    },
  },
};

const AWSGraphic = (props: any) => {
  return (
    <div className="relative mx-auto mt-12 max-w-6xl">
      <div className="absolute -inset-4 rounded-[32px] border border-noops-200 bg-noops-600 bg-opacity-5"></div>

      <div className="relative w-full overflow-hidden rounded-2xl border border-noops-100 bg-noops-1000 px-4 py-6 opacity-100 shadow-lg shadow-noops-200 md:px-6 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20"></div>
        <div className="relative left-1/2 mx-auto w-[140%] -translate-x-1/2 transform md:left-0 md:w-[85%] md:translate-x-0"></div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 195"
          fill="none"
          {...props}
          initial="hidden"
          animate="visible"
          className="relative"
          overflow="visible"
        >
          {/* No_Ops Logo */}
          <motion.rect
            width={100}
            height={100}
            x={150}
            y={95}
            fill="#b980fa"
            rx={12}
            variants={noopsBlur}
          />
          <g filter="url(#a)" clipPath="url(#noopsClip)">
            <rect
              width={100}
              height={100}
              x={150}
              y={95}
              fill="url(#b)"
              rx={12}
            />
            <motion.g
              fill="#b980fa"
              filter="url(#d)"
              variants={noopsLogoBlur}
              className=" blur-[2px]"
            >
              <path d="M174.539 159.388c-3.312 0-5.903-.987-7.775-2.961-1.843-2.003-2.764-4.679-2.764-8.027 0-3.319.965-5.966 2.894-7.94 1.958-1.974 4.621-2.962 7.99-2.962 3.484 0 6.176 1.03 8.077 3.091 1.929 2.031 2.894 4.707 2.894 8.026s-1.037 5.952-3.11 7.897c-2.073 1.918-4.809 2.876-8.206 2.876Zm5.528-10.773c0-1.974-.446-3.52-1.339-4.636-.864-1.144-2.102-1.716-3.714-1.716-1.642 0-2.923.5-3.844 1.502-.922 1.001-1.382 2.532-1.382 4.592 0 2.061.388 3.62 1.166 4.679.806 1.058 2.03 1.588 3.671 1.588 1.612 0 2.923-.472 3.93-1.417 1.008-.972 1.512-2.503 1.512-4.592ZM205.619 158.81c.096.966-.6 1.831-1.571 1.932-1.808.19-4.644.449-6.628.449-2.044 0-4.683-.275-6.268-.466a1.756 1.756 0 0 1-1.535-1.558l-.07-.638c-.128-1.169.894-2.147 2.068-2.005 1.646.199 3.858.419 5.58.419 1.92 0 4.547-.273 6.297-.486 1.019-.124 1.952.604 2.054 1.62l.073.733ZM208.008 144.409c0-4.493 1.18-8.155 3.541-10.988 2.361-2.862 5.687-4.335 9.977-4.421 4.607 0 8.019 1.474 10.237 4.421 2.217 2.947 3.325 6.51 3.325 10.687 0 4.521-1.195 8.212-3.585 11.074-2.361 2.861-5.686 4.292-9.977 4.292-4.578 0-7.976-1.459-10.193-4.378-2.217-2.947-3.325-6.51-3.325-10.687Zm5.83-.043c0 3.061.619 5.565 1.858 7.511 1.238 1.946 3.167 2.919 5.787 2.919 2.361 0 4.247-.873 5.658-2.619 1.411-1.745 2.116-4.435 2.116-8.069 0-3.033-.619-5.522-1.857-7.468-1.238-1.946-3.167-2.919-5.787-2.919-2.304 0-4.175.959-5.615 2.876-1.44 1.917-2.16 4.507-2.16 7.769Z" />
            </motion.g>
            <motion.g
              fill="#531F93"
              clipPath="url(#c)"
              filter="url(#d)"
              variants={noopsLogo}
            >
              <path d="M174.539 159.388c-3.312 0-5.903-.987-7.775-2.961-1.843-2.003-2.764-4.679-2.764-8.027 0-3.319.965-5.966 2.894-7.94 1.958-1.974 4.621-2.962 7.99-2.962 3.484 0 6.176 1.03 8.077 3.091 1.929 2.031 2.894 4.707 2.894 8.026s-1.037 5.952-3.11 7.897c-2.073 1.918-4.809 2.876-8.206 2.876Zm5.528-10.773c0-1.974-.446-3.52-1.339-4.636-.864-1.144-2.102-1.716-3.714-1.716-1.642 0-2.923.5-3.844 1.502-.922 1.001-1.382 2.532-1.382 4.592 0 2.061.388 3.62 1.166 4.679.806 1.058 2.03 1.588 3.671 1.588 1.612 0 2.923-.472 3.93-1.417 1.008-.972 1.512-2.503 1.512-4.592ZM205.619 158.81c.096.966-.6 1.831-1.571 1.932-1.808.19-4.644.449-6.628.449-2.044 0-4.683-.275-6.268-.466a1.756 1.756 0 0 1-1.535-1.558l-.07-.638c-.128-1.169.894-2.147 2.068-2.005 1.646.199 3.858.419 5.58.419 1.92 0 4.547-.273 6.297-.486 1.019-.124 1.952.604 2.054 1.62l.073.733ZM208.008 144.409c0-4.493 1.18-8.155 3.541-10.988 2.361-2.862 5.687-4.335 9.977-4.421 4.607 0 8.019 1.474 10.237 4.421 2.217 2.947 3.325 6.51 3.325 10.687 0 4.521-1.195 8.212-3.585 11.074-2.361 2.861-5.686 4.292-9.977 4.292-4.578 0-7.976-1.459-10.193-4.378-2.217-2.947-3.325-6.51-3.325-10.687Zm5.83-.043c0 3.061.619 5.565 1.858 7.511 1.238 1.946 3.167 2.919 5.787 2.919 2.361 0 4.247-.873 5.658-2.619 1.411-1.745 2.116-4.435 2.116-8.069 0-3.033-.619-5.522-1.857-7.468-1.238-1.946-3.167-2.919-5.787-2.919-2.304 0-4.175.959-5.615 2.876-1.44 1.917-2.16 4.507-2.16 7.769Z" />
            </motion.g>
            <motion.rect
              width={100}
              height={100}
              x={150}
              y={95}
              fill="url(#fadeGradient)"
              rx={12}
              variants={noopsShimmer}
            />
          </g>

          {/* First chip */}
          <motion.rect
            width={50}
            height={50}
            y={90}
            fill="#b980fa"
            rx={6}
            variants={chipBlur}
          />
          <g filter="url(#e)" clipPath="url(#chipClip)">
            <rect width={50} height={50} y={90} fill="url(#f)" rx={6} />
            <g fill="#531F93" filter="url(#h)">
              <path
                fill="#7C33D7"
                d="m38.911 102.121-6.787 12.961 6.787 12.961 2.78-1.559V103.68l-2.78-1.559Z"
              />
              <path
                fill="#42137B"
                d="m38.911 102.121-13.575 1.559-6.91 11.402 6.91 11.402 13.575 1.559v-25.922Z"
              />
              <path
                fill="#2F0D58"
                d="m11.516 102.121-2.208.984v23.954l2.208.984 13.82-12.961-13.82-12.961Z"
              />
              <path
                fill="#7C33D7"
                d="m11.487 102.094 13.868 3.864v18.594l-13.868 3.5v-25.958Z"
              />
              <path
                fill="#2F0D58"
                d="m25.362 108-5.888-.948 5.888-6.708 5.874 6.708-5.874.948Z"
              />
              <path
                fill="#2F0D58"
                d="m31.236 107.052-5.881.963-5.881-.963v-6.708M25.362 122.073l-5.888 1.094 5.888 5.76 5.874-5.76-5.874-1.094Z"
              />
              <path
                fill="#42137B"
                d="M25.336 95.313 19.45 98.43v8.613l5.906-1.668-.019-10.063ZM25.355 110.115l-5.881.641v8.6l5.88.675v-9.916ZM25.355 124.625l-5.881-1.479v8.454l5.88 3.087v-10.062Z"
              />
              <path
                fill="#7C33D7"
                d="m31.236 123.146-5.881 1.479v10.062l5.881-3.087v-8.454ZM25.355 110.115l5.881.641v8.6l-5.881.675v-9.916ZM25.337 95.313l5.887 3.117v8.613l-5.887-1.641v-10.09Z"
              />
            </g>
            <motion.rect
              width={50}
              height={50}
              y={90}
              fill="url(#fadeGradient)"
              variants={chipShimmer}
            />
          </g>

          <motion.path stroke="#531F93" d="M55 115h35l41.33-42H182v6l-7 7v3" />
          <motion.path
            d="M55 115h35l41.33-42H182v6l-7 7v3"
            stroke="#b980fa"
            filter="url(#blur)"
            strokeWidth="2"
            id="shimmer1"
            variants={shimmer}
            custom={[0.1, "shimmer1"]}
          />
          <circle cx={54} cy={115} r={1.5} stroke="#531F93" />

          <motion.rect
            width={50}
            height={50}
            x={50}
            fill="#b980fa"
            rx={6}
            variants={chipBlur}
          />
          <g filter="url(#i)" clipPath="url(#chipClip2)">
            <rect width={50} height={50} x={50} fill="url(#j)" rx={6} />
            <g fill="#531F93" filter="url(#l)">
              <path
                fill="#531F93"
                d="m63.46 37.012-4.05.915V11.922l4.05.918v24.172ZM68.513 38.548 63.46 39.97V9.914l5.053 1.422v27.212Zm6.483 1.576-6.483 2.352V7.409l6.483 2.352v30.363Zm17.332-3.034-17.332 8.593V4.196l17.332 8.593v24.3Z"
              />
              <path
                fill="#240D3F"
                d="m71.54 5.908 3.456-1.712v41.487L71.54 43.97V5.908M65.84 8.734l2.674-1.326v35.06l-2.674-1.327V8.734Zm-4.51 2.237 2.13-1.057v30.05l-2.13-1.057V10.971Zm-1.92.95-1.737.863v24.313l1.737.86V11.922Z"
              />
            </g>
            <motion.rect
              width={50}
              height={50}
              x={50}
              fill="url(#fadeGradient)"
              variants={chipShimmer}
            />
          </g>

          <circle cx={75} cy={54} r={1.5} stroke="#531F93" />
          <motion.path stroke="#531F93" d="M75 55v7.5l7.5 7.5H185v18.5" />
          <motion.path
            d="M75 55v7.5l7.5 7.5H185v18.5"
            stroke="#b980fa"
            filter="url(#blur)"
            strokeWidth="2"
            id="shimmer2"
            variants={shimmer}
            custom={[0.1, "shimmer2"]}
          />

          <motion.rect
            width={50}
            height={50}
            x={130}
            fill="#b980fa"
            rx={6}
            variants={chipBlur}
          />
          <g filter="url(#m)" clipPath="url(#chipClip3)">
            <rect width={50} height={50} x={130} fill="url(#n)" rx={6} />
            <g fill="#531F93" filter="url(#p)">
              <path
                fill="#531F93"
                d="M155.588 24.994c-.139.198-.256.361-.368.526l-5.389 7.961c-1.67 2.468-3.342 4.935-5.016 7.4a.346.346 0 0 1-.239.14c-2.363-.02-4.726-.046-7.088-.077-.026 0-.053-.008-.105-.016.019-.05.042-.098.067-.145l4.945-7.692c1.462-2.272 2.924-4.543 4.388-6.814 1.622-2.523 3.244-5.048 4.864-7.575.239-.372.488-.738.715-1.117a.463.463 0 0 0 .049-.336c-.437-1.397-.882-2.79-1.327-4.184-.19-.597-.389-1.19-.567-1.79-.058-.194-.153-.252-.35-.252-1.484.007-2.96.005-4.441.005-.281 0-.282 0-.282-.279 0-1.827 0-3.653-.005-5.48 0-.203.067-.249.257-.249 2.98.005 5.961.005 8.943 0a.286.286 0 0 1 .314.213c1.572 3.968 3.144 7.935 4.717 11.9l5.502 13.876c.569 1.435 1.143 2.87 1.706 4.31.067.175.137.208.314.154 1.562-.485 3.128-.957 4.69-1.442.196-.062.268-.02.329.175.533 1.68 1.076 3.357 1.616 5.036.018.057.032.116.054.197-.112.041-.217.087-.324.117l-10.649 3.39c-.17.054-.22-.004-.277-.147-1.083-2.755-2.17-5.51-3.258-8.263l-3.197-8.089c-.16-.405-.317-.811-.477-1.216-.025-.07-.06-.13-.111-.237Z"
              />
            </g>
            <motion.rect
              width={50}
              height={50}
              x={130}
              fill="url(#fadeGradient)"
              variants={chipShimmer}
            />
          </g>
          <circle cx={155} cy={54} r={1.5} stroke="#531F93" />
          <motion.path stroke="#531F93" d="M155 55v7.5l5 5h28V79l7 7v3" />
          <motion.path
            d="M155 55v7.5l5 5h28V79l7 7v3"
            stroke="#b980fa"
            filter="url(#blur)"
            strokeWidth="2"
            id="shimmer3"
            variants={shimmer}
            custom={[0.1, "shimmer3"]}
          />

          <motion.rect
            width={50}
            height={50}
            x={220}
            fill="#b980fa"
            rx={6}
            variants={chipBlur}
          />
          <g filter="url(#q)" clipPath="url(#chipClip4)">
            <rect width={50} height={50} x={220} fill="url(#r)" rx={6} />{" "}
            <g fill="#531F93" filter="url(#t)">
              <path
                fill="#401A6F"
                d="m228.004 35.55 3.979 4.62.358-.422v-29.54l-.358-.447-3.979 4.617v21.173Z"
              />
              <path
                fill="#431877"
                d="m231.984 40.17 7.605 3.764.316-.504.005-37.036-.316-.394-7.61 3.753v30.416Z"
              />
              <path
                fill="#531F93"
                d="m261.996 14.378-3.98-4.617-.446.14.089 29.891.357.377 3.98-4.618V14.378Z"
              />
              <path
                fill="#702CC3"
                d="m250.411 43.934 7.605-3.765V9.753L250.406 6l-.36.482.005 36.904.36.548Z"
              />
              <path fill="#531F93" d="M239.594 6h10.812v37.935h-10.812V6Z" />
            </g>
            <motion.rect
              width={50}
              height={50}
              x={220}
              fill="url(#fadeGradient)"
              variants={chipShimmer}
            />
          </g>
          <motion.path stroke="#531F93" d="M245 55v7.5l-5 5h-28V79l-7 7v3" />
          <motion.path
            d="M245 55v7.5l-5 5h-28V79l-7 7v3"
            stroke="#b980fa"
            filter="url(#blur)"
            strokeWidth="2"
            id="shimmer4"
            variants={shimmer}
            custom={[0.1, "shimmer4"]}
          />
          <circle cx={245} cy={54} r={1.5} stroke="#531F93" />

          <motion.rect
            width={50}
            height={50}
            x={300}
            fill="#b980fa"
            rx={6}
            variants={chipBlur}
          />
          <g filter="url(#u)" clipPath="url(#chipClip5)">
            <rect width={50} height={50} x={300} fill="url(#v)" rx={6} />
            <g fill="#531F93" filter="url(#x)">
              <path
                fill="#8C36F5"
                d="M324.535 25.027V5.053l16.412 8.27.053 11.703h-2.154l.053-7.736-9.477-2.756v10.422l-4.887.072Z"
              />
              <path
                fill="#5A249D"
                d="M324.535 5v20.01h-8.724V9.482L324.535 5Zm-16.482 19.992v-11.74l4.694-2.276v14.016H308"
              />
              <path
                fill="#8C36F5"
                d="M312.747 10.976v14.016l3.066.018V11.776l-3.066-.8Z"
              />
              <path
                fill="#5A249D"
                d="M332.891 18.143v6.9h5.99l.018-7.753-6.008.853Z"
              />
              <path
                fill="#3D186B"
                d="m329.422 14.534 9.477 2.756-5.991.853-3.486-.764v-2.845Z"
              />
              <path
                fill="#5A249D"
                d="m308.14 28.495 4.607.818v9.782l-4.694-2.418.087-8.182Zm7.619 1.262v10.85L324.482 45V31.075l-8.723-1.318Z"
              />
              <path
                fill="#8C36F5"
                d="M340.86 28.495v8.27l-16.378 8.233V31.073l16.378-2.578Z"
              />
              <path
                fill="#8C36F5"
                d="M329.65 27.89v.8l-13.891 1.085v8.538l-3.014.782-.017-9.96 16.922-1.245Z"
              />
              <path
                fill="#A056FB"
                d="m308.14 28.495 17.778-.978 3.714.355-16.938 1.494-4.554-.871Zm7.619 1.262 16.587-1.689 8.426.444-16.29 2.56-8.723-1.315Z"
              />
            </g>
            <motion.rect
              width={50}
              height={50}
              x={300}
              fill="url(#fadeGradient)"
              variants={chipShimmer}
            />
          </g>
          <motion.path stroke="#531F93" d="M325 55v7.5l-7.5 7.5H215v18.5" />
          <motion.path
            d="M325 55v7.5l-7.5 7.5H215v18.5"
            stroke="#b980fa"
            filter="url(#blur)"
            strokeWidth="2"
            id="shimmer5"
            variants={shimmer}
            custom={[0.1, "shimmer5"]}
          />
          <circle cx={325} cy={54} r={1.5} stroke="#531F93" />
          <motion.rect
            width={50}
            height={50}
            x={350}
            y={90}
            fill="#b980fa"
            rx={6}
            variants={chipBlur}
          />

          <g filter="url(#y)" clipPath="url(#chipClip6)">
            <rect width={50} height={50} x={350} y={90} fill="url(#z)" rx={6} />
            <g fill="#531F93" filter="url(#B)">
              <path
                fill="#8F63C5"
                d="m393.999 122.552-18.993-2.787-19.005 2.791 19 7.034 18.998-7.038Z"
              />
              <path
                fill="#2F0D58"
                d="m359.804 122.227 3.21 1.003.293-.332v-22.442l-.293-.383-3.21 1.226v20.928Z"
              />
              <path
                fill="#7C33D7"
                d="m374.381 121.235-11.367 1.995v-23.157l11.367 2.554v18.608Z"
              />
              <path
                fill="#2F0D58"
                d="m369.313 125.159-4.43-1.364V95.213l4.43-2.212.388.421v31.266l-.388.471Z"
              />
              <path
                fill="#7C33D7"
                d="m384.495 121.602-15.182 3.557V93l15.182 5.911v22.691Z"
              />
              <path
                fill="#2F0D58"
                d="m374.995 129.285-18.994-6.729v3.903l18.994 9.487v-6.661Z"
              />
              <path
                fill="#7C33D7"
                d="m393.999 126.454-19.004 9.492v-6.661l19.004-6.733v3.902Z"
              />
              <path
                fill="#8F63C5"
                d="M388.661 116.085h-4.605l-13.128.894 4.072.75 13.661-1.644Z"
              />
              <path
                fill="#2F0D58"
                d="m370.928 125.607 4.07 1.219.117-.125-.003-9.171-.117-.113-4.067-.438v8.628Z"
              />
              <path
                fill="#7C33D7"
                d="m388.661 116.085-13.666 1.332.003 9.409 13.663-4.108v-6.633Z"
              />
            </g>
            <motion.rect
              width={50}
              height={50}
              x={350}
              y={90}
              fill="url(#fadeGradient)"
              variants={chipShimmer}
            />
          </g>
          <motion.path
            stroke="#531F93"
            d="M345 115h-35l-41.33-42H218v6l7 7v3"
          />
          <motion.path
            d="M345 115h-35l-41.33-42H218v6l7 7v3"
            stroke="#b980fa"
            filter="url(#blur)"
            strokeWidth="2"
            id="shimmer6"
            variants={shimmer}
            custom={[0.1, "shimmer6"]}
          />
          <circle cx={346} cy={115} r={1.5} stroke="#531F93" />
          <circle cx={175} cy={90} r={1.5} stroke="#531F93" />
          <circle cx={185} cy={90} r={1.5} stroke="#531F93" />
          <circle cx={195} cy={90} r={1.5} stroke="#531F93" />
          <circle cx={205} cy={90} r={1.5} stroke="#531F93" />
          <circle cx={215} cy={90} r={1.5} stroke="#531F93" />
          <circle cx={225} cy={90} r={1.5} stroke="#531F93" />

          <defs>
            {/* For Chip Shimmer  */}
            <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(174, 140, 248,0)" />
              <stop offset="25%" stopColor="rgba(174, 140, 248,0.1)" />
              <stop offset="50%" stopColor="rgba(174, 140, 248,0.15)" />
              <stop offset="75%" stopColor="rgba(174, 140, 248,0.1)" />
              <stop offset="100%" stopColor="rgba(174, 140, 248,0)" />
            </linearGradient>

            <clipPath id="chipClip">
              <rect width={50} height={50} y={90} rx={6} />
            </clipPath>
            <clipPath id="chipClip2">
              <rect width={50} height={50} x={50} rx={6} />
            </clipPath>
            <clipPath id="chipClip3">
              <rect width={50} height={50} x={130} rx={6} />
            </clipPath>
            <clipPath id="chipClip4">
              <rect width={50} height={50} x={220} rx={6} />
            </clipPath>
            <clipPath id="chipClip5">
              <rect width={50} height={50} x={300} rx={6} />
            </clipPath>
            <clipPath id="chipClip6">
              <rect width={50} height={50} x={350} y={90} rx={6} />
            </clipPath>

            <clipPath id="noopsClip">
              <rect width={100} height={100} x={150} y={95} rx={12} />
            </clipPath>

            <filter
              id="blurFilter"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>

            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
            </filter>

            <filter
              id="a"
              width={100}
              height={102}
              x={150}
              y={95}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                radius={2}
                result="effect1_innerShadow_0_1"
              />
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={4} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.13 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="d"
              width={71.535}
              height={33.191}
              x={164}
              y={129}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={1} />
              <feGaussianBlur stdDeviation={1} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="e"
              width={50}
              height={52}
              x={0}
              y={90}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                radius={2}
                result="effect1_innerShadow_0_1"
              />
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={4} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.13 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="h"
              width={35}
              height={43}
              x={8}
              y={94}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={1} />
              <feGaussianBlur stdDeviation={1} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="i"
              width={50}
              height={52}
              x={50}
              y={0}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                radius={2}
                result="effect1_innerShadow_0_1"
              />
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={4} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.13 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="l"
              width={66}
              height={49}
              x={42}
              y={1}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={1} />
              <feGaussianBlur stdDeviation={1} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="m"
              width={50}
              height={52}
              x={130}
              y={0}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                radius={2}
                result="effect1_innerShadow_0_1"
              />
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={4} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.13 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="p"
              width={37}
              height={39}
              x={137}
              y={5}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={1} />
              <feGaussianBlur stdDeviation={1} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="q"
              width={50}
              height={52}
              x={220}
              y={0}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                radius={2}
                result="effect1_innerShadow_0_1"
              />
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={4} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.13 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="t"
              width={34}
              height={39}
              x={228}
              y={6}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={1} />
              <feGaussianBlur stdDeviation={1} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="u"
              width={50}
              height={52}
              x={300}
              y={0}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                radius={2}
                result="effect1_innerShadow_0_1"
              />
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={4} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.13 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="x"
              width={33}
              height={41}
              x={308}
              y={5}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={1} />
              <feGaussianBlur stdDeviation={1} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="y"
              width={50}
              height={52}
              x={350}
              y={90}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                radius={2}
                result="effect1_innerShadow_0_1"
              />
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={4} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.13 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="B"
              width={38}
              height={44}
              x={356}
              y={93}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={1} />
              <feGaussianBlur stdDeviation={1} />
              <feComposite
                in2="hardAlpha"
                k2={-1}
                k3={1}
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <linearGradient
              id="b"
              x1={200}
              x2={200}
              y1={95}
              y2={195}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#341164" />
              <stop offset={1} stopColor="#0B0217" />
            </linearGradient>
            <linearGradient
              id="f"
              x1={25}
              x2={25}
              y1={90}
              y2={140}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#341164" />
              <stop offset={1} stopColor="#0B0217" />
            </linearGradient>
            <linearGradient
              id="j"
              x1={75}
              x2={75}
              y1={0}
              y2={50}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#341164" />
              <stop offset={1} stopColor="#0B0217" />
            </linearGradient>
            <linearGradient
              id="n"
              x1={155}
              x2={155}
              y1={0}
              y2={50}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#341164" />
              <stop offset={1} stopColor="#0B0217" />
            </linearGradient>
            <linearGradient
              id="r"
              x1={245}
              x2={245}
              y1={0}
              y2={50}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#341164" />
              <stop offset={1} stopColor="#0B0217" />
            </linearGradient>
            <linearGradient
              id="v"
              x1={325}
              x2={325}
              y1={0}
              y2={50}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#341164" />
              <stop offset={1} stopColor="#0B0217" />
            </linearGradient>
            <linearGradient
              id="z"
              x1={375}
              x2={375}
              y1={90}
              y2={140}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#341164" />
              <stop offset={1} stopColor="#0B0217" />
            </linearGradient>
            <clipPath id="c">
              <path fill="#fff" d="M164 129h71.535v32.191H164z" />
            </clipPath>
            <clipPath id="k">
              <path fill="#fff" d="M55 13h40v24H55z" />
            </clipPath>
            <clipPath id="o">
              <path fill="#fff" d="M135 13h40v24h-40z" />
            </clipPath>
            <clipPath id="s">
              <path fill="#fff" d="M225 13h40v24h-40z" />
            </clipPath>
            <clipPath id="w">
              <path fill="#fff" d="M305 13h40v24h-40z" />
            </clipPath>
            <clipPath id="A">
              <path fill="#fff" d="M355 103h40v24h-40z" />
            </clipPath>
          </defs>
        </motion.svg>
      </div>
    </div>
  );
};

export default AWSGraphic;
