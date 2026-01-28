import { Container } from './styles';
import Header from '../../components/Header';
import Background from '../../assets/Background.png'
import Car1 from '../../assets/car1.png'

export default function PaginaInicial() {
  return (
    <Container>
      <Header />
      <div className="background">
      <img src={Background} alt="" />
      </div>
      <div className="carousel">
        <div className='item'>
          <div className='image'>
            <img src={Car1} alt="carro" />
          </div>
            <div className='info'>
            <span className='carModel'>Carro1</span>
            <span className='price'>000</span>

          </div>
        </div>

      </div>
      <div className="bar">OIII</div>
    </Container>
  );
}