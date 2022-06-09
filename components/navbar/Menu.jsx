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
    right: 0px;
    top: 55px;
    background-color: black;
    width: 20%;
    ${({ primary }) => primary === true && css`
    animation: ${animate} 1s ease;
    display: block;
    `
    }
`
