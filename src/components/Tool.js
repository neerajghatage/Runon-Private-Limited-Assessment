// Tool.js
import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';

const Tool = ({ content, type }) => {
  const inputRef = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type,
    item: { content, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        drag({ ...e, dataTransfer: { files: [event.target.result] } });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const toolStyle = {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'move',
    backgroundColor: '#fff',
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={drag} style={toolStyle}>
      {type === 'text/plain' ? (
        content
      ) : (
        <>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button onClick={() => inputRef.current.click()}>Select Image</button>
        </>
      )}
    </div>
  );
};

export default Tool;