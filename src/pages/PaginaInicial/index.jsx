import { Container } from './styles';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Background from '../../assets/Background.png'
import Car1 from '../../assets/car1.png'
import carsData from '../../data/cars.json'

export default function PaginaInicial() {

  const [cars, setCars] = useState ([])

  useEffect(() => {
    setCars(carsData);
    console.log('Carros carregados', carsData);

  }, []);

  return (
    <Container>
      <Header />
      <div className="background">
      <img src={Background} alt="" />
      </div>
      <div className="carousel">
        {cars.map((car) => (
          <div className='item'>
          <div className='CarImage'>
            <img src={Car1} alt="carro" />
          </div>
            <div className='info'>
            <span className='carModel'>{car.model}</span>
            <span className='price'>{car.price}</span>

          </div>
        </div>
      ))}


      </div>
      <div className="bar">OIII</div>
    </Container>
  );
}