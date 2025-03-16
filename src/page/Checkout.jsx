import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDetails from "../components/CartDetails";
import Btn from "../components/Btn";
import styles from "../styles/page/checkout.module.css";

const Checkout = ({ cart }) => {
  const handleBtn = (e) => {};
  return (
    <div id={styles.checkoutPage}>
      <header>
        <Navbar cart={cart} />
      </header>
      <main>
        <div className={styles.formSectionContainer}>
          <h1 className={styles.formSection__title}>Contact information</h1>
          <form id={styles.userInfoForm}>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
              />
            </div>
            <h2>Shipping address</h2>
            <div className={styles.userNameFields}>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="First name(optional)"
              />
              <input
                type="text"
                name="lname"
                id="lname"
                required
                placeholder="Last name"
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                required
              />
            </div>
            <div className={styles.userLocationsFields}>
              <input
                type="text"
                name="apartment"
                id="apartment"
                placeholder="Apartment"
                required
              />
              <input
                type="number"
                name="city"
                id="city"
                placeholder="City"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone"
                required
              />
            </div>
            <Btn text="Submit" handleBtn={handleBtn} />
          </form>
        </div>
        <div></div>
      </main>
      <Footer />
    </div>
  );
};
export default Checkout;
