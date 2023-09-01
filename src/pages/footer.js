import Logo from "../assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return( 
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <Image src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebook />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Compartilhar</span>
          <span>Carreiras</span>
          <span>Depoimentos</span>
          <span>Atividade</span>
        </div>
        <div className="footer-section-columns">
          <span>4002-8922</span>
          <span>foodie@food.com</span>
          <span>ola@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos & Condições</span>
          <span>Política de Privacidade</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;