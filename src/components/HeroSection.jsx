import React from "react";
import { useParams } from "react-router-dom";
import userType from "../data/UserTypes.json";

export default function HeroSection() {
  let params = useParams();
  return (
    <div>
      <div className="bg-gradient-to-r from-[rgb(43,189,13)] to-green-400 h-14 flex justify-around items-center rounded-full">
        <h2 className="text-white text-xl text-center">
          {params.id == "001"
            ? userType[0].UserMMType + " (" + userType[0].UserEngType + ")"
            : userType[1].UserMMType + " (" + userType[1].UserEngType + ")"}
        </h2>
      </div>
    </div>
  );
}
