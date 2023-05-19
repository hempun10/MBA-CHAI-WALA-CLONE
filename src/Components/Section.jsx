// import React from 'react';

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
  return (
    <section className="section" style={{ backgroundColor: bgColor }}>
      <div>
        <h3 style={{ color: headingColor }}>{h3}</h3>
        <p style={{ color: textColor }}>{text}</p>
        {hasBtn && (
          <button style={{ color: btnColor, backgroundColor: brnBgColor }}>
            {btnTxt}
          </button>
        )}
        <div>
          <img src={imgSrc} alt="Img" style={{ width: imgSize }} />
        </div>
      </div>
    </section>
  );
};

export default Section;
