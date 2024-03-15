import * as Icon from "react-feather";
import { TypeAnimation } from "react-type-animation";
import InputLongLink from "../shortenInput/input";
import LinkIconAnimation from "../animations/linkIcon";

const Hero: React.FC = () => {
  return (
    <div className="hero w-full min-h-fit text-center text-text relative z-0 pt-24 lg:pt-14 px-5 flex flex-col items-center">
      <LinkIconAnimation index="-z-10" marginTop="mt-16" />
      <div>
        <h1 className="font-bold text-4xl md:text-5xl lg:w-[800px]">
          Unlock the Power of <span className=" text-purple-300 text-ac">Speed</span>
          <br />and <span className="text-purple-300">Precision</span>{" "}
          with <span className="text-accent text-ac">CuteX</span>
        </h1>
        <p className="mt-10 mb-2 px-1  md:px-0 text-xl">
          Transform long URLs into<span className="text-purple-300">{" "}</span>
          <TypeAnimation
            sequence={["short", 2000, "neat", 2000, "easy-2-share", 2000]}
            wrapper="strong"
            speed={40}
            repeat={Infinity}
            className="text-purple-300"
          />{" "}
          <br />
          links with ease.
        </p>
        <p className="text-lg ">
          <span className="text-purple-300 font-bold">CuteX</span> - Shorten Your
          Links, Master Your Crafts!
        </p>
      </div>
      <InputLongLink text="Get your shortened url now!!" />
      <div className="my-16 text-cyan-500">
        <a href="#whyUs" className="bounce">
          <Icon.ChevronsDown className="bounce" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
