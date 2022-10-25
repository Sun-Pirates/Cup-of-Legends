// CSS
import styles from "./Header.module.css";

// Images
import logo from "../../images/logo.svg";
import bars from "../../images/bars-solid.svg";

// Router
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='container'>
        <nav>

          <ul className={styles.navlist}>

            <Link to="/">
              <img src={logo} alt="Logo" className={styles.logo} />
            </Link>

            <div className="flex">
            <li>
              <button>
                <Link>
                  Baixe
                </Link>
              </button>
            </li>

            <li>
              <button>
                Menu <img src={bars} alt="menu hamburguer" />
              </button>
            </li>
            </div>

          </ul>
        </nav>
    </div>
  )
}

export default Header