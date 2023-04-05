import styled from "styled-components";
import "../App.css";
import logo from '../assets/logo1/lastolivia pollitzer__Beige I.png'
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
       
          <div className="col1">
            <Logo src={logo}/>
          </div>
        
          <div className="col2">
            <h4>


            {t("footer.title")}
            </h4>
            <ui className="list">
              <li>oliviapollitzer@gmail.com</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ui>
          </div>
 
          <div className="col3">
          {/* <h4></h4> */}
            <ui className="list">
              <li> {t("footer.work")}</li>
              <li>{t("footer.about")}</li>
              <li>{t("footer.contact")}</li>
            </ui>
          </div>
        </div>
     
        <div className="row">
          <p className="col-sm">
          {t("footer.rights")}
          </p>
        </div>
      </div>
    </div>
  );
};

const Logo = styled.img`
position: absolute;
left:0px;
top:40px;
`

export default Footer;
