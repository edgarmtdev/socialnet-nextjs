import styled from "styled-components";

export const ProfileCont = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding-top: 2rem;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    gap: 20px;
`

export const CardUser = styled.section`
    background-color: #212e36;
    color: white;
    position: relative;
    padding: 2.5rem;
    z-index: 0;
    width: 100%;
    border-radius: 10px;
`

export const Background = styled.img`
    height: 50%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -1;
    left: 0;
    top: 0;
    border: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const Promotions = styled.section`
    width: 100%;
    height: 100%;
    background-color: #212e36;
    border-radius: 10px;
`