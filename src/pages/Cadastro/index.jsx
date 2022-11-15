import React from 'react';
import Imagem1 from "../../assests/img/10172.png";
import './style.css';

function Cadastro() {
    return (
    <main>
    <section className="OneCadastro">
        <div className="container">
            <div className="row text-center mt-5">
                <div className="col">
                    <h1>CADASTRO</h1>
                </div>
            </div>
        </div>
    </section>
    <section className="TwoCadastro">
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputText" className="form-label">NOME COMPLETO</label>
                            <input type="text" className="form-control" id="exampleInputText" 
                                placeholder="Digite seu nome completo" 
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputText" className="form-label">CPF</label>
                            <input type="number" className="form-control" id="exampleInputText"
                                placeholder="Digite seu cpf" 
                            />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">EMAIL</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Digite seu email"
                            />
                            <div id="emailHelp" className="form-text"></div>
                        </div> 
                        <div className="mb-3">
                            <label for="exampleInputText" className="form-label">SEXO</label>
                            <input type="text" className="form-control" id="exampleInputText"
                                placeholder="Digite seu sexo"
                            />
                        </div>                           
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">SENHA</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                placeholder="Crie uma senha"
                            />
                        </div>
                        <button id="estilo" type="submit" className="btn btn-primary">ENVIAR</button>
                    </form>
                </div>
                <div className="col-md-6">
                   <img src={Imagem1} alt="Imagem" />
                </div>
            </div>
        </div>
    </section>
    <section className="ThreeCadastro">   
    </section>

</main>

    )
}
export default Cadastro;