const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-md bg-dark w-100 px-5 sticky-top"
      data-bs-theme="dark"
    >
      <a className="navbar-brand" href="#">
        <span className=" display-5">TC</span>
      </a>

      <div className="collapse navbar-collapse" id="navCollapse">
        <div className="navbar-nav me-auto">
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#experience">
            Experience
          </a>
          <a className="nav-link" href="#education">
            Education
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
