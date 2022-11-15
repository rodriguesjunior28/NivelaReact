import React from "react";
import Logo from "../../assests/img/logo nivela1.png";
import './style.css';

function Header() {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <xpto>
                <a className="top" href="/" >
                    <img id="logo" src={Logo} alt="logo" /><br></br>
                    <p className="white"> Nívela <span className="yello">Tech</span></p>
                </a>
                </xpto>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a id="white" className="nav-link active" aria-current="page" href='/'>HOME</a>
                        </li>
                        <li className="nav-item">
                            <a id="white" className="nav-link" href='/quemsomos'>QUEM SOMOS</a>
                        </li>
                        <li className="nav-item">
                            <a id="white" className="nav-link" href='/contato'>CONTATO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link active" href='/cadastro'>
                                <button id="estilo" type="submit" className="btn btn-primary">CADASTRO</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;