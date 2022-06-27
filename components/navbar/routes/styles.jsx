import styled from "styled-components";

export const Cicle = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 56px;
    background-color:  rgb(27 51 102);
    border-radius: 9999px;
    &:hover{
        background-color: rgb(42 102 159)
    }
`


export const Item = styled.li`
    padding: 1rem;
    margin: 0.7rem 0;
    border-radius: 0.400rem;
    cursor: pointer;

    &:hover {
        background-color: #2d3449;
    }

    @media(max-width: 400px) {
        display: none;
    }
`