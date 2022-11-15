import React from "react";

import './style.css';

function Contato() {
    return (
        <main>
            <section className="OneC">
                <div className="container">
                    <div className="row text-center mt-5">
                        <div className="col">
                            <h1>CONTATO</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="TwoC">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">EMAIL</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Digite seu email"
                                    />
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputText" className="form-label">ASSUNTO</label>
                                    <input type="text" className="form-control" id="exampleInputText"
                                        placeholder="Digite seu assunto"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputTextarea1" className="form-label">MENSAGEM</label>
                                    <textarea 
                                        className="form-control" 
                                        id="exampleFormControlTextarea1" 
                                        rows="3" 
                                        placeholder="Digite sua mensagem">
                                    </textarea>
                                </div>
                                <button id="estilo" type="submit" className="btn btn-primary">ENVIAR</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="ThreeC">
            </section>
        </main>
    )
}
export default Contato;