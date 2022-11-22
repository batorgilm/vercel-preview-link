import React from "react";

export interface Title {
  text: string;
}

const Title = ({ text }: Title) => {
  return <h1 className="text-3xl font-bold underline">{text}</h1>;
};

export default Title;
