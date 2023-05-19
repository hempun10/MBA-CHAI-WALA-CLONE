import logo from "../assets/logo.png";
import { BsMouse } from "react-icons/bs";
const Misc = () => {
  return (
    <>
      <div className="cursor" data-cursorpointer></div>
      <a href="/" className="logo">
        <img src={logo} alt="logo" data-cursorpointer />
      </a>
      <a href="/franchise" className="franchise_btn" data-cursorpointer>
        GET A FRANCHISE
      </a>
      <BsMouse className="scrollBtn" />
    </>
  );
};

export default Misc;
