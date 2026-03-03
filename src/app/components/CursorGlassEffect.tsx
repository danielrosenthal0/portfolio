"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CursorGlassEffect() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".glass-button, .hover-glass"));

    const updatePosition = (event: PointerEvent) => {
      const element = event.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      element.style.setProperty("--mx", `${x}%`);
      element.style.setProperty("--my", `${y}%`);
    };

    elements.forEach((element) => {
      element.addEventListener("pointermove", updatePosition);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("pointermove", updatePosition);
      });
    };
  }, [pathname]);

  return null;
}
