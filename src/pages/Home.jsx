import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';
export function HomePage() {
    return(
        <>
            <div className='header-elements'>
                <div className='header-links'>
                    <Link className='home-link'>Home</Link>
                    <Link className='projects-link'>Projects</Link>
                    <Link className='skills-link'>Skills</Link>
                    <Link className='contact-link'>Contact</Link>
                </div>
            </div>
            <div className='aboutme-elements'>
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
            </div>
            <div className='line-header'>
                <div className='line'></div>
            </div>
        </>
    );
}