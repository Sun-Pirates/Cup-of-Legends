// CSS
import styles from "./Download.module.css";

// Components
import Header from "../../Components/Header/Header.js";
import ImagesContent from "../../Components/Profile/ImagesContent";

export const Download = () => {
  return (
    <>
    <div className='container'>
      <Header></Header>

      
      <main>
      <h1>Imagens de Perfil para usar durante os Jogos</h1>
      <p>Nos te conhecemos como conhecemos o Rift, que tal trocar sua imagem calva por uma novinha com os campeões curtindo o jogão?</p>

      <div className="flex-collumn">

        <div className={styles.image_container}>
          <ImagesContent
          champ="Ahri"
          imageSource={require("../../images/ahri.jpg")}
          path="https://drive.google.com/u/0/uc?id=1ZSYukxP-oJy8v8RPeonFiLc-YDMiwKgL&export=download"
          ></ImagesContent>

          <ImagesContent
          champ="Ekko"
          imageSource={require("../../images/ekko.jpg")}
          path="https://drive.google.com/u/0/uc?id=1h7kRQXZTYOJJN8SMCwa91EeUXRUv6ROE&export=download"
          ></ImagesContent>

          <ImagesContent
          champ="Gragas"
          imageSource={require("../../images/gragas.jpg")}
          path="https://drive.google.com/u/0/uc?id=1VGRGzvUjnWM-b9DLNxfs2NtmfvWLQcvt&export=download"
          ></ImagesContent>

        </div>

        <div className={styles.image_container}>
          <ImagesContent
          champ="Jhin"
          imageSource={require("../../images/jhin.jpg")}
          path="https://drive.google.com/u/0/uc?id=190nfxMFpgCIxYBMrpkv3pBrAbpesSrtJ&export=download"
          ></ImagesContent>

          <ImagesContent
          champ="Irelia"
          imageSource={require("../../images/irelia.jpg")}
          path="https://drive.google.com/u/0/uc?id=1fpNP-GtiVJxoEo_IhZXVQYyKyx5F1G1p&export=download"
          ></ImagesContent>

          <ImagesContent
          champ="Katharina"
          imageSource={require("../../images/katharina.jpg")}
          path="https://drive.google.com/u/0/uc?id=110wasgNsrR1HXiK-SmIFSR8Yf5Ty_UjB&export=download"
          ></ImagesContent>

        </div>

        <div className={styles.image_container}>
          <ImagesContent
          champ="Lux"
          imageSource={require("../../images/lux.jpg")}
          path="https://drive.google.com/u/0/uc?id=1EVbJd3Lbi8I0PjrbtpGhtnQGriFfRWjv&export=download"
          ></ImagesContent>

          <ImagesContent
          champ="Lux - Elementalista"
          imageSource={require("../../images/lux-elementalista.jpg")}
          path="https://drive.google.com/u/0/uc?id=1Pq-z03Zz-u31hV-tQMXLVRlncCagEFwf&export=download"
          ></ImagesContent>

          <ImagesContent
          champ="Lux - Cosmos Negros"
          imageSource={require("../../images/lux-cosmos-negro.jpg")}
          path="https://drive.google.com/u/0/uc?id=1JWxIuZcmrb1D6UjR5v1rjNbWnMa6v13g&export=download"
          ></ImagesContent>

        </div>

        <div className={styles.image_container}>
          <ImagesContent
          champ="Yummi"
          imageSource={require("../../images/yummi.jpg")}
          path="https://drive.google.com/u/0/uc?id=1lXQ_3BZyztagEej7zWrMu4iY9jn3IHad&export=download"
          ></ImagesContent>

          <ImagesContent
          champ="Nami"
          imageSource={require("../../images/nami.jpg")}
          path="https://drive.google.com/u/0/uc?id=1lBgZuGlAJ8uo6fNIY-YzW3c7OK-eT3Fy&export=download"
          ></ImagesContent>

          <ImagesContent
          champ="Seraphine"
          imageSource={require("../../images/seraphine.jpg")}
          path="https://drive.google.com/u/0/uc?id=1se4p3OAtlNFtnMi8yKAS_UAF2JO-WIEj&export=download"
          ></ImagesContent>

        </div>

        <div className={styles.image_container}>
          <ImagesContent
          champ="Riven"
          imageSource={require("../../images/riven.jpg")}
          path="https://drive.google.com/u/0/uc?id=1iiOyejOOS6ry9JSXwSf72BCqcLJh4FxF&export=download"
          ></ImagesContent>

          <ImagesContent
          champ="Pyke"
          imageSource={require("../../images/pyke.jpg")}
          path="https://drive.google.com/u/0/uc?id=12g-PU1Ur_V3XBSCBIMgamBOpRwHyEQlq&export=download"
          ></ImagesContent>

          <ImagesContent
          champ="Vayne"
          imageSource={require("../../images/vayne.jpg")}
          path="https://drive.google.com/u/0/uc?id=1DhcwRB7c8j18HEvu4_o8Yl1WfYsTvh7g&export=download"
          ></ImagesContent>
        </div>

        <div className={styles.image_container}>
          <ImagesContent
          champ="Sett"
          imageSource={require("../../images/sett.jpg")}
          path="https://drive.google.com/u/0/uc?id=1PmRAo1aoqJ274pmmRTOSHgPjnk9kbdeF&export=download"
          ></ImagesContent>

          <ImagesContent
          champ="Yasuo"
          imageSource={require("../../images/yasuo.jpg")}
          path="https://drive.google.com/u/0/uc?id=1wZZJE-Q-aT9VmNJbmIKELBfvw3av6glx&export=download"
          ></ImagesContent>

          <ImagesContent
          champ="Poppy"
          imageSource={require("../../images/poppy.jpg")}
          path="https://drive.google.com/u/0/uc?id=1ylZ8vi4OLi3xh3loH3VGMkCgv4NI4dy1&export=download"
          ></ImagesContent>
          
        </div>

      </div>

      </main>

    </div>

  </>

  )
}
