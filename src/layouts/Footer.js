import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row d-flex justify-content-center align-items-center text-center">
        <div className="col-md-6 my-2">
          <p className="footer-text copyright mt-2">
            <strong>
              This App made with React 💛
              <a href="https://yigiter.dev/" className="personal-page-link">
                by yigiterdev
              </a>
            </strong>
          </p>
        </div>

        <div className="col-md-6 my-2">
          <a
            href="https://www.linkedin.com/in/yigiterbugra/"
            className="rounded-circle p-4 text-center"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://twitter.com/yigiterdev"
            className="rounded-circle p-4 text-center"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            href="https://github.com/yigiterdev"
            className="rounded-circle p-4 text-center"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
