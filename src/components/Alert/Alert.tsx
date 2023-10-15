import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type AlertVariant = "error" | "success" | "warning";

type AlertProps = {
  content: ReactNode;
  title: ReactNode;
  variant?: AlertVariant;
};

export const Alert = ({ content, title, variant = "success" }: AlertProps) => {
  const defaultClass = "border px-4 py-3 rounded relative";
  const variants: Record<AlertVariant, string> = {
    error: "bg-red-100 border-red-400 text-red-700",
    success: "bg-green-100 border-green-400 text-green-700",
    warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
  };

  return (
    <div className={twMerge(defaultClass, variants[variant])} role="alert">
      <h4 className="font-bold">{title}</h4>
      <span className="block sm:inline">{content}</span>
    </div>
  );
};
