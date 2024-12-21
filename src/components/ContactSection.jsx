import React, { Component } from 'react';
import { GoogleReCaptchaProvider,GoogleReCaptchaConsumer } from "react-google-recaptcha-v3";
import Contact from './contact';

class ContactSection extends Component {
  render() {
    return (
      <GoogleReCaptchaProvider reCaptchaKey="6LdGwqEqAAAAAPsDAQ9uix1Pbe9NTuOXFxd9cFN6">
      <GoogleReCaptchaConsumer>
        {({ executeRecaptcha }) => (
          <Contact executeRecaptcha={executeRecaptcha} />
        )}
      </GoogleReCaptchaConsumer>
    </GoogleReCaptchaProvider>
    );
  }
}

export default ContactSection;
