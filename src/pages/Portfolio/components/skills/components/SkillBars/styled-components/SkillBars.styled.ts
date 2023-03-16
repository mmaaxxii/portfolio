import styled from "styled-components";

export const SkillBarsGeneralDiv = styled.div `
    list-style: none;
    text-transform: uppercase;

    .skill{ 
    width: 500px;
    margin: 60px auto;
    color: #fff;
    padding: 20px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    & li {
        margin: 20px 0;
        padding: 10px;
    }
    }

    .bar { 
    background: #353b48;
    display: block;
    height: 20px;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

    }
    & span {
        height: 20px;
        float: left;
        background: linear-gradient(135deg, rgba(236,0,140,1) 0%, rgba(252,103,103,1) 100%);

    }
    .html { 
        width: 90%;
        animation: html 3s;
    }
    .css { 
        width: 30%;
        animation: css 3s;
    }
    @keyframes html {
        0% {
            width: 0%;
        }
        100% {
            width: 90%;
        }
    }

    h1 {
        text-align: center;
    }
    h3 {
        margin: 5px;
    }
    }

`;



