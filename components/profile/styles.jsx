import styled from "styled-components";

export const ProfileCont = styled.section`
    display: grid;
    grid-template-columns: 2fr 1.3fr;
    gap: 4rem;
    padding-top: 2rem;
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
    @media(max-width: 900px) {
        display: block;
        margin: 0 4rem;
    }
    @media(max-width: 500px) {
        display: block;
        margin: 0 0.5rem;
    }
`

export const CardUser = styled.section`
    background-color: #212e36;
    color: white;
    position: relative;
    padding: 2.5rem;
    margin-bottom: 2.5rem;
    z-index: 0;
    width: 100%;
    height: 300px;
    border-radius: 10px;
    @media(max-width: 720px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Background = styled.img`
    height: 45%;
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

export const Aside = styled.section`
    width: 100%;
    height: 300px;
    background-color: #212e36;
    border-radius: 10px;
    padding: 2.5rem;
    @media(max-width: 900px) {
        display: none;
    }
`

export const NumberFriend = styled.p`
    display: inline-block;
    color: lightgray;
    font-size: 14px;
`

export const Name = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin-top: 2.5rem;
`