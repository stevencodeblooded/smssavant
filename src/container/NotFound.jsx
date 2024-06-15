import { Link } from "react-router-dom";
import notFound from "../assets/notFound.jpg";

const NotFound = () => {
  return (
    <div>
      <section className=" max-w-lg mx-auto">
        <div className="px-3 py-28 flex flex-col gap-5">
          <img src={notFound} alt="404" className=" w-full" />
          <h1 className="text-4xl font-semibold text-center">
            Oops! This Page could <span className="uppercase bg-red-600 px-2 rounded-md text-white">not</span> be Found
          </h1>
          <Link
            to={"/"}
            className="text-black bg-amber-300 block px-3 p-2 rounded text-center font-semibold text-base shadow-sm shadow-black"
          >
            Go Back Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
