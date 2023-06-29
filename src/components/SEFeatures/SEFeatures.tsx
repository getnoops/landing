interface Feature {
  name: string;
  description: string;
  href: string;
  icon: any;
}

interface SEFeaturesProps {
  title: string;
  description: string;
  subtitle: string;
  features: Feature[];
}

const SEFeatures = ({
  title,
  description,
  subtitle,
  features,
}: SEFeaturesProps) => {
  return (
    <div className="bg-noops-1000 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h4 className="text-base font-semibold leading-7 text-noops-400">
            {subtitle}
          </h4>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">{description}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-noops-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-300">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                <a
                  href={feature.href}
                  className="text-sm font-semibold leading-6 text-noops-400"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SEFeatures;
