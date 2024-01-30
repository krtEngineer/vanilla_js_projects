import { useState } from "react";
import ProjectFooter from "./ProjectFooter";
import ProjectImage from "./ProjectImage";
import ProjectIndex from "./ProjectIndex";
import ProjectHover from "./ProjectHover";

const Project = ({ id, name, demo, code, img, status }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <article
      className="project"
      onMouseOver={() => {
        setIsHovering(true);
      }}
      onMouseOut={() => {
        setIsHovering(false);
      }}
    >
      <ProjectIndex id={id} />
      {!isHovering && <ProjectImage img={img} />}
      {isHovering && <ProjectHover demo={demo} code={code} />}
      <ProjectFooter name={name} status={status} />
    </article>
  );
};
export default Project;
