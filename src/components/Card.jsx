import React from 'react';
import Loader from './Loader';

function Card({ images, setSize, loader }) {
  return (
    <div className='cards'>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className='container'>
            {images.map(image => (
              <div key={image.id} className='image-block'>
                <img src={image.src.medium} alt={image.alt} />
              </div>
            ))}
          </div>
          <button className='btn btn-primary' onClick={() => {
            setSize(pv => pv + 15);
          }}>More</button>
          <button className='btn btn-primary' onClick={() => {
            setSize(pv => pv - 15);
          }}>Less</button>
        </>
      )}

    </div>
  );
}

export default Card;
