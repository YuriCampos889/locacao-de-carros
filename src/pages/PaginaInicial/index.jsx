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

  <div className="infoRow">
    <div className="iconsColumn">
      <span className="usersNumber">
        <img src={Users} alt="" />{car.users}
      </span>
      <span className='carBagage'>
        <img src={Bagage} alt="" />{car.bagage}
      </span>
    </div>

    <div className="tripColumn">
      <span className='quilometragem'>{car.km}</span>
      <span className='pickupdate'>{car.pickupdate}</span>
      <span className='dropdate'>{car.dropoffdate}</span>
    </div>
  </div>

  <div className='bidPrice'>
    <span className="price">R${car.price}/dia</span>
    <button className='bidButton'>Ver Oferta</button>
  </div>
</div>
            </div>
          ))}
        </div>

        <button onClick={handleRightClick} className="buttonRight" type="button">
          <img src={ChevronRight} alt="Próximo" />
        </button>
      </div>
      <div className="bar">isso é apenas um easter egg, mas ja que voce encontrou, espero que tenha um bom dia :D </div>
      <div className="booking-section">
  <h2>Onde deseja retirar o veículo?</h2>

  <div className="booking-card">
    <div className="booking-row booking-row-top">
      <div className="field large">
        <label>Retirada</label>
        <input placeholder="Digite o Local de Retirada" />
      </div>

      <div className="field large">
        <label>Devolução</label>
        <input placeholder="Igual à Retirada" />
      </div>
    </div>

    <div className="booking-row booking-row-middle">
      <div className="field">
        <label>Data da Retirada</label>
        <input type="date" />
      </div>

      <div className="field">
        <label>Hora de Retirada</label>
        <input type="time" />
      </div>

      <div className="field">
        <label>Data da Devolução</label>
        <input type="date" />
      </div>

      <div className="field">
        <label>Hora de Devolução</label>
        <input type="time" />
      </div>

      <button className="continue-button">CONTINUAR</button>
    </div>

    <div className="booking-row booking-row-bottom">
      <label className="checkbox-line">
        <input type="checkbox" />
        <span>
          O motorista tem menos de 30 ou mais de 70 anos<br />
          Motoristas jovens ou idosos podem ter que pagar uma taxa adicional
        </span>
      </label>
    </div>
  </div>
</div>


          </Container>
  );
}