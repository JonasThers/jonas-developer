import React from "react";
import Educationsdata from "../json/Education";
import Workdata from "../json/Work";

const Resume = () => {
  return (
    <div>
      <div>
        Education:
        {Educationsdata.map((Educationsdata, index) => {
          return (
            <div>
              <div>{Educationsdata.degree}</div>
              <div>{Educationsdata.school}</div>
              <div>{Educationsdata.electives}</div>
            </div>
          );
        })}
      </div>
      <div>
        Work experience:
        {Workdata.map((Workdata, index) => {
          return (
            <div>
              <div>{Workdata.title}</div>
              <div>{Workdata.workplace}</div>
              <div>
                {Workdata.start} - {Workdata.end}
              </div>
              <div>{Workdata.technologies.join(", ")}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
