import React from "react";
import Educationsdata from "../json/Education";
import Workdata from "../json/Work";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__education">
      <div className="resume__education-title">Education:</div>
        {Educationsdata.map((Educationsdata, index) => {
          return (
            <div className="experience">
              <div className="experience__title">{Educationsdata.degree}</div>
              <div>- From {Educationsdata.school}</div>
              <div>Electives: {Educationsdata.electives}</div>
            </div>
          );
        })}
      </div>
      <div className="resume__work">
        <div className="resume__work-title">Work experience:</div>
        {Workdata.map((Workdata, index) => {
          return (
            <div className="experience">
              <div className="experience__title">{Workdata.title}</div>
              <div>- {Workdata.workplace}</div>
              <div>
                - {Workdata.start} - {Workdata.end}
              </div>
              <div>- Technologies used: {Workdata.technologies.join(", ")}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
