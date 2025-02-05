import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Btn from "../components/Btn";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router";
const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <h1 className="">
            The most <span>beautiful</span> and <span>high-quality</span>
            products in the whole world.
          </h1>
          <p>
            Shop the latest trends and must-have products from the comfort of
            your home. Fast shipping and amazing customer service guaranteed.
          </p>

          <Link to="/shop">
            <Btn text="Explore Now" />
          </Link>
        </section>
        <ProductCard />
      </main>
      <Footer />
    </>
  );
};
export default Home;
