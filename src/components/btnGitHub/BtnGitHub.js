import "./style.css";
import img1 from "./gitHub-black.svg";

const BtnGitHub = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={img1} alt="" />
            GitHub repos
        </a>
    );
}

export default BtnGitHub;