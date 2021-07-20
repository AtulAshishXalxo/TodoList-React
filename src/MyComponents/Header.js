import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Header(props) {
    return (
        
        <div className="md-6 mt-md-0 mt-3">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <Link className="navbar-brand mx-5  my-2" to="TodoList-React/"><strong>{props.title}</strong></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="TodoList-React/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="TodoList-React/about">About</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
        </div>
   
    )
}

Header.propTypes= {
    title:PropTypes.string
}

Header.defaultProps = {
    title:"Your Title Here"
}
