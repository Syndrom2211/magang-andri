import { useState } from "react";
import Button from "../components/Button";
import Yukmari from "../assets/Logo YMP2.png";
import Locked from "../assets/locked.svg";
import User from "../assets/user.svg";
import EyeOpen from "../assets/eye.svg";
import EyeClosed from "../assets/eye-crossed.svg";
import { useNavigate } from 'react-router-dom';
import ReCaptcha from "./reCaptcha";
import "./styles/App.css";


function Form() {

  const navigate = useNavigate();


  const handleClick = (path: string) => {
    navigate(path);
  }

  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <div className="form-container">
      <div className="title">
        <img src={Yukmari} alt="Yukmari" />
        <p>Silakan Login untuk Melanjutkan</p>
      </div>

      <form>
        <label htmlFor="email">Email</label>
        <div className="input-container">
          <img src={User} alt="User Icon" className="input-icon" />
          <input type="email" placeholder="Masukan Email" id="email" />
        </div>

        <label htmlFor="password">Password</label>
        <div className="input-container">
          <img src={Locked} alt="Lock Icon" className="input-icon" />
          <input
            type={passwordType}
            placeholder="Masukan Password"
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

        <a onClick={() => handleClick('/ForgetPassword')}>Lupa Password?</a>
        
        <ReCaptcha/>

        <Button label="Masuk" />
      </form>
    </div>
  );
}

export default Form;
