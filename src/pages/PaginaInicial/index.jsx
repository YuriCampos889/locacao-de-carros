import { Container } from './styles';
import Header from '../../components/Header';
import Background from '../../assets/Background.png'

export default function PaginaInicial() {
  return (
    <Container>
      <Header />
      <div className="background">
      <img src={Background} alt="" />
      </div>
      <div className="carousel">

      </div>
      <div className="bar">OIII</div>
    </Container>
  );
}