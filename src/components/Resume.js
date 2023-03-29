import React from "react";
import ResumeContainer from "./ResumeContainer";
import educationData from "../data/Education";
import workData from "../data/Work";

const Resume = () => {
  return (
    <section className="resume">
      <ResumeContainer
        title="Education"
        type="education"
        data={educationData}
      />
      <ResumeContainer 
        title="Work experience" 
        type="work" 
        data={workData} 
      />
    </section>
  );
};

export default Resume;
