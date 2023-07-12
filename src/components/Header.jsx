import '../styles/Header.css';
import profil from '../assets/moi.png';
import { Link } from 'react-router-dom';
import linkedin from '../assets/linkedin.png';

function Header() {
    return (
        <div className="header">
            <div className="profil">
                <img id="profilPic" src={profil} alt="" />
                <p>JOST Christopher</p>
            </div>
            <nav>
                <img className="linkedin" src={linkedin} alt="" />
                <Link className="link" to={`/`}>
                    Accueil
                </Link>
                <a href="#competence" className="link">
                    Compétences
                </a>
                <a href="#project" className="link">
                    Mes projets
                </a>
                <a href="#contactForm" className="link">
                    Contact
                </a>
            </nav>
        </div>
    );
}

export default Header;
