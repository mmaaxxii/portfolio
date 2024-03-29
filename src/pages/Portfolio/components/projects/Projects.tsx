import Grid from '@mui/material/Grid';
import { ProjectCard } from './components/ProjectCard';
import { ProjectsDiv } from './styled-components';


export default function Projects() {
  const imgISO = "/assets/img/iso.jpeg"
  const imgTC = "/assets/img/tuc.jpeg"
  const imgBar = "/assets/img/bar.jpeg"
  const imgGlobal = "/assets/img/global.jpg"
  const imgMA = "/assets/img/Muni.jpeg"
  const imgST = "/assets/img/IT2.jpg"

  

  return (
    <ProjectsDiv>
        <Grid container direction="row" justifyContent="space-around" alignItems="top" spacing={2} >
          <Grid item xs={10} md= {5.5} lg={3.5}>
              <ProjectCard 
              logo='ISO' 
              color='deepPurple[500]'
              title='ISO 9001 document management' 
              date='Finished 2017' 
              short={'This app saves and manages versions of process documents'}
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
              short={'This app has a pet database of the province of Tucuman and also it  allows the community to schedule the neutering of their pets'}
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
              short={'This app has being created for the management of a gastronomic business. It  manages the menu, the orders, the employees as well as the clients'}
              img={imgBar}
              alt='Gastronomic App'
              detail='App created on Genexus, has multiple modules that allow adapt the software 100% to the requeriments of the client.'
              web={true}
              mobile={true}/>
          </Grid>
          <Grid item xs={10} md= {5.5} lg={3.5}>
              <ProjectCard 
              logo='GG' 
              color='deepPurple[500]'
              title='Global Gallery NFT' 
              date='My own NFT Art Gallery' 
              short={'This is my own NFT Art Gallery.'}
              img={imgGlobal}
              alt='ISO 9001'
              detail='I have been creating NFTs since 2021. Working with international artist. I have been selling them on OpenSea and Rarible. I have been creating NFTs since 2021. I have been selling them on OpenSea and Rarible.' 
              web={true}
              mobile={false} />
          </Grid> 
          <Grid item xs={10} md= {5.5} lg={3.5}  >
            
            <ProjectCard 
              logo='MA' 
              color='deepOrange[500]'
              title='Muni App' 
              date='in course since 2018' 
              short={'The app has create to provide many services to the community of Tucuman.'}
              img={imgMA}
              alt='Muni App'
              detail='System created with the purpose of managing the database of pets of the province of Tucuman. Created in ASP.NET. Currently in operation in the domain https://mascotas.tucuman.gob.ar'
              web={true}
              mobile={true}/>
          </Grid>
          <Grid item xs={10} md= {5.5} lg={3.5} >
            
            <ProjectCard 
              logo='ST' 
              color='deepOrange[500]'
              title='Structured Cabling Solutions' 
              date='in course since 2018' 
              short={'Design and implementation of structured cabling projects for high-speed and high-performance network infrastructures'}
              img={imgST}
              alt='Structured Cabling Solutions'
              detail='Experience with Cisco Packet Tracer. I have installed Cat 6 cables, IP phone lines, cameras, and Ethernet networks on a single rack system to provide high-speed and high-performance network solutions.'
              web={false}
              mobile={false}/>
          </Grid>
        </Grid>
      
    </ProjectsDiv>
  )
}