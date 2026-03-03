"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-[#0d1224] to-[#0a0d37] rounded-lg animate-pulse" />
});

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  if (!animationPath) {
    return null;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
      maxWidth: '100%',
      height: 'auto',
    },
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  return (
    <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-[#0d1224] to-[#0a0d37] rounded-lg animate-pulse" />}>
      <Lottie {...defaultOptions} />
    </Suspense>
  );
};

export default AnimationLottie;