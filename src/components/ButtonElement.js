import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Button=styled(Link)`
    text-decoration: none;
    border-radius: 50px;
    background: ${({primary})=>(primary?'#79B4B7':'#11324D')};
    white-space: nowrap;
    padding: ${({big})=>(big?'14px 48px':'12px 30px')};
    color: ${({dark})=>(dark?'#F7F6F2':'11324D')};
    color: ${({dark2})=>(dark2?'#F7F6F2':'#F7F6F2')};
    font-size: ${({fontBig})=>(fontBig?'20px':'16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary?'#F7F6F2':'#79B4B7')};
        color: ${({dark2})=>(dark2?'#11324D':'#F7F6F2')};
    }
`;