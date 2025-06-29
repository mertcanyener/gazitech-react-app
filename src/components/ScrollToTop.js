import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sayfa değiştiğinde scroll pozisyonunu en üste al
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
