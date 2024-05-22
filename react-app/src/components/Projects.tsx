import { projects } from "../constants";
import Card from "./Card";
const Projects = () => {
  return (
    <div
      className="col-10 container-fluid bg-gray text-center py-3"
      id="projects"
    >
      <div className="row row-cols-md-3 row-cols-1">
        {projects.map((project) => (
          <div key={project.title}>
            <Card {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
