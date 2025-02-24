import { useParams } from "react-router";
import { useState } from "react";
import styles from "../styles/page/singleProduct.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Counter from "../components/Counter";
import Btn from "../components/Btn";
const SingleProduct = ({ cardData }) => {
  const { id } = useParams();
  const { data, isLoading, isError } = cardData;
  const [amount, setAmount] = useState(1);

  const product = data && data.filter((item) => item.id == id)[0];

  const handleBtn = () => {
    console.log("Btn clicked", amount, product);
  };

  if (isLoading)
    return (
      <div className={styles.loader__container}>
        <Loading />
      </div>
    );
  return (
    <div className={styles.singleProductPage}>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={styles.singleProduct__wrapper}>
          <img
            className={styles.singleProduct__img}
            src={product.image}
            alt=""
          />
          <div className={styles.singleProduct__details}>
            <h1 className={styles.singleProduct__title}>
              {product && product.title}
            </h1>
            <p className={styles.singleProduct__descriptions}>
              {product && product.description}
            </p>
            <p className={styles.singleProduct__price}>
              <span className={styles.singleProduct__price__title}>
                Price :
              </span>
              {product && `$${product.price}`}
            </p>
            <div className={styles.singleProduct__action}>
              <Counter amount={amount} setAmount={setAmount} />
              <Btn text="ADD TO CART" handleBtn={handleBtn} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default SingleProduct;
