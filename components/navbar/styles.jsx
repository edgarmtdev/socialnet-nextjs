import styled, { css } from 'styled-components'

export const Nav = styled.nav`
    background-color: #212e36;
    border-bottom: #54586e 1px solid;
    color: white;
    font-size: 0.75rem;
    font-weight: 500;
    position: fixed;
    width: 100%;
    z-index: 10;
    padding-left: 1rem;
    padding-right: 1rem;
`

export const NavContainer = styled.div`
    /* max-width: 1280px; */
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const Item = styled.li`
    padding: 1rem;
    margin: 0.7rem 0;
    border-radius: 0.400rem;
    cursor: pointer;

    &:hover {
        background-color: #2d3449;
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