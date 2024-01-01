// Web.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Element from './Element';
import Tool from './Tool';

const leftSidebarStyle = {
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

const websiteContainerStyle = {
  position: 'relative',
};

const websiteStyle = {
  position: 'fixed',
  left: '20%',
  top: 0,
  height: '100%',
  width: '80%',
  overflow: 'auto',
  padding: '20px',
  boxSizing: 'border-box',
  border: '2px dashed #ddd',
};

const saveButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  padding: '10px',
  backgroundColor: 'green',
  color: '#fff',
  cursor: 'pointer',
  borderRadius: '4px',
};

const Web = () => {
  const [elements, setElements] = useState([]);

  const [, drop] = useDrop({
    accept: ['text/plain', 'image/*'],
    drop: (item, monitor) => {
      if (item.files) {
        // Handle dropped image files
        const reader = new FileReader();
        reader.onload = (event) => {
          setElements([...elements, { id: Date.now(), content: event.target.result, type: 'image/plain' }]);
        };
        reader.readAsDataURL(item.files[0]);
      } else {
        // Handle dropped text or image URLs
        setElements([...elements, { id: Date.now(), content: item.content, type: item.type }]);
      }
    },
  });

  const handleSave = () => {
    console.log('Saving:', elements);
  };

  const handleUpdateContent = (id, updatedContent) => {
    const updatedElements = elements.map((element) =>
      element.id === id ? { ...element, content: updatedContent } : element
    );
    setElements(updatedElements);
  };

  return (
    <>
      <div style={leftSidebarStyle}>
        <Tool content="Text 1" type="text/plain" />
        <Tool content="Text 2" type="text/plain" />
        <Tool content="Image 1" type="image/plain" />
        <Tool content="Image 2" type="image/plain" />
        {/* Add more demo elements as needed */}
      </div>
      <div style={websiteContainerStyle}>
        <div style={websiteStyle} ref={drop}>
          {elements.map((element) => (
            <Element
              key={element.id}
              id={element.id}
              content={element.content}
              type={element.type}
              onUpdateContent={handleUpdateContent}
            />
          ))}
        </div>
        <div style={saveButtonStyle} onClick={handleSave}>
          Save
        </div>
      </div>
    </>
  );
};

export default Web;
