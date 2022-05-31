import React from "react";
import "./normalize.css";
import "./global.css";
import "./main.css";
import "./media.css";
import balcony from "../img/balcony.jpg";
import port1 from "../img/port1.jpg";
import port2 from "../img/port2.jpg";
import poster from "../img/poster.jpg";
import friends from "../img/friends.mp4";


function playVideo(){
    const play = document.querySelector('.video__play');
    const video = document.querySelector('.video__container video');
        video.play();
        video.setAttribute('controls','controls');
        play.setAttribute('hidden',true);

}

export default () => (
    <main>
        <section className="hero">
            <div className="container">
                <h1 className="hero__title">We&nbsp;produce the&nbsp;best products</h1>
                <p className="hero__text">Mattis quam, lectus et&nbsp;justo amet, tortor, lectus dapibus est.<br/>Habitasse
                    efficitur sodales vel est.</p>
                <button className="btn btn--light btn-reset">Button</button>
            </div>
        </section>
        <section className="about">
            <div className="container grid">
                <div className="about__col">
                    <ul className="about__list list-reset">
                        <li className="about__item">
                            <div className="completed__value">20,000</div>
                            <div className="completed__descr">completed projects</div>
                        </li>
                        <li className="about__item">
                            <div className="completed__value">10,000</div>
                            <div className="completed__descr">completed projects</div>
                        </li>
                        <li className="about__item">
                            <div className="completed__value">347</div>
                            <div className="completed__descr">completed projects</div>
                        </li>
                    </ul>
                </div>
                <div className="about__col">
                    <p className="about__text-big">
                        Amet, mattis dapibus malesuada arcu dapibus nec efficitur et dictum. In sit odio. Tempus leo,
                        dictum.
                    </p>
                    <p className="about__text-small-1">Amet, mattis dapibus malesuada arcu dapibus nec efficitur
                        et&nbsp;dictum. In&nbsp;sit odio. Tempus leo, dictum. Sit mattis mattis lorem cursus velit sit
                        sed et&nbsp;vitae quam, sed nulla dapibus venenatis odio.<br/>
                        Venenatis sapien aenean adipiscing lacinia nec lacinia lacinia et&nbsp;quam, ultricies.
                        Dictum. Ipsum sodales sit id&nbsp;nec sed sodales mattis mollis quis, pellentesque
                        habitasse&nbsp;ex.
                    </p>
                </div>
            </div>
        </section>
        <section className="video">
            <div className="container video__container">
                <video src={friends} poster={poster} muted preload="metadata" playsInline></video>
                <button className="video__play btn-reset" aria-label="Play video" onClick={playVideo}>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50" fill="white"/>
                        <path d="M63 50L44.25 62.9904L44.25 37.0096L63 50Z" fill="#1D1D1F"/>
                    </svg>
                </button>
            </div>
        </section>
        <section className="portfolio">
            <h2 className="visually-hidden">Portfolio</h2>
            <div className="container">
                <ul className="portfolio-list list-reset ">
                    <li className="portfolio-item grid">
                        <div className="portfolio-item__col">
                            <h3 className="portfolio-item__title">Et&nbsp;odio</h3>
                            <p className="portfolio-item__descr">Mauris eget nec nulla dolor&nbsp;ex. Sodales luctus
                                pellentesque cras ornare lorem luctus lectus sed consectetur quam, est. Libero, odi</p>
                            <button className="btn btn--dark btn-reset">Button</button>
                        </div>
                        <div className="portfolio-item__col">
                            <img src={port1} alt="Portfolio photo" className="portfolio-item__image"/>
                        </div>
                    </li>
                    <li className="portfolio-item portfolio-item--reverse grid">
                        <div className="portfolio-item__col">
                            <h3 className="portfolio-item__title">Integer dapibus dictum</h3>
                            <p className="portfolio-item__descr">it&nbsp;pulvinar tempus amet dolor dui vulputate
                                tortor, luctus lorem in&nbsp;nunc eleifend ipsum justo et&nbsp;venenatis dictumst.</p>
                            <button className="btn btn--dark btn-reset">Button</button>
                        </div>
                        <div className="portfolio-item__col">
                            <img src={port2} alt="Portfolio photo 2" className="portfolio-item__image"/>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section className="quote">
            <div className="container quote__container">
                <h2 className="quote__title">Quoute</h2>
                <blockquote className="quote__content">
                    Accumsan vulputate efficitur in&nbsp;amet, vestibulum ornare morbi accumsan leo, est. Consectetur
                    ultricies. Sapien est. Dictumst. Sapien habitasse interdum in&nbsp;amet,
                    lectus molestie vel&nbsp;ut. Malesuada efficitur mattis id&nbsp;mattis aenean interdum lectus quam,
                    dapibus nec augue vulputate leo, ornare elit.
                </blockquote>
                <cite className="quote__author">Alex Lee / <span>Co-founder & SEO</span></cite>
            </div>
        </section>
        <section className="services">

            <img src={balcony} alt="" className="services__image" aria-hidden="true"/>
            <div className="container">
                <ul className="services__list list-reset">
                    <li className="services__item grid">
                        <div className="services-item__col">
                            <h3 className="services-item__title">Branding</h3>
                        </div>
                        <div className="services-item__col">
                            <p className="services__descr">Quam, tortor, interdum consectetur eleifend integer et.
                                Accumsan vulputate efficitur in amet, vestibulum ornare morbi accumsan leo, est.
                                Consectetur ultricies.</p>
                        </div>
                    </li>
                    <li className="services__item grid">
                        <div className="services-item__col">
                            <h3 className="services-item__title">Web-apps</h3>
                        </div>
                        <div className="services-item__col">
                            <p className="services__descr">Malesuada efficitur mattis id mattis aenean interdum
                                lectus quam, dapibus nec augue vulputate leo, ornare elit. Pulvinar sed quam, arcu
                                pulvinar nisi ipsum quis, sodales molestie ex.</p>
                        </div>
                    </li>
                    <li className="services__item grid">
                        <div className="services-item__col">
                            <h3 className="services-item__title">Design</h3>
                        </div>
                        <div className="services-item__col">
                            <p className="services__descr">Cras amet, sed sapien orci, leo, sit ornare risus tortor,
                                ex. Mauris non orci, sed elit. Cursus ex. Aenean ipsum dolor augue tempus et
                                molestie ipsum adipiscing leo, sit interdum venenatis odio.</p>
                        </div>
                    </li>
                    <li className="services__item grid">
                        <div className="services-item__col">
                            <h3 className="services-item__title">Strategy</h3>
                        </div>
                        <div className="services-item__col">
                            <p className="services__descr">Quam, tortor, interdum consectetur eleifend integer et.
                                Accumsan vulputate efficitur in amet, vestibulum ornare morbi accumsan leo, est.
                                Consectetur ultricies.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>

)



