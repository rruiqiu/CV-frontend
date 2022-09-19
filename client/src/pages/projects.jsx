import projectlisting from "../projectlisting";

function Project () {
  return (
    <section id="projects">
      <h1 style={{ textAlign: "center" }}>My project portfolio</h1>
      <div id="projects-container">
        {projectlisting.map((projectlisting) => {
          return (
            <div className="project">
              <div className="project-image"><img src={projectlisting.img} className="project_img_size" alt="" /></div>
              <div className="project-content">
                <h3>{projectlisting.name}</h3>
                <p>{projectlisting.description}</p>
                <ul className="project-stack">
                  {projectlisting.stack.map(x => <li>{x}</li>)}
                </ul>
                <div className="project-link">
                  {projectlisting.github ? <a className="project-button" href={projectlisting.github}>Github</a> : null}
                  {projectlisting.demo ? <a className="project-button" href={projectlisting.demo}>Demo</a> : null}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>

  )
}

export default Project