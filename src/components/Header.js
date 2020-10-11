import React from 'react';
import { Link } from 'react-router-dom';
import Shake from 'react-reveal/Shake';
import Roll from 'react-reveal/Roll';

const Header = () => {
  return (
    <div className="container-fluid showcase">
      <div className=" navbar-container">
        <nav className="navbar navbar-expand-lg">
          <Roll>
            <a className="navbar-brand" href="/">
              <span className="r">Riad</span>Tech
            </a>
          </Roll>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <Link className="nav-link" to="/">
                <li className="nav-item  active">Accueil</li>
              </Link>
              <Link className="nav-link" to="/contact">
                <li className="nav-item">Contacte</li>
              </Link>
              <Link className="nav-link" to="/about">
                <li className="nav-item">A propos</li>
              </Link>
            </ul>
          </div>
        </nav>

        <div className="row justify-content-end align-items-center header-content  ">
          <div className="col-md-10 mx-auto text-center ">
            <p className="text-center">
              CONCEPTION ET RÉALISATION
              <br />
            </p>
            <h1 className=" text-white">Design d’interface web et mobile</h1>
            <p className=" project p-3 mt-5">
              VOUS AVEZ UN PROJET DE CRÉATION OU DE REFONTE D’UNE INTERFACE ?
            </p>
            <Shake>
              <button className="btn btn-success mx-auto p-3 ">
                {' '}
                CONTACTEZ-NOUS !
              </button>
            </Shake>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
