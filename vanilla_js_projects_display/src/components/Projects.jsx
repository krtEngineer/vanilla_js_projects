import { projects } from "../../data";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="container">
      <h1 className="title">vanilla js projects</h1>
      <div className="underline"></div>
      <div className="projects">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
