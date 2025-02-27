import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import usersService from "../services/users";
import styles from "../styles/page/singleContact.module.css";
import { useParams } from "react-router";
const SingleContact = ({}) => {
  const { id } = useParams();
  const { data, isLoading, isError } = usersService.getSingleUser(id);
  const fullName = data && data.name.firstname + " " + data.name.lastname;
  if (isLoading) return <Loading />;
  return (
    <div>
      <header>
        <Navbar />
      </header>
      {data && (
        <main>
          <div>
            <img
              src={`https://api.dicebear.com/9.x/personas/svg?seed=${data.name.firstname}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
              alt=""
            />
            <div className={styles.card__info}>
              <p className={styles.card__info__fullName}>
                <span className={styles.card__info_bold}>Name: </span>
                {fullName}
              </p>
              <p>
                <span className={styles.card__info_bold}>Email: </span>
                {data.email}
              </p>
              <p>
                <span className={styles.card__info_bold}>Phone: </span>
                {data.phone}
              </p>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
};
export default SingleContact;
