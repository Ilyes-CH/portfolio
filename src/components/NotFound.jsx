import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './styles.component.css'

export default class NotFound extends Component {
    render() {
        return (
            <div className='body-tag'>
                <h1 className=' font-weight-bold'>404 Not Found</h1>
                <section className="error-container">
                    <span>4</span>
                    <span><span className="screen-reader-text">0</span></span>
                    <span>4</span>
                </section>
                <div className="link-container">
                    <button className='btn btn-info mb-5'>
                        <Link to='/'>Go To Home</Link>
                    </button>
                </div>
            </div>
        )
    }
}
