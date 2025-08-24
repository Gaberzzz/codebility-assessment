import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mr-3 flex items-center justify-center">
          <span className="text-white font-black text-lg">M</span>
        </div>
        <span className="text-purple-800 text-2xl font-bold">moola</span>
      </div>
    </div>
  );
}