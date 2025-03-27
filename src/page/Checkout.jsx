import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartProducts from "../components/CartProducts";
import Btn from "../components/Btn";
import styles from "../styles/page/checkout.module.css";
import emailjs from "@emailjs/browser";

const Checkout = ({ cart }) => {
  const handleBtn = (e) => {};
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
    const emailFormValues = {
      username: formValues.fname + " " + formValues.lname,
      order_email: formValues.email,
      address: formValues.address,
      apartment: formValues.apartment,
      city: formValues.city,
      phone: formValues.phone,
    };
    const orderId = Math.floor(Math.random());
    console.log(orderId);

    const templateParams = {
      order_id: 14474,
      orders: orderList,
      cost: {
        total: totalPrice.toFixed(2),
      },
      emailFormValues,
      email: "zahirulopel@gmail.com", // order details will send here
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    emailjs.init(publicKey);
    // emailjs
    //   .send(serviceId, "template_product_order", templateParams)
    //   .then((result) => {
    //     console.log("Success", result);
    //   })
    //   .catch((error) => {
    //     console.error("Failed...", error);
    //   });
    // e.target.reset();
  };

  return (
    <div id={styles.checkoutPage}>
      <header>
        <Navbar cart={cart} />
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
            <Btn text="Submit" handleBtn={handleBtn} />
          </form>
        </div>
        <div>
          <CartProducts cart={cart} />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Checkout;
