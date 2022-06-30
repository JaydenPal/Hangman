import './Projects.css';
function Projects(){
    return(
        <div className='projectsContainer'>
            <h3 id='words'>Other projects by me:</h3>
            <div className='projects'>
                <div className='project'>
                    <a href='https://jaydenpalacios.me' target="_block"><img src={require('../../Images/PortfolioScreenshot.png')} /></a> 
                        <p className='projectName'>Portfolio Website</p>
                </div>
                <div className='project'>
                    <a href='https://jayden_palacios_jamming_project.surge.sh/' target="_blank"><img src={require('../../Images/VexedScreenshot.png')} /></a>
                        <p className='projectName'>Spotify Playlist Creator</p>
                </div>
                <div className='project'>
                    <a href='https://jaydenpal.github.io/TeaCozy/' target="_block"><img src={require('../../Images/TeacozyScreenshot.png')} /></a> 
                        <p className='projectName'>TeaCozy Webpage</p>
                </div>
                <div className='project'>
                    <a href='https://jaydenpal.github.io/FlexBox-webpage/' target='_blank'><img src={require('../../Images/WebsiteScreenshot.png')} /></a>
                            <p className='projectName'>Flexbox Webpage</p>
                </div>
            </div>
                
        </div>
    );
}

export default Projects;