import styled from "styled-components";

export const Feed = styled.section`
    padding-top: 2rem;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2rem;
    @media(max-width: 700px) {
       display: block;
       margin: 0 1rem;
    }
`

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background-color: #212e36;
    height: 30rem;
    padding: 20px;
    border-radius: 10px;
    color: #dadada;
    position: relative;
    @media(max-width: 700px) {
        height: 10rem;
        margin-bottom: 3rem;
    }
`

export const Button = styled.button`
    background-color: #111111;
    color: white;
    font-weight: 500;
    padding: 6px 1rem;
    border-radius: 10px;
    &:hover{ 
        background-color: #212121;
    }
`

export const Name = styled.p`
    font-size: 18px;
    font-weight: 500;
`

export const Background = styled.img`
    position: absolute;
    top: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: cover;
    height: 15%;
    width: 100%;
`