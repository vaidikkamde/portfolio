import React from "react";
import CopyFooter from "./CopyFooter";
function ContactMe() {
  return (
    <div className="text-center">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Contact Me</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
        />
        <label htmlFor="inputName" className="sr-only">
          Full Name
        </label>
        <input
          type="text"
          id="inputName"
          className="form-control"
          placeholder="Full Name"
          required
        />
        <label htmlFor="inputMessage" className="sr-only">
          Message
        </label>
        <textarea
          id="inputMessage"
          className="form-control formText"
          placeholder="Enter Your Message"
          rows="3"
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <CopyFooter />
      </form>
    </div>
  );
}

export default ContactMe;
