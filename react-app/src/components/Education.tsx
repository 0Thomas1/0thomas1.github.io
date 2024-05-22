import { education } from "../constants";
const Education = () => {
  return (
    <div className="bg-dark">
      <div className="container row py-3 bg-dark mx-auto text-white" id="education">
        <div className="border-bottom border-secondary display-6">EDUCATION</div>
        {education.map((edu) => (
          <div key={edu.title} className="row">
            <h5 className="col-sm-12 col-md-8 text-md-start">{edu.title}</h5>
            <p className="col-sm-12 col-md-4 text-md-end">{edu.date}</p>
            <h5 className="col-sm-12 col-md-8 text-md-start">{edu.institude}</h5>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Education