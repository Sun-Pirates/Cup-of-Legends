// CSS
import styles from "./Home.module.css";

// Images
import title from "../../images/title.svg";

// Components
import Header from "../../Components/Header/Header";

export const Home = () => {
  return (
  <>
    <div className="container">
      <Header></Header>
    </div>
    
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.home_container}>
          <img src={title} alt="logo da página" />

          <div>
            <p className={styles.host}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugit, reiciendis pariatur deserunt ducimus nesciunt officia soluta ea consectetur, accusamus repudiandae laborum dolorum. Voluptates ipsa minima quod molestiae nostrum blanditiis?
            </p>
            <div className="flex">
            <button className={styles.groups}>
              vá
            </button>
            <p>Grupos</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
  )
}
