import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import usersService from "../services/users";
import Map from "../components/Map";
import CartDetails from "../components/CartDetails";
import styles from "../styles/page/singleContact.module.css";
import { useParams } from "react-router";
import { useState } from "react";
useState;

const SingleContact = ({ cart, setCart }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const { id } = useParams();
  const { data, isLoading, isError } = usersService.getSingleUser(id);
  const fullName = data && data.name.firstname + " " + data.name.lastname;
  const address = data && data.address;

  if (isLoading)
    return (
      <div className={styles.loadingScreen}>
        <Loading />
      </div>
    );
  return (
    <div className={styles.singleContact__page}>
      <header>
        <Navbar cart={cart} setToggleCart={setToggleCart} />
      </header>
      {data && (
        <main>
          <div className={styles.user__container}>
            <div className={styles.user__info__container}>
              <img
                className={styles.user__img}
                src={`https://api.dicebear.com/9.x/personas/svg?seed=${data.name.firstname}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
                alt=""
              />
              <div className={styles.card__info}>
                <p className={styles.card__info__fullName}>{fullName}</p>
                <p>
                  <span className={styles.card__info_bold}>Email: </span>
                  {data.email}
                </p>
                <p>
                  <span className={styles.card__info_bold}>Phone: </span>
                  {data.phone}
                </p>
                <p>
                  <span className={styles.card__info_bold}>City: </span>
                  {address.city}
                </p>
                <p>
                  <span className={styles.card__info_bold}>Number: </span>
                  {address.number}
                </p>
                <p>
                  <span className={styles.card__info_bold}>Street: </span>
                  {address.street}
                </p>
                <p>
                  <span className={styles.card__info_bold}>Zipcode: </span>
                  {address.zipcode}
                </p>
              </div>
            </div>
            <Map
              lat={address.geolocation.lat}
              long={address.geolocation.long}
              street={address.street}
            />
          </div>
        </main>
      )}
      <CartDetails
        cart={cart}
        setCart={setCart}
        toggleCart={toggleCart}
        setToggleCart={setToggleCart}
      />
      <Footer />
    </div>
  );
};
export default SingleContact;
