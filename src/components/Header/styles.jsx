import styled from 'styled-components';
import ('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Poppins:wght@400;600&display=swap');


export const HeaderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: black; 
    color: #fff;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    max-height: 40px;
    z-index: 1000;

    > img:first-of-type {
        height: 90px;
        width: auto;
        object-fit: contain;
        margin-top: 0;
    }

    button {
        background: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        font-size: 0.6rem;
        white-space: nowrap;
        font-family: Arial, Helvetica, sans-serif;
        
        &:hover {
            background: transparent;
        }
        
        &:focus {
            outline: none;
            background: transparent;
        }
        
        &:active {
            background: transparent;
        }
        
        img {
            height: 20px;
            width: auto;
        }
    }

    /* Tablet */
    @media (max-width: 1024px) {
        padding: 0.5rem;
        gap: 0.5rem;

        > img:first-of-type {
            height: 100px;
        }

        button {
            padding: 0.4rem;
            font-size: 0.9rem;
            gap: 0.4rem;
        }
    }

    /* Mobile */
    @media (max-width: 768px) {
        padding: 0.5rem;
        gap: 0.5rem;
        min-height: 60px;
        max-height: 60px;

        > img:first-of-type {
            height: 80px;
        }

        button {
            padding: 0.3rem;
            font-size: 0;
            gap: 0;
            
            /* Mantém apenas a imagem visível */
            img {
                height: 20px;
                width: auto;
            }
        }
    }

    /* Mobile pequeno */
    @media (max-width: 480px) {
        padding: 0.3rem;
        gap: 0.3rem;
        min-height: 55px;
        max-height: 55px;

        > img:first-of-type {
            height: 60px;
        }

        button {
            padding: 0.25rem;
            font-size: 0;
            gap: 0;
            
            img {
                height: 18px;
            }
        }
    }
`;

export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-left: auto;

    /* Tablet */
    @media (max-width: 1024px) {
        gap: 0.8rem;
    }

    /* Mobile */
    @media (max-width: 768px) {
        gap: 0.5rem;
    }

    /* Mobile pequeno */
    @media (max-width: 480px) {
        gap: 0.3rem;
    }
`;