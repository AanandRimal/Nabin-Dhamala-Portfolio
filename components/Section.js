"use client";

import { useEffect, useRef, useState } from "react";

/** A section plus its rundown rail. The rail lights up while the section is on screen. */
export default function Section({ id, tc, label, light, style, children }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), {
      rootMargin: "-20% 0px -55% 0px",
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={light ? "light" : undefined} style={style}>
      <div className="wrap sec-grid">
        <div className={on ? "rail on" : "rail"}>
          <span className="tc">{tc}</span>
          <span className="name">{label}</span>
          <span className="bar" />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
