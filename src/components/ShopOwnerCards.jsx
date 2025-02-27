import ShopOwnerCard from "./ShopOwnerCard";
import { Link } from "react-router";
import styles from "../styles/components/shopOwnerCards.module.css";

const ShopOwnerCards = ({ cardsData }) => {
  return (
    <div className={styles.cards__container}>
      {cardsData &&
        cardsData.map((cardData) => (
          <Link key={cardData.id} to={`${cardData.id}`}>
            <ShopOwnerCard userData={cardData} />
          </Link>
        ))}
    </div>
  );
};
export default ShopOwnerCards;
