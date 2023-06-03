import styled from "styled-components";

export const AboutMeSection = styled.div ` 
        height: 100%;
        margin-top: 50px;
        padding: 0px 0 ;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

export const AboutMeCharacterContainer = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top:0;
    opacity: var(--opacity);
`;

export const AboutMeCharacter = styled.div `
    position:relative;
    top:0;
    display: flex;
    & p {
        margin-left: 2px;
        margin-right: 2px;
        position: relative;
        font-size: 15px;
        font-family: 'Times New Roman', Times, serif;
        background: transparent;
        color: #f30889;
        //margin: 0 4px;
        //border-radius: 50%;
        text-shadow: #f578bc 1px 0 10px;
        animation: animate 30s linear infinite;
        animation-duration: calc(125s / var(--i));
        margin-top: calc(125s / var(--i));
        
    }

    & p:nth-child(even) {
        font-family: 'Times New Roman', Times, serif;
        background: transparent;
        color: #f30889;
        //border-radius: 50%;
        text-shadow: #f578bc 1px 0 10px;
    }

    @keyframes animate {
    0% {
        transform: translateY(100vh) scale(1);
    }

    100% {
        transform: translateY(0vh) scale(1);
    }

        }

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
    font-size: 35px;
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
    max-width: 90%;
    padding: auto;
    text-align: center;
    display: block;
    margin: auto;
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
    padding: 100px 0;

    .resume {
        color: var(--main-color);
        position: relative;
        top: 10px;
        font-size: 25px;
        & span {
            font-size: 25px;
            font-weight: 200;
            color: var(--color);
        }
    }

        @media (max-width: 768px) {
        
    }

 `;

 export const AboutMeButtonsDiv = styled.div `
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap ;
    margin-top: -30px;
`;
