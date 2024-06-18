/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import TaskTable from '../components/TaskTable';
import Modal from '../services/Modal';
import tasksMock from '../mockup';

function Home() {
  const [tasks, setTasks] = useState(tasksMock);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [currentTask, setCurrentTask] = useState(null);

  const handleOpenModal = (type, task) => {
    setModalType(type);
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = () => {
    setTasks(tasks.filter(task => task.id !== currentTask.id));
    setIsModalOpen(false);
  };

  const handleEditTask = (title) => {
    setTasks(tasks.map(task => 
      task.id === currentTask.id ? { ...task, title } : task
    ));
    setIsModalOpen(false);
  };

  const handleAddTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="main-content">
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <TaskTable tasks={tasks} onAddTask={handleAddTask} onOpenModal={handleOpenModal} />
      {isModalOpen && (
        <Modal 
          type={modalType} 
          task={currentTask}
          onClose={() => setIsModalOpen(false)}
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
        />
      )}
    </div>
  );
}

export default Home;
