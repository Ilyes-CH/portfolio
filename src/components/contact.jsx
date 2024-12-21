import React, { Component } from 'react'
import { withGoogleReCaptcha } from "react-google-recaptcha-v3";

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: true,
      isOk: null
    }
    this.handleSumbit = this.handleSumbit.bind(this)

  }
  async sendEmail(emailObj) {
    try {

      const res = await fetch('http://127.0.0.1:5000/api/email_box', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailObj)
      })
      if (!res.ok) {
        return { isOk: false, body: res.json() }
      }
      return { isOk: true, body: res.json() }

    } catch (e) {
      return { isOk: false, body: e }
    }
  }
  async handleRecaptcha() {
    try {
      const recaptchaToken = await this.props.executeRecaptcha("submit_form");
      alert("good")
      console.log("Recaptcha token:", recaptchaToken);
      return recaptchaToken;
    } catch (error) {
      alert('bad')
      console.error("Error executing ReCaptcha:", error);
    }
  }
  //simple validation and input handling
  async handleSumbit(e) {
    e.preventDefault()
    const recaptchaToken = await this.handleRecaptcha();
    let formData = new FormData(e.target)
    formData.append("g-recaptcha-response", recaptchaToken);

    console.log(Object.fromEntries(formData))
    if (Object.fromEntries(formData).message.length < 3) {

      alert('Message Must be at least 3 chars')
      console.log(this.state.isDisabled)
      return
    }
    const { isOk, body } = await this.sendEmail(Object.fromEntries(formData))
    if (isOk) {
      this.setState({ isOk: true })

    } else {
      this.setState({ isOk: false })

    }
    this.setState({ isDisabled: false })
  }

  render() {
    return (
      <div>
        <section className="contact-section section_padding">
          <div className="container">


            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
              </div>
              <div className="col-lg-8">
                <form className="form-contact contact_form" id="contactForm" onSubmit={this.handleSumbit} >

                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">

                        <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder='Enter Message'></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control" name="name" id="name" type="text" placeholder='Enter your name' />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control" name="from" id="email" type="email" placeholder='Enter email address' />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input className="form-control" name="subject" id="subject" type="text" placeholder='Enter Subject' />
                      </div>
                    </div>
                  </div>

                
                  <div className="form-group mt-3">
                    <button disabled={this.isDisabled} type="submit" className="button button-contactForm btn_4 boxed-btn">Send Message</button>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-home"></i></span>
                  <div className="media-body">
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                  <div className="media-body">
                    <h3>00 (440) 9865 562</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-email"></i></span>
                  <div className="media-body">
                    <h3>support@colorlib.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
} 

export default withGoogleReCaptcha(Contact);
