import React from "react";
import data from "../data/BurmeseRecipes.json";
import userType from "../data/UserTypes.json";
import { useParams } from "react-router-dom";

export default function Details() {
  let param = useParams();
  let Data = data.filter((recipe) => recipe.Guid == param.id);
  let Recipe = Data[0];
  return (
    <>
      <div className="flex mt-5 items-center flex-wrap space-y-5">
        <img
          src={`/src/assets/img/${Recipe.Name}.jpg`}
          alt=""
          className="w-72 h-60 me-10 rounded-md shadow-lg"
        />
        <div className="space-y-2">
          <h2 className="text-xl text-center font-bold">{Recipe.Name}</h2>
          <h3>
            {Recipe.UserType == "001"
              ? "-" +
                userType[0].UserMMType +
                " ( or ) " +
                userType[0].UserEngType
              : "-" +
                userType[1].UserMMType +
                " ( or ) " +
                userType[1].UserEngType}
          </h3>
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <h2 className="font-bold">Ingredients</h2>
        <p>{Recipe.Ingredients}</p>
      </div>
      <div className="mt-5 space-y-2">
        <h2 className="font-bold">Instruction</h2>
        <p>{Recipe.CookingInstructions}</p>
      </div>
    </>
  );
}
