import React from "react";

interface BlocksProps {
  title: string;
  description: string;
  image: string;
  items: {
    title: string;
    description: string;
    Icon: React.ForwardRefExoticComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
        titleId?: string | undefined;
      }
    >;
  }[];
}

const Blocks = ({ title, description, image, items }: BlocksProps) => {
  return (
    <div className="bg-noops-1000 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl border-4 border-accent/50 bg-gradient-to-br from-accent/20 via-transparent to-accent/20 blur-xl"></div>

          <div className="relative h-96 w-full overflow-clip rounded-3xl border border-noops-600/20 bg-noops-600/10">
            <div className="mx-auto flex h-full flex-col-reverse justify-between md:flex-row">
              <div className="my-8 flex items-center text-center md:w-3/5 md:text-left">
                <div className="mx-4 md:ml-8 md:mr-16">
                  <h2 className=" text-4xl font-bold text-noops-200 ">
                    {title}
                  </h2>
                  <p className="mt-2 text-noops-300 md:mt-0">{description}</p>
                </div>
              </div>
              <div className="max-h-full border-b border-noops-600/20 md:w-2/5 md:border-b-0 md:border-l">
                <img
                  src={image}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 flex flex-col gap-8 md:my-2 md:flex-row md:gap-2 xl:my-8 xl:gap-8">
          {items.map((item) => (
            <div className="relative w-full flex-1 shrink-0">
              <div className="absolute inset-0 rounded-3xl border-4 border-accent/50 bg-gradient-to-br from-accent/20 via-transparent to-accent/20 blur-xl"></div>
              <div className="relative h-96 w-full overflow-clip rounded-3xl border border-noops-600/20 bg-noops-600/10 p-4 md:p-2 lg:p-4">
                <div className="flex h-2/3 w-full items-center justify-center rounded-2xl border border-noops-600/30 bg-noops-600/10 md:h-3/5 lg:h-2/3">
                  <item.Icon className="h-32 text-noops-400" />
                </div>
                <div className="mt-4 text-center md:mt-2 md:text-left">
                  <h2 className="  text-2xl font-bold text-noops-200 md:text-xl lg:text-2xl">
                    {item.title}
                  </h2>
                  <p className="text-noops-300 md:text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blocks;
