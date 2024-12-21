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
                        <h3>Build brands campaigns  <br/>
                                & digital projects</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-md-4">
                    <div className="single_service text-center">
                        <div className="icon">
                            <img src="img/svg_icon/1.svg" alt=""/>
                        </div>
                        <h3>Graphic design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_service text-center">
                        <div className="icon">
                            <img src="img/svg_icon/2.svg" alt=""/>
                        </div>
                        <h3>Web design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4">
                    <div className="single_service text-center">
                        <div className="icon">
                            <img src="img/svg_icon/3.svg" alt=""/>
                        </div>
                        <h3>Mobile app</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}
