import searchIconImg from "../assets/images/search-icon-white.svg";
import styles from "../styles/components/searchField.module.css";
const SearchField = ({ text, setText, placeHolder }) => {
  return (
    <form
      className={styles.searchField__wrapper}
      onSubmit={(e) => {
        e.preventDefault();
        setText("");
      }}
    >
      <input
        type="text"
        name="search"
        id="search-box"
        placeholder={placeHolder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">
        <img
          className={styles.searchIcon}
          src={searchIconImg}
          alt="magnifying glass used to search item"
        />
      </button>
    </form>
  );
};
export default SearchField;
