import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const LazyImage = ({ width, height, src, ...rest }) => {
  const wrapper = useRef();
  const [ref, inView, entry] = useInView({
    threshold: [0, 0.33, 0.66, 1],
    triggerOnce: true,
    trackVisibility: true,
    delay: 100,
    rootMargin: "300px",
  });

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // background: inView ? "#332f2f" : "#000",
      }}
    >
      <div
        data-inview={inView}
        style={{
          position: "relative",
          minHeight: height / 1.2,
          paddingTop: `${(height / width) * 12}%`,
          paddingBottom: `${(height / width) * 12}%`,
        }}
      >
        {inView && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ type: "spring", duration: 1.3, delay: 0.23 }}
            {...rest}
            src={src}
            style={{ maxWidth: "440px", height: "auto" }}
          />
        )}
      </div>
    </div>
  );
};

export default LazyImage;
