import Navbar from "../components/Navbar"
import ContactMe from "./contact"
import { Container } from '@mui/material';
import Intro from "./aboutIntro"
import Projects from "./projects"


function About () {
  return (
    <div>

      <Navbar variant="light"
        navbarcolor="aboutnabvar"
        navbar="navbar-aboutpage"
      />
      <Intro />
      <Projects />
      <ContactMe />
    </div>
  )

}
export default About