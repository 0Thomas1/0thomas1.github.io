import { useState } from "react";
import { projects } from "../constants";
import Card from "./Card";
import FadeIn from "./FadeIn";
const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <section className="container my-5" id="projects">
      <div className="mx-auto">
        {/*Header*/}
        <div className="mb-4">
          <h2 className="display-6 fw-bold">Projects</h2>
        </div>
        {/*Filter*/}
        <div className="d-flex flex-wrap gap-2 mb-5">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn rounded-pill px-4 ${filter === category ? "btn-primary fw-semibold shadow-sm" : "btn-outline-secondary fw-medium"}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/*Projects grid*/}
        <FadeIn>
          <div className="row">
            {filteredProjects.map((project) => (
              <div key={project.title} className="col-md-6 col-lg-4 mb-4">
                <Card {...project} />
              </div>
            ))}
          </div>
        </FadeIn>
        {/* Footer Note */}
        <div className="mt-5 text-center">
          <p className="text-muted">
            Want to see more? Check out my{" "}
            <a
              href="https://github.com/0Thomas1?tab=repositories"
              className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              GitHub profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
