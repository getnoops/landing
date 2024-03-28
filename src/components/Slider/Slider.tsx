import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@site/src/lib/utils";
import * as React from "react";

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
		noopsColor: boolean;
	}
>(({ noopsColor, className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn(
			"relative flex w-full touch-none select-none items-center",
			className,
		)}
		{...props}
	>
		<SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-noops-200">
			<SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-noops-600 to-accent" />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className="block h-5 w-5  touch-auto select-auto rounded-full border-2 border-accent bg-gradient-to-t from-noops-600 to-accent shadow-inner shadow-white/20 ring-accent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50" />
	</SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;
