import React from "react";
import Imagem1 from "../../assests/img/pexels-pixabay-267507.png";
import Imagem2 from "../../assests/img/pexels-roman-odintsov-11025024.png";
import Imagem3 from "../../assests/img/pexels-ron-lach-10643469.png";
import Imagem4 from "../../assests/img/sala.png";
import Imagem5 from "../../assests/img/aluna.png";
import Imagem6 from "../../assests/img/escola.png";
import Imagem7 from "../../assests/img/pexels-gustavo-fring-5621934.png";
import './style.css';



function Home() {
    return(
        <main>
        <section className="one">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Avalie sua escola</h1><br></br>
                        <p>
                            Descubra como o uso correto da tecnologia pode melhorar o desempenho coletivo e individual de
                            cada aluno
                        </p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Digite seu email"
                                />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Senha</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    placeholder="Digite sua senha"
                                 />
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section className="two">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={Imagem1} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={Imagem2} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src={Imagem3} alt="" />
                    </div>
                    <h2>Um pouco sobre nós</h2>
                    <p>
                        Somos uma ONG especializada em mensurar como as tecnologias disponíveis no mercado, estão sendo
                        usadas de forma a reduzir a desigualdade aos recursos escolares.
                    </p>
                </div>
            </div>
        </section>
        <section className="three">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 ">
                        <img src={Imagem4} alt="" 
                            className="bd-placeholder-img rounded-circle border border-dark p-3" 
                        />
                        <h2>DOCENTE</h2>
                        <p>
                            Faça sua avaliação e receba um feedback personalizado sobre melhores práticas do uso de
                            tecnologia.
                        </p>
                    </div>
                    <div className="col-md-4 ">
                        <img src={Imagem5} alt=""
                            className="bd-placeholder-img rounded-circle border border-dark p-3" 
                        />
                        <h2>DIRETOR(A)ESCOLAR</h2>
                        <p>
                            Faça sua avaliação e receba um feedback personalizado sobre o nível de tecnologia adotado
                            pela sua escola.
                        </p>
                    </div>
                    <div className="col-md-4 ">
                        <img src={Imagem6} alt=""
                            className="bd-placeholder-img rounded-circle border border-dark p-3" 
                        />
                        <h2>GESTOR(A) DA SECRETARIA</h2>
                        <p>
                            Faça sua avaliação e receba um feedback personalizado sobre como você pode auxiliar no uso de
                            tecnologia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="four">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Imagem7} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>Casos de sucesso!</h2>
                        <p>
                            Através de nossas metodologias mais de 70% das escolas que aderiram ao
                            <strong>NivelaTech</strong> aumentaram sua nota no Ideb.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
export default Home;