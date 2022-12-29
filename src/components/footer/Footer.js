import "./style.css";
import vk from "./../../img/icons/vk.svg";
import inst from "./../../img/icons/instagram.svg";
import twit from "./../../img/icons/twitter.svg";
import git from "./../../img/icons/gitHub.svg";
import link from "./../../img/icons/linkedIn.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={inst} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={twit} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={git} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={link} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;