export const plans: {
  id: "free" | "pro" | "enterprise";
  name: string | JSX.Element;
  description: string;
  href: string;
}[] = [
  {
    id: "free",
    name: (
      <>
        Free, <i>Forever</i>
      </>
    ),
    description: "The essentials to discover No_Ops",
    href: "#",
  },
  {
    id: "pro",
    name: "Pro",
    description: "Pay only for what you need",
    href: "#",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Tailored for big businesses",
    href: "#",
  },
];
