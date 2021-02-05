import React from 'react';
import './video.styles.css';
import video from '../../assets/logo.mp4';
import thumb from '../../assets/logo.png';

const getVideoSrc = (width) => {
  if (width >= 1080) return video;
  if (width >= 720) return video;
  return video;
};

const Video = (props) => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const src = getVideoSrc(window.innerWidth);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
    return 'this.play()';
  };
  return (
    <div className="container">
      <img
        src={thumb}
        className="logo"
        alt="thumb"
        style={{ display: isVideoLoaded ? 'none' : 'show' }}
      />
      <video
        autoPlay
        src={src}
        onLoadedData={onLoadedData}
        style={{ display: isVideoLoaded ? 'unset' : 'none' }}
        className="video"
        autopictureinpicture="true"
        muted={true}
      />
    </div>
  );
};

export default Video;
