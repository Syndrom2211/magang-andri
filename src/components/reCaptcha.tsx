import { memo } from "react";
import { GoogleReCaptchaProvider, GoogleReCaptchaCheckbox } from '@google-recaptcha/react';

const ReCaptcha = memo(() => {
  return (
    <div className="captcha-container">
      <GoogleReCaptchaProvider
        type="v2-checkbox"
        siteKey="6LfRuL8qAAAAAKyMIXTGO2h70-yKLBBd7C50pA1g"
        language="id"
      >
        <GoogleReCaptchaCheckbox
          onChange={(token) => {
            console.log(token);
          }}
        />
      </GoogleReCaptchaProvider>
    </div>
  );
});

export default ReCaptcha;
