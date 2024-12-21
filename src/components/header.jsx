import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.changeName = this.changeName.bind(this)
  }
  changeName() {
    this.setState({ name: "ilymar" })
  }
  render() {
    return (
    <>
    <header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="../../public/img/logo.png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><Link className='active' to='/'>Home</Link></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a >blog <i className="ti-angle-down"></i></a>
                                            <ul className="submenu">
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="single-blog.html">single-blog</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">pages <i className="ti-angle-down"></i></a>
                                            <ul className="submenu">
                                                 <li><a href="portfolio.html">Portfolio</a></li>
                                                 <li><a href="elements.html">elements</a></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                            <div className="Appointment">
                                <div className="book_btn d-none d-lg-block">
                                    <Link to="/contact">Contact</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>

    <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1">
            <div className="shap_pattern d-none d-lg-block">
                <img src="img/about/grid.png" alt=""/>
            </div>
            <div className="social_links">
                <ul>
                    <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                    <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                    <li><a href="#"> <i className="fa fa-instagram"></i> </a></li>
                </ul>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12">
                        <div className="slider_text text-center">
                            <h3>
                                Hello This is Milan
                            </h3>
                            <span>Creative Designer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    </> 
    )
  }
}

