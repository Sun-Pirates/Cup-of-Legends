// CSS
import styles from "./Header.module.css";

// Images
import logo from "../../images/logo.svg";

// Router
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='container'>
        <nav>
          <ul className={styles.navlist}>
            <li><img src={logo} alt="Logo" className={styles.logo} /></li>
            <li><Link>Baixe sua foto de perfil</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Header