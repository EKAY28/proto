import React from 'react';
import './Topnotcher.css';

const toppers = [
  {
    name: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Jane Smith',
    description: 'Nunc at elit ac ipsum bibendum suscipit vitae a felis. Sed vel libero tincidunt, lobortis urna vel, vestibulum sapien.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Bob Builder',
    description: 'Maecenas vel est augue. Aliquam elementum elementum tortor, eu gravida velit dignissim in.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Samantha Johnson',
    description: 'Fusce suscipit porttitor nibh, in mollis nibh sodales vel.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Mike Adams',
    description: 'Praesent commodo sapien at elit rhoncus commodo.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Emily Davis',
    description: 'Nam bibendum risus vel dolor lacinia, vel ullamcorper magna mattis.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Tom Johnson',
    description: 'Donec venenatis ullamcorper vehicula. Nullam feugiat consequat lacus, nec volutpat mi tempor a.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Carla Martinez',
    description: 'Integer at odio dictum velit suscipit dignissim eu in lacus.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Alex Lee',
    description: 'Phasellus consectetur mauris in ipsum vestibulum, vitae faucibus est facilisis.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Luis Rodriguez',
    description: 'Vivamus at dolor vel ante consectetur pellentesque eu eu nisi.',
    imageUrl: 'https://via.placeholder.com/150'
  }
];

function Topnotchers() {
  return (
    <div className="topnotchers">
      <h1>CQA League of Topnotchers</h1>
      <div className="topnotchers-list">
        {toppers.map((topper, index) => (
          <div key={index} className="topnotcher">
            <img src={topper.imageUrl} alt={topper.name} />
            <h2>{topper.name}</h2>
            <p>{topper.description}</p>
          </div>
        ))}
      </div>
      <h1>You Could Be The Next TopNotcher !</h1>
    </div>
  );
}

export default Topnotchers;