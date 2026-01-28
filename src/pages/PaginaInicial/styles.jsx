import styled from 'styled-components';


export const Container = styled.div`
  padding: 2rem;
  text-align: center;
  
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
    height: 58.8%;
    z-index: -1;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
  }

  .item {
    background-color: white;
    margin: 10px;
    padding: 10px;
    width: 280px;
    ;
  }
  .CarImage{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .carModel {
    display: block;
    text-align: left;
    color: #000000;
    padding: 5px;
    border-radius: 10px;
  }
  

    .bar{
      position: absolute;
      display: block;
      width: 100%;
      height: 80px;
      left: 0;
      right: 0;
      background: rgba(0,0,0,0.70);
}


    `;