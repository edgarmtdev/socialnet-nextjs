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
    padding-right: 3rem;
    @media(max-width: 720px) {
        padding-left: 0;
        padding-right: 2rem;
    }
`

export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-right: 2rem;
    @media(max-width: 720px) {
        padding: 15px 0;
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