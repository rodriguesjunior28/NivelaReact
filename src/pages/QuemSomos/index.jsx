import React from "react";
import Imagem1 from "../../assests/img/computador.png"
import Imagem2 from "../../assests/img/o-saco-da-escola.png"
import Imagem3 from "../../assests/img/cerebro.png"
import Imagem4 from "../../assests/img/computador-portatil.png"
import Imagem5 from "../../assests/img/pexels-antoni-shkraba-6609460.png"
import Imagem6 from "../../assests/img/pexels-roman-odintsov-11025019.png"
import './style.css';

function QuemSomos() {
    return (
        <main>
            <section class="OneQS">
                <div class="container">
                    <div class="row">
                        <h1>ACESSE CONCEITOS, METODOLOGIAS E FERRAMENTAS PARA PROMOVER A<br></br>TRANSFORMAÇÃO DIGITAL DA EDUCAÇÃO.</h1>
                    </div>
                </div>
            </section>
            <section class="twoQS">
                <div class="container">
                    <div class="row p-5">
                        <h3>CONCEITO</h3>
                        <p>
                            A <strong>Nivela TECH</strong> considera que o uso de tecnologia na educação
                            (para apoiar a aprendizagem dos alunos, o desenvolvimento de competências digitais dos professores e a gestão na escola e na rede)
                            só atinge seu pleno potencial, quando se leva em consideração quatro dimensões que devem se integrar em equilíbrio:
                            <strong> visão, competência/formação, recursos educacionais digitais e infraestrutura</strong>.
                            Na prática isso significa que não adianta investir em infraestrutura e não oferecer formação continuada aos docentes;
                            ou que não é produtivo, estabelecer estratégias ambiciosas para o uso de tecnologia sem fornecer a conectividade e os
                            recursos educacionais digitais adequados.
                        </p>
                    </div>
                </div>
            </section>
            <section class="threeQS">
                <div class="container">
                    <div class="row p-3">
                        <div class="col-md-6">
                            <div id="ColunaVisao" class="card p-5 border-0 text-start h-100">
                                <h4>VISÃO</h4>
                                <p>
                                    Refere-se ao quanto acreditamos que a tecnologia tem o potencial de impactar positivamente as escolas,
                                    promovendo processos de ensino e aprendizagem de qualidade e uma gestão escolar eficaz.
                                    Engloba, ainda, as maneiras em que tal crença se reflete em estratégias e políticas planejadas para
                                    que as escolas atinjam seus objetivos.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div id="ColunaCompetencias" class="card p-5 border-0 text-start h-100 ">
                                <h4>COMPETÊNCIAS FORMAÇÃO</h4>
                                <p>
                                    É a dimensão que indica as habilidades e competências necessárias para o uso potencializado de tecnologia na educação.
                                    Inclui as competências e habilidades de docentes seus conhecimentos sobre tecnologias digitais e as formas em que as
                                    utilizam em suas práticas pedagógicas; a habilidade em orientar o uso de tecnologias pelos estudantes;sua capacidade de
                                    desenvolver novos conteúdos digitais e de diretores(as) e coordenadores(as) utilizarem a tais para melhorar a gestão escolar
                                    e os processos de ensino e aprendizagem por meio de apoio a docentes e estudantes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="fourQS">
                <div class="container">
                    <div class="row p-3">
                        <div class="col-md-6">
                            <div id="ColunaRecursos" class="card p-5 border-0 text-start h-100">
                                <h4>RECURSOS EDUCACIONAIS DIGITAIS</h4>
                                <p>
                                    Refere-se ao acesso e ao uso de programas, aplicativos e conteúdos digitais usados nos processos de ensino e aprendizagem e na gestão escolar,
                                    como materiais de aprendizado de certas disciplinas, jogos, vídeos educacionais, assim como softwares que facilitam a gestão educacional.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div id="ColunaInfraestrutura" class="card p-5 border-0 text-start h-100 ">
                                <h4>INFRAESTRUTURA</h4>
                                <p>
                                    É a dimensão que trata da gestão e disponibilização de dispositivos tecnológicos (computadores, notebooks, tablets, servidores e serviços de armanezagem na nuvem)
                                    adequados, além do acesso e qualidade da conectividade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="fiveQS">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 text-center p-5">
                            <img src={Imagem1} alt="computador" class=" " />
                            <h2 class="mt-3">CIDADANIA DIGITAL</h2>
                            <p>
                                Queremos qualificar os gestores e professores, para que ensinem aos alunos a respeito do uso responsável, crítico, seguro e inclusivo que a tecnologia pode oferecer.
                            </p>
                        </div>
                        <div class="col-md-3 text-center p-5">
                            <img src={Imagem2} alt="computador" class=" " />
                            <h2 class="mt-3">FERRAMENTAS DE MAPEAMENTO</h2>
                            <p>
                                Mapeie as competências digitais dos seus professores e planeje formações adequadas ao perfil e à necessidade da rede de ensino. Identifique ainda as políticas,
                                programas e projetos que já estão em andamento na rede.
                            </p>
                        </div>
                        <div class="col-md-3 text-center p-5 h-100">
                            <img src={Imagem3} alt="computador" class=" " />
                            <h2 class="mt-3">FERRAMENTAS DE DIAGNÓSTICO</h2>
                            <p>
                                Faça o diagnóstico do nível de adoção de tecnologia nas escolas de sua rede. O Nivela Tech - Diagnóstico é uma ferramenta online que irá ajudar nesse processo.
                            </p>
                        </div>
                        <div class="col-md-3 text-center p-5">
                            <img src={Imagem4} alt="computador" class=" " />
                            <h2 class="mt-3">FERRAMENTA DE PLANEJAMENTO</h2>
                            <p>
                                Defina suas prioridades (objetivos específicos) e crie seu plano a partir de evidências e com base em informações concretas. O Nivela Tech - Planos é uma
                                ferramenta que irá apoiar na criação de seu planejamento estratégico.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="sixQS">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <img src={Imagem5} alt="jovens conversando" />
                        </div>
                        <div class="col-md-6">
                            <h2>TEMOS CONCEITOS, METODOLOGIAS E FERRAMENTAS PARA PROMOVER A TRANFORMAÇÃO DIGITAL NA SUA ESCOLA.</h2>
                            <p>
                                Fornecemos suporte do inicio ao fim no processo de implementação.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="sevenQS">
                <div class="row">
                    <div class="col">

                    </div>
                </div>
            </section>
            <section class="eightQS">
                <div class="row">
                    <div class="col-md-6">
                        <h2>TEMOS CONCEITOS, METODOLOGIAS E FERRAMENTAS PARA PROMOVER A TRANFORMAÇÃO DIGITAL NA SUA ESCOLA.</h2>
                        <p>
                            Fornecemos suporte do inicio ao fim no processo de implementação.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <img src={Imagem6} alt="crianças conversando" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default QuemSomos;