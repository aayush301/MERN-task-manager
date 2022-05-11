import React, { useRef, useState } from 'react'
import ReactDom from 'react-dom';

const Portal = ({ children }) => {
  return ReactDom.createPortal(children, document.body);
}

// @param space: it is the dist between the tip and the element
// @param children: It is expected to have only 1 child
const Tooltip = ({ children, text, position = "bottom", space = 5 }) => {

  if (!React.isValidElement(children)) {
    children = children[0]
  }

  const [open, setOpen] = useState(false);
  const tooltipRef = useRef();
  const elementRef = useRef();

  const handleMouseEnter = () => {
    setOpen(true);
    const { x, y } = getPoint(elementRef.current, tooltipRef.current, position, space);
    tooltipRef.current.style.left = `${x}px`;
    tooltipRef.current.style.top = `${y}px`;
  }

  const getPoint = (element, tooltip, position, space) => {
    const eleRect = element.getBoundingClientRect();
    const pt = { x: 0, y: 0 };
    switch (position) {
      case "bottom": {
        pt.x = eleRect.left + (element.offsetWidth - tooltip.offsetWidth) / 2;
        pt.y = eleRect.bottom + (space + 10);
        break;
      }
      case "left": {
        pt.x = eleRect.left - (tooltip.offsetWidth + (space + 10));
        pt.y = eleRect.top + (element.offsetHeight - tooltip.offsetHeight) / 2;
        break;
      }
      case "right": {
        pt.x = eleRect.right + (space + 10);
        pt.y = eleRect.top + (element.offsetHeight - tooltip.offsetHeight) / 2;
        break;
      }
      case "top": {
        pt.x = eleRect.left + (element.offsetWidth - tooltip.offsetWidth) / 2;
        pt.y = eleRect.top - (tooltip.offsetHeight + (space + 10));
        break;
      }
      default: {
        break;
      }
    }
    return pt;
  }

  const tooltipClasses =
    `fixed transition ${open ? "opacity-100" : "opacity-0 "} pointer-events-none z-50 rounded-md bg-black text-white px-4 py-2 text-center w-max max-w-[150px]
      ${position === "top" && " after:absolute after:content-[''] after:left-1/2 after:top-full after:-translate-x-1/2 after:border-[10px] after:border-transparent after:border-t-black"}
      ${position === "bottom" && " after:absolute after:content-[''] after:left-1/2 after:bottom-full after:-translate-x-1/2 after:border-[10px] after:border-transparent after:border-b-black"}
      ${position === "left" && " after:absolute after:content-[''] after:top-1/2 after:left-full after:-translate-y-1/2 after:border-[10px] after:border-transparent after:border-l-black"}
      ${position === "right" && " after:absolute after:content-[''] after:top-1/2 after:right-full after:-translate-y-1/2 after:border-[10px] after:border-transparent after:border-r-black"}
    `;

  return (
    <>
      {React.cloneElement(children, {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: () => setOpen(false),
        ref: elementRef
      })}

      <Portal>
        <div ref={tooltipRef} className={tooltipClasses}>{text}</div>
      </Portal>
    </>
  )
}

export default Tooltip