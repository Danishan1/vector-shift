import styles from "./submit.module.css";

export const SubmitButton = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>Submit</button>
    </div>
  );
};
