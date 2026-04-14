import './Projects.css';
export function ProjectPage() {
    return(
        <>
            <div className='project-header'>
                <h1>Projects</h1>
            </div>

            <div className='project-section'>
                <div className='project-elements'>
                    <div className='project-vid'>
                        <video src="public/E-commerce-website-React-Pages.mp4" controls></video>
                    </div>
                </div>
                <div>
                    <img 
                        className='project-img'
                        src="/product-img.png" alt="" />
                </div>
                <div className='project-name'>
                    <h1>Step Matters</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aliquid velit quidem sed veniam placeat voluptatem necessitatibus commodi autem quo odit, accusantium fuga facere saepe ea praesentium magnam quod repudiandae.</p>
                </div>
                <div className='project-details'>
                    <p>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore rerum officiis distinctio officia perferendis sunt, unde aut accusamus laudantium.</p>
                </div>
            </div>
        </>
    );
}