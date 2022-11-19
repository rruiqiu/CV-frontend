import Navbar from "../components/Navbar"
import ContactMe from "./contact"
// import { Container } from '@mui/material';
import Intro from "./aboutIntro"
import Projects from "./projects"
import Footer from "./footer"
// import Skills from "./skills"

function About () {
  return (
    <div>

      <Navbar variant="light"
        navbarcolor="aboutnabvar"
        navbar="navbar-aboutpage"
      />
      <Intro />
      {/* <Skills /> */}
      <Projects />
      <ContactMe />
      <Footer />

    </div>
  )

}
export default About