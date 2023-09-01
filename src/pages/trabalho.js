import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";
import Image from "next/image";

function Trabalho() {

  const workInfoData = [
    {
      image: PickMeals,
      title: "Escolha as refeições",
      text: "Lorem",
    },
    {
      image: ChooseMeals,
      title: "Escolha com que frequência",
      text: "Lorem",
    },
    {
      image: DeliveryMeals,
      title: "Entregas muito rápidas",
      text: "Lorem",
    },
  ]

  return( 
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Funcionamento</p>
        <h1 className="primary-heading">Como funciona</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.
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