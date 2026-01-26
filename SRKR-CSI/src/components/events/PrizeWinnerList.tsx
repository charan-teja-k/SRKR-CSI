import React from 'react';

interface Winner {
  name: string;
  position: string;
  prize?: string;
}

interface PrizeWinnerListProps {
  winners: Winner[];
  eventTitle: string;
}

const PrizeWinnerList: React.FC<PrizeWinnerListProps> = ({ winners, eventTitle }) => {
  const getPositionStyle = (position: string) => {
    switch (position.toLowerCase()) {
      case '1st':
      case 'first':
        return 'bg-yellow-100 border-yellow-400 text-yellow-800';
      case '2nd':
      case 'second':
        return 'bg-gray-100 border-gray-400 text-gray-800';
      case '3rd':
      case 'third':
        return 'bg-orange-100 border-orange-400 text-orange-800';
      default:
        return 'bg-blue-100 border-blue-400 text-blue-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        🏆 Prize Winners - {eventTitle}
      </h3>
      <div className="space-y-3">
        {winners.map((winner, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-3 rounded-lg border-l-4 ${getPositionStyle(
              winner.position
            )}`}
          >
            <div>
              <p className="font-medium">{winner.name}</p>
              <p className="text-sm opacity-75">{winner.position} Place</p>
            </div>
            {winner.prize && (
              <span className="text-sm font-medium">{winner.prize}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizeWinnerList;
