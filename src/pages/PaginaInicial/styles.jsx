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
    width: 240px;
    height: 310px;
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
    width: 230px;
    height: 15px;
    padding: 0;
    margin: 0;


  }
  .like-btn img {
  /* Controle o tamanho do coração aqui */
  width: 15px;  /* Ajuste esse valor conforme quiser (ex: 18px, 15px...) */
  height: auto;
  transition: transform 0.2s; /* Efeito suave ao clicar */
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
  }

  .carModel {
    text-align: left;
    color: #000;
    font-size: 0.7rem;
    font-weight: bolder;
  }

  .usersNumber {
    font-size: large;
    color: #000;
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
  width: 100vw;       /* largura total da tela */
  height: 60px;
  background: black;
  z-index: 5;
  color: #000;
  font-size: smaller;
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
      gap: 24px;
      padding: 0 5px;
    }

    .buttonLeft,
    .buttonRight {
      width: 36px;
      height: 36px;
    }

    .item {
      width: 200px;
      height: 280px;
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
      width: 180px;
      height: 260px;
    }

    .CarImage {
      height: 120px;
    }
  }
`;
