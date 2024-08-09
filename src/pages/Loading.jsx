import Lottie from "lottie-react";
import loadingEffect from "../public/loadingAni.json";
import { useEffect, useState } from "react";

const Loading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const sequence = setInterval(() => {
      setDots((dots) => (dots.length < 3 ? dots + `.` : ""));
    }, 300);

    return () => clearInterval(sequence);
  }, []);

  return (
    <section className="flex h-[70vh] flex-col items-center justify-center p-5">
      <div className="pointer-events-none w-[85vw] max-w-[700px]">
        <Lottie animationData={loadingEffect} loop={true} />
      </div>

      <div className="p-2">
        <h3 className="mb-5 text-3xl font-bold">Loading{dots}</h3>
      </div>
    </section>
  );
};

export default Loading;
