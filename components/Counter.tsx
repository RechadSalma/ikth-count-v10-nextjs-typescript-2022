import styles from "../styles/Home.module.scss";
import { useState } from "react";

export default function Counter(): JSX.Element {
  const [counterNumber, setCounter] = useState<number>(0);

  const incrementClick = () => setCounter(counterNumber + 1);

  const decrementClick = () => setCounter(counterNumber - 1);

  const resetClick = () => setCounter(0);

  return (
    <div className="">
      <div>
        <span
          className={`d-flex justify-content-center p-3 ${styles.counterNumber}`}
        >
          {counterNumber}
        </span>
      </div>

      <div
        className={`container-fluid my-3 p-3 border border-danger border-1 d-flex justify-content-center`}
      >
        <div className="row container bg-dark px-0">
          <div className="col-sm border border-dark border-3">
            <button
              type="button"
              className="btn btn-success w-100"
              onClick={incrementClick}
            >
              Increment
            </button>
          </div>

          <div className="col-sm border border-dark border-3">
            <button
              type="button"
              className="btn btn-danger w-100"
              onClick={decrementClick}
            >
              Decrement
            </button>
          </div>

          <div className="col-sm border border-dark border-3">
            <button
              type="button"
              className="btn btn-warning w-100"
              onClick={resetClick}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
