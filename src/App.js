import "./App.css";
import AboutPage from "./components/About/about";
import FooterSection from "./components/footer/footer";
import Header from "./components/header/header.jsx";
import Hero from "./components/Hero-section/Hero";
import LastSection from "./components/Last_Section/last";
import Projects from "./components/latest_project/project";
import Section from "./components/section/section";
import Section2 from "./components/Section2/Section2";


const App = () => {
  return (
    <>
    <Header/>
    <Hero />
    <Section/>
    <Section2/>
    <AboutPage/>
    <Projects/>
    <LastSection/>
    <FooterSection/>

    </>
    
  )
}

export default App;
