import ShopOwnerCard from "./ShopOwnerCard";
import styles from "../styles/components/shopOwnerCards.module.css";

const ShopOwnerCards = ({ cardsData }) => {
  return (
    <div className={styles.cards__container}>
      {cardsData &&
        cardsData.map((cardData) => (
          <ShopOwnerCard key={cardData.id} userData={cardData} />
        ))}
    </div>
  );
};
export default ShopOwnerCards;
