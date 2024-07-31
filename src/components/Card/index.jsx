import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.scss';

const Card = ({ cover, title, id }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </Link>
  );
};

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
