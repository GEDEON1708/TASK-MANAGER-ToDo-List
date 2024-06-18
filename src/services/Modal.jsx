/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Modal({ type, task, onClose, onDelete, onEdit }) {
  const [editValue, setEditValue] = useState(task ? task.title : '');

  const handleConfirmClick = () => {
    if (type === 'delete') {
      onDelete();
    } else if (type === 'edit') {
      onEdit(editValue);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{type === 'delete' ? 'Deseja excluir esse item?' : 'Deseja editar esse item?'}</h2>
        {type === 'edit' && (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        )}
        <p>{task.title}</p>
        <div className="modal-btns">
          <button className="cancel-btn" onClick={onClose}>Não</button>
          <button className="confirm-btn" onClick={handleConfirmClick}>Sim</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
