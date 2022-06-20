import styled from "styled-components";

export const NavAside = styled.div`
    position: fixed;
    background-color: #212e36;
    width: 20%;
    height: 100vh;
    z-index: 1;
    top: 0; 
    border-right-width: 1px;
    border-color: rgb(75 85 99);
    padding-top: 8rem;
    color: lightgray;
`

export const ContainerNav = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-weight: 500;
    font-size: 16px;
`

export const ListItem = styled.li`
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #212e36;
    cursor: pointer;
    &:hover{
        background-color: #2b3b45;
    }
`