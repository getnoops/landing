import * as SliderPrimitive from "@radix-ui/react-slider";
import classNames from "classnames";
import * as React from "react";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    noopsColor: boolean;
  }
>(({ noopsColor, className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={classNames(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-noops-200">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-noops-600 to-accent" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="ring-offset-background  block h-5 w-5 rounded-full border-2 border-accent bg-gradient-to-t from-noops-600 to-accent shadow-inner shadow-white/20 ring-accent transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;
