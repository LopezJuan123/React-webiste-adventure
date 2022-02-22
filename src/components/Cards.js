import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these stunning Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Explore the amazing The Valley Isle this wonderful year! '
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Travel through the hills of Turkey in a Private air balloon'
              label='Explore'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Set time to relax in the most peaceful place on earth'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Experience dinner and drinks in the most astounding way '
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Explore the best waterfall locations with us this spring!'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;