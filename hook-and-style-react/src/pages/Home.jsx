
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, Users, Zap, Smartphone } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Home = () => {
  const features = [
    {
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Create, update, and organize your tasks with an intuitive interface.'
    },
    {
      icon: Users,
      title: 'API Integration',
      description: 'Fetch and display data from external APIs with proper error handling.'
    },
    {
      icon: Zap,
      title: 'Modern React',
      description: 'Built with hooks, context API, and modern React patterns.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Fully responsive design that works on all devices.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to{' '}
          <span className="text-blue-600 dark:text-blue-400">React TaskApp</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          A comprehensive React application demonstrating modern frontend development 
          with component architecture, state management, and beautiful UI design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/tasks">Get Started with Tasks</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/posts">Explore Posts</Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
              <Card.Content className="pt-8">
                <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <Card.Content className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to explore the features?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Try out the task management system or browse posts from our API integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/tasks">Manage Tasks</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link to="/posts">View Posts</Link>
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default Home;
