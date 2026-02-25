import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  text-align: center;
  overflow-x: hidden;
  max-width: 96vw;
  position: relative;

  h1 {
    color: #000;
    margin-bottom: 1rem;
  }

  p {
    color: #f7f7f7;
  }

  .background {
    position: absolute;
    inset: 0;
    z-index: -1;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  /* ===== CAROUSEL ===== */

  .carousel-wrapper {
    display: flex;
    align-items: center;
    gap: 39px;
    width: 100%;
    margin: 3rem 0 1rem;
  }

  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    flex: 1;
    min-width: 0;
    padding: 0 10px;
    gap: 90px;
    scrollbar-width: none;
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }

  .buttonLeft,
  .buttonRight {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ===== CARD ===== */

  .item {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 8px;
    width: 250px;
    height: 290px;
    border-radius: 9px;
    flex: none;
    display: flex;
    flex-direction: column;
  }

  .like-btn {
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    outline: none;
    width: 245px;
    padding: 0;
    margin: 0;


  }
  .like-btn img {
  width: 15px;
  height: auto;
  transition: transform 0.2s;
}

  .CarImage {
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .carModel {
    text-align: left;
    color: #000;
    font-size: 0.7rem;
    font-weight: bolder;
  }
  .quilometragem {
    color: #646464;
    font-size: 11px;
    font-weight: bold;
  }

  .pickupdate {
    color: #000;
    font-size: 11px;
    font-weight: bold;
  }

  .dropdate{
    color: #000;
    font-size: 11px;
    font-weight: bold;
  }


  .usersNumber {
    font-size: medium;
    font-weight: bold;
    color: #000;
    
    img {
      width: 28px;
    }
  }

  .carBagage {
    font-size: medium;
    font-weight: bold;
    color: #000;
   img {
    width: 28px;
    color: #000;
  }
}

.infoRow {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.iconsColumn {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 10px;
}

.tripColumn {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.quilometragem,
.pickupdate,
.dropdate {
  margin: 0;
  font-size: 11px;
  font-weight: bold;
  margin-left: 45px;
  justify-content: end;
  display: flex;
}

.usersNumber,
.carBagage {
  display: flex;
  align-items: center;
  gap: 5px;
}
.bidPrice {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;

  }
  .price {
    margin-top: 10px;
    font-size: 1.3rem;
    font-weight: bold;
    background-color: none;
    color: #000000;
    padding: 6px;
    border-radius: 8px;
  }
  .bidButton {
    border-radius: 100px;
    width: 80px;
    height: 40px;
    font-size: 0.6rem;
    outline: none;
    justify-content: flex-end;
    cursor: pointer;
  }

  .bar {
  position: fixed;
  left: 0;
  width: 100vw;
  height: 60px;
  background: black;
  z-index: 5;
  color: #000;
  font-size: smaller;
}

.booking-section {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #000;
}

.booking-section h2 {
  text-align: left;
  font-size: 1.1rem;
  font-weight: 700;
}

.booking-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  border: 1px solid #dcdcdc;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.booking-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.booking-row-top .field.large {
  flex: 1 1 0;
}

.booking-row-middle .field {
  flex: 1 1 0;
  min-width: 150px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}

.field label {
  font-size: 0.75rem;
  font-weight: 600;
}

.field input {
  border-radius: 10px;
  border: 1px solid #c8c8c8;
  padding: 8px 10px;
  font-size: 0.8rem;
  outline: none;
}

.continue-button {
  margin-left: auto;
  border-radius: 999px;
  padding: 10px 24px;
  background: #000;
  color: #fff;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}

.checkbox-line {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.7rem;
  text-align: left;
}

.checkbox-line input {
  margin-top: 3px;
}


  /* ===== TABLET ===== */
  @media (max-width: 1024px) {
    padding: 1.5rem;

    .carousel {
      gap: 48px;
    }

    .item {
      width: 220px;
      height: 300px;
    }
  }

  /* ===== MOBILE ===== */
  @media (max-width: 768px) {
    padding: 1rem;

    .carousel-wrapper {
      gap: 8px;
    }

    .carousel {
    gap: 12px;          /* gap menor entre cards */
    padding: 0;         /* tira padding lateral extra */
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;  /* opcional, pra “travar” em cada card */
  }

    .buttonLeft,
    .buttonRight {
      width: 20px;
      height: 20px;
    }

    .item {
    flex: 0 0 90%;     /* ocupa toda a largura disponível */
    max-width: 320px;   /* ou algo como 90vw */
    margin: 0 auto;     /* centraliza o card */
    height: auto;       /* deixa a altura crescer com o conteúdo */
    scroll-snap-align: center; /* com scroll-snap, centraliza o card */
  }

  .like-btn {
  width: 100%;
  justify-content: flex-end;
  padding-right: 4px;
}

.quilometragem,
.pickupdate,
.dropdate {
  margin-left: 25px;
  font-size: 11px;
  font-weight: bold;
  display: flex;
  text-align: right;        /* quando o texto quebra, continua alinhado à direita */

}


    .CarImage {
      height: 140px;
    }

    .price {
      font-size: 1rem;
    }
  }

  

  /* ===== MOBILE PEQUENO ===== */
  @media (max-width: 480px) {
    .carousel {
      gap: 16px;
    }

    .item {
      flex: 0 0 90%;
      max-width: 250px;   /* um pouco menor que no tablet/mobile */
      height: 260px;
      margin-top: 15px;
      margin-left: 5px;
    }

    .CarImage {
      height: 120px;
    }
  }
`;
