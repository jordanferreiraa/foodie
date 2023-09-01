import Image from 'next/image';
import './page.css';
import Home from '@/components/Home';
import Sobre from '@/pages/sobre';
import Trabalho from '@/pages/trabalho';
import Depoimentos from '@/pages/depoimentos';
import Contatos from '@/pages/contatos';
import Footer from '@/pages/footer';

export default function App() {
  return (
    <div className="App">
      <Home />
      <Sobre />
      <Trabalho />
      <Depoimentos />
      <Contatos />
      <Footer />
    </div>
  )
}
