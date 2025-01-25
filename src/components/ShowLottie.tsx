import { Player } from "@lottiefiles/react-lottie-player";
import dynamic from "next/dynamic";

const MyComponentNoSSR = dynamic(
  () =>
    import("@lottiefiles/react-lottie-player").then((module) => ({
      default: module.Player,
    })),
  { ssr: false }
);
type Props = {
  path: any;
  className?: string;
};

const ShowLottie = ({ path, className = "" }: Props) => {
  return (
    <div className={`max-w-sm md:max-w-md ${className}`}>
      <MyComponentNoSSR autoplay loop src={path}></MyComponentNoSSR>
    </div>
  );
};

export default ShowLottie;
