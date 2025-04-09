import { useNavigate } from "react-router";
import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartProducts from "../components/CartProducts";
import Btn from "../components/Btn";
import emailjs from "@emailjs/browser";
import checkedIcon from "../assets/images/checked.png";
import crossImg from "../assets/images/cross.png";
import styles from "../styles/page/checkout.module.css";

const Checkout = ({ cart, setCart }) => {
  const [isOrderConfirm, setIsOrderConfirm] = useState(false);

  const modalRef = useRef(null);
  let navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);

    // Product information that has ordered by the user will send to email
    const orderList = cart.map((item) => {
      let itemDetails = {};
      itemDetails.image_url = item.image;
      itemDetails.name = item.title;
      itemDetails.units = item.amount;
      itemDetails.price = item.price;
      return itemDetails;
    });

    // Total price of the ordered products
    const totalPrice = cart.reduce(
      (acu, cur) => acu + cur.price * cur.amount,
      0
    );

    // Form data that will send to email for shopping address table
    const userinfo = {
      username: formValues.fname + " " + formValues.lname,
      order_email: formValues.email,
      address: formValues.address,
      apartment: formValues.apartment,
      city: formValues.city,
      phone: formValues.phone,
    };
    // generate number between 1 to 10000
    const orderId = Math.floor(Math.random() * 10000) + 1;

    const templateParams = {
      order_id: orderId,
      orders: orderList,
      cost: {
        total: totalPrice.toFixed(2),
      },
      userinfo,
      email: "zahirulopel@gmail.com", // order details will send here
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    emailjs.init(publicKey);

    emailjs
      .send(serviceId, "template_product_order", templateParams)
      .then((result) => {
        setIsOrderConfirm(true);
        modalRef.current.showModal();
        setTimeout(() => {
          // Rest cart
          setCart([]);
          // reset the form
          e.target.reset();
          // send back to shop page
          navigate("/shop");
        }, 4000);
      })
      .catch((error) => {
        console.error("Failed...", error);
        setIsOrderConfirm(false);
        modalRef.current.showModal();
        setTimeout(() => {
          // close the modal
          modalRef.current.close();
        }, 4000);
      });
  };
  const handleNavbarCartBtn = () => {};

  return (
    <div id={styles.checkoutPage}>
      <header>
        <Navbar cart={cart} setToggleCart={handleNavbarCartBtn} />
      </header>
      <main>
        <div className={styles.formSectionContainer}>
          <h1 className={styles.formSection__title}>Contact information</h1>
          <form onSubmit={submitForm} id={styles.userInfoForm}>
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
            <Btn text="Submit" />
          </form>
        </div>
        <div>
          <CartProducts cart={cart} />
        </div>
      </main>
      <dialog
        ref={modalRef}
        className={styles.checkoutConfirmationMsg}
        close="true"
      >
        {isOrderConfirm ? (
          <div>
            <img
              src={checkedIcon}
              alt="White checkmark with green background"
            />
            <h3>We've received your order</h3>
            <p>Thank you for shopping at Waterfall Shop</p>
          </div>
        ) : (
          <div>
            <img src={crossImg} alt="Black cross with red background" />
            <h3>Something went wrong.</h3>
            <p>We couldn't confirm your order. </p>
            <p>Please contract to the shop owner.</p>
          </div>
        )}
      </dialog>
      <Footer />
    </div>
  );
};
export default Checkout;
