import styled from "styled-components";
export const InfoContainer=styled.div`
    color: #F7F6F2;
    background: #010606;
    padding: 20px;
    height: 100vh;
    text-align: center;
    @media screen and (max-width: 1200px){
        padding: 50px 0;
        height: 100%;
    }
`;

export const TopLine=styled.div`
    color: #79B4B7;
    font-size: 24px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 24px;
    margin-top: 24px;
`;

export const Heading=styled.h1`
    margin-bottom: 35px;
    font-size: 48px;
    line-height:1.1;
    font-weight: 600;
    color: ${({lightText})=>(lightText?'#f7f8fa':'#010606')};
    @media screen and (max-width:480px){
        font-size: 32px;
    }
`;

export const Subtitle=styled.p`
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    padding-right: 80px;
    margin-left: 80px;
    color: ${({darkText})=>(darkText?'#010606':'#F7F6F2')};
    @media screen and (max-width: 768px){
        justify-content: center;
    }
`;

export const Img=styled.img`
    height: 400px;
    width: 300px;
    float: left;
    margin: 25px;
    margin-top: 0;
    margin-bottom: 55;
    @media screen and (max-width: 768px){
        float: none;
    }
`;

export const BtnWrap=styled.div`
    display: flex;
    justify-content: center;
`;