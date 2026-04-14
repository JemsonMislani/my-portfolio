import { projects } from '../datas/project';
import { FiExternalLink } from 'react-icons/fi';
import './Projects.css';
export function ProjectPage() {
    return(
        <>
            <div className='project-header'>
                <h1>Projects</h1>
            </div>
            {projects.map((proj) => (
                <div key={proj.id}>
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
                        <div className='project-link'>
                            <a 
                                href={proj.projectLink} target='_blank'>
                                <FiExternalLink /> 
                                stepmatters.com
                            </a>
                        </div>
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
        </>
    );
}