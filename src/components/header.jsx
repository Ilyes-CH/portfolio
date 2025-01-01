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
                                        <div >
                                            <h1 style={{ letterSpacing: '3px' }} className=" text-white font-weight-bold">Ilyes</h1>
                                        </div>
                                        <div className="col-12">
                                            
                                            <div className="mobile_menu ">
                                            <div className="dropdown">
                                                    <button className=" link  border-0 bg-transparent icon_button" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        
                                                <i className="fa-solid fa-bars text-white w-100 " ></i>
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                        <Link className="dropdown-item" to={"/"}>Home</Link>
                                                        <Link className="dropdown-item" to={"/projects"}>Projects</Link>
                                                        <Link className="dropdown-item" to={"/about"}>About</Link>
                                                        <Link className="dropdown-item" to={"/contact"}>Contact</Link>
                                                    </div>
                                                </div>
                                             
                                            </div>

                                        </div>  
                                    </div>
                                    <div className="col-xl-6 col-lg-7">
                                        <div className="main-menu  d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><Link className='active' to={'/'}>Home</Link></li>
                                                    <li><Link to={'/about'}>About</Link></li>
                                                    <li><Link to={'/projects'}>Projects</Link></li>
                                                    <li><Link>blog <i className="ti-angle-down"></i></Link>
                                                        <ul className="submenu">
                                                            <li><Link to={''}>Blogs</Link></li>
                                                            <li><Link to={''}>Latest Blog</Link></li>
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
                                </div>

                            </div>
                        </div>
                    </div>
                </header>

                <div className="slider_area">
                    <div className="single_slider  d-flex align-items-center slider_bg_1">
                        <div className="shap_pattern d-none d-lg-block">
                            <img src="img/about/grid.png" alt="" />
                        </div>
                        <div className="social_links">
                            <ul>
                                <li><Link> <i className="fa fa-facebook"></i> </Link></li>
                                <li><Link> <i className="fa fa-twitter"></i> </Link></li>
                                <li><Link> <i className="fa fa-instagram"></i> </Link></li>
                            </ul>
                        </div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12">
                                    <div className="slider_text text-center">
                                        <h3>
                                            Hello This is Ilyes Chaabane
                                        </h3>
                                        <span>Software Developer</span>
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

