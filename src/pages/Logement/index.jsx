import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import accommodations from '../../assets/accommodations.json';
import './index.scss';

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = accommodations.find((item) => item.id === id);
    setLogement(foundLogement);
  }, [id]);

  if (!logement) return <div>Loading...</div>;

  return (
    <div className="logement">
      <div className="logement-slideshow">
        <Slideshow images={logement.pictures} />
      </div>
      <div className="logement-content">
        <div className="logement-details-info">
          <div className="logement-details">
            <h1 className="logement-title">{logement.title}</h1>
            <h2 className="logement-location">{logement.location}</h2>
            <div className="logement-tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="logement-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="logement-info">
            <div className="logement-host">
              <div className="logement-host-details">
                <p className="logement-host-name">{logement.host.name}</p>{' '}
                <img
                  src={logement.host.picture}
                  alt={logement.host.name}
                  className="logement-host-picture"
                />
              </div>
              <div className="logement-host-rating">
                <Rating rating={logement.rating} />
              </div>
            </div>
          </div>
        </div>
        <div className="logement-collapses">
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Logement;
