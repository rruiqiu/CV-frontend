import { FaGithub } from "react-icons/fa";
import { Icon } from '@iconify/react';
import { FaLinkedin } from "react-icons/fa";
function footer () {
  return (
    <footer id="footer">
      <div className="links">
        <a className="footericonposition" href="/"><Icon icon="ant-design:home-outlined" color="white" width="25" /></a>
        <a className="footericonposition" href="https://github.com/rruiqiu"><FaGithub color={"white"} size={"24px"} /></a>
        <a className="footericonposition" href="https://www.linkedin.com/in/rruiqiu/"><FaLinkedin color={"white"} size={"24px"} /></a>
        <a className="footericonposition" href="https://github.com/rruiqiu"><Icon icon="pepicons:cv" color="white" width="24" height="24" /></a>

      </div>

      <div className="footerparagraph">
        <p className="footerp">Made with ❤️ by Rui Qiu</p>
      </div>
    </footer>
  )
}
export default footer