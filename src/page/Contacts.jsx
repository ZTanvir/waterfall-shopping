import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopOwnerCards from "../components/ShopOwnerCards";
import userService from "../services/users";
import Loading from "../components/Loading";
import styles from "../styles/page/contacts.module.css";
const Contacts = ({ cart }) => {
  const { data, isLoading, isError } = userService.getAllUsers();

  if (isLoading)
    return (
      <div className={styles.loadingContainer}>
        <Loading />
      </div>
    );
  return (
    <div className={styles.contacts__page}>
      <header>
        <Navbar cartSize={cart.length} />
      </header>
      <main>{data && <ShopOwnerCards cardsData={data} />}</main>
      <Footer />
    </div>
  );
};
export default Contacts;
