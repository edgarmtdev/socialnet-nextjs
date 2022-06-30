import styled, { css } from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    position: fixed;
    z-index: 10;
    background-color: #101821;
    color: white;
    font-size: 0.75rem;
    font-weight: 500;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%; 
    @media(max-width: 720px) {
        padding-left: 0;
        padding-right: 2rem;
    }
`

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    @media(max-width: 720px) {
        /* padding: 15px 0; */
    }
`

export const Links = styled.ul`
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 2rem;
    padding: 1rem 0;
    ${({ idLogged }) => idLogged && css`
    padding: 0;
    `
    }
`

