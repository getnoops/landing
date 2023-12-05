import {
  ArrowLeftOnRectangleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const slackLogo = "/logos/slack.svg";

const TopBar = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-50 mx-auto flex h-16 w-full max-w-7xl justify-between bg-gradient-to-b from-noops-1000/90 to-noops-1000/20 px-4 py-4  sm:from-transparent sm:to-transparent  sm:px-8">
      <a href="/" className="max-h-full">
        <img src="/logo_smile.svg" className="h-full" />
      </a>
      <div className="flex items-center gap-x-2 text-sm sm:gap-x-4 sm:text-base">
        <a
          className="group mr-5 inline-flex items-center  gap-x-1 text-noops-300 transition hover:text-noops-400 sm:hidden"
          href="https://join.slack.com/t/getnoops/shared_invite/zt-25fo11ewy-5z5iMXlaDvxRv6sfp8wZHA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className=" h-5  transition group-hover:saturate-50"
            alt="Join Our slack"
            src={slackLogo}
          />
          Slack
        </a>
        <a
          className="group hidden items-center gap-x-1.5  text-noops-300 transition hover:text-noops-400 sm:inline-flex"
          href="https://join.slack.com/t/getnoops/shared_invite/zt-25fo11ewy-5z5iMXlaDvxRv6sfp8wZHA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className=" h-6  transition group-hover:saturate-50"
            alt="Join Our slack"
            src={slackLogo}
          />
          Join Our Slack
        </a>
        <a
          className="inline-flex items-center gap-x-0.5 text-noops-300 transition hover:text-noops-400 sm:gap-x-1"
          href="/pricing"
        >
          <CurrencyDollarIcon className="h-6" />
          Pricing
        </a>
        <a
          className="inline-flex items-center gap-x-0.5 text-noops-300 transition hover:text-noops-400 sm:gap-x-1"
          href="https://portal.getnoops.com/login"
        >
          <ArrowLeftOnRectangleIcon className="h-6" />
          Login
        </a>
      </div>
    </div>
  );
};

export default TopBar;
