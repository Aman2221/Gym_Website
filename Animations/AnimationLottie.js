import Lottie from "react-lottie";
import LazyLoad from "react-lazyload";

const AnimationLottie = (props) => {
  const { lottieFile } = props;
  const defaultOptions = {
    loop: true, 
    autoplay: true,
    animationData: lottieFile.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <LazyLoad once>
        <Lottie options={defaultOptions} />
      </LazyLoad>
    </div>
  );
};

export default AnimationLottie;
