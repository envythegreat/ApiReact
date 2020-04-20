import React from 'react';
import Gif from './Gif';

const GifList = props => { 
  const gifts = props.data.map(gif => 
    <Gif  url={gif.images.fixed_height.url} key={gif.id} />
    // console.log(gif)
  );
  return(
    <ul className="gif-list">
      {gifts}
    </ul> 
  );
}

export default GifList;
