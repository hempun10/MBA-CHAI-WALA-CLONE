import video from "../assets/MBA Chai Wala.mp4";
const IntroVideo = () => {
  return (
    <div className="intro">
      <video src={video} autoPlay controlsList="nodownload" muted loop></video>
      <div></div>
    </div>
  );
};

export default IntroVideo;
