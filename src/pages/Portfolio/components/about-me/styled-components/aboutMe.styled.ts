import styled from "styled-components";

export const AboutMeSection = styled.section ` 
        height: 100%;
        margin-top: 50px;
        padding: 0px 0 ;
        background-position-y: 0;
        background-image: var(--bgImg);
        background-position: absolute;
        background-size: cover;     
        background-repeat: no-repeat;
        background-attachment: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

export const AboutMeSpan = styled.span ` 
    font-weight: 700;
    letter-spacing: 0.8px;
    padding: 8px 10px;
    background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
    border: 1px solid rgba(255, 255, 255, 0.5);
    font-size: 20px;
    margin-bottom: 16px;
    display: inline-block;
 `;

export const AboutMeH1 = styled.h1 ` 
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 1;
    margin-bottom: 20px;
    display: block;
 `;    

export const AboutMeP = styled.p ` 
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    width: 96%;
 `;

export const AboutMeButton = styled.button ` 
    padding: 10px;
    background: linear-gradient(90.21deg, rgba(243, 8, 137, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
    font-weight: 700;
    color: var(--color);
    font-size: 20px;
    margin-top: 60px;
    margin-left: 20px;
    letter-spacing: 0.8px;
    display: flex;
    align-items: center;
    & svg{
        font-size: 25px;
        margin-left: 10px;
        transition: 0.3s ease-in-out;
        line-height: 1;
    };
    &:hover{
        & svg{
            margin-left: 25px;
        }
        
    }
 `;

export const AboutMeImg = styled.img ` 
    margin-bottom: 20px;
    width: 80%;
    animation: updown 3s linear infinite;
    @keyframes updown {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-50px);
        }
        100% {
            transform: translateY(0px);
        }
    }
 `;


export const AboutMeSpanTxtRotate = styled.span ` 
    border-right: 0.08em solid #666;
 `;
export const AboutMeDivJustifyCenter = styled.div ` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
    padding: 20% 0;
 `;