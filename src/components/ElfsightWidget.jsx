"use client";

import { useEffect, useRef, useState } from "react";

const ElfsightWidget = () => {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    // Check if script already exists
    if (document.querySelector('script[src*="elfsight.com/platform/platform.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="min-h-[200px]">
      {shouldLoad && (
        <div
          className="elfsight-app-89d4f37e-4d82-457c-8a01-17dc231249f1"
          data-elfsight-app-lazy
        />
      )}
    </div>
  );
};

export default ElfsightWidget;
