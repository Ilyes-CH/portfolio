import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="footer_top">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-md-6">
                                    <div className="menu_links">
                                        <ul>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Portfolio</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6">
                                    <div className="socail_links">
                                        <ul>
                                            <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                                            <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                                            <li><a href="#"> <i className="fa fa-instagram"></i> </a></li>
                                            <li><a href="#"> <i className="fa fa-google-plus"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right_text">
                        <div className="container">
                            <div className="footer_border"></div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <p className="copy_right text-center">
                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
