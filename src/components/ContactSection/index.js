import React from "react";
import '../ContactSection/style.css';

function ContactSection() {
    return (
        <section className="secao-contato" id="contato">
            <div className="limitar-secao">
                <h2>Fale Conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="contatos-redes">
                    <div className="contatos">
                        <h3>Contato</h3>
                        <figure>
                            <img src="../assets/local.png" alt="local"></img>
                            <figcaption>Nova Iguaçu, RJ</figcaption>
                        </figure>

                        <figure>
                            <img src="../assets/telefone.png" alt="telefone"></img>
                            <figcaption>(21)9999-9999</figcaption>
                        </figure>

                        <figure>
                            <img src="../assets/email.png" alt="email"></img>
                            <figcaption>contato@oticavida.com</figcaption>
                        </figure>
                    </div>

                    <div className="contatos">
                        <h3>Nossas redes sociais</h3>
                        <figure>
                            <img src="../assets/fb.png" alt="facebook"></img>
                            <figcaption>/OticaVida</figcaption>
                        </figure>

                        <figure>
                            <img src="../assets/ig.png" alt="instagram"></img>
                            <figcaption>@oticavidarj</figcaption>
                        </figure>

                        <figure>
                            <img src="../assets/tt.png" alt="twitter"></img>
                            <figcaption>@oticavidarj</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;