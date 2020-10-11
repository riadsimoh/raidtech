import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Info = () => {
  return (
    <div className="row justify-content-around info-row">
      <div className="col-sm-7">
        <Zoom>
          <div className="img-info"></div>
        </Zoom>
      </div>
      <div className="col-sm-4">
        <section className="my-5 text-center p-5 ">
          <h3>Résponsive designe</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo illo
            eligendi consequatur exercitationem assumenda ab error deserunt ad
            optio, consectetur amet blanditiis officia fuga vero temporibus odit
            libero numquam eius.
          </p>
          <a href="/" className="btn btn-success">
            En savoir plus
          </a>
        </section>
      </div>
    </div>
  );
};

export default Info;
