import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { ProjectCard } from './components/ProjectCard';






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Projects() {
  const imgISO = "src/pages/Portfolio/components/projects/assets/img/iso-9001.jpg"
  const imgTC = "src/pages/Portfolio/components/projects/assets/img/tuc-mas.jpg"

  return (
    <div id="projects" >
      <Box sx={{ flexGrow: 1 } }>
        <Grid container spacing={2} >
          <Grid item xs={4} >
              <ProjectCard 
              logo='ISO' 
              color='deepPurple[500]'
              title='ISO 9001 document management' 
              date='Finished 2017' 
              short={'The app has the ability to save and manage versions of process documents'}
              img={imgISO}
              alt='ISO 9001'
              detail='System created for the management of process documents with ISO 9001 certification. Created in ASP.NET. Currently in operation in the Department of Systems of the UTN FRT and in the cadastral system of Tucuman Argentina.' 
              web={true}
              mobile={false} />
          </Grid> 
          <Grid item xs={4}>
            
            <ProjectCard 
              logo='TM' 
              color='deepOrange[500]'
              title='Tucuman Mascotas' 
              date='in course since 2018' 
              short={'The app has the database of all the pets of the province of Tucuman and let the community to schedule the castration of their pets'}
              img={imgTC}
              alt='Tucuman Mascotas'
              detail='System created with the purpose of managing the database of pets of the province of Tucuman. Created in ASP.NET. Currently in operation in the domain https://mascotas.tucuman.gob.ar'
              web={true}
              mobile={true}/>
          </Grid>
          <Grid item xs={4}>
            <ProjectCard 
              logo='TM' 
              color='deepOrange[500]'
              title='Tucuman Mascotas' 
              date='in course since 2018' 
              short={'The app has the database of all the pets of the province of Tucuman and let the community to schedule the castration of their pets'}
              img={imgTC}
              alt='Tucuman Mascotas'
              detail='System created with the purpose of managing the database of pets of the province of Tucuman. Created in ASP.NET. Currently in operation in the domain https://mascotas.tucuman.gob.ar'
              web={true}
              mobile={true}/>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}