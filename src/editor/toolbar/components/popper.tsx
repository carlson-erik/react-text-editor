import { ReactNode, useState, useEffect } from "react";
import { usePopper } from "react-popper";

type Placement =
  | "auto"
  | "auto-start"
  | "auto-end"
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "right"
  | "right-start"
  | "right-end"
  | "left"
  | "left-start"
  | "left-end";

interface PopperProps {
  children: ReactNode;
  targetRef: HTMLElement;
  placement: Placement;
  modifiers?: any;
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  clickOutside: boolean;
}

export default function Popper(props: PopperProps) {
  const {
    targetRef,
    children,
    placement,
    modifiers,
    setIsOpen,
    isOpen,
    clickOutside,
  } = props;
  const [popperRef, setPopperRef] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(targetRef, popperRef, {
    placement,
    modifiers,
  });

  useEffect(() => {
    // remove existing
    document.removeEventListener("mousedown", handleOutsideClick);
    if (clickOutside) {
      // listen for clicks and close dropdown on body
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [targetRef, popperRef]);

  function handleOutsideClick(event: any) {
    if (
      targetRef &&
      !targetRef.contains(event.target) &&
      popperRef &&
      !popperRef.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={setPopperRef}
      style={{ ...styles.popper, zIndex: 1000 }}
      {...attributes.popper}
    >
      {children}
    </div>
  );
}
