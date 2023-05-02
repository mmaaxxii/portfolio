import styled from "styled-components";



export const SkillsSection = styled.section`
    z-index: -2;
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    
    
`
export const SkillsHeader = styled.div`
     margin-top: 50px;
     p {
        width: 80%;
        margin: auto;
        text-align: center;
        padding-bottom: 1.56rem;
     }
    h4 { 
        
        padding: 10px;
        text-align: left;
        padding-left: 50px;
     }
    span {
        color: var(--main-color);
    }

    @media (max-width: 900px) {
            
        h1 { 
         margin-top: 100px;
        }
         }

`