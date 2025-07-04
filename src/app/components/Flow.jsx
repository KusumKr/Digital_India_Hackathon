import React from 'react';

function Flow() {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-16 lg:mb-20 text-center">
        PROCESS FLOW AND TIMELINE
      </h2>
      <img
        src='/roadmap.png'
        alt='Process Flow and Timeline'
        className='w-full max-h-screen object-contain'
      />
    </div>
  );
}

export default Flow;
