const ProjectHover = ({ demo, code }) => {
  return (
    <div className="project-img project-hover">
      <button className="project-hover-content">
        <a href={code} target="_blank">
          source code
        </a>
      </button>
      <button className="project-hover-content">
        <a href={demo} target="_blank">
          live demo
        </a>
      </button>
    </div>
  );
};
export default ProjectHover;
