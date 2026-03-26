import FadeIn from "./FadeIn";

const Resume = () => {
  return (
    <FadeIn>
      <section id="resume" className="py-5">
        <div className="container">
          <h2 className="display-6 mb-4">Resume</h2>
          
          {/* Embed PDF viewer */}
          <div className="ratio ratio-16x9 mb-4">
            <iframe
              src="/resume.pdf"
              title="Resume"
              className="border"
            ></iframe>
          </div>

          {/* Download button */}
          <a
            href="/resume.pdf"
            download="Resume.pdf"
            className="btn btn-primary"
          >
            Download PDF
          </a>
        </div>
      </section>
    </FadeIn>
  );
};

export default Resume;