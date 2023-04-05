import { Section, Title, Subtitle } from "../styles";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [t] = useTranslation("global");
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`)

  }
  return (
    <>
      <ServiceSection>
        <Title> {t("services.title")}</Title>
        <Subtitle>{t("services.subtitle")}</Subtitle>
        <ServicesDetails>
          <Box onClick={() => handleNavigate("editing")}>
            <h4>{t("services.editionTitle")}</h4>
            <p>{t("services.editionText")}</p>
            {/* <button> {t("services.button")}</button> */}
          </Box>
          <Box onClick={() => handleNavigate("writing")}>
            <h4>{t("services.writingTitle")}</h4>
            <p>{t("services.writingText")}</p>
            {/* <button> {t("services.button")}</button> */}
          </Box>
        </ServicesDetails>
      </ServiceSection>
    </>
  );
};

const ServiceSection = styled.div`
width: 100%;
/* height: 100vh; */
margin-top: 400px;
padding-top: 80px;
padding-bottom: 80px;
display: flex;
flex-direction: column;
align-items: center;
color: #5F5F67;
height: auto;`

const ServicesDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Box = styled.div`
  height: 350px;
  width: 300px;
  margin: 30px;
  border: 1px solid #5f5f67;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;

  :hover {
    background-color: #5f5f67;
    color: #dad6cc;
    height: 350px;
    width: 310px;

    button {
      background-color: #5f5f67;
      color: #dad6cc;
    }
  }

  h4 {
    font-weight: 500;
    font-size: 18px;
    padding-top: 35px;
  }

  p {
    width: 200px;
    font-size: 13px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    font-weight: 500;
    text-align: center;
    padding-top: 7px;
    line-height: 28px;
  }
  button {
    position: absolute;
    top: 1560px;
    border: none;
    background-color: #dad6cc;
    color: #5f5f67;
    font-size: 13px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    text-decoration: underline;
  }
`;

export default Services;
