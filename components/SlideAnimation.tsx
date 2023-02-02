import Image from "next/image";
import React, { useEffect, useState } from "react";
import fd from "./img/cobhealth1.png";

interface Props {
  images: any[];
}

const SlideAnimation: React.FC<Props> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div className="flex justify-center items-center w-full lg:w-2/3">
      <Image
        src={images[currentImageIndex]}
        className="w-full shadow-2xl"
        alt=""
        onAnimationEnd={() => setIsAnimating(false)}
      />
    </div>
  );
};

export default SlideAnimation;
