// Toolbar.js
import React from 'react';
import Tool from './Tool';

const toolbarStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  height: '100%',
  width: '20%',
  background: '#f0f0f0',
  padding: '20px',
  boxSizing: 'border-box',
  overflowY: 'auto',
};

const Section = ({ title, type }) => {
  const sectionStyle = {
    marginBottom: '20px',
  };

  return (
    <div style={sectionStyle}>
      <strong>{title}</strong>
      <Tool content={`${title} 1`} type={type} />
      <Tool content={`${title} 2`} type={type} />
      {/* Add more demo elements as needed */}
    </div>
  );
};

const Toolbar = () => {
  return (
    <div style={toolbarStyle}>
      <Section title="Text" type="text/plain" />
      <Section title="Image" type="image/plain" />
    </div>
  );
};

export default Toolbar;



