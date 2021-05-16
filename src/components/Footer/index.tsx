import { Container, Content, LeftContent, RightContent } from "./styles";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import WppLogo from "../../assets/wppLogo.png";

export function Footer() {
  return (
    <Container>
      <Content>
        <LeftContent>
          <img src={WppLogo} alt="Logo wppcompany" />
        </LeftContent>
        <RightContent>
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </RightContent>
      </Content>
    </Container>
  );
}
