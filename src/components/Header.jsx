import { Link } from 'react-router-dom';
import './Header.css';
export function HeaderSection() {
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
        </>
    );
}