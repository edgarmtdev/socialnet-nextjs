import styled from "styled-components";

export const ContainerChat = styled.div`
    margin-left: 20%;
    padding: 2rem;
    overflow-y: scroll;
    height: 80vh;
    width: 100%;
    position: relative;
    z-index: -1;
    &::-webkit-scrollbar {
        width: 10px;  
        background: #32424c;
        border-radius: 4px; 
    }
    &::-webkit-scrollbar-track {
        background: #3b3d3f;
    }
    &::-webkit-scrollbar-thumb{
        background: #1f1e31;
    }

    @media (max-width: 768px) {
        padding: 0.5rem;
    }
`