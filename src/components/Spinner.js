import React from 'react';
import spinner from '../assets/spinner.gif';

export const Spinner = () => {
  return (
    <div>
      <h1 className="mx-auto p-4 spinner-h1 text-center">
        Corona Status | Turkey
      </h1>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
      />
    </div>
  );
};
