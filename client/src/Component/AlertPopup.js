// AlertPopup.js
import React, { useState, useEffect } from 'react';

const AlertPopup = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed right-0 top-2 w-96 p-4 bg-green-500 text-white text-left ${
        visible ? 'animate-slide-in' : 'animate-slide-out'
      }`}
    >
      {message}
    </div>
  );
};

export default AlertPopup;
