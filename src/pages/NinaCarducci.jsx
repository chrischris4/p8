import { useEffect } from 'react';
import '../styles/Page.css';
import ContactForm from '../components/ContactForm';

function NinaCarducci() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="pageProject">
            <div id="topPageLink"></div>
            <div className="pageProjectTitle">
                <h1 className="pageH1">Nina Carducci - Photographe</h1>
            </div>
            <div className="pageProjectButton">
                <button className="pageButton">
                    <a
                        href="https://github.com/chrischris4/Nina_carducci_site_de_photographe"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Code du Projet
                    </a>
                </button>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/TwtD4Fn/nina-min.webp"
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Sur ce projet j'ai géré toute la partie SEO, conversion et
                    compression des images, minification du code pour les
                    performances et optimisation du html pour le réferencement.
                </div>
            </div>
            <div className="pageInfoReverse">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/qsNbWqj/nina2-min.webp"
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <div className="imgInfo">
                    J'ai ajouté des richSnippet nécessaire pour le réferencement
                    sur google, ainsi que des meta og pour les résaux sociaux.
                </div>
            </div>
            <div className="pageInfo">
                <img
                    className="pageImg"
                    src="https://i.ibb.co/dMHMXYn/nina3-min.webp"
                    alt="Nina-Carducci"
                    loading="lazy"
                />
                <div className="imgInfo">
                    Afin d'atteindre le meilleurs score possible, j'ai utiliser
                    des outils tel que
                    <a
                        className="lienInfo"
                        href="https://pagespeed.web.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Pagespeed
                    </a>
                    et l'extension Wave afin d'identifier au mieux les problèmes
                    d'optimisation.
                </div>
            </div>
            <div id="contactLien"></div>
            <div className="sectionTitle">
                <div className="styleTitle"></div>
                <h2>Me contacter</h2>
            </div>
            <ContactForm />
        </div>
    );
}

export default NinaCarducci;
