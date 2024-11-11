import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../data/BurmeseRecipes.json";
import HeroSection from "./Herosection";

export default function FoodList() {
  let params = useParams();
  let [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (params.id === "001") {
      setFilteredData(Data.filter((recipe) => recipe.UserType === "001"));
    } else if (params.id === "002") {
      setFilteredData(Data.filter((recipe) => recipe.UserType === "002"));
    } else {
      setFilteredData([]);
    }
  }, [params.id]);

  return (
    <>
      <HeroSection />
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4  my-3">
        {!!filteredData &&
          filteredData.map((recipes) => (
            <Link to={`/recipes/details/${recipes.Guid}`} key={recipes.Guid}>
              <div className="p-4 bg-white  flex flex-col justify-between rounded-3xl border-2 h-full shadow-lg">
                <img
                  src={`/src/assets/img/${recipes.Name + ".jpg"}`}
                  alt=""
                  className="mx-auto w-full h-60 rounded-lg"
                />
                <h2 className="text-center">{recipes.Name}</h2>
              </div>
            </Link>
          ))}
        {filteredData && !filteredData.length && (
          <p className="text-center text-xl text-gray-500">
            No Search Results Found
          </p>
        )}
      </div>
    </>
  );
}
