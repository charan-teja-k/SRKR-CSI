import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../common';
import { formatDate } from '../../utils/helpers';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  year: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  description,
  date,
  image,
  year,
}) => {
  return (
    <Card className="flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm">
          {year}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{formatDate(date)}</p>
        <p className="text-gray-600 flex-grow line-clamp-3">{description}</p>
        <Link
          to={`/events/${id}`}
          className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
        >
          View Details →
        </Link>
      </div>
    </Card>
  );
};

export default EventCard;
