import React from "react";
import {Link} from "gatsby";
import "./normalize.css";
import "./global.css";
import "./header.css";
import "./media.css";


const ListLink = props => (
    <li className="nav__item">
        <Link className="nav__link" to={props.to}>{props.children}</Link>
    </li>
)

export default ({children}) => (

            <header className="header">
                <div className="container header__container">
                    <a className="logo">Company</a>
                    <div className="header__right">
                        <button className="header__search btn-reset header__btn" aria-label="Search">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="white" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.0183 18.4851L21.5423 22" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <nav className="header__nav nav">
                            <ul className="nav__list list-reset">
                                <ListLink to="/">Portfolio</ListLink>
                                <ListLink to="/">Team</ListLink>
                                <ListLink to="/">About</ListLink>
                                <ListLink to="/">Blog</ListLink>
                                <ListLink to="/">Contact</ListLink>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

)
