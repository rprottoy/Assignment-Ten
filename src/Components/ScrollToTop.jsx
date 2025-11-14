import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handlePop = () => {
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    // Scroll on normal navigation
    window.scrollTo({ top: 0, behavior: "instant" });

    // Scroll on back/forward button
    window.addEventListener("popstate", handlePop);

    return () => {
      window.removeEventListener("popstate", handlePop);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
