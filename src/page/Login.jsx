import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import loginImg from "../assets/images/login-page.jpg";
import Btn from "../components/Btn";
import styles from "../styles/page/login.module.css";
import { useState } from "react";

const Login = ({ cart, setCart }) => {
  const [toggleCart, setToggleCart] = useState(false);

  return (
    <div className={styles.loginPage}>
      <header>
        <Navbar cart={cart} setToggleCart={setToggleCart} />
      </header>
      <main className={styles.loginSection}>
        <img
          className={styles.loginImage}
          src={loginImg}
          alt="Shop entry point"
        />
        <div className={styles.loginFormSection}>
          <h1>Welcome Back!</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            id={styles.loginForm}
          >
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
              />
              <span className={styles.forgetPassword}>Forget password?</span>
            </div>
            <Btn text="Login" />
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Login;
