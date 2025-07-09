
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Check, Filter } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Card from './ui/Card';
import Button from './ui/Button';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    active: tasks.filter(t => !t.completed).length
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <Card.Content className="text-center py-6">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {taskStats.total}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Tasks</div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content className="text-center py-6">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {taskStats.completed}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Completed</div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content className="text-center py-6">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
              {taskStats.active}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Active</div>
          </Card.Content>
        </Card>
      </div>

      {/* Add Task Form */}
      <Card className="mb-8">
        <Card.Content>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <Button onClick={addTask} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Task
            </Button>
          </div>
        </Card.Content>
      </Card>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['all', 'active', 'completed'].map((filterType) => (
          <Button
            key={filterType}
            onClick={() => setFilter(filterType)}
            variant={filter === filterType ? 'primary' : 'outline'}
            size="sm"
            className="capitalize"
          >
            <Filter className="h-4 w-4 mr-1" />
            {filterType} ({
              filterType === 'all' ? taskStats.total :
              filterType === 'active' ? taskStats.active :
              taskStats.completed
            })
          </Button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <Card>
            <Card.Content className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-600">
                {filter === 'all' ? 'No tasks yet. Add one above!' :
                 filter === 'active' ? 'No active tasks!' :
                 'No completed tasks!'}
              </div>
            </Card.Content>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <Card key={task.id} className={`transition-all duration-200 ${
              task.completed ? 'opacity-75' : ''
            }`}>
              <Card.Content>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`p-1 rounded-full transition-colors ${
                        task.completed 
                          ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' 
                          : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
                      }`}
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <span className={`flex-1 ${
                      task.completed 
                        ? 'line-through text-gray-500 dark:text-gray-400' 
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {task.text}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">
                      {new Date(task.createdAt).toLocaleDateString()}
                    </span>
                    <Button
                      onClick={() => deleteTask(task.id)}
                      variant="danger"
                      size="sm"
                      className="p-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card.Content>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskManager;
