

import React, { useEffect, useRef, useState } from "react";

const ProgressCircle = ({ label, progress }) => {
  const [current, setCurrent] = useState(0);
  const circleRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Detect when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }
  }, []);

  // Animate progress
  useEffect(() => {
    if (visible) {
      let start = 0;
      const animate = () => {
        if (start <= progress) {
          setCurrent(start);
          start++;
          requestAnimationFrame(animate);
        }
      };
      animate();
    }
  }, [visible, progress]);

  return (
    <div className="progress-div">
      <div
        ref={circleRef}
        className="progress-circle"
        style={{ "--progress": current }}
      >
        <span className="progress-value">{current}%</span>
      </div>
      <h1>{label}</h1>
    </div>
  );
};

export default function Skills() {
  return (
    <div>
      <h1 className="text-center text-white skill-heading">Skills</h1>
      <div className="skills">
        <ProgressCircle label="HTML" progress={90} />
        <ProgressCircle label="CSS" progress={75} />
        <ProgressCircle label="JavaScript" progress={70} />
      </div>

      <div className="skills-2">
        <ProgressCircle label="Bootstrap" progress={90} />
        <ProgressCircle label="React.js" progress={40} />
      </div>
    </div>
  );
}
