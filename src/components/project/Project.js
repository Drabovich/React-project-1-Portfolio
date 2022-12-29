import { NavLink } from "react-router-dom";
import "./style.css";

const Project = ({title, img, index}) => {
    return (
        <NavLink to={`/project/${index}`}>
            <li className="project">
                <img src={img} alt={title} className="project__img" />
                <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    );
}

export default Project;





// Как пример
// const Project = (prop) => {
//     return (
//         <li className="project">
//             <a href="./project-page.html">
//                 <img src={prop.imgg} alt={prop.title} className="project__img" />
//                 <h3 className="project__title">{prop.title}</h3>
//             </a>
//         </li>
//     );
// }