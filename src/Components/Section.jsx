// import React from 'react';
import { motion } from "framer-motion";
const Section = ({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  imgSrc,
  imgSize = "60%",
  bgColor,
  headingColor,
  textColor,
  brnBgColor,
  btnColor,
}) => {
  const headingOption = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  const textOptions = {
    ...headingOption,
    transition: {
      delay: 0.3,
    },
  };
  const buttonOptions = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    },
  };

  const ImgOption = {
    initial: {
      scale: 0.1,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    },
  };

  return (
    <section className="section" style={{ backgroundColor: bgColor }}>
      <div>
        <motion.h3
          style={{ color: headingColor }}
          {...headingOption}
          data-cursorpointer
        >
          {h3}
        </motion.h3>
        <motion.p
          style={{ color: textColor }}
          {...textOptions}
          data-cursorpointer
        >
          {text}
        </motion.p>
        {hasBtn && (
          <motion.button
            style={{ color: btnColor, backgroundColor: brnBgColor }}
            {...buttonOptions}
            data-cursorpointer
          >
            {btnTxt}
          </motion.button>
        )}
        <motion.div {...ImgOption}>
          <img src={imgSrc} alt="Img" style={{ width: imgSize }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
