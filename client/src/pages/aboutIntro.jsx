import Grid from '@mui/material/Unstable_Grid2';
// import github from "../img/github.png"

import { Container } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Icon } from '@iconify/react';

function AboutIntro () {
  return (<section id="about">
    <Container maxWidth="lg" className='containerWidth'>
      <h1 style={{ textAlign: "center", marginBottom: "15px" }}>About me</h1>
      <Grid container spacing={1}>
        <Grid xs={12} md={8} display="flex">
          <div className='aboutContent'>
            <p>Hi, my name is Rui Qiu. I am currently a third-year ECE student studying at McMaster University.  My academic interests lie in the fields of microelectronics, modern web technologies, embedded systems, and IoT devices. I am particularly keen on exploring the integration of AI with IoT devices. As a future engineer, I am driven to use my skills and knowledge to create innovative and intelligent solutions that can improve people's daily lives. My passion for technology and its potential to bring positive change fuels my desire to stay updated on the latest advancements in IoT, AI, and magic phenomena, with the goal of making a meaningful impact through technology.</p>


            <p className='Education'>Education: McMaster University - Bachelor of Electrical Engineering Co-Op(Level III) </p>

            <div className="Skills">
              <h5>I have experieneced with: </h5>
              <h6 className='inline'>Languages & Libraries/Frameworks: </h6>
              <p className='inline'>C/C++, Python, HTML/CSS, JavaScript, React, Node.js, Express, SQL/No-SQL, Bootstrap, Material-UI, Tailwind, MATLAB, R</p>
              <br />
              <br />
              <h6 className='inline'> Software Tools: </h6>
              <p className='inline'>Git/Github, MongoDB, Mongoose, Bash, Heroku, EJS, Authentication, REST API, Postman, AWS</p>
              <br />
              <br />
              <h6 className='inline'>Hardware/Firmware: </h6>
              <p className='inline'>Embedded-C, ROS, LTspice, Keil, Quartus, FreeRtos, CubeIDE, SEGGER SystemView, Realterm, Linux, Simulink, Oscilloscope, Multimeters, Soldering</p>
            </div>

          </div>
        </Grid>

        <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center" >
          <div>
            <div className='imgpos'>
              <img src="/images/profile.jpg" alt="" className='size' />
            </div>

            <div className='iconposition'>
              <a className='iconpositionicon' href="https://github.com/rruiqiu" target="_blank" rel="noopener noreferrer"><FaGithub color={"black"} size={"32px"} /></a>
              <a className='iconpositionicon' href="https://www.linkedin.com/in/rruiqiu/" target="_blank" rel="noopener noreferrer"><FaLinkedin color={"#0072b1"} size={"32px"} /></a>
              {/* <a className='iconpositionicon' href="https://github.com/rruiqiu" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:wechat" color="#09b83e" width="32" height="32" /></a> */}
              <a className="iconpositionicon" href="https://drive.google.com/file/d/1o7KKdE5aJQRItD9JuWg49isheq3yBJzH/view?usp=sharing" target="_blank" rel="noopener noreferrer"><Icon icon="pepicons:cv" color="#0033cc" width="31" /></a>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>

  </section>)
}
export default AboutIntro