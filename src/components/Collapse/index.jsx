import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h2 className="collapse-title">{title}</h2>
        <button className="collapse-toggle" onClick={toggleCollapse}>
          <i
            className={`fas fa-chevron-down arrow ${isOpen ? 'open' : ''}`}
          ></i>
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
