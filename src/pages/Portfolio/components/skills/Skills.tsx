
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
        <p>The experience led me to acquire what I believe is my best virtue. The ability to learn in a self-directed way in a fast way, reaching solid results. That has led me to today having experience in: iOS, Android, web, Win, Genexus, design (Adobe Products), architecture (Autocad, Sketchup), among many other programs that I have had to learn during the last 10 years to carry out projects that I was in charge of. </p>
      </div>
    </SkillsHeader>

    <SkillsSection >
    <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" spacing={2} >
          <Grid item xs={10} md= {5.5} lg={5.5}>
            <SkillBars /> 
          </Grid>
          <Grid item xs={10} md= {5.5} lg={5.5}>

            <div className='animate__animated animate__backInUp' >
              <TimeLine/>
            </div>
          </Grid>
    </Grid>
    </SkillsSection>

    </>
  )
}