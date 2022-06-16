import styled, { css } from 'styled-components'

export const Nav = styled.nav`
    background-color: #212121;
    color: white;
    font-size: 0.75rem;
    font-weight: 500;
`

export const NavContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
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

export const Links = styled.ul`
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 2rem;
    padding: 1rem;
    ${({ idLogged }) => idLogged && css`
    padding: 0;
    `
    }
`