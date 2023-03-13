import styled from "styled-components";

export const PortfolioWrapperNav = styled.nav` 
    display: flex;
    align-items: center;
    padding: .4rem;
    justify-content: space-between;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;

    h2 {
        font-weight: 400;
        span {
            font-weight: bold;
        }
    }
    a {
            text-decoration: none;
            margin-right: 1rem;
    }
    .links {
        position: absolute;
        top: -700px;
        left: -1000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a {
            display: block;
            font-size: 2rem;
            //border-bottom: solid 2px transparent;
            &:hover {
                //border-bottom: solid 2px #222;
                
            }
        }
        @media (min-width: 768px) {
            position: initial;
            margin: 0;
            a {
                font-size: 1rem;
                display: inline;
            }

        }
    }

    .links.active {
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            font-size: 2rem;
            margin-top: 1rem;
        }
    }

    .burguer {
        @media (min-width: 768px) {
            display: none;
         }
    }
    

 `;

export const PortfolioWrapperLogo = styled.div ` 
    width: 250px;
    
`;

export const BgDiv = styled.div `
position: absolute;
background-color: #444;
top: -100px;
left: -2000px;
right: 0;
width: 100%;
height: 100%;
z-index: 1;
transition: all .6s ease;
@media (min-width: 768px) {
            
    }
&.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
}
`;
