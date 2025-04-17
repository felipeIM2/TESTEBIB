import React, { useEffect, useRef } from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const AlertSuccess = ({ message, show, onClose }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    if (show) {
      timerRef.current = setTimeout(() => {
        onClose();
      }, 4000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [show, onClose]);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      onClose();
    }, 4000);
  };

  return (
    <div className="toast-container position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
      <div
        className={`toast text-white bg-success ${show ? 'show' : 'hide'}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="d-flex">
          <div className="toast-body">
            <i className="bi bi-check-circle-fill text-white me-2 fs-6"></i>
            {message}
          </div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default AlertSuccess;
