// CSS
import styles from "./Home.module.css";

// Images
import title from "../../images/title.svg";
import right from "../../images/right-long-solid.svg";

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
              Seja Bem Vindo(a) invocador, 
              aqui você irá acompanhar tudo sobre a copa, Azir é nosso campeão em Destaque. 

              História será feita, recordes serão quebrados e lendas surgirão na Copa do Mundo FIFA 
              <a href="https://www.qatarairways.com/en/FIFA-world-cup.html?CID=SXBR23456968M&account=Google-AMERICAS-BR-EN-Brand&campaign=BR-Brand-Rest-EN_exact&adgroup=qatar&term=qatar&gclid=Cj0KCQjwteOaBhDuARIsADBqReiCagLGhfJ792zoKNf4RRp95jJhx8jJuS0GGmCCMJnHBTGgcH9iXtEaAuUpEALw_wcB&gclsrc=aw.ds">Qatar</a> 2022™
            </p>
            <div className="flex">
            <span className={styles.dashed}>
            </span>
            <button className={styles.groups}>
                <img src={right} alt="Seta indicado pra direita" />
            </button>
            <p className={styles.group_title}>Grupos</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
  )
}
