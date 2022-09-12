import Grid from '@mui/material/Unstable_Grid2';
import profile from "../img/profile.jpg"
import { Container } from '@mui/material';
function AboutIntro () {
  return (<section id="about">
    <Container maxWidth="lg">
      <h1 style={{ textAlign: "center" }}>About me</h1>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <p>Hi, my name is Rui Qiu. I am an electrical engineer and a self-learned web developer. I am enthusiastic about studying magic phenomena surrounding our daily life as well as exploring the newest modern web-developed technologies in the current world. As an engineer, I believe that the advancement of technology will bring us convenience in any aspects.</p>
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

        </Grid>
        <Grid xs={12} md={6}>

          <img src={profile} alt="" className='size' />
          {/* height={464} width={348} */}
        </Grid>
      </Grid>
    </Container>

  </section>)
}
export default AboutIntro