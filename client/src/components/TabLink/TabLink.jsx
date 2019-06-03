import React from 'react';
import './TabLink.css';

function TabLink({ children, onClick }) {
  return (
    <button className="tab-link" onClick={onClick}>
      {children}
    </button>
  )
}

export default TabLink;