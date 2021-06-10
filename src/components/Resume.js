import React from "react";
import educationsdata from "../data/Education";
import workdata from "../data/Work";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__education">
      <div className="resume__education-title">Education:</div>
        {educationsdata.map((educationsdata, index) => {
          return (
            <div className="experience" key={index}>
              <div className="experience__title">{educationsdata.degree}</div>
              <div>- From {educationsdata.school}</div>
              <div>- Electives: {educationsdata.electives}</div>
            </div>
          );
        })}
      </div>
      <div className="resume__work">
        <div className="resume__work-title">Work experience:</div>
        {workdata.map((workdata, index) => {
          return (
            <div className="experience" key={index}>
              <div className="experience__title">{workdata.title}</div>
              <div>- At {workdata.workplace}</div>
              <div>
                - {workdata.start} - {workdata.end}
              </div>
              <div>- Technologies used: {workdata.technologies.join(", ")}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
