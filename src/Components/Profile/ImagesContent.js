import styles from "./ImagesContent.module.css";

// Images
import file from "../../images/arrow-down-solid.svg";

const ImagesContent = (props) => {
  return (

    <>
        <div className={styles.image_content}>
            <img className={styles.champ_image} src={props.imageSource} alt={props.champ} />

            <div className={styles.box_content}>
                <span>{props.champ}</span>
                <a href={props.path} download>Baixar <img className={styles.file} src={file} alt="baixar arquivo"/></a>
            </div>

        </div>
    </>

  )
}

export default ImagesContent