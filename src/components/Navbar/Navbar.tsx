import React from "react";

const nav = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

const Navbar = () => {
  return (
    <header className="py-5 fixed w-full z-50 backdrop-blur-md  bg-opacity-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <a aria-label="Home" href="/#">
              <img src="/logo_smile.svg" alt="Logo" className="h-8 w-auto" />
            </a>
            <div className="hidden md:flex md:gap-x-6">
              {nav.map((item) => (
                <a
                  className="inline-block rounded-lg py-1.5 px-4 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
                  href={item.href}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <a
                className="inline-block rounded-lg py-1.5 px-4 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
                href="/login"
              >
                Sign in
              </a>
            </div>
            <a
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-cloud-blue text-white hover:text-sky-50 hover:bg-sky-600 active:bg-sky-800 active:text-sky-100 focus-visible:outline-sky-500 transition"
              href="/register"
            >
              Start deploying
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
