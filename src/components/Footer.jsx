import twitter from '../img/Twitter Icon.png';
import facebook from '../img/Facebook Icon.png';
import Instagram from '../img/Instagram Icon.png';
import GitHub from '../img/GitHub Icon.png';

function Footer() {
    return(
        <footer className="footer">
            <a href="https://twitter.com/debayo_realest" className="social-links"><img src={twitter} alt="" className="social-img" /></a>
            <a href="https://web.facebook.com/jubrealguy/" className="social-links"><img src={facebook} alt="" className="social-img" /></a>
            <a href="https://www.instagram.com/mr_realest/" className="social-links"><img src={Instagram} alt="" className="social-img" /></a>
            <a href="https://github.com/jubrealguy" className="social-links"><img src={GitHub} alt="" className="social-img" /></a>
        </footer>
    )
}

export default Footer;