import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-wrap">
                <div className="header-left-wrap">

                <ul>
                    <li>
                <Link className="header-nav-item" to='/'
                style={{ textDecoration: "none" }}>
                    Home
                </Link>
                </li>
                    <li>
                        <Link className="header-nav-item" to="/MovieDetail"
                        style={{ textDecoration: "none" }}>
                            Story
                        </Link>
                    </li>
                    <li>
                        <Link className="header-nav-item" to="/About"
                        style={{ textDecoration: "none" }}>
                           About
                        </Link>
                    </li>
                </ul>
                <p>API : https://api.themoviedb.org</p>
                </div>
            </div>
        </div>
    )
}