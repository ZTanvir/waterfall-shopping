import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopOwnerCard from "../components/ShopOwnerCard";
import styles from "../styles/page/contacts.module.css";
const Contacts = () => {
  return (
    <div className={styles.contacts__page}>
      <header>
        <Navbar />
      </header>
      <main>
        <ShopOwnerCard
          userData={{
            address: {
              geolocation: {
                lat: "-37.3159",
                long: "81.1496",
              },
              city: "kilcoole",
              street: "new road",
              number: 7682,
              zipcode: "12926-3874",
            },
            id: 1,
            email: "john@gmail.com",
            username: "johnd",
            password: "m38rmF$",
            name: {
              firstname: "john",
              lastname: "doe",
            },
            phone: "1-570-236-7033",
            __v: 0,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};
export default Contacts;
