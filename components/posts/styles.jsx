import styled from "styled-components";

export const Post = styled.article`
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 6px -1px #d5d5d5bf;
    
`

export const Author = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 20px;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
`

export const Content = styled.div`
    margin-top: 5px;
    margin-bottom: 5rem;
`