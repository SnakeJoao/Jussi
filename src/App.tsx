import Modal from "react-modal";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { MainStores } from "./components/MainStores";
import { OurSolutions } from "./components/OurSolutions";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <MainStores />
      <OurSolutions />
      <AboutUs />
      <Contact />
      <Newsletter />
      <Footer />

      <GlobalStyle />
    </>
  );
}
