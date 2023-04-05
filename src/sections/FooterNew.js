import styled from "styled-components";
import "../App.css";
import logo from "../assets/logo1/lastolivia pollitzer__Beige I.png";
import { useTranslation } from "react-i18next";

const FooterNew = () => {
  const [t] = useTranslation("global");

  return (
    <FooterSection>
      <FooterContainer>
        <div>
          {" "}
          <Logo src={logo} />
        </div>

<TextSection>
<Column1>
          <h4>{t("footer.title")}</h4>
          <ui className="list">
            <li>oliviapollitzer@gmail.com</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ui>
        </Column1>

        <Column2>
          {" "}
          <ui className="list">
            <li> {t("footer.work")}</li>
            <li>{t("footer.about")}</li>
            <li>{t("footer.contact")}</li>
          </ui>
        </Column2>
</TextSection>
       
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #BDB6AA;
  color: #EAE9E5;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  width: 90%;
  position: relative;


`;

const Logo = styled.img`
  position: relative;
  left: 0px;
  /* top:40px; */
`;

const TextSection = styled.div`
display: flex;
flex: column;
justify-self: flex-end;
width: 500px;
margin-left: 520px;
position: relative;
margin-top: 0px;
width: 80%;
`

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 40px;
`;

export default FooterNew;
