import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';
export function HomePage() {
    return(
        <>
            <div className='header-elements'>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore at corporis aliquam incidunt, ex neque animi sequi voluptatibus</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempora earum sapiente rerum atque, voluptatibus accusamus dolorem obcaecati eaque amet!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minima ad? Nostrum tempora magni rerum!</p>
                    </div>
                    <div className='icons'>
                        <p><FaLinkedin /></p>
                        <p><FaGithub /></p>
                    </div>
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