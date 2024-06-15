import React from 'react';

const Card = ({ name }) => {

    return (
         <div className='rounded-lg shadow-lg w-full p-10 bg-yellow-500'>
           Card {name}
        </div>
    );
}

export default Card;
