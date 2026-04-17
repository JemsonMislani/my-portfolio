import { FiCopy } from 'react-icons/fi';
import { FaRegCopyright, FaEnvelope } from 'react-icons/fa';
import './Contact.css';
import { useState } from 'react';
export function ContactPage() {
    const [setCopyEmail] = useState(false);
    const myEmail = 'jemsonmislani@gmail.com';
    
    const copymyEmail = () => {
        navigator.clipboard.writeText(myEmail);
        setCopyEmail(true);
        setTimeout(() => setCopyEmail(false, 1500));
    }

    return(
        <section
            id='contact-page'>
            <div className='contact-elements'>
                <h1>Contact</h1>
            </div>
            <div className='contact-me'>
                <p 
                    className='contact-email'
                    onClick={copymyEmail}>
                   <span><FaEnvelope /></span>
                    : {myEmail} <FiCopy/>
                    </p>
                <a 
                    className='contact-cv'
                    href='https://drive.google.com/file/d/1hUZbkTQPZNX9xwWO7-WMnuCc67Pc8EQx/view?usp=sharing'
                    target='_blank'
                    rel='noopener noreferrer'>CV / Resume GDrive Link</a>
            </div>
            <div className='copyright'>
                <span>2026 <FaRegCopyright/> Jemson Mislani</span>
            </div>
        </section>
    );
}