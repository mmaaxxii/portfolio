
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
      </div>
    </SkillsHeader>

    <SkillsSection >
    <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={2} >
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