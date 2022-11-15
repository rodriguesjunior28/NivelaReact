import React from 'react';
import Imagem1 from "../../assests/img/10172.png";
import './style.css';

function Cadastro() {
    return (
    <main>
    <section class="OneCadastro">
        <div class="container">
            <div class="row text-center mt-5">
                <div class="col">
                    <h1>CADASTRO</h1>
                </div>
            </div>
        </div>
    </section>
    <section class="TwoCadastro">
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-6">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputText" class="form-label">NOME COMPLETO</label>
                            <input type="text" class="form-control" id="exampleInputText" 
                                placeholder="Digite seu nome completo" 
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputText" class="form-label">CPF</label>
                            <input type="number" class="form-control" id="exampleInputText"
                                placeholder="Digite seu cpf" 
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">EMAIL</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Digite seu email"
                            />
                            <div id="emailHelp" class="form-text"></div>
                        </div> 
                        <div class="mb-3">
                            <label for="exampleInputText" class="form-label">SEXO</label>
                            <input type="text" class="form-control" id="exampleInputText"
                                placeholder="Digite seu sexo"
                            />
                        </div>                           
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">SENHA</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                placeholder="Crie uma senha"
                            />
                        </div>
                        <button id="estilo" type="submit" class="btn btn-primary">ENVIAR</button>
                    </form>
                </div>
                <div class="col-md-6">
                   <img src={Imagem1} alt="Imagem" />
                </div>
            </div>
        </div>
    </section>
    <section class="ThreeCadastro">   
    </section>

</main>

    )
}
export default Cadastro;