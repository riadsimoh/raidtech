import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  });
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-md-6">
          <h1 className="text-success text-center">Bienvenus!</h1>
          <h2>Présentation</h2>
          <hr />
          <p>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore etae magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button type="button" className="btn btn-success">
            En savoir plus
          </button>
        </div>
        <div className="col-md-6">
          <Fade bottom>
            <img
              className="img-thumbnail"
              src="https://www.usinenouvelle.com/mediatheque/1/8/1/000874181/collaboration-collectif-solidarite-gerer-prevenir.jpg "
              alt=""
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
