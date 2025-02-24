import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/page/contacts.module.css";
const Contacts = () => {
  return (
    <div className={styles.contacts__page}>
      <header>
        <Navbar />
      </header>
      <main></main>
      <Footer />
    </div>
  );
};
export default Contacts;
