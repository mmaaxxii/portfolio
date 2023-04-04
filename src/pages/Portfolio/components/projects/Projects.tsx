import Grid from '@mui/material/Grid';
import { ProjectCard } from './components/ProjectCard';
import { ProjectsDiv } from './styled-components';


export default function Projects() {
  const imgISO = "src/pages/Portfolio/components/projects/assets/img/iso.png"
  const imgTC = "src/pages/Portfolio/components/projects/assets/img/tuc.png"
  const imgBar = "src/pages/Portfolio/components/projects/assets/img/BAR.png"

  return (
    <ProjectsDiv>
        <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={2} >
          <Grid item xs={10} md= {5.5} lg={3.5}>
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
          <Grid item xs={10} md= {5.5} lg={3.5}  >
            
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
          <Grid item xs={10} md= {5.5} lg={3.5} >
            
            <ProjectCard 
              logo='GA' 
              color='deepOrange[500]'
              title='Gastronomic App' 
              date='in course since 2016' 
              short={'The app has being create for the management of a gastronomic business. It has the ability to manage the menu, the orders, the clients and the employees'}
              img={imgBar}
              alt='Gastronomic App'
              detail='App created on Genexus, has multiple modules that allow adapt the software 100% to the requeriments of the client.'
              web={true}
              mobile={true}/>
          </Grid>
          <Grid item xs={10} md= {5.5} lg={3.5}>
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
          <Grid item xs={10} md= {5.5} lg={3.5}  >
            
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
          <Grid item xs={10} md= {5.5} lg={3.5} >
            
            <ProjectCard 
              logo='GA' 
              color='deepOrange[500]'
              title='Gastronomic App' 
              date='in course since 2016' 
              short={'The app has being create for the management of a gastronomic business. It has the ability to manage the menu, the orders, the clients and the employees'}
              img={imgBar}
              alt='Gastronomic App'
              detail='App created on Genexus, has multiple modules that allow adapt the software 100% to the requeriments of the client.'
              web={true}
              mobile={true}/>
          </Grid>
        </Grid>
      
    </ProjectsDiv>
  )
}