// CSS
import styles from "./Header.module.css";

// Hooks
import { useState } from "react";

// Images
import logo from "../../images/logo.svg";
import bars from "../../images/bars-solid.svg";
import close from "../../images/xmark-solid.svg";

// Router
import { Link } from "react-router-dom";

const Header = () => {

  const [menu, Setmenu] = useState(false);

  const handleClick = () =>{
    Setmenu(!menu);
  }

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
                <button onClick={handleClick}>
                  Menu <img src={bars} alt="menu hamburguer" />
                </button>
              </li>
            </div>

            <div className={styles.menu} id={menu ? "inside" : null}>

              <div className={styles.menu_container}>

                <div className={styles.closed}>
                  <button onClick={handleClick}>Fechar <img src={close} alt="x-mark para fechar" /></button>
                </div>

                <ul className={styles.menu_list}>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>Grupos</Link>
                  </li>
                  <li>
                    <Link>Jogos</Link>
                  </li>
                  <li>
                    <Link>Baixar</Link>
                  </li>
                  <li>
                    <Link>FAQ</Link>
                  </li>
                </ul>

              </div>

            </div>

          </ul>
        </nav>
    </div>
  )
}

export default Header