
import React from 'react';
import TaskManager from '../components/TaskManager';

const Tasks = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Task Manager
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Organize your tasks with our intuitive task management system
          </p>
        </div>
        <TaskManager />
      </div>
    </div>
  );
};

export default Tasks;
