

import SPF from "../img/SPF.png"
import src from "../img/src.png"
import ss from "../img/1.png"
function Project () {
  return (
    <section id="projects">
      <h1 style={{ textAlign: "center" }}>My project portfolio</h1>

      <div id="projects-container">
        <div className="project">
          <div className="project-image"><img src={ss} className="project_img_size" alt="" /></div>
          <div className="project-content">
            <h3>SPATIAL-MAPPING</h3>
            <p>• Designed and Built an embedded spatial measurement system using a time-of-flight sensor to acquire in-
              formation about the area surrounded clients
              • Developed a Python Program to map spatial information into 3D by using NumPy and Open3D libraries
              • Successful completion of software and hardware communication through UART and I2C
              • Implement precise control of the 28BYJ-48 stepper motor to assist the data acquisition of the ToF sensor
              • Significantly reduced the cost of purchasing Commercial Light Detection and Ranging(LIDAR) equipment</p>
          </div>
        </div>


      </div>
    </section>

  )
}

export default Project