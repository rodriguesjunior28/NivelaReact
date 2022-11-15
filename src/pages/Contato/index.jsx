import React from "react";

import './style.css';

function Contato() {
    return (
        <main>
            <section class="OneC">
                <div class="container">
                    <div class="row text-center mt-5">
                        <div class="col">
                            <h1>CONTATO</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="TwoC">
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-md-6 mb-5">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">EMAIL</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Digite seu email"
                                    />
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputText" class="form-label">ASSUNTO</label>
                                    <input type="text" class="form-control" id="exampleInputText"
                                        placeholder="Digite seu assunto"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputTextarea1" class="form-label">MENSAGEM</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Digite sua mensagem"></textarea>
                                </div>
                                <button id="estilo" type="submit" class="btn btn-primary">ENVIAR</button>
                            </form>
                            <div class="col-md-6">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="ThreeC">
            </section>
        </main>
    )
}
export default Contato;