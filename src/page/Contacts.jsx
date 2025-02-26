import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopOwnerCards from "../components/ShopOwnerCards";
import userService from "../services/users";
import Loading from "../components/Loading";
import styles from "../styles/page/contacts.module.css";
const Contacts = () => {
  return (
    <div className={styles.contacts__page}>
      <header>
        <Navbar />
      </header>
      <Footer />
    </div>
  );
};
export default Contacts;
