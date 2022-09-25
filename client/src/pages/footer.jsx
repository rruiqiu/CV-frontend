import { FaGithub } from "react-icons/fa";
import { Icon } from '@iconify/react';
import { FaLinkedin } from "react-icons/fa";
function footer () {
  return (
    <footer id="footer">
      <div className="links">
        <a className="footericonposition" href="/" ><Icon icon="ant-design:home-outlined" width="25" /></a>
        <a className="footericonposition" href="https://github.com/rruiqiu" target="_blank" rel="noopener noreferrer"><FaGithub size={"24px"} /></a>
        <a className="footericonposition" href="https://www.linkedin.com/in/rruiqiu/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={"24px"} /></a>
        <a className="footericonposition" href="https://drive.google.com/file/d/1o7KKdE5aJQRItD9JuWg49isheq3yBJzH/view?usp=sharing" target="_blank" rel="noopener noreferrer"><Icon icon="pepicons:cv" width="24" height="24" /></a>

      </div>

      <div className="footerparagraph">
        <p className="footerp">Made with ❤️ by Rui Qiu</p>
      </div>
    </footer>
  )
}
export default footer