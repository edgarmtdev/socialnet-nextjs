import styled from "styled-components";

export const Feed = styled.section`
    padding-top: 1rem;
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1.8fr 1fr;
    gap: 3rem;

    @media(max-width: 1000px) {
        max-width: 920px;
        gap: 1rem;
        margin: 0 auto;
    }
    
    @media(max-width: 912px) {
        max-width: 500px;
        display: block;
    }

    @media(max-width: 520px) {
        margin: 0 10px;
        gap: 0.5rem;
    }
`

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background-color: #182635;
    height: 25rem;
    padding: 20px;
    border-radius: 10px;
    color: #dadada;
    position: relative;
    @media(max-width: 912px) {
        height: 14rem;
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
    height: 30%;
    width: 100%;
    
    @media (min-width: 912px){
        height: 15%;
    }
`