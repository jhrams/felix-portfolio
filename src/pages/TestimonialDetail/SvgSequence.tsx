import { useState, useEffect } from "react";
import "./styles.css"

const SvgSequence = ({ svgs, aspectRatio }: { svgs: string[], aspectRatio: string | undefined }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      // Move to the next SVG, or loop back to the first
      setCurrentIndex((prevIndex) => (prevIndex + 1) % svgs.length);
    }, 3000); // 300ms delay + 1000ms animation

    return () => clearTimeout(interval);
  }, [currentIndex, svgs.length]);

  return (
    <div className="svg-sequence-container" style={{ aspectRatio: aspectRatio ? aspectRatio : "100 / 60.694" }}>
      {svgs.map((svg, index) => (
        <div
          key={index}
          className={`svg-wrapper ${index === currentIndex ? "active" : ""}`}
          style={{ animationDelay: index === currentIndex ? "300ms" : "0ms" }}
        >
          <img src={svg} alt={`SVG ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default SvgSequence;
