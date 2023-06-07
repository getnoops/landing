interface Feature {
  name: string;
  description: string;
  icon: any;
}

interface FeaturesProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
}

const Features = ({
  title,
  description,
  features,
  subtitle,
}: FeaturesProps) => {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 w-full rounded-full bg-gradient-to-r from-noops-900  to-noops-900 opacity-20 blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h4 className="text-base font-semibold leading-7 text-noops-400">
              {subtitle}
            </h4>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {description}
            </p>
          </div>
        </div>
        <div className="relative mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-slate-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-noops-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="block">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
