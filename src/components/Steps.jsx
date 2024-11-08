import React from 'react';
import { useState } from 'react';
const Steps = ({ items }) => {
  const [step, setStep] = useState(1);

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

  return (
    <div className="steps">
      <div className="numbers">
        <span className={`${step >= 1 ? 'active' : ''}`}>1</span>
        <span className={`${step >=2 ? 'active' : ''}`}>2</span>
        <span className={`${step >= 3 ? 'active' : ''}`}>3</span>
      </div>

      <p className="message">
        Step-{step}: {items[step -1]}
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
  );
};

export default Steps;
