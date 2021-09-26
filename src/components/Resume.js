import React from "react";
import educationsdata from "../data/Education";
import workdata from "../data/Work";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__education">
      <h3 className="resume__education-title">Education:</h3>
        {educationsdata.map((educationsdata, index) => {
          return (
            <div className="experience" key={index}>
              <p className="experience__title">{educationsdata.degree}</p>
              <p>- From {educationsdata.school}</p>
              <p>- Electives: {educationsdata.electives}</p>
            </div>
          );
        })}
      </div>
      <div className="resume__work">
        <h3 className="resume__work-title">Work experience:</h3>
        {workdata.map((workdata, index) => {
          return (
            <div className="experience" key={index}>
              <div className="experience__title">{workdata.title}</div>
              <p>- At {workdata.workplace}</p>
              <p>
                - {workdata.start} - {workdata.end}
              </p>
              <p>- Technologies used: {workdata.technologies.join(", ")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
