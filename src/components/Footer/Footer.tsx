import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Blob from "./Blob/Blob";

const Links = [
  {
    title: "PRODUCT",
    links: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Leaders",
        href: "/leaders",
      },
    ],
  },
  {
    title: "INFO",
    links: [
      {
        title: "Docs",
        href: "https://hub.getnoops.com/",
      },
      {
        title: "Pricing",
        href: "/pricing",
      },
    ],
  },
  {
    title: "COMPANY",
    links: [
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="overflow-clip bg-noops-1000">
      <div className="relative    mx-auto min-h-[20rem]  text-white">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-16 py-20 sm:grid-cols-4 sm:gap-4">
          <div className="">
            <img
              src="/logo_smile.svg"
              alt="logo"
              className=" h-10"
              draggable={false}
            />
          </div>
          <div className="col-span-3 grid grid-cols-2 gap-8 sm:gap-4 lg:grid-cols-3">
            {Links.map((link) => (
              <div className="">
                <div>
                  <h6 className="UPPERCASE  text-sm tracking-[0.25rem] text-noops-300">
                    {link.title}
                  </h6>
                  <div className="mt-1 h-px w-full max-w-[200px] bg-noops-300"></div>
                </div>

                <div className="space-y-4">
                  {link.links.map((l) => (
                    <a
                      href={l.href}
                      className="group mt-4 flex max-w-fit  items-center gap-x-2 text-sm tracking-wide text-noops-200 transition hover:text-noops-400"
                    >
                      {l.title}
                      <ArrowRightIcon className="h-5 text-noops-200 opacity-0 transition group-hover:text-noops-400 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* BLOB */}
        <div className="absolute inset-0 ">
          <div className="absolute -left-[80%] top-[80%] flex h-144 w-full items-center justify-center sm:-left-[20%] sm:top-[60%] lg:-left-[5%] lg:top-1/2">
            {/* b980fa for a more pink-ish look
                ae8cf8 for a more blue-ish look
             */}
            <Blob
              className="absolute left-0  h-[100%] blur-[120px]"
              fill="#ae8cf8"
            />
            <Blob
              className="absolute left-0 h-[100%] mix-blend-overlay blur-[120px]"
              fill="#cab6fc"
            />
            <Blob
              className="absolute left-0  h-[50%] mix-blend-overlay blur-[120px]"
              fill="#ece7fe"
            />

            {/* <div className="absolute -inset-[100%] bg-black opacity-10  mix-blend-overlay"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
