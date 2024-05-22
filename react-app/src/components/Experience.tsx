export interface InfoProps {
  title: string;
  date: string;
  institude?: string;
}
const Experience = () => {
  return (
    <div className="container row py-3 mx-auto" id="experience">
      <div className="border-bottom border-secondary display-6">EXPERIENCE</div>
      <div className="row">
        <h5 className="col-sm-12 col-md-8 text-md-start">Computer Science Tutor</h5>
        <p className="col-sm-12 col-md-4 text-md-end">2024-current</p>
      </div>
    </div>
  );
};

export default Experience;
