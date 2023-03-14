import { useState, useEffect } from "react"
import styled from "styled-components";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "./assets/img/header-img.png"
import 'animate.css' 
import TrackVisibility from 'react-on-screen';
import {AboutMeSection, AboutMeDivJustifyCenter, AboutMeSpan, AboutMeH1, AboutMeP, AboutMeButton, AboutMeImg, AboutMeSpanTxtRotate} from "./styled-components/aboutMe.styled";





export const AboutMe = () => {
    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false) 
    const toRotate = ["Web Developer" , "Web Designer" , "Sys Engineer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300- Math.random() * 100)
    const [index, setIndex] = useState(1);
    const period = 2000;
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        let ticker = setInterval( () =>{
            tick();
        }, delta )
        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1 )
        
        setText(updatedText)
        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period)
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1 )
            setIndex(1)
            setDelta(350)
            
        }else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
        return(
            <AboutMeSection id="home">
            
              <AboutMeDivJustifyCenter>
                <div>
                  <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__jello" : ""}>
                      <AboutMeSpan>Welcome to my Portfolio</AboutMeSpan>
                      <AboutMeH1>{`Hi! I'm Maxi, `} </AboutMeH1>
                      <AboutMeH1> <span data-period="1000" data-rotate='[ "Web Developer", "Web Designer", "Sys Engineer" ]'><AboutMeSpanTxtRotate>{text}</AboutMeSpanTxtRotate></span></AboutMeH1>
                        <AboutMeP>System engineer, senior experience with the framework Genexus developing. </AboutMeP>
                        <AboutMeButton onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/>  </AboutMeButton>
                    </div>}
                  </TrackVisibility>
                </div>
                <div >
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <AboutMeImg src={headerImg} alt="Header Img"/>
                      </div>}
                  </TrackVisibility>
                </div>
              </AboutMeDivJustifyCenter>
            
          </AboutMeSection>
          
        )

    }


export default AboutMe

