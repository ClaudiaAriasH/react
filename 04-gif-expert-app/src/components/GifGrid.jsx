import { getGifs } from "../helpers/getGifs";
import { useEffect } from 'react';


export const GifGrid = ({ category }) => {

  useEffect( () => {
    getGifs(category);
}, []);
  

  return (
    <>
      <div key={category}>
        <li>{category}</li>
      </div>
    </>
  );
};
