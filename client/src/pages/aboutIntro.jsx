import Grid from '@mui/material/Unstable_Grid2';
import profile from "../img/profile.jpg"
import github from "../img/github.png"
import wechat from "../img/wechat.png"
import linkedin from "../img/linkedin.png"

import { Container } from '@mui/material';
function AboutIntro () {
  return (<section id="about">
    <Container maxWidth="lg">
      <h1 style={{ textAlign: "center", marginBottom: "15px" }}>About me</h1>
      <Grid container spacing={1}>
        <Grid xs={12} md={8} display="flex">
          <div className='aboutContent'>
            <p>Hi, my name is Rui Qiu. I am an electrical engineer and a self-learned web developer. I am enthusiastic about studying magic phenomena surrounding our daily life as well as exploring the newest modern web-developed technologies in the current world. As an engineer, I believe that the advancement of technology will bring us convenience in any aspects.</p>


            <p className='Education'>Education: McMaster University - Bachelor of Electrical Engineering Co-Op(Level III) </p>

            <div className="Skills">
              <h5>I have experieneced with: </h5>
              <h6 className='inline'>Languages & Libraries/Frameworks: </h6>
              <p className='inline'>C/C++, Python, HTML/CSS, JavaScript, React, Node.js, Express, SQL/No-SQL, Bootstrap, Material-UI, Tailwind, MATLAB, R</p>
              <br />
              <br />
              <h6 className='inline'> Software Tools: </h6>
              <p className='inline'>Git, MongoDB, Mongoose, Bash, Heroku, EJS, Authentication, REST API, Postman, AWS</p>
              <br />
              <br />
              <h6 className='inline'>Electrical Tools: </h6>
              <p className='inline'>Embedded-C, Oscilloscope, Multimeters, LTspice, PSpice, Quartus, Simulink</p>
            </div>

          </div>
        </Grid>

        <Grid xs={12} md={4} display="flex" justifyContent="center" alignItems="center" >
          <div>
            <div className='imgpos'>
              <img src={profile} alt="" className='size' />
            </div>

            <div className='iconposition'>
              <a href="https://github.com/rruiqiu"><img className='icon' src={github} alt="" srcset="" /></a>
              <img className='icon' src={linkedin} alt="" srcset="" />
              <img className='icon' src={wechat} alt="" srcset="" />
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>

  </section>)
}
export default AboutIntro