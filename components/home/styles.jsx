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
    background-color: white;
    height: 30rem;
    box-shadow: 5px 5px 6px -1px #d5d5d5bf;
    padding: 20px;
    border-radius: 10px;
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