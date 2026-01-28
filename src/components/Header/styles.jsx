import styled from 'styled-components';

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #000;
    color: #fff;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    min-height: 68px;
    max-height: 65px;
    z-index: 1000;

    > img:first-of-type {
        height: 135px;
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
        font-size: 1rem;
        
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

`;

export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: auto;
`;