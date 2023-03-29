import React from "react";

const ResumeContainer = (props) => {
  if (props.type === "work") {
    return (
      <section className="resume-container">
        <h3 className="resume-container__title">{props.title}:</h3>
        {props.data.map((work, index) => {
          return (
            <div className="experience" key={index}>
              <h4 className="experience__title">{work.title}</h4>
              <p>- At {work.workPlace}</p>
              <p>
                - {work.start} - {work.end}
              </p>
              <p>- Technologies used: {work.technologies.join(", ")}</p>
            </div>
          );
        })}
      </section>
    );
  }

  return (
    <section className="resume-container">
      <h3 className="resume-container__title">{props.title}:</h3>
      {props.data.map((education, index) => {
        return (
          <div className="experience" key={index}>
            <h4 className="experience__title">{education.degree}</h4>
            <p>- From {education.school}</p>
            <p>- Electives: {education.electives}</p>
          </div>
        );
      })}
    </section>
  );
};

export default ResumeContainer;
