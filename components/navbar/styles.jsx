import styled, { keyframes, css } from 'styled-components'

const animate = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Nav = styled.nav`
    background-color: #212121;
    color: white;
    font-size: 0.75rem;
    font-weight: 500;
`

export const Menu = styled.div`
    display: none;
    position: fixed;
    width: 100vh;
    right: 0px;
    top: 55px;
    background-color: #212121;
    width: 20%;
    ${({ primary }) => primary && css`
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