
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              React TaskApp
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A modern task management application built with React, demonstrating 
              component architecture, state management, and API integration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/tasks" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tasks</a></li>
              <li><a href="/posts" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Posts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">
              Technologies
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>React Router</li>
              <li>Context API</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2024 React TaskApp. Built for learning purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
