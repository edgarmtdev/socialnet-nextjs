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
    background-color: #212121;
    width: 20%;
    ${({ primary }) => primary === true && css`
    animation: ${animate} 1s ease;
    display: block;
    border-bottom-left-radius: 5px;
    `
    }
`

export const Item = styled.li`
    padding: 1rem;
    margin: 1px;
    border-radius: 0.400rem;
    cursor: pointer;
    &:hover {
        background-color: #3D3D3D;
    }
`