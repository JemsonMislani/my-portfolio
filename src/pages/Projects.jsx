import { projects } from '../datas/project';
import { FiExternalLink } from 'react-icons/fi';
import './Projects.css';
import { skills } from '../datas/skills';
export function ProjectPage() {
    return(
        <>
            <div className='project-header'>
                <h1>Projects</h1>
            </div>
            {projects.map((proj) => (
                <div 
                    className='projects'
                    key={proj.id}>
                    <div className='project-section'>
                        <div className='project-elements'>
                            <div className='project-vid'>
                                <video src={proj.projectVideo} controls></video>
                            </div>
                        </div>
                        <div>
                            <img 
                                className='project-img'
                                src={proj.projectImage} alt="" />
                        </div>
                        <div className='project-name'>
                            <h1>{proj.projectName}</h1>
                            <p>{proj.projectDetails}</p>
                        </div>
                        <div className='project-details'>
                            {proj.description.map((proj, ind) =>(
                                <p key={ind}>{proj}</p>
                            ))}
                        </div>
                        {proj.projectLink && (
                            <div className='project-link'>
                                <a 
                                    href={proj.projectLink.url} target='_blank'
                                    rel='noopener noreferrer'>
                                    <FiExternalLink />
                                    {proj.projectLink.name}
                                </a>
                            </div>
                        )}
                        <div className='project-tool-use'>
                            {proj.stackUse.map((tool, ind) => (
                                <p 
                                    className='tools'
                                    key={ind}>{tool}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
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
        </>
    );
}