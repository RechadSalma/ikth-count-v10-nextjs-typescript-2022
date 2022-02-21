import type { NextPage } from "next";
import Counter from "../components/Counter";

const Home: NextPage = () => {
  return (
    <div className="bg-primary">
      <h1 className="text-secondary">iK I am home page</h1>

      <Counter />

      <div className={`container`}>
        <h6>
          iK You can ignore, this is for testing bootstrap breakpoints which
          strangly is not working accordingly as I thought it would
        </h6>
        <div className="container-sm bg-info text-dark">
          100% wide until small breakpoint
        </div>
        <div className="container-md bg-info text-dark">
          100% wide until medium breakpoint
        </div>
        <div className="container-lg bg-info text-dark">
          100% wide until large breakpoint
        </div>
        <div className="container-xl bg-info text-dark">
          100% wide until extra large breakpoint
        </div>
        <div className="container-xxl bg-info text-dark">
          100% wide until extra extra large breakpoint
        </div>
      </div>
    </div>
  );
};

export default Home;
