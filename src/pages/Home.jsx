import Banner from '../components/Banner';
import '../styles/Home.css';
import { useEffect } from 'react';
import AllProject from '../components/AllProject';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container">
            <div id="topPageLink"></div>
            <div id="backHome"></div>
            <Banner />
            <div id="parcoursLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Parcours</h2>
            </div>
            <div className="parcours">
                <div className="adrar">
                    <div className="adrarP">
                        <h3>Formation Adrar</h3>
                        <h4>10/2021 - 06/2022</h4>
                        En suivant cette formation, j'ai pu en savoir plus sur
                        le métier de Developpeur ainsi qu'approfondir mes bases
                        en coding.
                    </div>
                    <a
                        className="parcoursLink"
                        href="https://www.adrar-formation.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="overlayParcours">
                            <h4> Visiter leur site :</h4>
                            <p> adrar-formation.com</p>
                        </div>
                        <img
                            className="adrarImg"
                            src="https://i.ibb.co/Q6PbSS4/adrar-min.webp"
                            alt="adrar"
                            loading="lazy"
                        />
                    </a>
                </div>
                <div className="openClass">
                    <div className="openClassP">
                        <h3>Formation OpenClassrooms</h3>
                        <h4>12/2022 - 08/2023</h4>
                        Durant cette formation je me suis professionaliser et
                        ait apronfondit mes connaissances en SEO, Frontend et
                        Backend.
                    </div>
                    <a
                        className="parcoursLink"
                        href="https://openclassrooms.com/fr/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="overlayParcours">
                            <h4> Visiter leur site :</h4>
                            <p> openclassrooms.com</p>
                        </div>

                        <img
                            className="openClassImg"
                            src="https://i.ibb.co/ZzwdcZF/open-min.webp"
                            alt="openclassrooms"
                            loading="lazy"
                        />
                    </a>
                </div>
                <div className="cv">
                    <a
                        className="buttonCv"
                        href="https://drive.google.com/uc?export=download&id=1t0t0aTNPikjLhMdfdGAI-9ZTnyJmzdtO
                        "
                        download
                    >
                        Télécharger CV
                    </a>
                </div>
            </div>
            <div id="competenceLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Compétences</h2>
            </div>
            <div id="competence">
                <div className="frontend">
                    <img
                        className="frontendImg"
                        src="https://i.ibb.co/DfSx4x0/frontend-min.webp"
                        alt="frontend"
                        loading="lazy"
                    />
                    <div className="competenceRow">
                        <h3>Frontend</h3>
                        <ul>
                            <li>Html/Css</li>
                            <li>React.JS</li>
                        </ul>
                    </div>
                </div>
                <div className="backend">
                    <img
                        className="backendImg"
                        src="https://i.ibb.co/kyyvCVN/backend-min.webp"
                        alt="backend"
                        loading="lazy"
                    />
                    <div className="competenceRow">
                        <h3>Backend</h3>
                        <ul>
                            <li>MongoDB</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </div>
                <div className="outil">
                    <img
                        className="outilImg"
                        src="https://i.ibb.co/CsV5Cdq/outil-min.webp"
                        alt="outils"
                        loading="lazy"
                    />
                    <div className="competenceRow">
                        <h3>Outils</h3>
                        <ul>
                            <li>VsCode</li>
                            <li>Github</li>
                            <li>Postman</li>
                            <li>npm</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="projectLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Projets</h2>
            </div>
            <AllProject />
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
        </div>
    );
}

export default Home;
