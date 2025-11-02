import GlobalStyle from "./utils/GloablStyle";
import { WOW } from 'wowjs';
import "animate.css";
import {useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterLink from "./router/router";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
    useEffect(() => {
        new WOW().init();
    }, []);
  return (
    <div>

        <Router>
            <Header />
            <RouterLink />
            <Footer />
        </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
