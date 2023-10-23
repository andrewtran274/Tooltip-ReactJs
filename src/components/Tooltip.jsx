import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [visibility, setVisibility] = useState(false);

  const handleVisibleTooltop = (e) => {
    let heightElement = e.target.offsetHeight;
    let heightView = window.innerHeight;
    let valueY = e.target.getBoundingClientRect().top;

    let minValueTooltip = heightView - (heightElement + valueY);

    if (minValueTooltip <= 50) {
      setVisibility(false);
      console.log(minValueTooltip);
    } else {
      setVisibility(true);
    }
  };

  return (
    <div
      className="tooltip-container"
      onMouseMove={(e) => handleVisibleTooltop(e)}
      onMouseLeave={() => setVisibility(false)}
    >
      {children}
      {visibility ? <div className="tooltip">{text}</div> : ""}
    </div>
  );
};

export default Tooltip;
