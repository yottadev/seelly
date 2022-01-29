import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Navbar from "./BaseComponents/Navbar";
import GlobalStyle from "./styles/global";
import Footer from "./BaseComponents/Footer";
import Home from "./routes/Home";
import Genshin from "./routes/Genshin";
import StardewValley from "./routes/StardewValley";

import { CustomTransitionGroup, BodyBackground } from "./styles";

export default function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <BodyBackground>
        <Navbar />
        <CustomTransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/genshin" element={<Genshin />} />
              <Route path="/stardew-valley" element={<StardewValley />} />
            </Routes>
          </CSSTransition>
        </CustomTransitionGroup>
        <Footer />
      </BodyBackground>
    </>
  );
}
