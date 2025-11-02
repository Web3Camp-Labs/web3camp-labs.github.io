import GlobalStyle from "./utils/GloablStyle";
import { WOW } from 'wowjs';
import "animate.css";
import {useEffect} from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import RouterLink from "./router/router";
import Header from "./components/header";
import Footer from "./components/footer";

function AppContent() {
    const navigate = useNavigate();
    
    useEffect(() => {
        new WOW().init();
        
        // 只在生产环境处理路由参数
        if (window.location.hostname === 'web3camp.us') {
            const urlParams = new URLSearchParams(window.location.search);
            const redirectRoute = urlParams.get('route');
            const validRoutes = ['/home', '/tutorial', '/tools', '/tasks', '/news'];
            
            // 如果有路由参数，导航到对应页面并清理URL
            if (redirectRoute && validRoutes.includes(redirectRoute)) {
                navigate(redirectRoute);
                window.history.replaceState({}, '', redirectRoute);
            }
        }
    }, [navigate]);
    
    return (
        <>
            <Header />
            <RouterLink />
            <Footer />
        </>
    );
}

function App() {
  return (
    <div>
        <Router>
            <AppContent />
        </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
