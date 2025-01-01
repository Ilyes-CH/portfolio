import React, { Component } from 'react'
import Services from './services'
import Projects from './projects'
import { Link } from 'react-router-dom'

export default class Home extends Component {

    render() {
        return (
            <>
                <Services />
                <Projects />
                <div className="about_me">
                    <div className="about_large_title d-none d-lg-block">
                        About
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-md-6">
                                <div className="about_e_details">
                                    <h3>About me</h3>
                                    <p>I am Ilyes Chaabane, a 23-year old Software Developer, with 5 years experience. My journey started me teaching myself the foundation and basic knowledge of computer science
                                        and basic programming concepts and then I joined a 4-month full-stack javascript bootcamp where my skills were drastically sharpened.
                                        I am now comfortable using, Python, Go, Node Js for back-end development and Html, Css, and Javascript/Typescript for front-end development.
                                        As for the frameworks I am familliar with React Js, React Native, Angular Js, Nest Js, Express Js, Flask and Gin.
                                        As for Data bases I am familiar with MongoDb and MySql. Finally, for Devops, I am good with Docker, GitHub Actions and Traefic,
                                        I am still learning about Devops to enhance my skills in it.
                                    </p>
                                    <div className="download_cv">
                                        <a className="boxed-btn3" href="http://localhost:5000/api/resume" download>Download CV</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="about_img">
                                    <div className="color_pattern d-none d-lg-block">
                                        <img src="img/about/color_grid.png" alt="/" />
                                    </div>
                                    <div className="my_Pic">
                                        <img src="img/about/ilyes.jpeg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="discuss_projects">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="project_text text-center">
                                    <h3>Let’s discuss for a project</h3>
                                    <p>It would be a huge pleasure for me to colaborate on interesting projects</p>
                                    <Link className="boxed-btn3" to='/contact'>Start Talking</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
