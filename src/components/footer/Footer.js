import "./style.css";
import vk from "./../../img/icons/vk.svg";
import inst from "./../../img/icons/instagram.svg";
import git from "./../../img/icons/gitHub.svg";
import link from "./../../img/icons/linkedIn.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a rel="noreferrer" target="_blank" href="https://vk.com/dexter_aldridge"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a rel="noreferrer" target="_blank" href="https://www.instagram.com/drabovich_77"><img src={inst} alt="Link" /></a></li>
                        <li className="social__item"><a rel="noreferrer" target="_blank" href="https://github.com/Drabovich"><img src={git} alt="Link" /></a></li>
                        <li className="social__item"><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/pavel-drabovich-a3b349231/"><img src={link} alt="Link" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;