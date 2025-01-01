import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
      <div>
          <div className="service_area">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section_title text-center mb-65">
                        <span>Service Provided</span>
                        <h3>Develop Large Scale Projects  <br/>
                                & Software Solutions</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-md-4">
                    <div className="single_service text-center">
                        <div className="icon">
                            <img src="img/svg_icon/1.svg" alt=""/>
                        </div>
                        <h3>Full-Stack Dev</h3>
                        <p>I use a variety of frameworks and libraries that I am familiar with to build powerful projects</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_service text-center">
                        <div className="icon">
                            <img src="img/svg_icon/2.svg" alt=""/>
                        </div>
                        <h3>System Design</h3>
                        <p>I have deep understanding of system designs and architectures to deliver a reliable service</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_service text-center">
                        <div className="icon">
                            <img src="img/svg_icon/3.svg" alt=""/>
                        </div>
                        <h3>Mobile app</h3>
                        <p>My skills are not only in web development but also it translated into mobile app development</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}
