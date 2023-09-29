import type { NextPage } from "next";
import image from "../../../assets/create-pic.png";
import logo from "../../../assets/logo.png";
import Images from "../../../components/Images";
import styles from "./signin.module.scss";
import SignUp from "../../../components/signUp";

const SignIn: NextPage = () => {
  const handleSubmit = () => {
    console.log("test");
  };
  return (
    <div className="container">
      <div className={styles.login}>
        <div className={styles.loginImage}>
          <div className={styles.title}>
            <h1>Data made simple</h1>
            <p>Your data is within reach - Experience</p>
            <p>the power of AI with us</p>
          </div>
          <div className={styles.images_section}>
            <Images src={image} alt="image" width="600px" height="600px" />
          </div>
        </div>
        <div className={styles.loginForm}>
          <div>
            <div className={styles.formHeader}>
              <Images src={logo} alt="logo" width="40px" height="40px" />
              <h2>Amplify</h2>
            </div>
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
