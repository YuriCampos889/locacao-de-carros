import styled from 'styled-components';


export const Container = styled.div`
  padding: 2rem;
  text-align: center;
  overflow-x: hidden;
  max-width: 96vw;

  
  h1 {
    color: #000000;
    margin-bottom: 1rem;
  }
  
  p {
    color: #f7f7f7;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }


  .carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 100%;
  margin: 1rem 0;
  position: relative;
  margin-top: 3rem;   /* sobe 3rem; aumente/diminua conforme quiser */

}

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0 10px;
  scrollbar-width: none;
  gap: 90px;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.buttonLeft,
.buttonRight {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}




.item {
    background-color: rgba(255, 255, 255, 0.80); 
    margin: 10px;
    padding: 5px;
    width: 240px;
    height: 310px;
    border-radius: 16px;
    flex: none;
    display: flex;
    flex-direction: column;
    overflow: hidden; /* Corta o que sobrar da barra de preço */
  }
  .CarImage {
    width: 100%;
    height: 140px; /* Defina uma altura fixa que caiba no seu card de 340px */
    object-fit: contain; /* 'contain' garante que o carro apareça inteiro sem cortes */
    background-color: transparent; /* Opcional: caso a imagem tenha fundo transparente */
    height: 160px;    /* Forçamos uma altura para a imagem */
    object-fit: contain; /* Agora o contain tem uma área definida para trabalhar */
    overflow: hidden;   /* Garante que nada saia da área */
  }

  .CarImage img {
    max-width: 100%;
    max-height: 100%;
    width: auto;     /* Mantém a proporção real */
    height: auto;    /* Mantém a proporção real */
    object-fit: contain; 
    display: block;

  }

  .info {
    flex: 1;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .carModel {
    display: block;
    text-align: left;
    color: #000000;
    border-radius: 10px;
  }
  
  .price {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #000000;
  }


    .bar{
      position: absolute;
      display: block;
      width: 100%;
      height: 50px;
      left: 0;
      right: 0;
      background: black;
      color: black;
      margin-top: 3px;
}


    `;