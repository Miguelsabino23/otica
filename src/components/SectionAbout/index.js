import React from "react";
import '../SectionAbout/style.css';

function SectionAbout() {
    return (
        <section className="secao-sobre" id="sobre">
            <div className="limitar-secao">
                <h2>Quem somos nós?</h2>
                <p>Fundado em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className="box">
                    
                    <img className="box-img" src="../assets/loja.png" alt=""></img>

                    <div className="box-card">
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais no Brasil e na América</p>
                    </div>

                    <div className="box-card">
                        <h3>Atendimento Flexível</h3>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>
                    
                    <img className="box-img" src="../assets/atendimento.png" alt=""></img>
                </div>
            </div>
        </section>
    );
}

export default SectionAbout;