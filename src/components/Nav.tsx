const Nav = () => {
  const handleNavClick = () => {
    const navCollapse = document.getElementById("navCollapse");
    const toggler = document.querySelector(".navbar-toggler");

    // If the mobile menu is open (has 'show' class), trigger a click on the toggler to cleanly close it
    if (navCollapse?.classList.contains("show") && toggler) {
      (toggler as HTMLElement).click();
    }
  };

  return (
    <nav className="navbar navbar-expand-md bg-white sticky-top shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          <span className="text-primary">TC</span>
        </a>

        {/* Mobile toggle button (was missing!) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navCollapse"
          aria-controls="navCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navCollapse">
          <div className="navbar-nav ms-auto fw-medium gap-2">
            <a className="nav-link" href="#projects" onClick={handleNavClick}>
              Projects
            </a>
            <a className="nav-link" href="#experience" onClick={handleNavClick}>
              Experience
            </a>
            <a className="nav-link" href="#education" onClick={handleNavClick}>
              Education
            </a>
            <a className="nav-link" href="#resume" onClick={handleNavClick}>
              Resume
            </a>
            {/* <a className="nav-link" href="#contact" onClick={handleNavClick}>
              Contact
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
