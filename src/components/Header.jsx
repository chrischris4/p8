import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const allLinksPages = [
        '/Kasa',
        '/MonVieuxGrimoire',
        '/NinaCarducci',
        '/SophieBluel',
        '/Booki',
        '/*',
    ];
    const linksPage = allLinksPages.includes(location.pathname);
    const linksHome = location.pathname === '/';

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }
    }, [isMenuOpen]);

    window.addEventListener('scroll', function () {
        var topPage = document.querySelector('.topPage');

        if (window.scrollY > 0) {
            topPage.classList.add('show');
        } else {
            topPage.classList.remove('show');
        }
    });

    return (
        <div className="header">
            <ScrollLink
                href="parcoursLien"
                to="topPageLink"
                className="topPage"
                spy={true}
                smooth={true}
                duration={1000}
            >
                <img
                    className="vectorUp"
                    src="https://i.ibb.co/FsfJ4mw/arrow.webp"
                    alt="haut-de-page"
                />
            </ScrollLink>
            {linksPage && (
                <>
                    <RouterLink className="backHomeLink" to={`/`}>
                        <img
                            className="backHomeImg"
                            src="https://i.ibb.co/Fhcrwnd/back-Home-min.webp"
                            alt="accueil"
                        />
                    </RouterLink>
                </>
            )}

            <nav>
                {linksHome && (
                    <>
                        <ScrollLink
                            href="parcoursLien"
                            to="parcoursLien"
                            className="link"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            Parcours
                        </ScrollLink>
                        <ScrollLink
                            href="competenceLien"
                            to="competenceLien"
                            className="link"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            Compétences
                        </ScrollLink>
                        <ScrollLink
                            href="projectLien"
                            to="projectLien"
                            className="link"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            Projets
                        </ScrollLink>
                    </>
                )}
            </nav>

            <div
                className={`menuBurger ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            {isMenuOpen && (
                <div className="overlayBurger" onClick={closeMenu}></div>
            )}
            {isMenuOpen && (
                <nav className={`burgerMenu ${isMenuOpen ? 'open' : ''}`}>
                    {linksHome && (
                        <>
                            <ScrollLink
                                href="aboutLien"
                                to="aboutLien"
                                className="link"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onClick={closeMenu}
                            >
                                À propos
                            </ScrollLink>
                            <ScrollLink
                                href="parcoursLien"
                                to="parcoursLien"
                                className="link"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onClick={closeMenu}
                            >
                                Parcours
                            </ScrollLink>
                            <ScrollLink
                                href="competenceLien"
                                to="competenceLien"
                                className="link"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onClick={closeMenu}
                            >
                                Compétences
                            </ScrollLink>
                            <ScrollLink
                                href="projectLien"
                                to="projectLien"
                                className="link"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onClick={closeMenu}
                            >
                                Projets
                            </ScrollLink>
                        </>
                    )}
                    {linksPage && (
                        <>
                            <RouterLink
                                to={`/`}
                                className="link"
                                onClick={closeMenu}
                            >
                                Accueil
                            </RouterLink>
                        </>
                    )}
                    <ScrollLink
                        href="contactLien"
                        to="contactLien"
                        className="link"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onClick={closeMenu}
                    >
                        Contact
                    </ScrollLink>
                    <RouterLink
                        className="lastLink"
                        to={`https://github.com/chrischris4/`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeMenu}
                    >
                        GitHub
                    </RouterLink>
                </nav>
            )}
        </div>
    );
}

export default Header;
