import Lottie from "lottie-react";
import errorPage from "../public/articleErrorAni.json";

const ArticleNotFound = ({ errorMsg }) => {
  return (
    <section className="flex max-h-full flex-col items-center justify-center p-5">
      <div className="pointer-events-none w-[85vw] max-w-[700px]">
        <Lottie animationData={errorPage} loop={true} />
      </div>

      <div className="p-2">
        <h3 className="mb-5 text-5xl font-bold">
          {errorMsg || `Invalid page`}
        </h3>
        <h3 className="text-xl font-medium">Oops! Something went wrong.</h3>
      </div>
    </section>
  );
};

export default ArticleNotFound;
