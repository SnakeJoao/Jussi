import { Container, Content, LeftContent, RightContent, Logo } from "./styles";

import BrastempLogo from "../../assets/logo-brastemp.png";
import CompraCertaLogo from "../../assets/logo-compra-certa.png";
import ConsulLogo from "../../assets/logo-consul.png";
import ThebarLogo from "../../assets/logo-thebar.png";

export function MainStores() {
  return (
    <Container>
      <Content>
        <LeftContent>
          <h4>Nossas principais lojas VTEX</h4>
          <span>→</span>
        </LeftContent>
        <RightContent>
          <Logo>
            <img src={BrastempLogo} alt="Logo Brastemp" />
          </Logo>
          <Logo>
            <img src={CompraCertaLogo} alt="Logo Compra certa" />
          </Logo>
          <Logo>
            <img src={ConsulLogo} alt="Logo Consul" />
          </Logo>
          <Logo>
            <img src={ThebarLogo} alt="Logo Thebar" />
          </Logo>
        </RightContent>
      </Content>
    </Container>
  );
}
