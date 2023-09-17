import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../../images/logo.png"
import "./VerticalNavbar.scss"

const VerticalNavbar = ({ links }) => {
    return (
        <aside className='sidebar'>
            <div><img src={logo} className='logo' alt="Logo" /></div>
            <ul>
                {links.map((link, index) => (
                    <NavLink key={index} to={link.to} className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                        <li>
                            <FontAwesomeIcon icon={link.icon} />
                            {link.name}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </aside>
    )
}

export { VerticalNavbar }
