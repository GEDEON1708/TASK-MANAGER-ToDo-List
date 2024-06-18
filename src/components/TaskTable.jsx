/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TaskTable({ tasks, onAddTask, onOpenModal }) {
    const [newTask, setNewTask] = useState('');

    const handleAddNewTask = () => {
    if (newTask.trim() !== '') {
    onAddTask(newTask.trim());
    setNewTask('');
    }
};

    return (
    <table>
    <thead>
        <tr>
        <th>Tarefa</th>
        <th>Status</th>
        <th>Opções</th>
        </tr>
    </thead>
    <tbody>
        {tasks.map(task => (
        <tr key={task.id}>
            <td>{task.title}</td>
            <td><input type="checkbox" checked={task.completed} readOnly /></td>
            <td className="actions">
            <i className="fas fa-edit" onClick={() => onOpenModal('edit', task)}></i>
            <i className="fas fa-trash" onClick={() => onOpenModal('delete', task)}></i>
            </td>
        </tr>
        ))}
        <tr>
        <td>
            <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Digite uma Nova tarefa..."
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                handleAddNewTask();
                }
            }}
            />
        </td>
        <td></td>
        <td className="actions">
            <i className="fas fa-plus" onClick={handleAddNewTask}></i>
        </td>
        </tr>
    </tbody>
    </table>
);
}

export default TaskTable;
