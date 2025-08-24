"use client";

import React from 'react';
import { Car, ShoppingBag, Coffee, Users, Fuel } from 'lucide-react';

export default function GiftCardBrands() {
  const brands = [
    {
      id: 1,
      name: 'Esso™ and Mobil...',
      description: 'Buy Now And Get',
      reward: '1% More',
      bgColor: 'bg-white',
      iconColor: 'bg-red-500',
      icon: Fuel,
      textColor: 'text-blue-800'
    },
    {
      id: 2,
      name: 'Petsmart',
      description: 'Buy Now And Get',
      reward: '6% More',
      bgColor: 'bg-white',
      iconColor: 'bg-blue-600',
      icon: Users,
      textColor: 'text-pink-600'
    },
    {
      id: 3,
      name: 'Walmart Canada',
      description: 'Buy Now And Get',
      reward: '1% More',
      bgColor: 'bg-white',
      iconColor: 'bg-blue-600',
      icon: ShoppingBag,
      textColor: 'text-black'
    },
    {
      id: 4,
      name: 'DoorDash',
      description: 'Buy Now And Get',
      reward: '1.5% More',
      bgColor: 'bg-white',
      iconColor: 'bg-red-500',
      icon: Car,
      textColor: 'text-black'
    },
    {
      id: 5,
      name: 'Starbucks',
      description: '',
      reward: '',
      bgColor: 'bg-white',
      iconColor: 'bg-green-700',
      icon: Coffee,
      textColor: 'text-black'
    },
    {
      id: 6,
      name: 'Amazon.ca',
      description: '',
      reward: '',
      bgColor: 'bg-white',
      iconColor: 'bg-gray-800',
      icon: ShoppingBag,
      textColor: 'text-black',
      isPartial: true
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">
            Send A Gift Card and
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-6">
            Collect Rewards
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Moola provides unbeatable deals on the gift cards you love. Buy for a friend or better yet, for yourself and collect 
            rewards. With Moola, giving the perfect gift and saving money on the brands you love has never been easier or 
            more convenient. Shop over 250 brands across Canada.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {brands.map((brand) => {
            
            return (
              <div
                key={brand.id}
                className={`${brand.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                  brand.isPartial ? 'opacity-60' : ''
                }`}
              >
                {/* Logo Section */}
                <div className="bg-gray-100 p-8 flex items-center justify-center h-48">
                  {brand.name === 'Esso™ and Mobil...' && (
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white font-bold text-lg">E</span>
                      </div>
                      <div className="text-blue-800 font-bold text-xl">Mobil</div>
                    </div>
                  )}
                  
                  {brand.name === 'Petsmart' && (
                    <div className="text-center">
                      <div className="text-blue-600 font-bold text-2xl">PET</div>
                      <div className="text-pink-500 font-bold text-2xl">SMART</div>
                    </div>
                  )}
                  
                  {brand.name === 'Walmart Canada' && (
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">W</span>
                    </div>
                  )}
                  
                  {brand.name === 'DoorDash' && (
                    <div className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">DD</span>
                    </div>
                  )}
                  
                  {brand.name === 'Starbucks' && (
                    <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center">
                      <Coffee className="w-10 h-10 text-white" />
                    </div>
                  )}
                  
                  {brand.name === 'Amazon.ca' && (
                    <div className="w-20 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">amazon.ca</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className={`font-semibold text-lg mb-2 ${brand.textColor}`}>
                    {brand.name}
                  </h3>
                  {brand.description && (
                    <p className="text-gray-600 text-sm mb-3">
                      {brand.description}
                    </p>
                  )}
                  {brand.reward && (
                    <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {brand.reward}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}