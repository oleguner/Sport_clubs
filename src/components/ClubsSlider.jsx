import React from 'react'
import ClubCard from './ClubCard'

export default function ClubsSlider({ clubs }) {
  let slideIndex = 0;

  const handleClick = (e) => {
    const displayedCard = document
      .querySelector(`[data-id="${slideIndex}"]`);
      [...document.querySelectorAll(`[data-id]`)].forEach(card => 
        card.classList = 'slider-hidden-right');

    if (e.target.name === 'decrease') {
      slideIndex -= 1;

      if (slideIndex < 0) {
        slideIndex = clubs.length - 1;
      }

      const prevCard = document
        .querySelector(`[data-id="${slideIndex}"]`);

      changeClass(displayedCard, prevCard, 'left');

    } else if (e.target.name === 'encrease') {
      slideIndex += 1;

      if (slideIndex > clubs.length - 1) {
        slideIndex = 0;
      }

      const nextCard = document
        .querySelector(`[data-id="${slideIndex}"]`);

      changeClass(displayedCard, nextCard, 'right');
    }

    function changeClass(actual, next, position) {
      actual.classList = '';
      actual.classList.add(`slider-hidden-${position}`);

      next.classList = '';
      next.classList.add('slider-active');
    }
  }

  return (
    <div className="flex justify-evenly items-center overflow-hidden">
      <button
        className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded h-12 select-none focus:border focus:border-0"
        onClick={handleClick}
        name="decrease"
      >
        &lt;&lt;

      </button>
      {clubs.map((club, index) =>
        <div className={index === slideIndex
          ? "slider-active"
          : "slider-hidden-right"} data-id={index}>
          <ClubCard club={club} key={club.id} isSlider={true} />
        </div>
      )}
      <button
        className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded h-12 select-none"
        onClick={handleClick}
        name="encrease"
      >
        &gt;&gt;
      </button>
    </div>
  );
};
