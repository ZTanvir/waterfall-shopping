import styles from "../styles/components/selectField.module.css";
const SelectField = ({ fieldValue, setFieldValue, children }) => {
  return (
    <form
      className={styles.selectForm}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <select
        className={styles.selectField}
        name="sortby"
        id="filter-product"
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
      >
        {children}
      </select>
    </form>
  );
};
export default SelectField;
