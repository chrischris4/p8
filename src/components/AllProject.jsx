import '../styles/AllProject.css';
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
                        cover="https://i.ibb.co/znVrBcm/kasa-min.webp"
                        link={`/Kasa`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent tout front">
                    <Project
                        title="Sophie Bluel - Designer"
                        cover="https://i.ibb.co/8PCjj8K/sophiebluel-min.webp"
                        link={`/SophieBluel`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent tout back">
                    <Project
                        title="Mon Vieux Grimoire - Notation de Livres"
                        cover="https://i.ibb.co/r5FVsdh/mvg-min.webp"
                        link={`/MonVieuxGrimoire`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent tout seo">
                    <Project
                        title="Nina Carducci - Photographe"
                        cover="https://i.ibb.co/TwtD4Fn/nina-min.webp"
                        link={`/NinaCarducci`}
                        loading="lazy"
                    />
                </div>
                <div className="projectContent tout front">
                    <Project
                        title="Booki - Agence de Location"
                        cover="https://i.ibb.co/mFqVKV1/Booki-min.webp"
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
