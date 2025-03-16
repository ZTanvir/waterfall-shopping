import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = ({ cart }) => {
  return (
    <div>
      <header>
        <Navbar cart={cart} />
      </header>
      <main></main>
      <Footer />
    </div>
  );
};
export default Checkout;
