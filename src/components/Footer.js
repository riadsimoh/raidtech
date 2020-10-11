import React from 'react';
function Footer() {
  return (
    <div>
      <footer className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 py-3">
              <div className="my-2 text-center">
                <a href="https://www.linkedin.com/in/riad-si-moh">
                  <i className="fab fa-linkedin-in fa-lg white-text mr-3 fa-2x">
                    {' '}
                  </i>
                </a>

                <a href="https://github.com/Riad-Moha">
                  <i className="fab fa-github fa-lg white-text mr-3 fa-2x"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright: Riadh SI MOH
        </div>
      </footer>
    </div>
  );
}

export default Footer;
