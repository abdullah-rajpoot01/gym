"use client"; // Flags this file to run only on the browser

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Global styles for animations

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 500, // global duration in milliseconds
      once: false,   // whether animations repeat on scroll
    });
  }, []);

  return null; // This component handles side-effects only and renders nothing
}
