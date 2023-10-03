import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories ]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <ol>
        {categories.map((category, i) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
