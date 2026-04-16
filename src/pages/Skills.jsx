import { skills } from '../datas/skills';
import './Skills.css';
export function SkillsPage() {
    return(
        <section 
            id='skills-page'>
            <div className='skills-elements'>
                <h1>Skills</h1>
            </div>
            <div className='skills'>
                {skills.map((skl, ind) => (
                    <div 
                        className='skills-section'
                        key={ind}>
                        <img 
                            className='skill-img'
                            src={skl.icon} alt={skl.name}
                        />
                        <p className='skill-name'>{skl.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}