import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row d-flex justify-content-center align-items-center text-center">
        <div className="col-md-3 my-2">
          <p className="mt-2 copyright">
            <strong>Corona Status © 2021 </strong>
          </p>
        </div>
        <div className="col-md-3 my-2">
          <p className="mt-2">
            <strong>
              This Page created with <i class="fab fa-react"></i> and{' '}
              <i class="fab fa-bootstrap"></i>
            </strong>
          </p>
        </div>
        <div className="col-md-3 my-2">
          <p className="mt-2">
            <a href="https://github.com/yigiterdev/corona-status">
              <i className="fab fa-github mx-2"></i>{' '}
              <strong>Source Code</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
