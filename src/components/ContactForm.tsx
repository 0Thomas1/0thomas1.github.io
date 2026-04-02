import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // NOTE: Mailgun requires a backend server to securely send emails using your secret API key.
    // If this is a static GitHub Pages site, this fetch call must point to a backend proxy/lambda
    // function you control (e.g. AWS Lambda, Netlify Function, Vercel Edge Function, etc.)
    // DO NOT expose your Mailgun API keys directly in this frontend React code!
    
    try {
      const response = await fetch("YOUR_BACKEND_ENDPOINT_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="py-5 bg-white" id="contact">
      <div className="container" style={{ maxWidth: "700px" }}>
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Get in Touch</h2>
          <p className="text-muted">
            Have a question or want to work together? Send me a message below.
          </p>
        </div>
        
        <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5">
          {status === "success" && (
            <div className="alert alert-success d-flex align-items-center fw-medium border-0 shadow-sm mb-4" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill me-3" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {status === "error" && (
            <div className="alert alert-danger d-flex align-items-center fw-medium border-0 shadow-sm mb-4" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill me-3 flex-shrink-0" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              Something went wrong. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="form-label fw-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg bg-light border-0"
                id="name"
                placeholder="John Doe"
                required
                disabled={status === "submitting"}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="form-label fw-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg bg-light border-0"
                id="email"
                placeholder="john@example.com"
                required
                disabled={status === "submitting"}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="form-label fw-medium">
                Message
              </label>
              <textarea
                name="message"
                className="form-control form-control-lg bg-light border-0"
                id="message"
                rows={5}
                placeholder="Hello Thomas..."
                required
                disabled={status === "submitting"}
              ></textarea>
            </div>
            
            <div className="d-grid mt-2">
              <button 
                type="submit" 
                className="btn btn-primary btn-lg rounded-pill fw-medium shadow-sm"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;