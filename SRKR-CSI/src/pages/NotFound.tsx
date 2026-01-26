import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
          <Link to="/events">
            <Button variant="outline">View Events</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
