import React from 'react';

export default function ClubCard({ club, isSlider = false }) {
  const width = isSlider ? 'max-w-2xl' :'max-w-xs';
  return (
    <div
      className="p-2 grid auto-rows-fr"
    // key={club.id}
    >
      <div className={`${width} rounded overflow-hidden shadow-lg`}>

        <img className="w-full" src={club.logo} alt="club logo" />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            {club.title}
          </div>
          <p className="text-gray-700 text-base">
            <span className="font-bold text-xl mb-2 uppercase">
              City:
                </span> {club.city.slug}<br />
            <span className="font-bold text-xl mb-2">
              <a className="text-blue-600" href={club.link}>
                Club link
                  </a>
            </span>
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          {club.activity.map(activity =>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{activity.slug}
            </span>
          )}
        </div>

      </div>

    </div>
  );
};
