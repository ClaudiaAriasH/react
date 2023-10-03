import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  getGifs(category);

  return (
    <>
      <div key={category}>
        <li>{category}</li>
      </div>
    </>
  );
};
