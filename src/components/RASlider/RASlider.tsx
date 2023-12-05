import { useSliderState } from "react-stately";

import {
  mergeProps,
  useFocusRing,
  useNumberFormatter,
  useSlider,
  useSliderThumb,
  VisuallyHidden,
} from "react-aria";
import { useRef } from "react";
import classNames from "classnames";

function Slider(props: any) {
  let trackRef = useRef(null);
  let numberFormatter = useNumberFormatter(props.formatOptions);
  let state = useSliderState({ ...props, numberFormatter });
  let { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef,
  );

  return (
    <div {...groupProps} className={`slider ${state.orientation}`}>
      {/* Create a container for the label and output element. */}
      {props.label && (
        <div className="flex justify-between text-sm">
          <label {...labelProps}>{props.label}</label>
          <output {...outputProps}>{state.getThumbValueLabel(0)}</output>
        </div>
      )}
      {/* The track element holds the visible track line and the thumb. */}
      <div
        {...trackProps}
        ref={trackRef}
        className="relative mt-1 h-2 w-full grow  rounded-full bg-noops-200"
      >
        <Thumb index={0} state={state} trackRef={trackRef} name={props.name} />
      </div>
    </div>
  );
}

function Thumb(props: any) {
  let { state, trackRef, index, name } = props;
  let inputRef = useRef(null);
  let { thumbProps, inputProps, isDragging } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
      name,
    },
    state,
  );

  let { focusProps, isFocusVisible } = useFocusRing();

  let { style, ...thumbp } = thumbProps;

  console.log(style?.left);

  return (
    <div
      {...thumbp}
      style={{
        left: style?.left,
      }}
      className={classNames(
        "ring-offset-background absolute block h-5 w-5 -translate-y-1.5 cursor-pointer rounded-full border-2 border-accent bg-gradient-to-t from-noops-600 to-accent shadow-inner shadow-white/20 ring-accent transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50",
      )}
    >
      <VisuallyHidden>
        <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
      </VisuallyHidden>
    </div>
  );
}

export default Slider;
