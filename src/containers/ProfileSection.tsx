import { motion } from "framer-motion";
import Wrapper from "../components/Wrapper";
import useWindowWidth from "../hooks/use-window-width";
import { getBreakpointsWidth } from "../utils/helper";
import { profileSection, profileLottie } from "../utils/portfolio";
import ShowLottie from "@/components/ShowLottie";
import { slideUp } from "../animations";

const ProfileSection = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    profileSection;
  const { codingLottiePath } = profileLottie;
  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth("md");
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;
  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <>
      <Wrapper id="hero" className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 lg:col-span-7">
          <motion.p
            variants={slideUp({ delay: getAnimationDelay(0) })}
            initial="hidden"
            animate="show"
            className="text-sm text-white md:text-base "
          >
            {subtitle}
          </motion.p>
          <br />
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(1) })}
            initial="hidden"
            animate="show"
            className="text-3xl font-bold text-white md:text-5xl"
          >
            {title + " "}
          </motion.h1>
          <br />
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(2) })}
            initial="hidden"
            animate="show"
            className="text-3xl font-bold text-white md:text-5xl"
          >
            {tagline}
          </motion.h1>
          <br />
          <motion.p
            variants={slideUp({ delay: getAnimationDelay(3) })}
            initial="hidden"
            animate="show"
            className="text-xl text-white"
          >
            {description}
          </motion.p>
          <br />
          <motion.p
            variants={slideUp({ delay: getAnimationDelay(4) })}
            initial="hidden"
            animate="show"
            className="text-xl text-white"
          >
            {specialText}
          </motion.p>
        </div>
        <motion.div
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className="col-span-12 lg:col-span-5 lg:py-20"
        >
          <ShowLottie
            path={codingLottiePath}
            className="md:min-h-[448px] md:min-w-[448px]"
          />
        </motion.div>
      </Wrapper>
    </>
  );
};

export default ProfileSection;
