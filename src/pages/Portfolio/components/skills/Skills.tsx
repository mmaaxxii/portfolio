
import { SkillBars, TimeLine } from './components';
import { SkillsSection , SkillsHeader} from './styled-components';
import 'animate.css';

export default function Skills() {
  return (
    <>
    <SkillsHeader> 
      <div className='animate__animated animate__backInDown' >
        <h1> my<span>Ex</span>perience </h1>
      </div>
    </SkillsHeader>
    <SkillsSection >
     <SkillBars /> 
      <div className='animate__animated animate__backInUp' >
        <TimeLine/>
      </div>
    </SkillsSection>
    </>
  )
}