import ProjectFooterTitle from "./ProjectFooterTitle";

const ProjectFooter = ({ name, status }) => {
  return (
    <footer className={`project-footer ${status ? "completed" : "pending"}`}>
      <ProjectFooterTitle name={name} status={status} />
    </footer>
  );
};
export default ProjectFooter;
