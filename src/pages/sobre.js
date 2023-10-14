import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Image from "next/image";

function Sobre() {
  return( 
    <div className="about-section-container" id="sobre">
      <div className="about-background-image-container">
        <Image src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <Image src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          O alimento é uma parte importante de uma dieta equilibrada
        </h1>
        <p className="primary-text">
          No Foodie, nossa paixão é transformar ingredientes frescos em deliciosas refeições e entregá-las diretamente na sua porta.
        </p>
        <p className="primary-text">
          Desde pratos caseiros até especialidades gourmet, nosso compromisso é criar experiências culinárias memoráveis. Acreditamos que comida boa é uma forma de amor. Desfrute de pratos saborosos e saudáveis sem sair de casa.
        </p>

        <div className="about-buttons-container">
          <button className="secondary-button">Saber Mais</button>
          <button className="watch-video-button"> <BsFillPlayCircleFill /> Assistir o Video</button>
        </div>
      </div>
    </div>
  );
}

export default Sobre;