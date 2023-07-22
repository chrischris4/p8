import '../styles/PageMin.css';
import kasa from '../assets/kasa-min.webp';
import kasa2 from '../assets/kasa2-min.webp';
import { useEffect } from 'react';

function Kasa() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <div id="topPageLink"></div>
            <div className="pageProjectTitle">
                <h1>Kasa - Agence Immobilière </h1>
            </div>
            <div className="pageProjectButton">
                <button className="pageButton">
                    <a
                        href="https://github.com/chrischris4/Kasa_site_agence_immobiliere"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </button>
            </div>
            <div className="pageInfo">
                <img className="pageImg" src={kasa} alt="kasa" loading="lazy" />
                <div className="imgInfo">
                    Sur ce projet j'ai du mettre en place une application React,
                    je me suis occuper de toute la partie Frontend. J'ai fais en
                    sorte de génerer des cards pour chaque logement, contenant
                    chacune toute les infos provenant du fichier .json.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img
                    className="pageImg"
                    src={kasa2}
                    alt="kasa"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Ensuite j'ai crée une page logement qui s'affiche au clique
                    sur une card, qui contient toute les infos présente sur
                    celle-ci.
                </div>
            </div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
        </div>
    );
}

export default Kasa;
