import styled, { keyframes, css } from 'styled-components'

const animate = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Menu = styled.div`
    display: none;
    position: absolute;
    right: 0px;
    top: 73px;
    background-color: #293f4e;
    width: 20%;
    ${({ primary }) => primary && css`
    animation: ${animate} .4s ease;
    display: block;
    border-bottom-left-radius: 10px;
    z-index: 20;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    `
    }
`

export const User = styled.li`
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 20px 20px;
    border-bottom: 1px;
    border-color: rgb(100 116 139)
`

export const Item = styled.li`
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 8px 16px;
    cursor: pointer;
    margin: 8px 0;
    &:hover {
        background-color: rgb(71 85 105)
    }
    ${({ signout }) => signout && css`
        color: rgb(220 38 38 );
        font-weight: 700;
    `
    }
`