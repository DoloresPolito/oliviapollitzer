import styled from "styled-components";
import { motion } from "framer-motion";

export const Page = styled.div`
height: 100%;
width: 100%;

`

export const Section = styled.div`
width: 100%;
/* height: 100vh; */
padding-top: 80px;
padding-bottom: 180px;
display: flex;
flex-direction: column;
align-items: center;
color: #5F5F67;
height: auto;
`

export const HomeSection = styled.div`
width: 100%;
/* height: 100vh; */
padding-top: 80px;
padding-bottom: 80px;
display: flex;
flex-direction: column;
align-items: center;
color: #5F5F67;
`

export const Title = styled(motion.h2)`
display: flex;
justify-content: center;
/* 
font-size: 38px;
font-family: "Playfair Display";
font-weight: 700;
color: #f6f6f6; */

color:  #ffffff;
  font-family: 'Bebas Neue', cursive;
  font-weight: 600;
letter-spacing: 2px;
  font-size: 50px;
  margin-top: 50px;


@media only screen and (max-width: 535px) {
  font-size: 20px;
  }
`

export const Title2 = styled(motion.h2)`
display: flex;
align-self: start;
font-size: 22px;
font-family: "Poppins";
line-height: 30px;
font-weight: 700;
color: #5F5F67;
margin-bottom: 40px;
letter-spacing: 1px;

/* border-bottom: 0.8px solid #000;
padding-bottom: 3px; */


`

export const Subtitle = styled(motion.h3)`
display: flex;
justify-content: center;
line-height: 30px;
font-weight: 400;
align-self:center;
text-align:center;
padding-top: 10px;
color: #f6f6f6;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
letter-spacing: 1.2px;

@media only screen and (max-width: 535px) {
  font-size: 12px;
  }

`

export const Text = styled(motion.p)`
/* display: flex;
justify-content: center; */
font-family: 'Montserrat', sans-serif;
font-size: 15px;
line-height: 36px;
letter-spacing: 1.2px;
font-weight: 400;
/* align-self:center;
text-align:center; */
padding-top: 10px;
color: #5F5F67;
width: 1000px;
text-align: justify;

`


export const BackButton = styled.button`
background-color: transparent;
border: solid 1px #5F5F67;
border-radius: 2px;
font-family: 'Montserrat', sans-serif;
font-size: 12px;
line-height: 40px;
letter-spacing: 1.1px;
font-weight: 400;
margin-top: 20px;
cursor: pointer;

:hover{
  background-color: #5F5F67;
border: solid 1px #5F5F67;
color:#f6f6f6;
}

`

export const LanguageButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
color:#5f5f67;
font-family: "Montserrat";
font-weight: 600;
font-size: 14px;
line-height: 14px;
text-decoration: none;


`;

export const Container = styled.div`
  /* margin: auto; */
   max-width: 1140px;
   


   @media only screen and (min-width: 701px) and (max-width: 1200px) {
    max-width: 90%;
  }
  @media only screen and (min-width: 1900px) {
    margin: auto;
  }
  @media only screen and (max-width: 700px) {
    margin: 0 24px;
    /* padding 24px 0;  */
  } 
   
`;