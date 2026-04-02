import FadeIn from "./FadeIn";

const Resume = () => {
  return (
    <FadeIn>
      <section id="resume" className="py-5 border-top bg-light">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="card shadow-sm border-0 rounded-4 text-center py-5 px-4 p-md-5 my-4">
            <div className="card-body">
              <h2 className="display-6 fw-bold mb-3">
                Looking for the official document?
              </h2>
              <p className="lead text-muted mb-5">
                Grab a print-friendly copy of my resume for your records.
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
                {/* View Button */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary rounded-pill px-4 py-2 fw-medium d-inline-flex align-items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.636 2.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L9 3.207V10.5a.5.5 0 0 1-1 0V3.207L5.354 5.854a.5.5 0 1 1-.708-.708l3-3z"
                    />
                    <path d="M2 13.5A1.5 1.5 0 0 1 3.5 12h9a1.5 1.5 0 0 1 1.5 1.5V14a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14v-.5z" />
                  </svg>
                  View Full Resume
                </a>

                {/* Download Button */}
                <a
                  href="/resume.pdf"
                  download="Thomas_Cheng_Resume.pdf"
                  className="btn btn-primary rounded-pill px-4 py-2 fw-medium shadow-sm d-inline-flex align-items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* Inline Resume Viewer (Hidden on mobile where PDF rendering is poor) */}
          <div
            className="d-none d-md-block mt-5 shadow-sm border-0 rounded-4 overflow-hidden bg-white"
            style={{ height: "1000px" }}
          >
            <iframe
              src="/resume.pdf"
              title="Resume Preview"
              style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Resume;
