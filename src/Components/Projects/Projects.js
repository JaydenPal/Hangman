import './Projects.css';
function Projects(){
    return(
        <div>
            <h3>Other projects by me:</h3>
            <a href='https://jaydenpalacios.me' target="_block"><img src={require('../../Images/PortfolioScreenshot.png')} /></a> 
                <p className='projects'>Portfolio Website</p>
            <a href='https://jayden_palacios_jamming_project.surge.sh/' target="_blank"><img src={require('../../Images/VexedScreenshot.png')} /></a>
                <p className='projects'>Spotify Playlist Creator</p>
            <a href='https://jaydenpal.github.io/TeaCozy/' target="_block"><img src={require('../../Images/TeacozyScreenshot.png')} /></a> 
                <p className='projects'>TeaCozy Webpage</p>
            <a href='https://jaydenpal.github.io/FlexBox-webpage/' target='_blank'><img src={require('../../Images/WebsiteScreenshot.png')} /></a>
                <p className='projects'>Flexbox Webpage</p>
                
        </div>
    );
}

export default Projects;