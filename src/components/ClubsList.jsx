import React from 'react';
import ClubCard from './ClubCard';

export default function ClubsList({ clubs }) {
  console.log(clubs, 'ClubsList');
  return (
    <div className="flex flex-wrap justify-between mx-16">
      {clubs.map(club =>
        <ClubCard club={club} key={club.id} />
      )}
    </div>
  );
};
