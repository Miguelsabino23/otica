import react from 'react';
import '../Header/style.css'

function Header() {
    return (
        <header className='topo-nav'>
            <div className='limitar-secao topo'>
                <div className='imagem'>
                    <img src="../assets/logo.png" alt='logo'></img>
                </div>
                <nav>
                    <a href='#produtos'>PRODUTOS</a>
                    <a href='#sobre'>SOBRE</a>
                    <a href='#contato'>CONTATO</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;