import { Container } from './styles';
import { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header';
import Background from '../../assets/Background.png'
import Car1 from '../../assets/car1.png'
import carsData from '../../data/cars.json'
import ChevronLeft from '../../assets/Chevron left.png'
import ChevronRight from '../../assets/Chevron right.png'


export default function PaginaInicial() {

  const [cars, setCars] = useState ([])
  const carousel = useRef(null);


  useEffect(() => {
    setCars(carsData);
    console.log('Carros carregados', carsData);

  }, []);

  const handleLeftClick = (e) =>{
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) =>{
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <Container>
      <Header />
      <div className="background">
      <img src={Background} alt="" />
      </div>
      <div className="carousel-wrapper">
        <button onClick={handleLeftClick} className="buttonLeft" type="button">
          <img src={ChevronLeft} alt="Anterior" />
        </button>

        <div className="carousel" ref={carousel}>
          {cars.map((car) => (
            <div key={car.id} className="item">
              <div className="CarImage">
                <img src={Car1} alt="carro" />
              </div>
              <div className="info">
                <span className="carModel">{car.model}</span>
                <span className="price">{car.price}</span>
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleRightClick} className="buttonRight" type="button">
          <img src={ChevronRight} alt="Próximo" />
        </button>
      </div>
      <div className="bar">OIII</div>
    </Container>
  );
}