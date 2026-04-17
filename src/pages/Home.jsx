import { socialLinks } from '../datas/social';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';
import '../responsiveness/responsive-pages.css';
import { useEffect, useRef, useState } from 'react';
export function HomePage() {
    const [showmenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const closeMenu = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        const clickedLink = (e) => {
            if(menuRef.current && !menuRef.current.contains(e.target)){
            closeMenu();
            }
        }

        document.addEventListener('mousedown', clickedLink);
        return () => document.removeEventListener('mousedown', clickedLink);
    }, [])
    

    return(
        <>
            <div className='header-elements'>
                <div className='menu-elements'>
                    <div 
                        className={`hamburger-icon ${showmenu ? 'show' : ''}`}
                        onClick={() => setShowMenu(!showmenu)}>
                            <span></span>
                            <span></span>
                            <span></span>
                    </div>
                        <div 
                            className={`overlay ${showmenu ? 'active' : ''}`}
                            onClick={closeMenu}>
                        </div>
                        <div 
                            ref={menuRef}
                            className={`menu-opt ${showmenu ? 'active' : ''}`}>
                        <button 
                            className='close-button'
                            onClick={() => setShowMenu(false)}>✕
                        </button>
                        <div className='menu-links'>
                            <a 
                                href='#home-page'
                                className='home-link'
                                onClick={closeMenu}>
                                Home
                            </a>
                            <a 
                                href='#project-page'
                                className='projects-link'
                                onClick={closeMenu}>
                                Projects
                            </a>
                            <a 
                                href='#skills-page'
                                className='skills-link'
                                onClick={closeMenu}>
                                Skills
                            </a>
                            <a 
                                href='#contact-page'
                                className='contact-link'
                                onClick={closeMenu}>
                                Contact
                            </a>    
                        </div> 
                        </div>
                </div>
                <div className='header-links'>
                    <a 
                        href='#home-page'
                        className='home-link'>
                        Home
                    </a>
                    <a 
                        href='#project-page'
                        className='projects-link'>
                        Projects
                    </a>
                    <a 
                        href='#skills-page'
                        className='skills-link'>
                        Skills
                    </a>
                    <a 
                        href='#contact-page'
                        className='contact-link'>
                        Contact
                    </a>
                </div>
            </div>
            <section
                id='home-page' 
                className='aboutme-elements'>
                <div className='box1'>
                    <h1 className='my-name'>Hey! I'm Jem 👋</h1>
                    <div className='my-paragraph'>
                        <p>I'm a passionate Frontend Developer with a strong interest in building a functional web application. While my experience so far has focused on Frontend development, I'm actively learning back-end technologies to become a full-stack developer.</p>
                        <p>I've worked on a variety of projects including <b>Step Matters</b>, where you can browse products, add items to cart, view totals and proceed to checkout. <b>Lyrics and Chords</b> app, where you can search songs and view their lyrics and chords. And <b>daily task manager</b>, to organize task and track progress.</p>
                        <p> I enjoy tackling challenges, I'm looking forward to bring and use my skills to your team.</p>
                    </div>
                    {socialLinks.map((lnk, ind) => (
                        <div 
                                key={ind}
                                className='icons'>
                            <a 
                                href={lnk.linkedIn}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <FaLinkedin />
                            </a>
                            <a  
                                href={lnk.github}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <FaGithub />
                            </a>
                        </div>
                    ))}
                </div>
                <div className='box2'>
                    <img 
                        className='hero-img'
                        src="/my-image.png" alt="" />
                </div>
            </section>
            <div className='line-header'>
                <div className='line'></div>
            </div>
        </>
    );
}