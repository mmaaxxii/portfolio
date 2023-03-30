import styled from "styled-components";



export const SkillsSection = styled.section`
    z-index: -2;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    
    
`
export const SkillsHeader = styled.div`
    h4 { 
        
        padding: 10px;
        text-align: left;
     }
    span {
        color: var(--main-color);
    }

    @media (max-width: 768px) {
            
        h1 { 
         margin-top: 100px;
        }
         }

`