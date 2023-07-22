import kasa from '../assets/kasa.webp';
import MVG from '../assets/mvg.webp';
import SophieBluel from '../assets/sophiebluel.webp';
import nina from '../assets/nina.webp';
import booki from '../assets/Booki.webp';
import '../styles/AllProjectMin.css';
import { useEffect, useState } from 'react';
import Project from './Project';

function AllProject() {
    const [activeFilter, setActiveFilter] = useState('tout');
    const [showProjects, setShowProjects] = useState(true);

    useEffect(() => {
        const filterButtons = document.querySelectorAll('.buttonFilter');
        const imageItems = document.querySelectorAll('.projectContent');

        filterButtons.forEach((filterButton) => {
            filterButton.addEventListener('click', function () {
                const filterValue = this.getAttribute('data-filter');

                setShowProjects(false);

                setTimeout(() => {
                    setActiveFilter(filterValue);

                    imageItems.forEach((item) => {
                        if (
                            filterValue === 'tout' ||
                            item.classList.contains(filterValue)
                        ) {
                            item.style.display = '';
                        } else {
                            item.style.display = 'none';
                        }
                    });

                    setShowProjects(true);
                }, 500);
            });
        });
    }, []);

    return (
        <div id="project">
            <div className="filter">
                <button
                    className={`buttonFilter ${
                        activeFilter === 'tout' ? 'filterActive' : ''
                    }`}
                    data-filter="tout"
                >
                    Tout
                </button>
                <button
                    className={`buttonFilter ${
                        activeFilter === 'front' ? 'filterActive' : ''
                    }`}
                    data-filter="front"
                >
                    Frontend
                </button>
                <button
                    className={`buttonFilter ${
                        activeFilter === 'back' ? 'filterActive' : ''
                    }`}
                    data-filter="back"
                >
                    Backend
                </button>
                <button
                    className={`buttonFilter ${
                        activeFilter === 'seo' ? 'filterActive' : ''
                    }`}
                    data-filter="seo"
                >
                    SEO
                </button>
            </div>
            <div
                className={`allProject ${showProjects ? 'show-projects' : ''}`}
            >
                <div className="projectContent tout front">
                    <Project
                        title="Kasa - Agence Immobilière"
                        cover={kasa}
                        link={`/Kasa`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent tout front">
                    <Project
                        title="Sophie Bluel - Designer"
                        cover={SophieBluel}
                        link={`/SophieBluel`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent tout back">
                    <Project
                        title="Mon Vieux Grimoire - Notation de Livres"
                        cover={MVG}
                        link={`/MonVieuxGrimoire`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent tout seo">
                    <Project
                        title="Nina Carducci - Photographe"
                        cover={nina}
                        link={`/NinaCarducci`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent tout front">
                    <Project
                        title="Booki - Agence de Location"
                        cover={booki}
                        link={`/Booki`}
                        loading="lazy"
                    />
                </div>
            </div>
            <div id="contactLien"></div>
        </div>
    );
}

export default AllProject;