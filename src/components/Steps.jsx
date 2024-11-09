import React from 'react';
import { useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';

const Steps = ({ items }) => {
  const [step, setStep] = useState(1);
  const [visible, setVisible] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((previous) => previous - 1);
    }
  };

  const handleNext = () => {
    if (step < items.length) {
      setStep((previous) => previous + 1);
    }
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="container">
      {visible && (
        <div className="steps">
          <div className="numbers">
            <span className={`${step >= 1 ? 'active' : ''}`}>1</span>
            <span className={`${step >= 2 ? 'active' : ''}`}>2</span>
            <span className={`${step >= 3 ? 'active' : ''}`}>3</span>
          </div>

          <p className="message">
            Step-{step}: {items[step - 1]}
          </p>

          <div className="actions">
            <button onClick={handlePrevious} className="btn primary">
              Previous
            </button>
            <button onClick={handleNext} className="btn primary">
              Next
            </button>
          </div>
        </div>
      )}

      <FaDeleteLeft
        onClick={handleVisible}
        className="close"
        color="red"
        size={30}
        cursor="pointer"
      />
    </div>
  );
};

export default Steps;
