import React, { useEffect, ClockLoader } from 'react';
import { useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';
import { BiSolidShow } from 'react-icons/bi';
import axios from 'axios';
import DotLoader from 'react-spinners/DotLoader';

const Steps = () => {
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(1);
  const [visible, setVisible] = useState(true);
  const [isLoading, setISLoading] = useState(false);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((previous) => previous - 1);
    }
  };

  const handleNext = () => {
    if (step < messages.length) {
      setStep((previous) => previous + 1);
    }
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setISLoading(true);
    axios
      .get('http://localhost:9000/messages')
      .then((response) => {
        setMessages(response.data);
        setISLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <DotLoader />;
  }

  return (
    <>
      {visible && (
        <div className="steps">
          <div className="numbers">
            <span className={`${step >= 1 ? 'active' : ''}`}>1</span>
            <span className={`${step >= 2 ? 'active' : ''}`}>2</span>
            <span className={`${step >= 3 ? 'active' : ''}`}>3</span>
          </div>

          <p className="message">
            Step-{step}: {messages.length === 0 || messages[step - 1].text}
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
      {visible ? (
        <FaDeleteLeft
          onClick={handleVisible}
          className="close"
          color="red"
          size={30}
          cursor="pointer"
        />
      ) : (
        <BiSolidShow
          onClick={handleVisible}
          className="close"
          size={30}
          color="purple"
          cursor="pointer"
        />
      )}
    </>
  );
};

export default Steps;
