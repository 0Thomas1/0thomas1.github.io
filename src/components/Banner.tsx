const Banner = () => {
  return (
    <section className="container py-5 my-md-5">
      <div className="row align-items-center text-center text-md-start flex-column-reverse flex-md-row">
        {/* Text Content */}
        <div className="col-md-7 col-lg-8 mt-4 mt-md-0">
          <p className="text-primary fw-semibold fs-5 mb-2 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
            Hello there, I'm <span className="wave-emoji fs-3">👋</span>
          </p>
          <h1 className="display-3 fw-bold mb-3 text-gradient">Thomas Cheng</h1>
          <p className="lead text-muted mb-4 mw-100 pe-md-5">
            A passionate Computer Science Student dedicated to building clean,
            efficient, and scalable software applications.
          </p>

          {/* Quick Skills/Badges */}
          <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center justify-content-md-start">
            <span className="badge bg-white text-dark border px-3 py-2 rounded-pill fw-medium shadow-sm">
              React
            </span>
            <span className="badge bg-white text-dark border px-3 py-2 rounded-pill fw-medium shadow-sm">
              TypeScript
            </span>
            <span className="badge bg-white text-dark border px-3 py-2 rounded-pill fw-medium shadow-sm">
              Node.js
            </span>
            <span className="badge bg-white text-dark border px-3 py-2 rounded-pill fw-medium shadow-sm">
              Python
            </span>
          </div>

          <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start align-items-center">
            <a
              href="#resume"
              className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm"
            >
              View Resume
            </a>

            {/* Social Links */}
            <div className="d-flex gap-3">
              <a
                href="https://github.com/0Thomas1"
                className="text-dark bg-light rounded-circle d-flex align-items-center justify-content-center border"
                style={{
                  width: "48px",
                  height: "48px",
                  transition: "all 0.2s",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/man-ho-cheng-2820b7234"
                className="text-primary bg-light rounded-circle d-flex align-items-center justify-content-center border"
                style={{
                  width: "48px",
                  height: "48px",
                  transition: "all 0.2s",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="col-md-5 col-lg-4 d-flex justify-content-center justify-content-md-end">
          <img
            id="protrait"
            src="assets/protrait.jpeg"
            alt="Thomas Cheng - Portrait"
            className="img-fluid rounded-circle shadow-lg border border-4 border-white"
            style={{ width: "260px", height: "260px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
