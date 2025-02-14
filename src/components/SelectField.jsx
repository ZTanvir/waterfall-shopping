const SelectField = ({ fieldValue, setFieldValue, children }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <select
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
