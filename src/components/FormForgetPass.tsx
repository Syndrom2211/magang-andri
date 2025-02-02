import { useState } from "react";
import Button from "./Button";
import Locked from "../assets/locked.svg";
import User from "../assets/user.svg";
import EyeOpen from "../assets/eye.svg";
import Yukmari from "../assets/Logo YMP2.png";
import EyeClosed from "../assets/eye-crossed.svg";
import ReCaptcha from "./reCaptcha";
import "./styles/App.css";

function ForgetPassword () {

  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordType(confirmPasswordType === "password" ? "text" : "password");
  };

  return (
    <div className="form-container__forgetpass">
      <div className="title">
        <img src={Yukmari} alt="Yukmari" />
        <p>Lupa Password Anda?</p>
      </div>

      <form>
        <label htmlFor="email">Email</label>
        <div className="input-container__forgetpass">
          <img src={User} alt="User Icon" className="input-icon" />
          <input type="email" placeholder="Masukan email anda" id="email" />
        </div>

        <label htmlFor="password">Password</label>
        <div className="input-container__forgetpass">
          <img src={Locked} alt="Lock Icon" className="input-icon" />
          <input
            type={passwordType}
            placeholder="Masukan password baru anda"
            id="password"
          />
          {/* Ikon mata untuk toggle password */}
          <img
            src={passwordType === "password" ? EyeClosed : EyeOpen}
            alt="Toggle Password Visibility"
            className="toggle-password"
            onClick={togglePasswordVisibility}
          />
        </div>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="input-container__forgetpass">
          <img src={Locked} alt="Lock Icon" className="input-icon" />
          <input
            type={confirmPasswordType}
            placeholder="Konfirmasi password baru anda"
            id="confirmPassword"
          />
          {/* Ikon mata untuk toggle confirm password */}
          <img
            src={confirmPasswordType === "password" ? EyeClosed : EyeOpen}
            alt="Toggle Confirm Password Visibility"
            className="toggle-password"
            onClick={toggleConfirmPasswordVisibility}
          />
        </div>

        <ReCaptcha/>

        <Button label="Kirim" id='submitButton'/>
      </form>
    </div>
  );
}

export default ForgetPassword;
