import type { NextPage } from "next";
import Counter from "../components/Counter";

const Home: NextPage = () => {
  return (
    <div className="bg-primary">
      <h1 className="text-secondary">iK I am home page</h1>
      <Counter />
    </div>
  );
};

export default Home;
