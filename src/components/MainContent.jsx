import linkedin from '../img/linkedin.png';
import git from '../img/git-logo.png';

function MainContent() {
    return(
        <div className="main">
            <div className="main__head">
                <h1>Adebayo Jubreel</h1>
                <h3>Frontend Developer</h3>
                <a href="https://jubrealguy.github.io/portfolio/" className="portfolio">My portfolio</a>
                <div className="contact">
                    <a href="https://github.com/jubrealguy" className="contact-email">
                    <img src={git} alt="" />GitHub</a>
                    <a href="https://www.linkedin.com/in/adebayo-jubreel/" className="contact-linkedin"><img src={linkedin} alt="" />Linkedin</a>
                </div>
            </div>
            <ul className="main__body">
                <li>
                    <h3>About</h3>
                    <p>I am a frontend developer with an undying passion for coding, building up simple and complex web pages. I am always looking forward to projects that will challenge me and keep me up in the game</p>
                </li>
                <li>
                    <h3>Interests</h3>
                    <p>I do not think anything interests me nore than coding and solving problems. However, I love playing football, travelling, having intellectual discussions and hangouts.</p>
                </li>
            </ul>
        </div>
    )
}

export default MainContent;