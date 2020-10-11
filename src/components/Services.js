import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Services = () => {
  return (
    <div className="container-fluid mx-auto mt-5 mb-5 col-12 text-center servives-background">
      <h2 className="servies-title titre-services text-success display-2">
        <strong>
          {' '}
          <Zoom left cascade>
            Nos Services{' '}
          </Zoom>
        </strong>
      </h2>

      <div className="row justify-content-center mt-5 services">
        <div className="card col-md-3 col-12">
          <div className="card-content">
            <div className="card-body">
              {' '}
              <Fade left>
                <img
                  className="img-thumbnail sr-1"
                  src="https://gifforddixoncommercialproperty.co.uk/wp-content/uploads/2016/09/Happy-Client-picture.jpg"
                  alt="service"
                />
              </Fade>
              <div className="shadow"></div>
              <div className="card-title font-weight-bold text-success  my-4">
                {' '}
                <h3>Prix raisonable</h3>{' '}
              </div>
              <div className="card-subtitle">
                <p>
                  {' '}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maxime quibusdam tempore doloremque illo facere reiciendis,
                  dicta corporis accusantium cumque molestias saepe nisi
                  exercitationem excepturi ipsum numquam repellendus at fugiat
                  magnam?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card col-md-3 col-12 ml-2">
          <div className="card-content">
            <div className="card-body">
              {' '}
              <Fade bottom>
                <img
                  className="img-thumbnail "
                  src="https://graphiste.com/blog/wp-content/uploads/2019/04/presenter-webdesign-client-1280x720.jpg"
                  alt="Design"
                />
              </Fade>
              <div className="card-title font-weight-bold text-success   my-4">
                <h3> Design personalisé</h3>
              </div>
              <div className="card-subtitle">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente omnis at alias commodi! Dolor, quisquam sunt impedit
                  aspernatur laboriosam reprehenderit iure eum saepe itaque
                  ratione! Deleniti optio architecto natus itaque?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card col-md-3 col-12 ml-2">
          <div className="card-content">
            <div className="card-body">
              {' '}
              <Fade right>
                <img
                  className=" img-thumbnail sr-3"
                  src="https://www.esecad.com/wp-content/uploads/sites/38/2018/01/formation-webdesigner-par-correspondance.jpg"
                  alt="Formation"
                />
              </Fade>
              <div className="card-title font-weight-bold  text-success my-4">
                <h3>Formation</h3>
              </div>
              <div className="card-subtitle">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem necessitatibus quia architecto praesentium reiciendis
                  assumenda porro, dolorum, explicabo, maiores dicta cupiditate
                  accusamus! Soluta neque odio magni quis culpa, blanditiis
                  corrupti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
