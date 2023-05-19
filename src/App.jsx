import Footer from "./Components/Footer";
import IntroVideo from "./Components/IntroVideo";
import Section from "./Components/Section";

import data from "./data/data.json";
import "./Styles/App.scss";
import "./Styles/intro.scss";
import "./Styles/section.scss";
import "./Styles/footer.scss";
import "./Styles/misc.scss";
import "./Styles/mediaQuery.scss";
import Misc from "./Components/Misc";
import { useEffect } from "react";

const yellow = "#fff100";
const pink = "#ed1e79";

const topics = Object.values(data).map((topic, index) => (
  <Section
    key={index}
    h3={topic.heading}
    text={topic.text}
    btnTxt={topic.btn}
    imgSrc={topic.img}
    imgSize={index == 5 ? "30%" : "60%"}
    bgColor={index == 2 || index == 5 ? yellow : pink}
    headingColor={index == 2 || index == 5 ? pink : yellow}
    textColor={index == 2 || index == 5 ? pink : yellow}
    brnBgColor={index == 2 || index == 5 ? pink : yellow}
    btnColor={index == 2 || index == 5 ? yellow : pink}
  />
));
function App() {
  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);
    return () => window.removeEventListener("mousemove", dotCursor);
  }, []);
  return (
    <>
      <IntroVideo />
      {/* Sections  */}
      {topics}
      <Footer />
      <Misc />
    </>
  );
}

export default App;
