// import React from 'react'
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";
import { useContext } from "react";
export default function Favorites() {
   const {favoritesList,loading} = useContext(GlobalContext);
  
    if (loading) return <div> Loading .....Please Wait</div>;
    return (
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {favoritesList && favoritesList.length > 0 ? (
          favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              Nothing is added to favorites
            </p>
          </div>
        )}
      </div>
    );
}


