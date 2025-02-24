import styles from "../styles/components/btn.module.css";
const Btn = ({ text, handleBtn }) => {
  return (
    <button onClick={handleBtn} className={styles.customBtn}>
      {text}
    </button>
  );
};
export default Btn;
