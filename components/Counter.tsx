import styles from "../styles/Home.module.scss";

export default function Counter() {
  return (
    <div>
      <div>
        <span
          className={`d-flex justify-content-center p-3 ${styles.counterNumber}`}
        >
          10
        </span>
      </div>

      <div class="container m-3 p-3">
        <div class="row">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>
    </div>
  );
}
