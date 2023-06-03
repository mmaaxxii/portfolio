
import { SkillBars, TimeLine } from './components';
import { SkillsSection , SkillsHeader} from './styled-components';
import 'animate.css';
import { Grid } from '@mui/material';

export default function Skills() {
  return (
    <>
    <SkillsHeader> 
      <div className='animate__animated animate__backInDown' >
        <h1> my<span>Ex</span>perience </h1>
        <br></br>
        <p>Through various experiences, I have developed what I believe to be my greatest strength: the ability to learn quickly and independently, resulting in tangible accomplishments.</p>
        <p>As a result, I have gained expertise in a variety of areas, including Agile methodologies, Scrum framework, iOS, Android, web development, Windows development, IT, Genexus, design (Adobe Products), and architecture (Autocad, SketchUp), among manji,other programs that I have learned over the past 10 years to successfully execute projects under my leadership.</p>
      </div>
    </SkillsHeader>

    <SkillsSection >
      <Grid container direction="row" justifyContent="space-around" alignItems="flex-start"  >
            <Grid item xs={11.5} md= {5.5} lg={5.5}>
              <SkillBars /> 
            </Grid>
            <Grid item xs={11.5} md= {5.5} lg={5.5}>

              <div className='animate__animated animate__backInUp' >
                <TimeLine/>
              </div>
            </Grid>
      </Grid>
    </SkillsSection>

    </>
  )
}