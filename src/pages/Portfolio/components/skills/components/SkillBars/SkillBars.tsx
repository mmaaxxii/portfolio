import { SkillBarsGeneralDiv } from "./styled-components"
export default function SkillBars() {
  return (
    <SkillBarsGeneralDiv className="skill">
        <h1>my Skills</h1>
        <li>
            <h3>html</h3>
            <span className="bar"><span className="html"></span></span>
        </li>
        <li>
            <h3>css</h3>
            <span className="bar"><span className="css"></span></span>
        </li>
        <li>
            <h3>js</h3>
            <span className="bar"><span className="js"></span></span>
        </li>
        <li>
            <h3>react</h3>
            <span className="bar"><span className="react"></span></span>
        </li>
        <li>
            <h3>ts</h3>
            <span className="bar"><span className="ts"></span></span>
        </li>
        <li>
            <h3>poo</h3>
            <span className="bar"><span className="poo"></span></span>
        </li>
        <li>
            <h3>sql</h3>
            <span className="bar"><span className="sql"></span></span>
        </li>
        <li>
            <h3>genexus</h3>
            <span className="bar"><span className="genexus"></span></span>
        </li>
    </SkillBarsGeneralDiv>
    
  )
}