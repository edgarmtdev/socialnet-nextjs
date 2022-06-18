import styled from "styled-components";

export const Feed = styled.section`
    padding-top: 2rem;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2rem;
`

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background-color: #2b3b45;
    height: 30rem;
    padding: 20px;
    border-radius: 10px;
    color: #dadada;
    position: relative;
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