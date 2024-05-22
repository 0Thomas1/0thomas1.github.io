

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark  w-100 p-2 sticky-top">
      <a className="navbar-brand" href="#">
        <span className="text-white display-4">TC</span>
      </a>
      <div className="collapse navbar-collapse" id="navCollapse">
        <div className="navbar-nav">
          <a className="nav-link text-white" href="#projects">
            Projects
          </a>
          <a className="nav-link text-white" href="#experience">
            Experience
          </a>
          <a className="nav-link text-white" href="#education">
            Education
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
