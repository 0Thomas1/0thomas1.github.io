const Contactform = () => {
  return (
   <div className="container mt-5">
    <h2 className="text-center">Contact Me</h2>
    <form action="" className="w-25 mx-auto">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
        Name
        </label>
        <input
        type="text"
        className="form-control"
        id="name"
        placeholder="Enter your name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
        Email
        </label>
        <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Enter your email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
        Message
        </label>
        <textarea
        className="form-control"
        id="message"
        rows={3}
        placeholder="Enter your message"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
   </div>
  );
}
export default Contactform;