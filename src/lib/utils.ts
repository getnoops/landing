import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const capitaliseFirstLetter = (s: string) =>
	s[0].toUpperCase() + s.slice(1);
