import Image from 'next/image'
import Navbar from './Navbar'
import BannerBackground from '../assets/home-banner-background.png'
import BannerImage from '../assets/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <Image src={BannerBackground} alt="" />
        </div>

        <div className="home-text-section">
          <h1 className="primary-heading">
            Sua comida favorita entregue quente e fresca
          </h1>
          <p className="primary-text">
            Chefs saudáveis fazem todo o trabalho de preparação, como fazer
            xixi, picar e marinar, para que você possa cozinhar um alimento
            fresco
          </p>
          <button className="secondary-button">
            Peça Agora <FiArrowRight />
          </button>
        </div>

        <div className="home-imga-container">
          <Image src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}
