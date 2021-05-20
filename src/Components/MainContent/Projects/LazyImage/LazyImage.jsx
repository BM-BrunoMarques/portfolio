import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const LazyImage = ({ width, height, src, ...rest }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });

  return (
    <div
      ref={ref}
      data-inview={inView}
      style={{
        position: "relative",
        maxWidth: "440px",
        marginBottom: 35,
        maxHeight: height,
      }}
    >
      {inView && (
        <motion.img
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ type: "spring", duration: 1.3, delay: 0.3 }}
          {...rest}
          src={src}
          style={{ maxWidth: "100%" }}
        />
      )}
    </div>
  );
};

export default LazyImage;
