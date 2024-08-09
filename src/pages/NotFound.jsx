import Lottie from "lottie-react";
import LostPerson from "../public/routeErrorAni.json";

const NotFound = () => {
  return (
    <section className="flex max-h-full flex-col items-center justify-center p-5">
      <div className="pointer-events-none w-[85vw] max-w-[700px]">
        <Lottie animationData={LostPerson} loop={true} />
      </div>

      <div className="p-2">
        <h3 className="text-9xl font-bold">404</h3>
        <h3 className="text-xl font-medium">
          Oops! You're not supposed to be here.
        </h3>
      </div>
    </section>
  );
};

export default NotFound;
