import React, { useState } from "react";
import { useEffect } from "react";
import { useWindowScroll } from "react-use";
import "./Scroll.css";

const Scroll = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div className="scroll-to-top text-center" onClick={scrollToTop}>
      <i class="fa fa-chevron-up"></i>
    </div>
  );
};

export default Scroll;
