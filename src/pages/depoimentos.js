import Image from "next/image";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

function Depoimentos() {
  return( 
    <div className="work-section-wrapper" id="depoimentos">
      <div className="work-section-top">
        <p className="primary-subheading">Depoimentos</p>
        <h1 className="primary-heading">O que estão dizendo</h1>
        <p className="primary-text">
          Acompanhe alguns dos feedbacks dos nossos clientes. Somos referência na região.
        </p>
      </div>

      <div className="testimonial-section-bottom">
        <Image src={ProfilePic} alt="" />
        <p className="">
          Adoro o Foodie! As opções de cardápio são variadas, a comida é sempre fresca e deliciosa. É como ter um chef particular em casa.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
}

export default Depoimentos;