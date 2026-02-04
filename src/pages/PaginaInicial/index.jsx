import { Container } from './styles';
import { useEffect, useState, useRef } from 'react';
import Header from '../../components/Header';
import Background from '../../assets/Background.png'
import Car1 from '../../assets/car1.png'
import carsData from '../../data/cars.json'
import ChevronLeft from '../../assets/Chevron left.png'
import ChevronRight from '../../assets/Chevron right.png'
import Users from '../../assets/Users.png'
import Bagage from '../../assets/Briefcase.png'
import Heart1 from '../../assets/Heart.png'
import Heart2 from '../../assets/Heart2.png'

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)} className="like-btn">
      <img src={liked ? Heart2 : Heart1} alt="Curtir" />
    </button>
  );
};

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
              <LikeButton/>
              <div className="CarImage">
                <img src={car.image} alt="carro" />
              </div>
              <div className="info">
                <span className="carModel">{car.model} ou similar</span>
                <span className="usersNumber"><img src={Users} alt="" />{car.users}</span>
                <span className='carBagage'><img src={Bagage} alt="" />{car.bagage}</span>
                <span className="price">{car.price}</span>
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleRightClick} className="buttonRight" type="button">
          <img src={ChevronRight} alt="Próximo" />
        </button>
      </div>
      <div className="bar">isso é apenas um easter egg, mas ja que voce encontrou, espero que tenha um bom dia :D </div>
    </Container>
  );
}