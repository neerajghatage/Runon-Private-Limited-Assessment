import React, { useState } from 'react';

const Element = ({ id, content, onUpdateContent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const elementStyle = {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    background: '#f9f9f9',
    cursor: 'pointer',
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdateContent(id, editedContent);
  };

  const handleChange = (e) => {
    setEditedContent(e.target.value);
  };

  return (
    <div
      style={elementStyle}
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedContent}
          onChange={handleChange}
          autoFocus
        />
      ) : (
        content
      )}
    </div>
  );
};

export default Element;

