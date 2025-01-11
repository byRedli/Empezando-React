import './App.css'
import logo from './assets/img/LogoNegro.png';

export function NavBarSections ({children}){
    return(
        <nav className='navbar'>
            <div className='navbar-containerLogo'>
                <img className='navbar-logo' src={logo} alt="Logo de la pagina" />
            </div>
            <ul className='navbar-list'>
                <li className='navbar-listItem'><a className="navbar-item" href="">Home</a></li>
                <li className='navbar-listItem'><a className="navbar-item" href="">Introduction</a></li>
                <li className='navbar-listItem'><a className="navbar-item" href="">Shop</a></li>
                <li className='navbar-listItem'><a className="navbar-item" href="">Question</a></li>
            </ul>
            <div className='navbar-container-user'>
                <img className='navbar-imgUser' src="https://unavatar.io/twitch/midudev" alt="Imagen de usuario"/>
                <strong className='navbar-user'>{children}</strong>
            </div>
        </nav>
    )
}