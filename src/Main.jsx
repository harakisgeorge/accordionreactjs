import React from "react";
import { data } from "./data";
import { Accordion } from "./Accordion";

export const Main = () => {
  return (
    <div>
      <div>
        <h3 className="main-title">Most asked questions</h3>
        <div className="main-title-underline"></div>
        {data.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </div>
    </div>
  );
};