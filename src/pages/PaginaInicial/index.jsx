import { Container } from './styles';
import Header from '../../components/Header';

export default function PaginaInicial() {
  return (
    <Container>
      <Header />
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao sistema de locação de carros!</p>
    </Container>
  );
}