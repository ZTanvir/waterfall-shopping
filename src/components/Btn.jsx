import styles from "../styles/components/btn.module.css";
const Btn = ({ text }) => {
  return <button className={styles.customBtn}>{text}</button>;
};
export default Btn;
