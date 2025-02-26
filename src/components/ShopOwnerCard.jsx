import styles from "../styles/components/shopOwnerCard.module.css";
// dicebear.com api
const ShopOwnerCard = ({ userData }) => {
  const fullName = userData.name.firstname + " " + userData.name.lastname;
  return (
    <section className={styles.card}>
      <img
        className={styles.card__img}
        src={`https://api.dicebear.com/9.x/personas/svg?seed=${userData.name.firstname}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
      />
      <div className={styles.card__info}>
        <p>{fullName}</p>
        <p>{userData.email}</p>
        <p>{userData.phone}</p>
      </div>
    </section>
  );
};
export default ShopOwnerCard;
