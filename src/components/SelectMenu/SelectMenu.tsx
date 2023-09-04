import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import React, { Fragment } from "react";

interface SelectMenuItem {
  value: string;
  name: string;
  hidden: boolean;
}

interface SelectMenuProps {
  value: any;
  onChange: any;
  defaultValueMessage: string;
  options: SelectMenuItem[];
}

const SelectMenu = ({
  value,
  onChange,
  options,
  defaultValueMessage,
}: SelectMenuProps) => {
  const isDefaultValue = value === "";

  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <Listbox.Button className="block h-9 w-full rounded-md border-0 bg-noops-300/5 px-3 py-1.5 text-accent outline-0 ring-1 ring-noops-300/20 transition focus:bg-noops-1000 focus:ring-2 focus:ring-accent">
              <span
                className={classNames(
                  isDefaultValue ? "text-noops-400/70" : "text-noops-400",
                  "block truncate text-left transition"
                )}
              >
                {isDefaultValue ? defaultValueMessage : value}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-noops-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-noops-1000 text-base shadow-inner shadow-noops-950/50 ring-1 ring-accent/10  transition focus:outline-none sm:text-sm">
                {options.map((option, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "bg-noops-400/10 text-noops-50"
                          : "text-noops-400",
                        "relative m-1 cursor-pointer select-none rounded-[4px] py-2 pl-3 pr-9 transition"
                      )
                    }
                    hidden={option.hidden}
                    value={option.value}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {option.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-noops-400",
                              "absolute inset-y-0 right-0 flex items-center pr-4 transition"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default SelectMenu;
