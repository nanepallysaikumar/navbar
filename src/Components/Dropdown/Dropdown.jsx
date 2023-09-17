import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Dropdown.scss';

const Dropdown = ({ header, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {header}
        {isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div className="option" key={index}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
