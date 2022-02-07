
import NavPanel from '../navPanel/navPanel';
import './header.css';
function Header() {
    return(
        <header className='header'>
            <div className="header__menu">
                <div className="container">
                    <NavPanel />
                </div>
            </div>
            <div className="header__content">
                <h1 className="header__content-title">NIKE</h1>
                <p className="header__content-description">Крутые кроссовки от <span>NIKE</span> для вас   </p>
            </div>
        </header>
    )
}

export default Header;