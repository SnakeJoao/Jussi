import { FiShoppingCart } from "react-icons/fi";

import Search from "../Search";
import {
  Container,
  Content,
  LeftContent,
  RightContent,
  Logo,
  List,
  Login,
  Cart,
} from "./styles";

import JussiLogo from "../../assets/jussiLogo.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <LeftContent>
          <Logo>
            <img src={JussiLogo} alt="" />
          </Logo>
          <List>
            <ul>
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    let NossasSolucoes =
                      document.getElementById("nossas-solucoes");
                    e.preventDefault();
                    NossasSolucoes &&
                      NossasSolucoes.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  Nossas soluções
                </a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    let QuemSomos = document.getElementById("quem-somos");
                    e.preventDefault();
                    QuemSomos &&
                      QuemSomos.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  Conheça a Jussi
                </a>
              </li>
            </ul>
          </List>
        </LeftContent>
        <RightContent>
          <Search />
          <Login>Login</Login>
          <Cart>
            <FiShoppingCart />
          </Cart>
        </RightContent>
      </Content>
    </Container>
  );
}
