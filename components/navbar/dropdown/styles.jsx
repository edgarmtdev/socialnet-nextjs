import styled, { keyframes, css } from 'styled-components'

const animate = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Menu = styled.div`
    display: none;
    position: absolute;
    width: 100vh;
    right: 0px;
    top: 55px;
    background-color: #212121;
    width: 20%;
    ${({ primary }) => primary && css`
    animation: ${animate} .4s ease;
    display: block;
    border-bottom-left-radius: 5px;
    z-index: 10;
    `
    }
`