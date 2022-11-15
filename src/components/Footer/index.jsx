import React from "react";
import './style.css';

function Footer() {
    return(
        <footer>
        <div className="container">
            <div className="row">
                <h1>&copy; <span id="ano"></span> Todos os direitos reservados</h1>
            </div>
        </div>
    </footer>
    )
}

export default Footer;