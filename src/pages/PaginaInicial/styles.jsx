import styled from 'styled-components';


export const Container = styled.div`
  padding: 2rem;
  text-align: center;
  
  h1 {
    color: #333;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 55%;
    z-index: -1;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
    .bar{

    background-color: #f51d1d;
    color: #fff;
    gap: 1rem;
    }
    `;