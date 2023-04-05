import styled from "styled-components";

export const Section = styled.div`
width: 100%;
/* height: 100vh; */
padding-top: 80px;
padding-bottom: 80px;
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

export const Title = styled.h2`
display: flex;
justify-content: center;
font-size: 25px;
font-family: "Poppins";
line-height: 30px;
font-weight: 700;
color: #5F5F67;
`

export const Title2 = styled.h2`
display: flex;
align-self: start;
font-size: 22px;
font-family: "Poppins";
line-height: 30px;
font-weight: 700;
color: #5F5F67;


`

export const Subtitle = styled.h3`
display: flex;
justify-content: center;
line-height: 25px;
font-weight: 400;
align-self:center;
text-align:center;
padding-top: 10px;
color: #5F5F67;
font-family: 'Montserrat', sans-serif;
font-size: 15px;
letter-spacing: 1.5px;

`

export const Text = styled.p`
/* display: flex;
justify-content: center; */
font-family: 'Montserrat', sans-serif;
font-size: 15px;
line-height: 40px;
letter-spacing: 1.5px;
font-weight: 400;
/* align-self:center;
text-align:center; */
padding-top: 10px;
color: #5F5F67;
width: 1000px;
text-align: justify;

`

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