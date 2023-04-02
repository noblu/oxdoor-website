import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(initialIsVisible: any) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const [isOpen, setIsOpen] = useState(initialIsVisible);
  const ref: any = useRef(null);

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (isComponentVisible) {
        setIsComponentVisible(false);
      }
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isOpen, isComponentVisible, ref]);

  return { ref, isComponentVisible, setIsComponentVisible, isOpen, setIsOpen };
}
