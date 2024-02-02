"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Children, useLayoutEffect, useRef } from "react";
import "./Animation.css"

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection({Children}) {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      <div ref={slider} className="container">
        <div className="description panel blue">
          {Children}
        </div>
      </div>
    </div>
  );
}
