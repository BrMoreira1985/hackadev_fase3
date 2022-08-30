import styled, { css } from "styled-components";

export const Container = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--navbar);
    
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);

    .user {
        font-size: 1.4rem;
        align-items: center;
        justify-content: space-batween;
        height: 6rem;
        width: 80%;
        margin: auto;
        display: flex;
        color: var(--azulmarinho);
    }

    .svg {
        position: absolute;
        top: 0;
        right: 0;
        color: var(--azulmarinho);
    }

    .mobile {
        position: absolute;
        top: 5px;
        right 5px;
        font-size: 30px;
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);
        
        .mobile {
            display: none !important;
        }

        .user {
            display: flex !important;
        }
    `}
`;
