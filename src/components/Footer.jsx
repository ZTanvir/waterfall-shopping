import githubImg from "../assets/images/github-mark.svg";
import styles from "../styles/components/footer.module.css";
const Footer = ({}) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer__wrapper}>
      <p>
        <span>Copyright © {currentYear} zopel</span>
        <a href="https://github.com/ZTanvir">
          <img
            src={githubImg}
            alt="github cat logo"
            className={styles.footer__wrapper__img}
          />
        </a>
      </p>
    </footer>
  );
};
export default Footer;
