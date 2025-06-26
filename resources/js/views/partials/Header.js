import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import '../../../css/custom.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Header = () => {

    return (
        <header className={'position-fixed fixed-top'}>
            <div className={'container'}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img width={400} src={'/site/assets/img/logo.png'}/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse text-end" id="navbarSupportedContent">
                            <ul className="navbar-nav me-0 ms-auto mb-2 mb-lg-0">
                                <li className="nav-item px-3">
                                    <a className="nav-link" href="#gallerySection">Galeri</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" href="#hakkimizda">Hakkımızda</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" href="#form">Bilgi İçin</a>
                                </li>

                                <li className={'align-self-center px-3'}>
                                    <div className={'d-flex'}>
                                        <div className={'px-1 px-md-2'}>
                                            <a href={'https://www.instagram.com/timsorganizasyon/'} target={'_blank'}>
                                                <i className="bi bi-instagram"></i>
                                            </a>
                                        </div>
                                        <div className={'px-1 px-md-2'}>
                                            <a href={'https://www.facebook.com/timsfabrika?locale=tr_TR'}
                                               target={'_blank'}>
                                                <i className="bi bi-facebook"></i>
                                            </a>
                                        </div>
                                        <div className={'px-1 px-md-2'}>
                                            <a href={'https://x.com/timsajans'} target={'_blank'}>
                                                <i className="bi bi-twitter-x"></i>
                                            </a>
                                        </div>
                                        <div className={'px-1 px-md-2'}>
                                            <a href={'mailto:timsorganizasyon@gmail.com'} target={'_blank'}>
                                                <i className="bi bi-envelope-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
