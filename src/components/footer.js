import React from "react";
import {Link} from "gatsby";
import "./normalize.css";
import "./global.css";
import "./footer.css";
import "./media.css";

export default () => (
    <footer className="footer">
        <div className="container grid">
            <div className="footer__col">
                <a className="logo">Company</a>
                <address className="footer__address">
                    Dorivit BV, Monitorweg 1, Almere 1322BJ, Netherlands
                </address>
                <ul className="footer__social social list-reset">
                    <li className="social__item">
                        <a href="#" className="social__link" target="_blank" aria-label="Facebook">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M20 0.000488281C8.95431 0.000488281 0 8.95479 0 20.0005C0 31.0462 8.95431 40.0005 20 40.0005C31.0457 40.0005 40 31.0462 40 20.0005C40 8.95479 31.0457 0.000488281 20 0.000488281ZM22.0846 20.879V31.7601H17.5826V20.8794H15.3333V17.1297H17.5826V14.8785C17.5826 11.8195 18.8526 10.0005 22.461 10.0005H25.4651V13.7506H23.5873C22.1827 13.7506 22.0897 14.2746 22.0897 15.2526L22.0846 17.1293H25.4863L25.0883 20.879H22.0846Z"
                                      fill="white"/>
                            </svg>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#" className="social__link" target="_blank" aria-label="Telegram">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M20 40.0005C31.0457 40.0005 40 31.0462 40 20.0005C40 8.95479 31.0457 0.000488281 20 0.000488281C8.95431 0.000488281 0 8.95479 0 20.0005C0 31.0462 8.95431 40.0005 20 40.0005ZM16.3333 29.1672C16.8198 29.1672 17.0421 28.9507 17.3107 28.6892L17.3333 28.6672L19.7356 26.3313L24.7333 30.0237C25.6531 30.5311 26.3169 30.2684 26.546 29.1697L29.8268 13.7092C30.1627 12.3625 29.3135 11.7517 28.4336 12.1512L9.1686 19.5797C7.85358 20.1072 7.86125 20.8408 8.9289 21.1677L13.8727 22.7108L25.3182 15.4899C25.8585 15.1623 26.3544 15.3384 25.9474 15.6997L16.6738 24.0684L16.6737 24.0683L16.6737 24.0685L16.6733 24.0688L16.6736 24.069L16.3333 29.1672Z"
                                      fill="white"/>
                            </svg>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#" className="social__link" target="_blank" aria-label="Google">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M0 20.0005C0 8.95479 8.95431 0.000488281 20 0.000488281C31.0457 0.000488281 40 8.95479 40 20.0005C40 31.0462 31.0457 40.0005 20 40.0005C8.95431 40.0005 0 31.0462 0 20.0005ZM16.34 19.4291V21.6005H19.9439C19.7987 22.5324 18.8546 24.3329 16.34 24.3329C14.1704 24.3329 12.4003 22.5414 12.4003 20.3338C12.4003 18.1262 14.1704 16.3348 16.34 16.3348C17.5746 16.3348 18.4007 16.8595 18.8727 17.3119L20.5975 15.6562C19.49 14.6248 18.0557 14.0005 16.34 14.0005C12.8269 14.0005 9.98557 16.8324 9.98557 20.3338C9.98557 23.8353 12.8269 26.6672 16.34 26.6672C20.0075 26.6672 22.4403 24.0976 22.4403 20.4786C22.4403 20.0624 22.3949 19.7457 22.3404 19.4291H16.34ZM28.1412 19.4291H29.9567V21.2386H28.1412V23.0481H26.3256V21.2386H24.51V19.4291H26.3256V17.6195H28.1412V19.4291Z"
                                      fill="white"/>
                            </svg>

                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__col">
                <h2 className="footer__title">Id sodales interdum dui mollis non in odio</h2>
                <form action="#" className="footer__form">
                    <input type="email" name="email" id="" className="footer__input" placeholder="E-mail" />
                        <button className="footer__btn btn-reset" aria-label="Send E-mail">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5L15 12L8 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                </form>
            </div>
        </div>
    </footer>
)

