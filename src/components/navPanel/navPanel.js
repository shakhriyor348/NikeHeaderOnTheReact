import img from '../../images/logo.png';
import './navPanel.css';
function NavPanel() {
    return (
        <nav className="header__nav">
            <a href="" className="header__nav-logo">
                <img src={img} alt="" />
            </a>
            <ul className="header__nav-list">
                <li><a href="" className="header__nav-link">Кроссовки</a></li>
                <li><a href="" className="header__nav-link">Кеды</a></li>
                <li><a href="" className="header__nav-link">Футболки</a></li>
                <li><a href="" className="header__nav-link">Шорты</a></li>
                <li><a href="" className="header__nav-link">Майки</a></li>
                <li><a href="" className="header__nav-link">Олимпийки</a></li>
                <li><a href="" className="header__nav-link">Толстовки</a></li>
            </ul>
        </nav>
    )
}


export default NavPanel;