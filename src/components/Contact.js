import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  });
  return (
    <div className="container-fluid">
      <div className="row justify-content-center p-5">
        <div className="col-12 col-md-8 col-lg-6 pb-5">
          <form>
            <div className="card border-primary rounded-0">
              <div className="card-header p-0">
                <div className="bg-info text-white text-center py-2">
                  <h3>
                    <i className="fa fa-envelope"></i>Contactez Nous
                  </h3>
                  <p className="m-0">Nous vous répondons sous 24h</p>
                </div>
              </div>
              <div className="card-body p-3">
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-user text-info"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Nom et prénom"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-envelope text-info"></i>
                      </div>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Adresse email"
                      required=""
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-comment text-info"></i>
                      </div>
                    </div>
                    <textarea
                      className="form-control"
                      placeholder="Message...."
                      required=""
                      rows="5"
                      cols="20"
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <input
                    type="submit"
                    value="Envoyer"
                    className="btn btn-info btn-block rounded-0 py-2"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
