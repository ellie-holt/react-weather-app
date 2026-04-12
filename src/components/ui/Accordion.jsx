import { useEffect, useState } from "react";

import { Accordion } from "radix-ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function CustomAccordion({
  summary,
  details,
  rootClassName = "",
  itemClassName = "",
  triggerClassName = "",
  contentClassName = "",
}) {
  const ITEM_VALUE = "weather-details";
  const [is2xsDown, setIs2xsDown] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 549px)").matches : false
  );
  const defaultValue =
    typeof window !== "undefined" && window.matchMedia("(min-width: 1440px)").matches
      ? ITEM_VALUE
      : undefined;

  useEffect(() => {
    const mediaQuery2xsDown = window.matchMedia("(max-width: 549px)");

    const handle2xsDownChange = event => {
      setIs2xsDown(event.matches);
    };

    setIs2xsDown(mediaQuery2xsDown.matches);
    mediaQuery2xsDown.addEventListener("change", handle2xsDownChange);

    return () => {
      mediaQuery2xsDown.removeEventListener("change", handle2xsDownChange);
    };
  }, []);

  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue={defaultValue}
      className={`flex flex-col accordion ${rootClassName}`}
    >
      <Accordion.Item value={ITEM_VALUE} className={`accordion-item ${itemClassName}`}>
        <Accordion.Header asChild>
          <h3>
            <Accordion.Trigger
              className={`group flex items-center justify-between w-full transition-all duration-300 ease-out text-left accordion-toggle ${triggerClassName}`}
              aria-label="Toggle weather details"
            >
              <span className="mr-2 text-center accordion-summary grow">{summary}</span>

              <span
                className={`button ${is2xsDown ? "button--round-sm" : "button--round"} shrink-0 inline-flex items-center justify-center`}
                aria-hidden="true"
              >
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={`button-caret ${is2xsDown ? "button-caret--sm" : ""} transition-transform duration-300 group-data-[state=open]:rotate-180`}
                />
              </span>
              <span className="sr-only">Toggle weather details</span>
            </Accordion.Trigger>
          </h3>
        </Accordion.Header>

        <Accordion.Content
          className={`accordion-content 2xl:max-h-[19rem] overflow-x-hidden overflow-y-scroll data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up ${contentClassName}`}
        >
          {details}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
