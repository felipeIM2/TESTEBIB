import React, { useEffect, useState } from 'react';
import './topLoadingBar.css';

const TopLoadingBar = ({ loading }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let interval;

    if (loading) {
      setVisible(true);
      setProgress(0);

      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + Math.floor(Math.random() * 20) + 10; // sobe mais rápido
        });
      }, 100); // atualização mais frequente
    } else if (!loading && progress > 0) {
      setProgress(100);

      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300); // esconde rápido após completar
    }

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <>
      {visible && (
        <>
          <div className="top-loading-bar" style={{ width: `${progress}%` }} />
          <div className="overlay-blur" />
        </>
      )}
    </>
  );
};

export default TopLoadingBar;
