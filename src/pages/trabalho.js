import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";
import Image from "next/image";

function Trabalho() {

  const workInfoData = [
    {
      image: PickMeals,
      title: "Escolha seus pratos",
      text: "Navegue em nosso cardápio e selecione suas refeições favoritas.",
    },
    {
      image: ChooseMeals,
      title: "Faça o pedido",
      text: "Confirme seu pedido, sua entrega e a forma de pagamento.",
    },
    {
      image: DeliveryMeals,
      title: "Relaxe e espere a entraga",
      text: "Entregamos com rapidez para que você possa desfrutar de uma refeição quentinha e de qualidade.",
    },
  ]

  return( 
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Funcionamento</p>
        <h1 className="primary-heading">Como funciona</h1>
        <p className="primary-text">
          O Foodie simplifica o processo de pedir comida de alta qualidade. Navegue, escolha, peça e desfrute. Não poderia ser mais fácil.
        </p>
      </div>

      <div className="work-section-bottom">
        {
          workInfoData.map((data) => (
            <div key={data.id} className="work-section-info">
              <div className="info-boxes-img-container">
                <Image src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Trabalho;