import styled from "styled-components";

export const PortfolioWrapperNav = styled.nav ` {
    
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    & button {
        
        text-decoration: none;
        padding: 25px 25px;
        border-bottom: solid 2px transparent;
        &:hover {
            border-bottom: solid 2px #222;
            
        }
    }
} `;

export const PortfolioWrapperLogo = styled.div ` {
    width: 250px;
    
} `;

