import React from 'react';

function ExampleCarouselImage({ text, imgSrc }) {
  return (
    <div style={{ width: '100%', height: '300px', position: 'relative' }}>
      <img
        src={imgSrc}
        alt={text}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <h3
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
        }}
      >
        {text}
      </h3>
    </div>
  );
}

export default ExampleCarouselImage;
