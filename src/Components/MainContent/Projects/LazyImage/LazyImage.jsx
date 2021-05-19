import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const LazyImage = ({ width, height, src, ...rest }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  return (
    <div
      ref={ref}
      data-inview={inView}
      style={{
        position: "relative",
        paddingBottom: `${(height / width) * 15}%`,
      }}
    >
      {inView && (
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.3}}
          {...rest}
          src={src}
          style={{ maxWidth: "100%" }}
        />
      )}
    </div>
  );
};

export default LazyImage;
