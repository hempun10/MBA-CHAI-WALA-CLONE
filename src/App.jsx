import Footer from "./Components/Footer";
import IntroVideo from "./Components/IntroVideo";
import Section from "./Components/Section";

import data from "./data/data.json";
import "./Styles/App.scss";
import "./Styles/intro.scss";
import "./Styles/section.scss";

const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";

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
  return (
    <>
      <IntroVideo />
      {/* Sections  */}
      {topics}
      <Footer />
    </>
  );
}

export default App;
