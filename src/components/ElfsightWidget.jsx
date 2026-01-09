"use client"; // If using Next.js App Router (for Next.js 13+)

import { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js"; // Replace with your actual Elfsight script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="elfsight-app-89d4f37e-4d82-457c-8a01-17dc231249f1" data-elfsight-app-lazy></div> // Replace with the appropriate div if needed
};

export default ElfsightWidget;
