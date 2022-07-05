import styled, { css } from "styled-components";

export const RouteAuth = styled.li`
    padding: 5px 1rem;
    color: white;
    border: 1px white solid;
    border-radius: 999px;
    cursor: pointer;
    ${({ login }) => login && css`
        background-color: white;
        color: black;
    `
    }
    &:hover{
        opacity: .8;
    }
`