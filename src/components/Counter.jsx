import styles from "../styles/components/counter.module.css";
const Counter = ({ amount, setAmount }) => {
  const handleDecrement = () => {
    const decrement = Number(amount);
    if (decrement > 1) {
      setAmount(decrement - 1);
    }
  };
  const handleIncrement = () => {
    const increment = Number(amount);
    setAmount(increment + 1);
  };
  return (
    <form id={styles.counterForm} onSubmit={(e) => e.preventDefault()}>
      <button className={styles.decrementBtn} onClick={handleDecrement}>
        -
      </button>
      <input
        className={styles.amountInput}
        type="number"
        name="amount"
        id="product-amount"
        min={1}
        max={200}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className={styles.incrementBtn} onClick={handleIncrement}>
        +
      </button>
    </form>
  );
};
export default Counter;
